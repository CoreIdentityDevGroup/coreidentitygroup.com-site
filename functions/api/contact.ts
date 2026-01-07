export const onRequest = async ({ request, env }: { request: Request; env: any }) => {
  // CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // Required secrets
    const zeptoUrl = env.ZEPTO_URL;
    const zeptoApiKey = env.ZEPTO_API_KEY;
    const fromEmail = env.ZEPTO_FROM_EMAIL;
    const fromName = env.ZEPTO_FROM_NAME || "Core Holding Corporation";
    const toEmail = env.ZEPTO_TO_EMAIL;

    if (!zeptoUrl || !zeptoApiKey || !fromEmail || !toEmail) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Server misconfigured: missing ZeptoMail env vars",
          missing: {
            ZEPTO_URL: !zeptoUrl,
            ZEPTO_API_KEY: !zeptoApiKey,
            ZEPTO_FROM_EMAIL: !fromEmail,
            ZEPTO_TO_EMAIL: !toEmail,
          },
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // ZeptoMail payload (Send Mail API format)
    const zeptoPayload = {
      from: { address: fromEmail, name: fromName },
      to: [{ email_address: { address: toEmail, name: "CHC Inbox" } }],
      subject: `[Website Contact] ${subject}`,
      htmlbody: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
      // optional text fallback
      textbody: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    };

    const resp = await fetch(zeptoUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // IMPORTANT: Header name must be a string key
        Authorization: `Zoho-enczapikey ${zeptoApiKey}`,
      },
      body: JSON.stringify(zeptoPayload),
    });

    const respText = await resp.text();

    if (!resp.ok) {
      // Surface ZeptoMail’s error details back to us
      return new Response(
        JSON.stringify({
          ok: false,
          error: "Email delivery failed",
          zeptoStatus: resp.status,
          zeptoResponse: respText,
        }),
        {
          status: 502,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
          },
        }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Unhandled exception",
        detail: err?.message || String(err),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
};

// Minimal HTML escaping to prevent breaking markup
function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
