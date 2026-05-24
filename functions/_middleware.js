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

// Static governance surfaces — pre-rendered OG cards for social/bot crawlers.
const PAGES = {
  "/platform": {
    title: "Platform Architecture | CoreIdentity",
    desc: "The complete CoreIdentity governance substrate for evaluators: eight components across identity, authorization, formal verification, orchestration, and post-quantum hardening — 25 governance tables, 734/734 tests passing, 100K+ governed calls."
  },
  "/layer-a": {
    title: "Execution Integrity — Layer A | CoreIdentity",
    desc: "Prove which agent acted, under whose authority, and whether it was permitted. Agent Identity Systems + runtime behavioral fingerprinting, ML-DSA-65 signed."
  },
  "/layer-b": {
    title: "Verification at Scale — Layer B | CoreIdentity",
    desc: "Policy proven correct before it activates and enforced deterministically once it does. FGRE formal reasoning + the SAL Semantic Authorization Layer."
  },
  "/layer-c": {
    title: "Sovereign Assurance — Layer C | CoreIdentity",
    desc: "Delegation lineage and trust-decay scoring across the entire agent fleet. Nexus orchestration, AGO autonomous supervision, and behavioral genealogy."
  },
  "/layer-d": {
    title: "Cryptographic Hardening — Layer D | CoreIdentity",
    desc: "Post-quantum protection across every cryptographic surface — the first commercial platform in production with all three NIST FIPS standards (203/204/205)."
  },
  "/governance/legal": {
    title: "Legal & Professional Services AI Governance | CoreIdentity",
    desc: "CoreIdentity enforces privilege-aware agent governance across legal and professional services — so an autonomous agent never waives privilege, breaches an ethical wall, or leaves a matter without a defensible record."
  },
  "/governance/critical-infrastructure": {
    title: "Critical Infrastructure AI Governance | CoreIdentity",
    desc: "CoreIdentity enforces actuation-level agent governance across energy, water, transportation, and industrial control systems — so an autonomous agent can never issue an operational command outside its authorized, auditable bounds."
  },
  "/governance/defense": {
    title: "Defense & Intelligence AI Governance | CoreIdentity",
    desc: "CoreIdentity enforces need-to-know agent governance for defense and intelligence missions — so every autonomous action on controlled information is attributable, authorized, and auditable to the standard accreditation authorities enforce."
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

  const path = new URL(request.url).pathname.replace(/\/+$/, '') || '/';
  const headers = { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'public,max-age=3600' };

  const m = path.match(/^\/blog\/([^/]+)\/?$/);
  if (m && POSTS[m[1]]) {
    const p = POSTS[m[1]];
    return new Response(card(p.title, p.desc, BASE + path, IMG), { headers });
  }

  if (PAGES[path]) {
    const p = PAGES[path];
    return new Response(card(p.title, p.desc, BASE + path, IMG), { headers });
  }

  if (path === '/' || path === '') {
    return new Response(card(
      'CoreIdentity — Institutional Trust Infrastructure for Autonomous Systems',
      'When you delegate consequential authority to AI, you need institutional-grade proof your agents acted correctly. CoreIdentity makes every AI decision provable — authorized, attributed, and auditable.',
      BASE, IMG
    ), { headers });
  }

  return next();
}
