export const onRequestPost: PagesFunction = async ({ request, env }) => {
  try {
    const {
      ZEPTO_URL,
      ZEPTO_API_KEY,
      ZEPTO_FROM_EMAIL,
      ZEPTO_TO_EMAIL,
    } = env as unknown as Record<string, string>;

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

    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Missing required fields: name, email, subject, message",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // ZeptoMail "Send Mail" payload (Transactional template-less)
    // If your Zepto account requires a specific structure, Zepto will tell us in the response body.
    const zeptoPayload = {
      from: { address: ZEPTO_FROM_EMAIL, name: "CHC Website" },
      to: [{ email_address: { address: ZEPTO_TO_EMAIL, name: "CHC Inbox" } }],
      subject: `[CHC Contact] ${subject}`,
      htmlbody: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${escapeHtml(String(name))}</p>
        <p><b>Email:</b> ${escapeHtml(String(email))}</p>
        <p><b>Subject:</b> ${escapeHtml(String(subject))}</p>
        <p><b>Message:</b><br/>${escapeHtml(String(message)).replace(/\n/g, "<br/>")}</p>
      `,
      reply_to: [{ address: String(email), name: String(name) }],
    };

    // Normalize endpoint (avoid double slashes)
    const zeptoUrl = ZEPTO_URL.replace(/\/+$/, "");

    // Try the most common Zepto auth header patterns.
    // We send the first; if it fails with auth-type error, we retry with the alternate.
    const authHeaders = [
      { Authorization: `Zoho-enczapikey ${ZEPTO_API_KEY}` },
      { Authorization: `Zoho-enczapikey ${ZEPTO_API_KEY.trim()}` },
      // Alternate seen in some Zepto contexts:
      { Authorization: `Zoho-enczapikey=${ZEPTO_API_KEY}` },
    ];

    let lastStatus = 0;
    let lastBody = "";
    let lastHeaderUsed: Record<string, string> | null = null;

    for (const auth of authHeaders) {
      lastHeaderUsed = auth;

      const resp = await fetch(zeptoUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...auth,
        },
        body: JSON.stringify(zeptoPayload),
      });

      lastStatus = resp.status;
      lastBody = await resp.text();

      if (resp.ok) {
        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      // If it's not an auth failure, don't keep retrying headers.
      // We want to preserve signal.
      if (![401, 403].includes(resp.status)) break;
    }

    return new Response(
      JSON.stringify({
        ok: false,
        error: "Email delivery failed",
        zeptoStatus: lastStatus,
        zeptoResponse: lastBody,
        zeptoUrl: env.ZEPTO_URL ? env.ZEPTO_URL.replace(/\/+$/, "") : null,
        from: env.ZEPTO_FROM_EMAIL || null,
        to: env.ZEPTO_TO_EMAIL || null,
        authPrefixTried: lastHeaderUsed?.Authorization?.split(" ")[0] || null,
      }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Unhandled server error",
        details: String(err?.message || err),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
