// functions/api/contact.ts
export const onRequestPost: PagesFunction = async ({ request, env }) => {
  try {
    const missing: Record<string, boolean> = {
      ZEPTO_API_KEY: !env.ZEPTO_API_KEY,
      ZEPTO_FROM_EMAIL: !env.ZEPTO_FROM_EMAIL,
      ZEPTO_TO_EMAIL: !env.ZEPTO_TO_EMAIL,
    };

    if (Object.values(missing).some(Boolean)) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Server misconfigured: missing ZeptoMail env vars",
          missing,
        }),
        { status: 500, headers: corsHeaders() }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
        status: 400,
        headers: corsHeaders(),
      });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Missing required fields: name, email, subject, message",
        }),
        { status: 400, headers: corsHeaders() }
      );
    }

    // Basic email sanity check (not perfect, but blocks obvious garbage)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid email" }), {
        status: 400,
        headers: corsHeaders(),
      });
    }

    const zeptoUrl = "https://api.zeptomail.com/v1.1/email";

    // IMPORTANT: Zepto v1.1 expects top-level subject + htmlbody/textbody (NOT content:{...})
    const htmlbody = `
      <h3>New contact submission</h3>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <hr />
      <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,Consolas,monospace;">${escapeHtml(
        message
      )}</pre>
    `.trim();

    const zeptoPayload = {
      from: { address: env.ZEPTO_FROM_EMAIL },
      to: [{ email_address: { address: env.ZEPTO_TO_EMAIL } }],
      subject: `CHC Contact: ${subject}`,
      htmlbody,
    };

    const resp = await fetch(zeptoUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Zoho-enczapikey ${env.ZEPTO_API_KEY}`,
      },
      body: JSON.stringify(zeptoPayload),
    });

    const respText = await resp.text();

    if (!resp.ok) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Email delivery failed",
          zeptoStatus: resp.status,
          zeptoResponse: safeJsonOrText(respText),
          zeptoPayloadPreview: {
            from: env.ZEPTO_FROM_EMAIL,
            to: env.ZEPTO_TO_EMAIL,
            subject: `CHC Contact: ${subject}`,
          },
        }),
        { status: 502, headers: corsHeaders() }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: corsHeaders(),
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ ok: false, error: err?.message ?? "Unhandled error" }),
      { status: 500, headers: corsHeaders() }
    );
  }
};

export const onRequestOptions: PagesFunction = async () =>
  new Response(null, { status: 204, headers: corsHeaders() });

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeJsonOrText(s: string) {
  try {
    return JSON.parse(s);
  } catch {
    return s;
  }
}
