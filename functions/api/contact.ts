type Env = {
  ZEPTO_API_KEY: string;      // ZeptoMail "Send Mail" API key
  CONTACT_TO_EMAIL: string;   // where we receive messages (e.g., tmorgan@coreholdingcorp.com)
  CONTACT_FROM_EMAIL: string; // verified sender in ZeptoMail (e.g., noreply@coreholdingcorp.com)
  CONTACT_FROM_NAME?: string; // optional (e.g., "Core Holding Corporation")
  CONTACT_SUBJECT_PREFIX?: string; // optional (e.g., "[CHC Website]")
};

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string;
  phone?: string;

  // honeypot (bot trap)
  website?: string;
};

const json = (data: unknown, init?: ResponseInit) =>
  new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      ...(init?.headers ?? {}),
    },
  });

const bad = (msg: string, status = 400) => json({ ok: false, error: msg }, { status });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export const onRequestOptions: PagesFunction = async () => {
  // CORS preflight
  return json({ ok: true }, { status: 204 });
};

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const { env, request } = ctx;

  if (!env.ZEPTO_API_KEY) return bad("Missing ZEPTO_API_KEY", 500);
  if (!env.CONTACT_TO_EMAIL) return bad("Missing CONTACT_TO_EMAIL", 500);
  if (!env.CONTACT_FROM_EMAIL) return bad("Missing CONTACT_FROM_EMAIL", 500);

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return bad("Invalid JSON body");
  }

  // Honeypot: if filled, silently accept (pretend success) to avoid giving bots signal
  if (body.website && body.website.trim().length > 0) {
    return json({ ok: true }, { status: 200 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();
  const company = (body.company ?? "").trim();
  const phone = (body.phone ?? "").trim();

  if (!name) return bad("Name is required");
  if (!email || !isEmail(email)) return bad("Valid email is required");
  if (!message || message.length < 10) return bad("Message is required (min 10 chars)");

  const subjectPrefix = (env.CONTACT_SUBJECT_PREFIX ?? "[CHC Website]").trim();
  const finalSubject = `${subjectPrefix} ${subject ? subject : "Contact form submission"}`.trim();

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject || "(none)");
  const safeCompany = escapeHtml(company || "(none)");
  const safePhone = escapeHtml(phone || "(none)");
  const safeMessage = escapeHtml(message);

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;line-height:1.5">
      <h2>New website contact submission</h2>
      <p><b>Name:</b> ${safeName}</p>
      <p><b>Email:</b> ${safeEmail}</p>
      <p><b>Company:</b> ${safeCompany}</p>
      <p><b>Phone:</b> ${safePhone}</p>
      <p><b>Subject:</b> ${safeSubject}</p>
      <hr />
      <p style="white-space:pre-wrap">${safeMessage}</p>
    </div>
  `;

  // ZeptoMail "Send Mail" API
  // Region note: if your ZeptoMail account uses a different endpoint, adjust the URL accordingly.
  const zeptoUrl = "https://api.zeptomail.com/v1.1/email";

  const zeptoPayload = {
    from: {
      address: env.CONTACT_FROM_EMAIL,
      name: (env.CONTACT_FROM_NAME ?? "Core Holding Corporation").toString(),
    },
    to: [
      {
        email_address: {
          address: env.CONTACT_TO_EMAIL,
          name: "CHC Inbox",
        },
      },
    ],
    reply_to: [
      {
        address: email,
        name,
      },
    ],
    subject: finalSubject,
    htmlbody: htmlBody,
  };

  const resp = await fetch(zeptoUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Zoho-enczapikey ${env.ZEPTO_API_KEY}`,
    },
    body: JSON.stringify(zeptoPayload),
  });

  // If Zepto fails, surface a clean error (don’t leak internals)
  if (!resp.ok) {
    return bad("Email delivery failed", 502);
  }

  return json({ ok: true }, { status: 200 });
};
