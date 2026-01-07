export const onRequest = async ({ request, env }: any) => {
  // CORS headers
  const corsHeaders = () => ({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });

  // Handle preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ ok: false, error: "Method not allowed" }),
      { status: 405, headers: corsHeaders() }
    );
  }

  try {
    const body = await request.json();
    const { name, email, subject, message } = body || {};

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields" }),
        { status: 400, headers: corsHeaders() }
      );
    }

    // ---- ENV VARS (trim is critical) ----
    const ZEPTO_API_KEY = String(env.ZEPTO_API_KEY || "").trim();
    const FROM_EMAIL = String(env.ZEPTO_FROM_EMAIL || "").trim();
    const TO_EMAIL = String(env.ZEPTO_TO_EMAIL || "").trim();

    if (!ZEPTO_API_KEY || !FROM_EMAIL || !TO_EMAIL) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Email service not configured",
          envCheck: {
            apiKeyLength: ZEPTO_API_KEY.length,
            fromSet: !!FROM_EMAIL,
            toSet: !!TO_EMAIL,
          },
        }),
        { status: 500, headers: corsHeaders() }
      );
    }

    // ---- ZEPTO PAYLOAD (TEXT ONLY, SAFE) ----
    const zeptoPayload = {
      from: { address: FROM_EMAIL },
      to: [{ email_address: { address: TO_EMAIL } }],
      subject: subject || "Website Contact Request",
      textbody:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Subject: ${subject || "(none)"}\n\n` +
        `${message}`,
    };

    const zeptoResponse = await fetch(
      "https://api.zeptomail.com/v1.1/email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "User-Agent": "chc-pages-contact/1.0",
          Authorization: `Zoho-enczapikey ${ZEPTO_API_KEY}`,
        },
        body: JSON.stringify(zeptoPayload),
      }
    );

    const zeptoText = await zeptoResponse.text();

    if (!zeptoResponse.ok) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Email delivery failed",
          zeptoStatus: zeptoResponse.status,
          zeptoResponse: zeptoText || "(empty)",
          from: FROM_EMAIL,
          to: TO_EMAIL,
          apiKeyMeta: {
            length: ZEPTO_API_KEY.length,
            head: ZEPTO_API_KEY.slice(0, 4),
            tail: ZEPTO_API_KEY.slice(-4),
          },
        }),
        { status: 502, headers: corsHeaders() }
      );
    }

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Email sent successfully",
      }),
      { status: 200, headers: corsHeaders() }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Unhandled exception",
        message: err?.message || String(err),
      }),
      { status: 500, headers: corsHeaders() }
    );
  }
};
