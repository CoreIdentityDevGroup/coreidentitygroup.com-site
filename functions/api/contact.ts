const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST,OPTIONS,GET",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function onRequest(context: any): Promise<Response> {
  const { request } = context;

  // Preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // Debug signature to prove routing hits the Function
  if (request.method === "GET") {
    return new Response(
      JSON.stringify({
        ok: true,
        via: "pages-function",
        route: "/api/contact",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // Only POST beyond this point
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: { ...corsHeaders, Allow: "POST,OPTIONS,GET" },
    });
  }

  // TODO: Put your existing ZeptoMail POST logic here.
  // For now, return a simple JSON so we can validate routing.
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
