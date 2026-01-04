// functions/api/contact.ts
// Cloudflare Pages Function: POST /api/contact
// Sends contact form submissions to Zoho (info@coreholdingcorp.com) via SMTP.
// Security: server-side only, basic validation + honeypot, tight CORS.

export const onRequestPost: PagesFunction<{
  ZOHO_SMTP_HOST?: string;
  ZOHO_SMTP_PORT?: string;
  ZOHO_SMTP_USER?: string;
  ZOHO_SMTP_PASS?: string;
  CONTACT_TO_EMAIL?: string;
  ALLOWED_ORIGIN?: string; // optional hard lock, e.g. https://www.coreholdingcorp.com
}> = async (context) => {
  const { request, env } = context;

  // ----- CORS (tighten to same-origin unless ALLOWED_ORIGIN is explicitly set)
  const origin = request.headers.get("Origin") || "";
  const allowedOrigin = env.ALLOWED_ORIGIN || origin; // if no Origin header, this becomes ""
  const corsHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // If ALLOWED_ORIGIN is set, enforce it strictly.
  if (env.ALLOWED_ORIGIN) {
    corsHeaders["Access-Control-Allow-Origin"] = env.ALLOWED_ORIGIN;
    corsHeaders["Vary"] = "Origin";
  } else {
    // Otherwise, allow only the request's Origin (same-origin browsers will send it).
    // If Origin is missing (curl, some clients), we omit the header entirely.
    if (origin) {
      corsHeaders["Access-Control-Allow-Origin"] = origin;
      corsHeaders["Vary"] = "Origin";
    }
  }

  // Preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  // Enforce JSON
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return new Response(JSON.stringify({ ok: false, error: "Expected application/json" }), {
      status: 415,
      headers: corsHeaders,
    });
  }

  type Payload = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    // Honeypot: should be empty
    company?: string;
    // Optional metadata
    page?: string;
  };

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  // Honeypot spam trap
  if ((body.company || "").trim().length > 0) {
    // Pretend success to avoid teaching bots.
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: corsHeaders });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const subject = (body.subject || "Website contact form").trim();
  const message = (body.message || "").trim();
  const page = (body.page || "").trim();

  // Basic validation
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  // Minimal email sanity check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  // ----- Env resolution (explicit + deterministic)
  const host = (env.ZOHO_SMTP_HOST || "smtp.zoho.com").trim();
  const port = Number((env.ZOHO_SMTP_PORT || "465").trim());
  const user = (env.ZOHO_SMTP_USER || "").trim(); // must be tmorgan@coreholdingcorp.com
  const pass = (env.ZOHO_SMTP_PASS || "").trim(); // must be Zoho App Password
  const to = (env.CONTACT_TO_EMAIL || "info@coreholdingcorp.com").trim(); // Step 1=B

  if (!user || !pass || !to) {
    return new Response(JSON.stringify({ ok: false, error: "Server email is not configured" }), {
      status: 500,
      headers: corsHeaders,
    });
  }

  // Build a clean email body
  const ip =
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("x-forwarded-for") ||
    "unknown";
  const ua = request.headers.get("user-agent") || "unknown";
  const nowIso = new Date().toISOString();

  const textBody = [
    "New website contact form submission",
    "-----------------------------------",
    `Time: ${nowIso}`,
    `From Name: ${name}`,
    `From Email: ${email}`,
    `Subject: ${subject}`,
    page ? `Page: ${page}` : null,
    `IP: ${ip}`,
    `User-Agent: ${ua}`,
    "",
    "Message:",
    message,
    "",
  ]
    .filter(Boolean)
    .join("\n");

  // IMPORTANT:
  // - Reply-To ensures replies go to the submitter.
  // - From must be the authenticated Zoho mailbox for best deliverability.
  const mailFrom = user; // authenticated mailbox
  const rcptTo = to;     // info@ alias

  // EHLO name: use the domain part of the authenticated mailbox as a sane default.
  const ehloName = (user.split("@")[1] || "coreholdingcorp.com").trim();

  // Basic RFC2822-ish message
  const rawMessage = [
    `From: "CHC Website" <${mailFrom}>`,
    `To: <${rcptTo}>`,
    `Reply-To: "${escapeHeaderValue(name)}" <${email}>`,
    `Subject: ${escapeHeaderValue(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    textBody,
    "",
  ].join("\r\n");

  try {
    await sendSmtpMail({
      host,
      port,
      ehloName,
      username: user,
      password: pass,
      from: mailFrom,
      to: rcptTo,
      data: rawMessage,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: corsHeaders });
  } catch {
    // Do not leak internal details to the client.
    return new Response(JSON.stringify({ ok: false, error: "Email send failed" }), {
      status: 502,
      headers: corsHeaders,
    });
  }
};

function escapeHeaderValue(v: string): string {
  // Strip CR/LF to prevent header injection
  return v.replace(/[\r\n]+/g, " ").trim();
}

/**
 * Minimal SMTP client using Cloudflare Workers socket API.
 * - Works with SMTPS (implicit TLS) on port 465.
 * - AUTH LOGIN.
 */
async function sendSmtpMail(opts: {
  host: string;
  port: number;
  ehloName: string;
  username: string;
  password: string;
  from: string;
  to: string;
  data: string;
}) {
  // @ts-ignore - Cloudflare Workers runtime provides "connect"
  const socket = await connect({
    hostname: opts.host,
    port: opts.port,
    secureTransport: "on", // implicit TLS (SMTPS)
  });

  const writer = socket.writable.getWriter();
  const reader = socket.readable.getReader();
  const enc = new TextEncoder();
  const dec = new TextDecoder();

  const readLine = async (): Promise<string> => {
    let buf = "";
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const idx = buf.indexOf("\r\n");
      if (idx !== -1) {
        const line = buf.slice(0, idx);
        return line;
      }
    }
    return buf.trim();
  };

  const write = async (s: string) => {
    await writer.write(enc.encode(s));
  };

  const expect = async (codePrefix: string) => {
    const line = await readLine();
    if (!line.startsWith(codePrefix)) {
      throw new Error(`SMTP expected ${codePrefix}, got: ${line}`);
    }
    return line;
  };

  // Greeting
  await expect("220");

  // EHLO
  await write(`EHLO ${opts.ehloName}\r\n`);
  // Multi-line 250 responses end with "250 <space>"
  while (true) {
    const line = await readLine();
    if (!line.startsWith("250")) throw new Error(`SMTP EHLO failed: ${line}`);
    if (line.startsWith("250 ")) break;
  }

  // AUTH LOGIN
  await write("AUTH LOGIN\r\n");
  await expect("334");
  await write(`${b64(opts.username)}\r\n`);
  await expect("334");
  await write(`${b64(opts.password)}\r\n`);
  await expect("235");

  // MAIL FROM / RCPT TO
  await write(`MAIL FROM:<${opts.from}>\r\n`);
  await expect("250");

  await write(`RCPT TO:<${opts.to}>\r\n`);
  {
    const line = await readLine();
    // Zoho may return 250 or 251
    if (!(line.startsWith("250") || line.startsWith("251"))) {
      throw new Error(`SMTP RCPT TO failed: ${line}`);
    }
  }

  // DATA
  await write("DATA\r\n");
  await expect("354");

  // Dot-stuffing: if any line begins with ".", prefix another "."
  const safeData = opts.data
    .split("\n")
    .map((l) => (l.startsWith(".") ? "." + l : l))
    .join("\n");

  await write(`${safeData}\r\n.\r\n`);
  await expect("250");

  // QUIT
  await write("QUIT\r\n");
  // Typically 221
  await readLine();

  reader.releaseLock();
  writer.releaseLock();
  socket.close();
}

function b64(s: string): string {
  // btoa exists in Workers runtime
  return btoa(s);
}
