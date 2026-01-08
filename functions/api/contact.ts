export async function onRequestPost(context: any) {
  try {
    const { request, env } = context;

    // ---- Read env vars (trim to kill accidental whitespace/newlines) ----
    const ZEPTO_URL = String(env.ZEPTO_URL || "").trim(); // e.g. https://api.zeptomail.com/v1.1/email OR https://api.zeptomail.in/v1.1/email
    const ZEPTO_API_KEY = String(env.ZEPTO_API_KEY || "").trim(); // the API token
    const ZEPTO_FROM_EMAIL = String(env.ZEPTO_FROM_EMAIL || "").trim(); // must be a verified sender in ZeptoMail
    const ZEPTO_TO_EMAIL = String(env.ZEPTO_TO_EMAIL || "").trim(); // where contact submissions go

    const missing: Record<string, boolean> = {
      ZEPTO_URL: !ZEPTO_URL,
      ZEPTO_API_KEY: !ZEPTO_API_KEY,
      ZEPTO_FROM_EMAIL: !ZEPTO_FROM_EMAIL,
      ZEPTO_TO_EMAIL: !ZEPTO_TO_EMAIL,
    };

    if (Object.values(missing).some(Boolean)) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Server misconfigured: missing ZeptoMail env vars",
          missing,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // ---- Parse inbound request ----
    let body: any;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid JSON body" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const subject = String(body?.subject || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Missing required fields",
          required: ["name", "email", "subject", "message"],
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // ---- Zepto payload (KNOWN-GOOD schema) ----
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.4;">
        <h2>CHC Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p style="white-space: pre-wrap;"><strong>Message:</strong><br/>${escapeHtml(message)}</p>
      </div>
    `.trim();

    const zeptoPayload = {
      from: { address: ZEPTO_FROM_EMAIL },
      to: [{ email_address: { address: ZEPTO_TO_EMAIL } }],
      content: {
        subject: `CHC Contact: ${subject}`,
        html,
      },
    };

    // ---- Call Zepto ----
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", `Zoho-enczapikey ${ZEPTO_API_KEY}`);

    const resp = await fetch(ZEPTO_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(zeptoPayload),
    });

    const respText = await resp.text();

    if (!resp.ok) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Email delivery failed",
          zeptoStatus: resp.status,
          zeptoResponse: respText,
          zeptoUrl: ZEPTO_URL,
          from: ZEPTO_FROM_EMAIL,
          to: ZEPTO_TO_EMAIL,
        }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    // Success
    return new Response(
      JSON.stringify({
        ok: true,
        message: "Email request accepted by ZeptoMail",
        zeptoStatus: resp.status,
        zeptoResponse: respText,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Unhandled server error",
        detail: String(err?.message || err),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
