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
  "/governance/regulated": {
    title: "Regulated Industries AI Governance | CoreIdentity",
    desc: "CoreIdentity enforces autonomous-agent governance across eleven regulated industries — authorization, attribution, and audit mapped to the obligations each regulator enforces, from SEC and HIPAA to CMMC and FinCEN."
  },
  "/governance/bfsi": {
    title: "BFSI AI Governance | CoreIdentity",
    desc: "CoreIdentity enforces authorization, attribution, and audit on every autonomous action across banking, trading, credit, and payments — to SEC, FINRA, OCC, Basel III, and PCI-DSS standards."
  },
  "/governance/education": {
    title: "Education AI Governance | CoreIdentity",
    desc: "CoreIdentity governs every agent that touches student records, federal aid, or research data — enforcing FERPA, Title IV, and federal research compliance with cryptographic audit trails."
  },
  "/governance/finance": {
    title: "Corporate Finance AI Governance | CoreIdentity",
    desc: "CoreIdentity keeps autonomous agents inside SOX controls across the financial close, treasury, and reporting — authorized, segregated, and audit-ready for the SEC and external auditors."
  },
  "/governance/healthcare": {
    title: "Healthcare AI Governance | CoreIdentity",
    desc: "CoreIdentity enforces HIPAA-grade access, attribution, and audit across every clinical and administrative AI agent — aligned to HIPAA, FDA, CMS, and the 21st Century Cures Act."
  },
  "/governance/hospitality": {
    title: "Hospitality AI Governance | CoreIdentity",
    desc: "CoreIdentity governs guest payment and personal data across brands and borders — enforcing PCI-DSS, GDPR, and data-sovereignty requirements on every autonomous agent."
  },
  "/governance/legal": {
    title: "Legal & Professional Services AI Governance | CoreIdentity",
    desc: "CoreIdentity enforces privilege-aware agent governance across legal and professional services — so an autonomous agent never waives privilege, breaches an ethical wall, or leaves a matter without a defensible record."
  },
  "/governance/logistics": {
    title: "Logistics & Supply Chain AI Governance | CoreIdentity",
    desc: "CoreIdentity governs routing, customs clearance, and party screening across the supply chain — enforcing CISA, DHS, and export-control obligations on every autonomous action."
  },
  "/governance/manufacturing": {
    title: "Manufacturing AI Governance | CoreIdentity",
    desc: "CoreIdentity protects CUI and controlled technical data across design and production — enforcing CMMC, ITAR, and EAR requirements on every autonomous agent."
  },
  "/governance/private-capital": {
    title: "Private Capital AI Governance | CoreIdentity",
    desc: "CoreIdentity governs diligence, valuation, and LP-reporting agents — enforcing SEC private-fund rules, FINRA information barriers, and fiduciary duty with cryptographic evidence."
  },
  "/governance/real-estate": {
    title: "Real Estate AI Governance | CoreIdentity",
    desc: "CoreIdentity governs origination, title, and closing agents against money-laundering and consumer-protection risk — enforcing FinCEN, the Bank Secrecy Act, and CFPB rules."
  },
  "/governance/retail": {
    title: "Retail AI Governance | CoreIdentity",
    desc: "CoreIdentity governs pricing, payments, and personalization agents across millions of consumers — enforcing PCI-DSS, CCPA/CPRA, and consumer-protection law."
  },
  "/governance/sovereign": {
    title: "Sovereign & Government AI Governance | CoreIdentity",
    desc: "CoreIdentity enforces accreditation-grade agent governance for government and sovereign missions — authorization, attribution, and audit aligned to FedRAMP, FISMA, IL4/IL5, the UAE AI Act, and Singapore IMDA."
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
