export async function onRequestPost() {
  return new Response(
    JSON.stringify({ status: "ok" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
