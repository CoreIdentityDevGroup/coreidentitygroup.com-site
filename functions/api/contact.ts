export const onRequest: PagesFunction = async ({ request, env }) => {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
      status: 405,
      headers,
    });
  }

  let data: any;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
      status: 400,
      headers,
    });
  }

  if (String(data.company || "").trim() !== "") {
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }

  const name = String(data.name || "").trim();
  const email = String(data.email || "").trim();
  const message = String(data.message || "").trim();
  const page = String(data.page || "unknown");

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), {
      status: 400,
      headers,
    });
  }

  const apiKey = env.ZEPTO_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ ok: false, error: "Email not configured" }), {
      status: 500,
      headers,
    });
  }

  const body =
    "<p><strong>New Contact Form Submission</strong></p>" +
    "<p><strong>Name:</strong> " + esc(name) + "</p>" +
    "<p><strong>Email:</strong> " + esc(email) + "</p>" +
    "<p><strong>Page:</strong> " + esc(page) + "</p>" +
    "<hr />" +
    "<p>" + esc(message).replace(/\\n/g, "<br/>") + "</p>";

  const res = await fetch("https://api.zeptomail.com/v1.1/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Zoho-enczapikey " + apiKey,
    },
    body: JSON.stringify({
      from: { address: "info@coreholdingcorp.com", name: "Core Holding Corporation" },
      to: [{ email_address: { address: "info@coreholdingcorp.com" } }],
      reply_to: [{ address: email }],
      subject: "New Contact Form Submission",
      htmlbody: body,
    }),
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ ok: false, error: "Email send failed" }), {
      status: 502,
      headers,
    });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
};

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
