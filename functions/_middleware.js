// Every visitor and crawler receives the same build-time rendered HTML.
// Route-specific API handlers and Cloudflare static asset status codes remain intact.
export async function onRequest({next}) { return next(); }
