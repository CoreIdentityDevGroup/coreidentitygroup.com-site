export const onRequestPost: PagesFunction = async ({ request, env }) => {
  try {
    const data = await request.json();

    if (!data?.name || !data?.email || !data?.message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid request payload" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const {
      ZEPTO_API_KEY,
      ZEPTO_FROM_EMAIL,
      ZEPTO_TO_EMAIL
    } = env;

    if (!ZEPTO_API_KEY || !ZEPTO_FROM_EMAIL || !ZEPTO_TO_EMAIL) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Missing ZeptoMail configuration"
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const payload = {
      from: { address: ZEPTO_FROM_EMAIL },
      to: [
        { email_address: { address: ZEPTO_TO_EMAIL } }
      ],
      content: {
        subject: data.subject
          ? `CHC Contact: ${data.subject}`
          : "CHC Contact Form Submission",
        html: `
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `
      }
    };

    const resp = await fetch("https://api.zeptomail.com/v1.1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Zoho-enczapikey ${ZEPTO_API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    const text = await resp.text();

    if (!resp.ok) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Email delivery failed",
          zeptoStatus: resp.status,
          zeptoResponse: text
        }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err: any) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Server error",
        detail: err?.message || String(err)
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
