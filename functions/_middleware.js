// CoreIdentity — Social Bot Pre-rendering Middleware
const POSTS = {
  "deployed-at-scale-ungoverned-by-design": {
    title: "Deployed at Scale, Ungoverned by Design | CoreIdentity",
    desc: "A sovereign nation announced it would run half its government on autonomous AI agents. A major public company replaced 14% of its workforce with AI agent fleets. Neither has governance infrastructure."
  },
  "ai-agents-out-of-control-2026": {
    title: "77% of IT Managers Say AI Agents Are Out of Control | CoreIdentity",
    desc: "New data from the Cloud Security Alliance, Monte Carlo, Deloitte, and Grant Thornton: enterprises are deploying AI agents faster than they can govern them."
  }
};

const BOTS = [
  'twitterbot','facebookexternalhit','linkedinbot','whatsapp',
  'slackbot','discordbot','telegrambot','googlebot','bingbot',
  'applebot','embedly','outbrain','pinterest','iframely'
];

const IMG = 'https://coreidentitygroup.com/og-blog.png';
const BASE = 'https://coreidentitygroup.com';
const SNAME = 'CoreIdentity Development Group';

function isBot(ua) {
  const u = (ua || '').toLowerCase();
  return BOTS.some(b => u.includes(b));
}

function card(title, desc, url, img) {
  return [
    '<!DOCTYPE html><html lang="en"><head>',
    '<meta charset="UTF-8">',
    '<title>' + title + '</title>',
    '<meta name="description" content="' + desc + '"/>',
    '<meta property="og:title" content="' + title + '"/>',
    '<meta property="og:description" content="' + desc + '"/>',
    '<meta property="og:image" content="' + img + '"/>',
    '<meta property="og:url" content="' + url + '"/>',
    '<meta property="og:type" content="article"/>',
    '<meta property="og:site_name" content="' + SNAME + '"/>',
    '<meta name="twitter:card" content="summary_large_image"/>',
    '<meta name="twitter:title" content="' + title + '"/>',
    '<meta name="twitter:description" content="' + desc + '"/>',
    '<meta name="twitter:image" content="' + img + '"/>',
    '<meta name="twitter:site" content="@coreidentity_gp"/>',
    '</head><body></body></html>'
  ].join('');
}

export async function onRequest({ request, next }) {
  const ua = request.headers.get('user-agent') || '';
  if (!isBot(ua)) return next();

  const path = new URL(request.url).pathname;
  const headers = { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public,max-age=3600' };

  const m = path.match(/^\/blog\/([^/]+)\/?$/);
  if (m && POSTS[m[1]]) {
    const p = POSTS[m[1]];
    return new Response(card(p.title, p.desc, BASE + path, IMG), { headers });
  }

  if (path === '/' || path === '') {
    return new Response(card(
      'CoreIdentity - Governance Infrastructure for Agentic AI',
      'The control plane for autonomous enterprise AI. Identity enforcement, policy authorization, and immutable audit.',
      BASE, IMG
    ), { headers });
  }

  return next();
}
