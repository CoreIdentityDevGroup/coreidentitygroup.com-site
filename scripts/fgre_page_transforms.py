#!/usr/bin/env python3
"""
Idempotent transforms for FGRE page integration — router, header, footer, portfolio.
Safe to run multiple times.
"""

from pathlib import Path

BASE = Path.home() / 'coreidentity/integrations/coreholdingcorp-site-v2/src'
results = {}


def apply(path, old, new, label, guard=None):
    """Apply replacement idempotently. guard= unique string present in new but not old."""
    content = path.read_text(encoding='utf-8')
    sentinel = guard if guard else new
    if sentinel in content:
        print(f'  SKIP {label}')
        return False
    if old not in content:
        print(f'  FAIL {label}: anchor not found')
        return False
    content = content.replace(old, new, 1)
    path.write_text(content, encoding='utf-8')
    print(f'  DONE {label}')
    results.setdefault(path.name, []).append(label)
    return True


# ── CHANGE 2 ── router.tsx ────────────────────────────────────────────
print('\n=== router.tsx ===')
p = BASE / 'router.tsx'

# 2A: Add FGREPage import alongside SALPage import block
apply(p,
    label='2A add FGREPage import',
    guard='import { FGREPage }',
    old='import { SALPage } from "./pages/SALPage";',
    new=(
        'import { SALPage } from "./pages/SALPage";\n'
        'import { FGREPage } from "./pages/FGREPage";'
    ),
)

# 2B: Add fgreRoute definition after salRoute
apply(p,
    label='2B add fgreRoute definition',
    guard='const fgreRoute',
    old='const salRoute = createRoute({ getParentRoute: () => rootRoute, path: "/sal", component: SALPage });',
    new=(
        'const salRoute = createRoute({ getParentRoute: () => rootRoute, path: "/sal", component: SALPage });\n'
        'const fgreRoute = createRoute({ getParentRoute: () => rootRoute, path: "/fgre", component: FGREPage });'
    ),
)

# 2C: Add fgreRoute to routeTree
apply(p,
    label='2C add fgreRoute to routeTree',
    guard='  fgreRoute,',
    old='  salRoute,\n  blogIndexRoute,',
    new='  salRoute,\n  fgreRoute,\n  blogIndexRoute,',
)


# ── CHANGE 3 ── Header.tsx ────────────────────────────────────────────
print('\n=== Header.tsx ===')
p = BASE / 'components/Header.tsx'

apply(p,
    label='3 add FGRE nav item after quantum-hardening',
    guard='"/fgre"',
    old='      { to: "/quantum-hardening", label: "Quantum Hardening" },\n      { to: "/blog", label: "Blog" },',
    new=(
        '      { to: "/quantum-hardening", label: "Quantum Hardening" },\n'
        '      { to: "/fgre", label: "Formal Governance Verification" },\n'
        '      { to: "/blog", label: "Blog" },'
    ),
)


# ── CHANGE 4 ── Footer.tsx ────────────────────────────────────────────
print('\n=== Footer.tsx ===')
p = BASE / 'components/Footer.tsx'

apply(p,
    label='4 add FGRE footer link after quantum-hardening',
    guard='to="/fgre"',
    old=(
        '              <li><Link to="/quantum-hardening" className="hover:text-white/80 transition">Quantum Hardening</Link></li>\n'
        '            </ul>'
    ),
    new=(
        '              <li><Link to="/quantum-hardening" className="hover:text-white/80 transition">Quantum Hardening</Link></li>\n'
        '              <li><Link to="/fgre" className="hover:text-white/80 transition">Formal Governance Verification</Link></li>\n'
        '            </ul>'
    ),
)


# ── CHANGE 5 ── PortfolioPage.tsx ─────────────────────────────────────
print('\n=== PortfolioPage.tsx ===')
p = BASE / 'pages/PortfolioPage.tsx'

# 5A: Update sprint tests count on Quantum Hardening card
apply(p,
    label='5A update QH body: 376/376 sprint → 693/693 platinum',
    guard='693/693 platinum tests',
    old='376/376 sprint tests',
    new='693/693 platinum tests',
)

# 5B: Add FGRE portfolio card after Quantum Hardening card
# The QH card now ends with "...Nexus. " then />
# Followed by </div> (grid close) and </section> (section close)
apply(p,
    label='5B add FGRE portfolio card',
    guard='href="/fgre"',
    old=(
        ' body="CoreIdentity is the first AI governance platform to complete post-quantum'
        ' cryptographic hardening across its full enforcement stack.'
        ' 100,000 soak cycles. 693/693 platinum tests. Zero failures.'
        ' ML-KEM-768, ML-DSA-65, SLH-DSA-128s deployed across SAL Kernel, Sentinel, AIS, and Nexus. "\n'
        ' />\n'
        ' </div>\n'
        ' </section>'
    ),
    new=(
        ' body="CoreIdentity is the first AI governance platform to complete post-quantum'
        ' cryptographic hardening across its full enforcement stack.'
        ' 100,000 soak cycles. 693/693 platinum tests. Zero failures.'
        ' ML-KEM-768, ML-DSA-65, SLH-DSA-128s deployed across SAL Kernel, Sentinel, AIS, and Nexus. "\n'
        ' />\n'
        ' <PortfolioCard\n'
        ' title="FGRE — Formal Governance Reasoning Engine"\n'
        ' href="/fgre"\n'
        ' body="The first commercial implementation of formal mathematical governance verification.'
        ' Z3 SMT solver detects policy contradictions, validates execution paths, and generates'
        ' SLH-DSA-128s signed proof artifacts before any policy activates.'
        ' Machine-verifiable. Exportable for regulatory submission and sovereign audit."\n'
        ' />\n'
        ' </div>\n'
        ' </section>'
    ),
)


# ── Summary ───────────────────────────────────────────────────────────
print('\n=== Summary ===')
if results:
    for fname, labels in results.items():
        print(f'  {fname}: {len(labels)} change(s)')
        for l in labels:
            print(f'    - {l}')
else:
    print('  No changes applied (all already done).')
