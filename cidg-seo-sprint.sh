#!/usr/bin/env bash
# cidg-seo-sprint.sh — CoreIdentity Full SEO Sprint
# Idempotent: safe to run multiple times.
# Ends: npm run build → git commit → git push origin main
set -euo pipefail

SITE_DIR="/home/u0_a494/coreidentity/integrations/coreholdingcorp-site-v2"
cd "$SITE_DIR"
echo "[SEO] Sprint starting in: $SITE_DIR"

# ── STEP 0a: Install react-helmet-async ──────────────────────────────────────
echo "[STEP 0a] react-helmet-async"
if grep -q '"react-helmet-async"' package.json; then
  echo "  already installed"
else
  npm install react-helmet-async
  echo "  installed"
fi

# ── STEP 0b: HelmetProvider in main.tsx ──────────────────────────────────────
echo "[STEP 0b] HelmetProvider in main.tsx"
if grep -q 'HelmetProvider' src/main.tsx; then
  echo "  already present"
else
  python3 << 'PYEOF'
path = "src/main.tsx"
with open(path) as f:
    c = f.read()
c = c.replace(
    'import { RouterProvider } from "@tanstack/react-router";',
    'import { RouterProvider } from "@tanstack/react-router";\nimport { HelmetProvider } from "react-helmet-async";'
)
c = c.replace(
    '<RouterProvider router={router} />',
    '<HelmetProvider>\n    <RouterProvider router={router} />\n  </HelmetProvider>'
)
with open(path, "w") as f:
    f.write(c)
print("  main.tsx updated")
PYEOF
fi

# ── STEP 1: index.html full meta suite ───────────────────────────────────────
echo "[STEP 1] index.html"
python3 << 'PYEOF'
import re

path = "index.html"
with open(path) as f:
    c = f.read()

# keywords
c = re.sub(
    r'<meta name="keywords" content="[^"]*" />',
    '<meta name="keywords" content="agentic AI governance, AI agent identity, autonomous AI compliance, EU AI Act compliance, NIST AI RMF, SAL Kernel, Sentinel OS, agent identity protocol, AIP, AI governance platform, enterprise AI governance" />',
    c
)
# author
c = re.sub(
    r'<meta name="author" content="[^"]*" />',
    '<meta name="author" content="CoreIdentity Development Group Inc." />',
    c
)
# canonical
c = re.sub(
    r'<link rel="canonical" href="[^"]*" />',
    '<link rel="canonical" href="https://coreidentitygroup.com/" />',
    c
)
# og:url
c = re.sub(
    r'<meta property="og:url" content="[^"]*" />',
    '<meta property="og:url" content="https://coreidentitygroup.com/" />',
    c
)
# og:image (add if missing)
if 'og:image' not in c:
    c = c.replace(
        '<meta property="og:site_name"',
        '<meta property="og:image" content="https://coreidentitygroup.com/assets/coreidentity-governance-hero.webp" />\n    <meta property="og:site_name"'
    )
# twitter:image (add if missing)
if 'twitter:image' not in c:
    c = c.replace(
        '<meta name="twitter:description"',
        '<meta name="twitter:image" content="https://coreidentitygroup.com/assets/coreidentity-governance-hero.webp" />\n    <meta name="twitter:description"'
    )
# google-site-verification (add if missing)
if 'google-site-verification' not in c:
    c = c.replace(
        '  </head>',
        '    <!-- Replace PENDING_VERIFICATION with actual token from Google Search Console — manual step required on first desktop access. -->\n    <meta name="google-site-verification" content="PENDING_VERIFICATION" />\n  </head>'
    )
# JSON-LD Organization schema
new_schema = '''{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CoreIdentity Development Group Inc.",
      "url": "https://coreidentitygroup.com",
      "logo": "https://coreidentitygroup.com/assets/coreidentity-logo.png",
      "description": "The complete Agentic AI Governance Ecosystem for enterprise and sovereign AI deployments.",
      "foundingDate": "2025",
      "sameAs": ["https://agentidentity.systems"],
      "contactPoint": {"@type": "ContactPoint", "url": "https://coreidentitygroup.com/contact", "contactType": "sales"}
    }'''
if '"sameAs"' not in c:
    c = re.sub(
        r'(<script type="application/ld\+json">\s*)\{.*?\}(\s*</script>)',
        lambda m: m.group(1) + new_schema + m.group(2),
        c, flags=re.DOTALL
    )

with open(path, "w") as f:
    f.write(c)
print("  index.html updated")
PYEOF

# ── STEP 2: Per-page <Helmet> tags ────────────────────────────────────────────
echo "[STEP 2] Per-page Helmet tags"
python3 << 'PYEOF'
import re

def add_helmet(filepath, title, description, schema_json=None):
    with open(filepath) as f:
        content = f.read()
    if 'react-helmet-async' in content:
        print(f"  SKIP {filepath}")
        return
    # Add import after last import line
    lines = content.split('\n')
    last_import = max((i for i, l in enumerate(lines) if l.strip().startswith('import ')), default=-1)
    insert_pos = last_import + 1 if last_import >= 0 else 0
    lines.insert(insert_pos, 'import { Helmet } from "react-helmet-async";')
    content = '\n'.join(lines)
    # Build Helmet block
    schema_line = ''
    if schema_json:
        schema_line = f'\n        <script type="application/ld+json">{{`{schema_json}`}}</script>'
    helmet = (
        f'      <Helmet>\n'
        f'        <title>{title}</title>\n'
        f'        <meta name="description" content="{description}" />'
        f'{schema_line}\n'
        f'      </Helmet>\n'
    )
    # Insert after first JSX opening tag in return()
    lines2 = content.split('\n')
    in_return = False
    insert_after = -1
    for i, line in enumerate(lines2):
        if re.search(r'\breturn\s*\(', line):
            in_return = True
            continue
        if in_return and line.lstrip().startswith('<'):
            insert_after = i
            break
    if insert_after < 0:
        print(f"  WARN: no JSX root found in {filepath}")
        return
    for j, hl in enumerate(helmet.rstrip('\n').split('\n')):
        lines2.insert(insert_after + 1 + j, hl)
    with open(filepath, 'w') as f:
        f.write('\n'.join(lines2))
    print(f"  OK  {filepath}")

SAL = '{"@context":"https://schema.org","@type":"SoftwareApplication","name":"SAL Enforcement Kernel","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}'
SENTINEL = '{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Sentinel OS","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}'
NEXUS = '{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Nexus OS","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}'
AGO = '{"@context":"https://schema.org","@type":"SoftwareApplication","name":"AGO \u2014 Autonomous Governance Orchestrator","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}'

pages = [
    ("src/pages/HomePage.tsx",
     "CoreIdentity \u2014 Agentic AI Governance Ecosystem | The Control Layer for Governed AI",
     "CoreIdentity is the complete Agentic AI Governance Ecosystem. The infrastructure layer governing how autonomous AI agents are deployed, operated, audited, and controlled at enterprise scale.",
     None),
    ("src/pages/SentinelOSPage.tsx",
     "Sentinel OS \u2014 AI Agent Policy Enforcement | CoreIdentity",
     "Sentinel OS enforces policy, controls identity boundaries, gates approvals, and captures audit evidence for your AI fleet. The governance layer for enterprise agentic AI.",
     SENTINEL),
    ("src/pages/SALPage.tsx",
     "SAL Enforcement Kernel \u2014 Semantic Authorization Layer | CoreIdentity",
     "The SAL Enforcement Kernel is the deterministic pre-execution gateway for autonomous AI. Sub-3ms arbitration latency. IIAAC validation model. Fail-closed by design.",
     SAL),
    ("src/pages/NexusOSPage.tsx",
     "Nexus OS \u2014 Multi-Agent Orchestration Governance | CoreIdentity",
     "Nexus OS orchestrates multi-agent workflows under governance constraints. Workflow orchestration, systems integration, and task routing within authorized policy boundaries.",
     NEXUS),
    ("src/pages/AGO1Page.tsx",
     "AGO \u2014 Autonomous Governance Orchestrator | CoreIdentity",
     "AGO-1 is CoreIdentity\u2019s internal operating agent running under Sentinel OS and Nexus OS governance. The validated pilot pattern for enterprise agentic deployments.",
     AGO),
    ("src/pages/AgentIdentitySystemsPage.tsx",
     "Agent Identity Systems \u2014 AIP v0.1 | agentidentity.systems",
     "Agent Identity Systems provides cryptographic identity, authorization boundaries, provenance, and attribution for autonomous AI agents. The AIP v0.1 open standard.",
     None),
    ("src/pages/CoreIdentityAdvisoryGroupPage.tsx",
     "CIAG \u2014 AI Governance Advisory Services | CoreIdentity",
     "CoreIdentity AI Advisory Group delivers AI governance frameworks, regulatory compliance roadmaps, and enterprise implementation strategy for agentic AI deployments.",
     None),
    ("src/pages/QuantumHardeningPage.tsx",
     "Quantum-Resistant AI Governance | Post-Quantum Cryptography | CoreIdentity",
     "CoreIdentity completes post-quantum cryptographic hardening across the full enforcement stack. FIPS 203, 204, and 205. Every surface \u2014 not just the perimeter.",
     None),
    ("src/pages/MCPPage.tsx",
     "Model Context Protocol Governance | CoreIdentity MCP Integration",
     "CoreIdentity governs Model Context Protocol integrations with identity enforcement, authorization boundaries, and audit trails for every MCP tool call.",
     None),
    ("src/pages/AboutPage.tsx",
     "About CoreIdentity Development Group | Agentic AI Governance",
     "CoreIdentity Development Group Inc. is the infrastructure company behind Agentic Execution Governance \u2014 the discipline that governs autonomous AI at the execution layer.",
     None),
    ("src/pages/ContactPage.tsx",
     "Contact CoreIdentity | Enterprise AI Governance Inquiries",
     "Contact CoreIdentity Development Group for enterprise AI governance briefings, platform demonstrations, and partnership inquiries.",
     None),
]
for args in pages:
    try:
        add_helmet(*args)
    except Exception as e:
        print(f"  ERROR {args[0]}: {e}")
PYEOF

# ── STEP 3: sitemap.xml ───────────────────────────────────────────────────────
echo "[STEP 3] sitemap.xml"
cat > public/sitemap.xml << 'XMLEOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://coreidentitygroup.com/</loc><lastmod>2026-04-15</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://coreidentitygroup.com/sentinel-os</loc><lastmod>2026-04-15</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://coreidentitygroup.com/sal</loc><lastmod>2026-04-15</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://coreidentitygroup.com/nexus-os</loc><lastmod>2026-04-15</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://coreidentitygroup.com/ago-1</loc><lastmod>2026-04-15</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://coreidentitygroup.com/agentidentity-systems</loc><lastmod>2026-04-15</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://coreidentitygroup.com/coreidentity-ai-advisory-group</loc><lastmod>2026-04-15</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/quantum-hardening</loc><lastmod>2026-04-15</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/mcp</loc><lastmod>2026-04-15</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/about</loc><lastmod>2026-04-15</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/leadership</loc><lastmod>2026-04-15</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/founders</loc><lastmod>2026-04-15</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/portfolio</loc><lastmod>2026-04-15</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/contact</loc><lastmod>2026-04-15</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://coreidentitygroup.com/resources</loc><lastmod>2026-04-15</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://coreidentitygroup.com/faq</loc><lastmod>2026-04-15</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://coreidentitygroup.com/privacy</loc><lastmod>2026-04-15</lastmod><changefreq>monthly</changefreq><priority>0.3</priority></url>
  <url><loc>https://coreidentitygroup.com/terms</loc><lastmod>2026-04-15</lastmod><changefreq>monthly</changefreq><priority>0.3</priority></url>
</urlset>
XMLEOF
echo "  sitemap.xml — 18 URLs"

# ── STEP 4: robots.txt ────────────────────────────────────────────────────────
echo "[STEP 4] robots.txt"
cat > public/robots.txt << 'ROBOTEOF'
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_headers
Disallow: /_redirects
Sitemap: https://coreidentitygroup.com/sitemap.xml
ROBOTEOF
echo "  robots.txt rewritten"

# ── STEP 5: ResourcesPage.tsx — full rebuild ──────────────────────────────────
echo "[STEP 5] ResourcesPage.tsx"
python3 << 'PYEOF'
path = "src/pages/ResourcesPage.tsx"
with open(path) as f:
    content = f.read()
if 'Health100' in content:
    print("  already rebuilt — skipping")
elif 'navigate({ to: "/contact"' not in content and 'useNavigate' not in content:
    print("  unknown state — skipping to preserve content")
else:
    new_content = '''import React from "react";
import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 space-y-12">
      <Helmet>
        <title>AI Governance Resources | White Papers &amp; Research | CoreIdentity</title>
        <meta name="description" content="Access CoreIdentity AI governance resources including the AIP v0.1 White Paper, compliance frameworks, and strategic governance briefs." />
      </Helmet>

      <div className="space-y-4">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40">
          COREIDENTITY DEVELOPMENT GROUP
        </div>
        <h1 className="text-4xl font-semibold tracking-tight">Resources</h1>
        <p className="text-white/70 max-w-3xl leading-relaxed text-lg">
          Research, white papers, and strategic governance frameworks for
          enterprise and sovereign AI deployments.
        </p>
      </div>

      {/* AIP White Paper */}
      <div className="rounded-2xl border border-indigo-500/30 p-8" style={{background:"rgba(99,102,241,0.05)"}}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-medium tracking-widest text-indigo-400 uppercase">White Paper</span>
          <span className="text-xs text-white/30">\u00b7</span>
          <span className="text-xs text-white/40">April 2026</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-3">
          Agent Identity Protocol (AIP) v0.1 \u2014 White Paper
        </h2>
        <p className="text-white/70 leading-relaxed mb-4 max-w-3xl">
          The open standard for AI agent identity, verification, and governance.
          Includes full compliance mapping for EU AI Act, Colorado SB 24-205,
          and NIST AI RMF 1.0.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["AIP", "Agent Identity", "EU AI Act", "NIST AI RMF", "Governance Standard"].map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-indigo-500/20 text-indigo-300" style={{background:"rgba(99,102,241,0.06)"}}>
              {tag}
            </span>
          ))}
        </div>
        <a
          href="/AIP-v0.1-White-Paper-v2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-indigo-500/30 text-indigo-300 hover:text-indigo-200 transition"
          style={{background:"rgba(99,102,241,0.08)"}}
        >
          Download PDF \u2192
        </a>
      </div>

      {/* Health100 Industry Brief */}
      <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-medium tracking-widest text-white/40 uppercase">Industry Brief</span>
          <span className="text-xs text-white/30">\u00b7</span>
          <span className="text-xs text-white/40">April 2026</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-3">
          Governing the Health100 Agentic Ecosystem
        </h2>
        <p className="text-white/70 leading-relaxed mb-4 max-w-3xl">
          Strategic governance framework for CVS Health\u2019s Health100 initiative \u2014
          100,000 autonomous agents, HIPAA compliance, and the CoreIdentity
          governance substrate.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["Healthcare AI", "HIPAA", "Health100", "CVS", "Agentic Governance"].map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/50" style={{background:"rgba(255,255,255,0.03)"}}>
              {tag}
            </span>
          ))}
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-white/15 text-white/70 hover:text-white hover:bg-white/5 transition"
        >
          Request Full Brief \u2192
        </Link>
      </div>

      <div className="text-center pt-4">
        <p className="text-white/40 text-sm mb-4">
          Additional governance resources, compliance frameworks, and deployment guides available on request.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
        >
          Request Resources
        </Link>
      </div>
    </div>
  );
}
'''
    with open(path, 'w') as f:
        f.write(new_content)
    print("  ResourcesPage.tsx rebuilt")
PYEOF

# ── STEP 6: HomePage.tsx — AGO + CIAG cards ──────────────────────────────────
echo "[STEP 6] HomePage.tsx internal linking"
python3 << 'PYEOF'
path = "src/pages/HomePage.tsx"
with open(path) as f:
    content = f.read()
if '/ago-1' in content and '/coreidentity-ai-advisory-group' in content:
    print("  AGO + CIAG already linked — skipping")
else:
    ago_ciag_cards = '''
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">AUTONOMOUS OPERATIONS</div>
            <div className="text-lg font-semibold mb-3">AGO \u2014 Autonomous Governance Orchestrator</div>
            <p className="text-white/60 text-sm leading-relaxed">
              The internal operating agent running under full AEG enforcement \u2014
              and the validated pilot pattern for every enterprise deployment that follows.
              Governance demonstrated, not just described.
            </p>
            <Link to="/ago-1" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              AGO \u2192
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widests mb-2">ADVISORY</div>
            <div className="text-lg font-semibold mb-3">CoreIdentity Advisory Group</div>
            <p className="text-white/60 text-sm leading-relaxed">
              AI governance frameworks, regulatory compliance roadmaps, and enterprise
              implementation strategy for organizations navigating the agentic AI
              regulatory landscape.
            </p>
            <Link to="/coreidentity-ai-advisory-group" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              CIAG \u2192
            </Link>
          </div>
'''
    marker = "            Quantum Hardening \u2192\n            </Link>\n          </div>\n        </div>\n      </section>"
    # Try the actual arrow character from the file (→)
    import re
    # Find the Quantum Hardening link and the closing grid div
    m = re.search(
        r'(Quantum Hardening →\s*</Link>\s*</div>)(\s*</div>\s*</section>)',
        content, re.DOTALL
    )
    if m:
        content = content[:m.start(2)] + '\n' + ago_ciag_cards + content[m.start(2):]
        with open(path, 'w') as f:
            f.write(content)
        print("  AGO + CIAG cards added")
    else:
        print("  WARN: insertion point not found in HomePage.tsx")
PYEOF

# ── STEP 7: Todd Morgan motto in LeadershipPage.tsx ──────────────────────────
echo "[STEP 7] Todd Morgan motto"
python3 << 'PYEOF'
import re
MOTTO = "The greatest superpower is the ability to change yourself."
path = "src/pages/LeadershipPage.tsx"
with open(path) as f:
    content = f.read()
if MOTTO in content:
    print("  already present — skipping")
else:
    motto_p = (
        '\n            <p className="mt-6 text-sm text-white/35 italic">\n'
        '              \u201c' + MOTTO + '\u201d\n'
        '            </p>\n'
    )
    # Insert after the paragraphs closing </div>, before the outer </div></Card>
    # Pattern: last </p> in the bio → </div> (paragraphs) → </div> (card body)
    pattern = r'(something that should exist and did not\.\s*</p>\s*</div>)(\s*\n\s*</div>\s*\n\s*</Card>)'
    new_content, n = re.subn(
        pattern,
        lambda m: m.group(1) + '\n' + motto_p + m.group(2),
        content,
        flags=re.DOTALL
    )
    if n > 0:
        with open(path, 'w') as f:
            f.write(new_content)
        print("  motto added")
    else:
        print("  ERROR: insertion point not found — check LeadershipPage.tsx")
PYEOF

# ── STEP 8: npm run build ─────────────────────────────────────────────────────
echo ""
echo "[STEP 8] npm run build"
npm run build

# ── STEP 9: git commit + push ─────────────────────────────────────────────────
echo ""
echo "[STEP 9] git commit + push"
git add -A
git commit -m "$(cat <<'MSGEOF'
feat: full SEO sprint — meta tags, sitemap, schema.org, resources page, internal linking [seo-sprint-v1]
MSGEOF
)"
git push origin main

echo ""
echo "================================================================"
echo "  SEO Sprint Complete — Cloudflare Pages deploy triggered"
echo "================================================================"
echo ""
printf "%-48s %s\n" "FILE" "CHANGE"
printf "%-48s %s\n" "----" "------"
printf "%-48s %s\n" "index.html" "keywords, author, canonical, og:image, twitter:image, GSC tag, schema.org Org"
printf "%-48s %s\n" "src/main.tsx" "HelmetProvider wrapper"
printf "%-48s %s\n" "src/pages/HomePage.tsx" "Helmet + AGO + CIAG enforcement stack cards"
printf "%-48s %s\n" "src/pages/SentinelOSPage.tsx" "Helmet + SoftwareApplication schema"
printf "%-48s %s\n" "src/pages/SALPage.tsx" "Helmet + SoftwareApplication schema"
printf "%-48s %s\n" "src/pages/NexusOSPage.tsx" "Helmet + SoftwareApplication schema"
printf "%-48s %s\n" "src/pages/AGO1Page.tsx" "Helmet + SoftwareApplication schema"
printf "%-48s %s\n" "src/pages/AgentIdentitySystemsPage.tsx" "Helmet"
printf "%-48s %s\n" "src/pages/CoreIdentityAdvisoryGroupPage.tsx" "Helmet"
printf "%-48s %s\n" "src/pages/QuantumHardeningPage.tsx" "Helmet"
printf "%-48s %s\n" "src/pages/MCPPage.tsx" "Helmet"
printf "%-48s %s\n" "src/pages/AboutPage.tsx" "Helmet"
printf "%-48s %s\n" "src/pages/ContactPage.tsx" "Helmet"
printf "%-48s %s\n" "src/pages/ResourcesPage.tsx" "Full rebuild: AIP white paper + Health100 brief"
printf "%-48s %s\n" "src/pages/LeadershipPage.tsx" "Todd Morgan personal motto"
printf "%-48s %s\n" "public/sitemap.xml" "Full rewrite — 18 URLs, coreidentitygroup.com domain"
printf "%-48s %s\n" "public/robots.txt" "Optimized: /api/ /\_headers /\_redirects disallowed"
