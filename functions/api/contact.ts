// functions/api/contact.ts
export const onRequestPost: PagesFunction = async ({ request, env }) => {
  const VERSION = "contact-v4.0-zepto-top-level-htmlbody";
  const json = (obj: unknown, status = 200) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: {
        "Content-Type": "application/json",
        "X-Contact-Version": VERSION,
      },
    });

  try {
    // Parse JSON body safely
    const data = await request.json().catch(() => null);
    if (!data || typeof data !== "object") {
      return json({ ok: false, error: "Invalid JSON body", version: VERSION }, 400);
    }

    const name = String((data as any).name ?? "").trim();
    const email = String((data as any).email ?? "").trim();
    const subjectIn = String((data as any).subject ?? "").trim();
    const message = String((data as any).message ?? "").trim();

    if (!name || !email || !message) {
      return json(
        {
          ok: false,
          error: "Missing required fields: name, email, message",
          version: VERSION,
        },
        400
      );
    }

    // Env
    const ZEPTO_API_KEY = String((env as any).ZEPTO_API_KEY ?? "").trim();
    const ZEPTO_FROM_EMAIL = String((env as any).ZEPTO_FROM_EMAIL ?? "").trim();
    const ZEPTO_TO_EMAIL = String((env as any).ZEPTO_TO_EMAIL ?? "").trim();

    if (!ZEPTO_API_KEY || !ZEPTO_FROM_EMAIL || !ZEPTO_TO_EMAIL) {
      return json(
        {
          ok: false,
          error: "Missing ZeptoMail env vars",
          version: VERSION,
          missing: {
            ZEPTO_API_KEY: !ZEPTO_API_KEY,
            ZEPTO_FROM_EMAIL: !ZEPTO_FROM_EMAIL,
            ZEPTO_TO_EMAIL: !ZEPTO_TO_EMAIL,
          },
        },
        500
      );
    }

    const subject = subjectIn ? `CHC Contact: ${subjectIn}` : "CHC Contact Form";

    // Keep HTML deterministic and safe
    const htmlbody =
      `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
      `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
      `<p><strong>Message:</strong></p>` +
      `<p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`;

    // STRICT payload: top-level subject/htmlbody (this matches your working v3.1 test)
    const payload = {
      from: { address: ZEPTO_FROM_EMAIL },
      to: [{ email_address: { address: ZEPTO_TO_EMAIL } }],
      subject,
      htmlbody,
    };

    // Debug mode: shows exactly what would be sent (no secrets)
    const url = new URL(request.url);
    if (url.searchParams.get("debug") === "1") {
      return json(
        {
          ok: true,
          debug: true,
          version: VERSION,
          zeptoUrl: "https://api.zeptomail.com/v1.1/email",
          payload,
        },
        200
      );
    }

    const resp = await fetch("https://api.zeptomail.com/v1.1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Zoho-enczapikey ${ZEPTO_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();

    if (!resp.ok) {
      // Return the Zepto response verbatim for diagnosis (still no secrets)
      return json(
        {
          ok: false,
          error: "Email delivery failed",
          version: VERSION,
          zeptoStatus: resp.status,
          zeptoResponse: text,
          payloadPreview: payload,
        },
        502
      );
    }

    // Success: return Zepto response (parsed if possible)
    let parsed: any = null;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = text;
    }

    return json({ ok: true, version: VERSION, zepto: parsed }, 200);
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Server error",
        version: "contact-v4.0-zepto-top-level-htmlbody",
        detail: err?.message ?? String(err),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
