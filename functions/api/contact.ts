export const onRequestPost: PagesFunction = async (context) => {
  try {
    const body = await context.request.json();
    const record = {
      id: crypto.randomUUID(),
      receivedAt: new Date().toISOString(),
      ...body,
    };

    const kv = (context.env as any)?.CONTACTS;
    if (kv && typeof kv.put === "function") {
      await kv.put(record.id, JSON.stringify(record), { expirationTtl: 60 * 60 * 24 * 365 });
    }

    return new Response(JSON.stringify({ ok: true, id: record.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ ok: false }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
};
