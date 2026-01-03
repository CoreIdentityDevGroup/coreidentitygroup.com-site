export async function onRequestPost({ request }: { request: Request }) {
  return new Response(
    JSON.stringify({ ok: true }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://coreholdingcorp.com",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
