export const onRequestPost: PagesFunction = async ({ request, env }) => {
  try {
    const body = await request.json().catch(() => null);

    if (!body?.name || !body?.email || !body?.message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid request payload" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const {
      ZEPTO_API_KEY,
      ZEPTO_FROM_EMAIL,
      ZEPTO_TO_EMAIL,
      ZEPTO_URL = "https://api.zeptomail.com/v1.1/email"
    } = env;

    const missing = [];
    if (!ZEPTO_API_KEY) missing.push("ZEPTO_API_KEY");
    if (!ZEPTO_FROM_EMAIL) missing.push("ZEPTO_FROM_EMAIL");
    if (!ZEPTO_TO_EMAIL) missing.push("ZEPTO_TO_EMAIL");

    if (missing.length) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing env vars", missing }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (ZEPTO_FROM_EMAIL === ZEPTO_TO_EMAIL) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "FROM and TO must be different",
          from: ZEPTO_FROM_EMAIL,
          to: ZEPTO_TO_EMAIL
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const subject = body.subject
      ? `CHC Contact: ${body.subject}`
      : "CHC Contact Form Submission";

    const htmlBody = `
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message}</p>
    `;

    // ⚠️ CRITICAL FIX: htmlbody (NOT html)
    const zeptoPayload = {
      from: { address: ZEPTO_FROM_EMAIL },
      to: [{ email_address: { address: ZEPTO_TO_EMAIL } }],
      content: {
        subject,
        htmlbody: htmlBody
      }
    };

    const resp = await fetch(ZEPTO_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Zoho-enczapikey ${ZEPTO_API_KEY}`
      },
      body: JSON.stringify(zeptoPayload)
    });

    const respText = await resp.text();

    if (!resp.ok) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Email delivery failed",
          zeptoStatus: resp.status,
          zeptoResponse: respText,
          resolved: {
            from: ZEPTO_FROM_EMAIL,
            to: ZEPTO_TO_EMAIL
          }
        }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Email sent successfully"
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Unhandled server error",
        detail: err?.message || String(err)
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
