// functions/api/contact.ts — contact-v5.0-resend
export const onRequestPost: PagesFunction = async ({ request, env }) => {
  const VERSION = "contact-v5.0-resend";
  const json = (obj: unknown, status = 200) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: { "Content-Type": "application/json", "X-Contact-Version": VERSION },
    });

  try {
    const data = await request.json().catch(() => null);
    if (!data || typeof data !== "object")
      return json({ ok: false, error: "Invalid JSON body", version: VERSION }, 400);

    const name    = String((data as any).name     ?? "").trim();
    const email   = String((data as any).email    ?? "").trim();
    const company = String((data as any).company  ?? "").trim();
    const topic   = String((data as any).interest ?? "").trim();
    const message = String((data as any).message  ?? "").trim();

    if (!name || !email || !message)
      return json({ ok: false, error: "Missing required fields: name, email, message", version: VERSION }, 400);

    const RESEND_API_KEY = String((env as any).RESEND_API_KEY  ?? "").trim();
    const FROM_EMAIL     = String((env as any).ZEPTO_FROM_EMAIL ?? "").trim();
    const TO_EMAIL       = String((env as any).ZEPTO_TO_EMAIL   ?? "").trim();

    if (!RESEND_API_KEY || !FROM_EMAIL || !TO_EMAIL)
      return json({ ok: false, error: "Missing env vars", version: VERSION,
        missing: { RESEND_API_KEY: !RESEND_API_KEY, FROM_EMAIL: !FROM_EMAIL, TO_EMAIL: !TO_EMAIL } }, 500);

    const subject = `CoreIdentity Contact: ${topic || name}`;
    const html =
      `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
      `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
      (company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : "") +
      (topic   ? `<p><strong>Topic:</strong> ${escapeHtml(topic)}</p>`    : "") +
      `<p><strong>Message:</strong></p>` +
      `<p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`;

    const url = new URL(request.url);
    if (url.searchParams.get("debug") === "1")
      return json({ ok: true, debug: true, version: VERSION,
        resendUrl: "https://api.resend.com/emails", from: FROM_EMAIL, to: TO_EMAIL, subject, html }, 200);

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({ from: FROM_EMAIL, to: [TO_EMAIL], reply_to: email, subject, html }),
    });

    const text = await resp.text();
    if (!resp.ok)
      return json({ ok: false, error: "Email delivery failed", version: VERSION,
        resendStatus: resp.status, resendResponse: text }, 502);

    let parsed: any = null;
    try { parsed = JSON.parse(text); } catch { parsed = text; }
    return json({ ok: true, version: VERSION, resend: parsed }, 200);

  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: "Server error",
      version: "contact-v5.0-resend", detail: err?.message ?? String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } });
  }
};

function escapeHtml(input: string): string {
  return input.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}
