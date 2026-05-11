#!/usr/bin/env python3
"""
Idempotent FGRE integration transforms — CoreIdentity site, 6 pages.
Safe to run multiple times: each apply() is a no-op if the anchor is absent.
"""

from pathlib import Path

BASE = Path.home() / 'coreidentity/integrations/coreholdingcorp-site-v2/src/pages'
results = {}


def apply(path, old, new, label, guard=None):
    """Apply replacement. guard= unique string in NEW but not OLD that proves change is done."""
    content = path.read_text(encoding='utf-8')
    # If a guard string is provided, use it to detect already-applied state
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


# ── CHANGE 1 ── HomePage.tsx ──────────────────────────────────────────
print('\n=== HomePage.tsx ===')
p = BASE / 'HomePage.tsx'

# 1A: Remove GCP badge subtitle div
apply(p,
    label='1A remove GCP badge subtitle',
    old=(
        "              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', marginTop: '2px' }}>\n"
        "                Official badge pending Partner Marketing Studio access\n"
        "              </div>\n"
    ),
    new='',
)

# 1B: Change 706-Point item padding from sm:pl-8 → sm:px-8 to make room for new stat
apply(p,
    label='1B update 706-Point div padding',
    old='          <div className="flex-1 sm:pl-8">\n            <div className="text-2xl font-bold text-blue-400">706-Point</div>',
    new='          <div className="flex-1 sm:px-8">\n            <div className="text-2xl font-bold text-blue-400">706-Point</div>',
)

# 1B: Insert 693/693 stat after 706-Point item, before ENTERPRISE POSITIONING section
apply(p,
    label='1B add 693/693 Platinum tests stat',
    old=(
        '            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">'
        'Platinum Assurance Framework — continuously passing. The governance standard we hold ourselves to.</div>\n'
        '          </div>\n'
        '        </div>\n'
        '      </section>\n'
        '\n'
        '      {/* ENTERPRISE POSITIONING */}'
    ),
    new=(
        '            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">'
        'Platinum Assurance Framework — continuously passing. The governance standard we hold ourselves to.</div>\n'
        '          </div>\n'
        '          <div className="flex-1 sm:pl-8">\n'
        '            <div className="text-2xl font-bold text-teal-400">693/693</div>\n'
        '            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">'
        'Platinum tests passing — continuously verified against the full assurance framework</div>\n'
        '          </div>\n'
        '        </div>\n'
        '      </section>\n'
        '\n'
        '      {/* ENTERPRISE POSITIONING */}'
    ),
)

# 1C: Add FGRE card to enforcement stack grid (after CIAG card)
apply(p,
    label='1C add FGRE to enforcement stack',
    old=(
        '              CIAG →\n'
        '            </Link>\n'
        '          </div>\n'
        '\n'
        '        </div>\n'
        '      </section>\n'
        '\n'
        '      {/* ENTRY-LEVEL PRODUCTS */}'
    ),
    new=(
        '              CIAG →\n'
        '            </Link>\n'
        '          </div>\n'
        '\n'
        '          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">\n'
        '            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">FORMAL VERIFICATION</div>\n'
        '            <div className="text-lg font-semibold mb-3">FGRE — Formal Governance Reasoning Engine</div>\n'
        '            <p className="text-white/60 text-sm leading-relaxed">\n'
        '              Mathematical assurance for governance policy integrity. Z3 SMT formal verification\n'
        '              detects policy contradictions, validates execution paths, and generates\n'
        '              machine-verifiable proof artifacts before any policy activates.\n'
        '            </p>\n'
        '          </div>\n'
        '\n'
        '        </div>\n'
        '      </section>\n'
        '\n'
        '      {/* ENTRY-LEVEL PRODUCTS */}'
    ),
)


# ── CHANGE 2 ── QuantumHardeningPage.tsx ─────────────────────────────
print('\n=== QuantumHardeningPage.tsx ===')
p = BASE / 'QuantumHardeningPage.tsx'

# 2: Add SLH-DSA-128s signing row + FGRE proof attestation row after Entropy source
apply(p,
    label='2 add SLH-DSA-128s signing + FGRE proof attestation rows',
    old=(
        "            ['Entropy source',            'ANU QRNG + OS CSPRNG',   'Live'],\n"
        "          ].map(function"
    ),
    new=(
        "            ['Entropy source',            'ANU QRNG + OS CSPRNG',   'Live'],\n"
        "            ['Stateless hash signing',    'SLH-DSA-128s (FIPS 205)', 'Live — Persistent HSM-backed keypair'],\n"
        "            ['FGRE proof attestation',    'SLH-DSA-128s (FIPS 205)', 'Live — Machine-verifiable'],\n"
        "          ].map(function"
    ),
)


# ── CHANGE 3 ── AgentIdentitySystemsPage.tsx ─────────────────────────
print('\n=== AgentIdentitySystemsPage.tsx ===')
p = BASE / 'AgentIdentitySystemsPage.tsx'

# 3: Add FGRE formal governance verification callout before closing div
apply(p,
    label='3 add FGRE formal governance verification section',
    guard='Formal Governance Verification',
    old='\n    </div>\n  );\n}',
    new=(
        '\n\n'
        '      <div\n'
        '        className="rounded-2xl p-6 cidg-fadein"\n'
        "        style={{border:'1px solid rgba(6,182,212,0.3)', background:'rgba(6,182,212,0.05)'}}\n"
        '      >\n'
        '        <div className="text-xs font-medium tracking-widest text-cyan-400 uppercase mb-3">\n'
        '          Formal Governance Verification\n'
        '        </div>\n'
        '        <div className="font-semibold text-white mb-3">\n'
        '          FGRE extends AIS with mathematically proven policy integrity.\n'
        '        </div>\n'
        '        <p className="text-sm text-white/70 leading-relaxed">\n'
        '          The Formal Governance Reasoning Engine applies Z3 SMT formal verification to\n'
        '          governance policies before activation — mathematically proving correctness,\n'
        '          detecting policy contradictions, and validating execution paths. FGRE generates\n'
        '          SLH-DSA-128s signed proof artifacts exportable for regulatory submission and\n'
        '          institutional due diligence. Where AIS establishes identity, FGRE proves the\n'
        '          policies governing that identity are mathematically sound before they activate.\n'
        '        </p>\n'
        '      </div>\n'
        '\n'
        '    </div>\n'
        '  );\n'
        '}'
    ),
)


# ── CHANGE 4 ── CoreIdentityTechnologiesPage.tsx ──────────────────────
print('\n=== CoreIdentityTechnologiesPage.tsx ===')
p = BASE / 'CoreIdentityTechnologiesPage.tsx'

# 4: Add FGRE as a core technology layer after SmartNation AI card
apply(p,
    label='4 add FGRE core technology layer',
    old=(
        '            <Link to="/smartnation-ai" className="text-sm text-emerald-400/80 hover:text-emerald-400 transition">SmartNation AI →</Link>\n'
        '          </div>\n'
        '        </div>\n'
        '      </section>\n'
        '\n'
        '      {/* Operational verticals */}'
    ),
    new=(
        '            <Link to="/smartnation-ai" className="text-sm text-emerald-400/80 hover:text-emerald-400 transition">SmartNation AI →</Link>\n'
        '          </div>\n'
        '\n'
        '          <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-5 cidg-card md:col-span-2">\n'
        '            <div className="text-xs font-semibold tracking-wide text-violet-400 uppercase mb-2">Formal Verification</div>\n'
        '            <div className="text-lg font-semibold text-white mb-2">FGRE — Formal Governance Reasoning Engine</div>\n'
        '            <p className="text-sm text-white/65 leading-relaxed mb-3">Mathematical assurance for governance policy integrity. Z3 SMT formal verification detects policy contradictions, validates execution paths, and generates machine-verifiable proof artifacts before any policy activates.</p>\n'
        '            <ul className="space-y-1 mb-4">\n'
        '              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Z3 SMT formal verification engine</span></li>\n'
        '              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>SLH-DSA-128s signed proof artifacts (FIPS 205)</span></li>\n'
        '              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Exportable for regulatory submission</span></li>\n'
        '            </ul>\n'
        '          </div>\n'
        '        </div>\n'
        '      </section>\n'
        '\n'
        '      {/* Operational verticals */}'
    ),
)


# ── CHANGE 5 ── SALPage.tsx ───────────────────────────────────────────
print('\n=== SALPage.tsx ===')
p = BASE / 'SALPage.tsx'

# 5: Add SAL + FGRE complete governance assurance stack section
apply(p,
    label='5 add SAL+FGRE governance assurance stack section',
    guard='Complete Governance Assurance Stack',
    old='      </section>\n\n      {/* Out-of-Scope Declarations */}',
    new=(
        '      </section>\n'
        '\n'
        '      {/* SAL + FGRE: Complete Governance Assurance Stack */}\n'
        '      <section className="mb-12">\n'
        '        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6">\n'
        '          <div className="flex items-center gap-3 mb-3">\n'
        '            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-violet-400" aria-hidden="true">\n'
        '              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>\n'
        '              <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>\n'
        '            </svg>\n'
        '            <span className="text-sm font-semibold tracking-wide text-violet-400 uppercase">Complete Governance Assurance Stack</span>\n'
        '          </div>\n'
        '          <p className="text-sm text-white/70 leading-relaxed mb-3">\n'
        '            SAL deterministic enforcement is complemented by FGRE pre-deployment formal verification —\n'
        '            together they represent the complete governance assurance stack. SAL enforces policy at\n'
        '            runtime, preventing any execution that violates codified business logic. FGRE proves\n'
        '            policy correctness before activation, using Z3 SMT formal verification to detect\n'
        '            contradictions and validate execution paths before any policy goes live.\n'
        '          </p>\n'
        '          <p className="text-sm text-white/70 leading-relaxed">\n'
        '            The result: governance policies that are mathematically verified before they activate\n'
        '            and deterministically enforced once they do. Formal proof upstream, deterministic\n'
        '            enforcement downstream.\n'
        '          </p>\n'
        '        </div>\n'
        '      </section>\n'
        '\n'
        '      {/* Out-of-Scope Declarations */}'
    ),
)


# ── CHANGE 6 ── SentinelOSPage.tsx ───────────────────────────────────
print('\n=== SentinelOSPage.tsx ===')
p = BASE / 'SentinelOSPage.tsx'

# 6: Add FGRE sovereign attestation export complement before closing div
apply(p,
    label='6 add FGRE sovereign attestation export section',
    old=(
        '        <a href="/sal" className="mt-3 inline-flex items-center gap-1 text-sm text-amber-400/80 hover:text-amber-400 transition">\n'
        '          Learn how SAL enforces boundaries →\n'
        '        </a>\n'
        '      </div>\n'
        '    </div>\n'
        '  );\n'
        '}'
    ),
    new=(
        '        <a href="/sal" className="mt-3 inline-flex items-center gap-1 text-sm text-amber-400/80 hover:text-amber-400 transition">\n'
        '          Learn how SAL enforces boundaries →\n'
        '        </a>\n'
        '      </div>\n'
        '\n'
        '      {/* FGRE Sovereign Attestation Export */}\n'
        '      <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6">\n'
        '        <div className="flex items-center gap-3 mb-3">\n'
        '          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-violet-400" aria-hidden="true">\n'
        '            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>\n'
        '            <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>\n'
        '          </svg>\n'
        '          <span className="text-sm font-semibold tracking-wide text-violet-400 uppercase">FGRE Sovereign Attestation Export</span>\n'
        '        </div>\n'
        '        <p className="text-sm text-white/70 leading-relaxed">\n'
        '          Sentinel’s immutable audit records are now complemented by FGRE sovereign attestation\n'
        '          export — machine-verifiable SLH-DSA-128s signed proof bundles exportable for\n'
        '          regulatory submission and institutional due diligence. Where Sentinel captures what\n'
        '          happened and proves it cannot be altered, FGRE proves the governance policy itself\n'
        '          was mathematically sound before it activated. Together they provide complete\n'
        '          governance evidence: verified policy integrity upstream, immutable execution record\n'
        '          downstream.\n'
        '        </p>\n'
        '      </div>\n'
        '    </div>\n'
        '  );\n'
        '}'
    ),
)


# ── Summary ───────────────────────────────────────────────────────────
print('\n=== Summary ===')
if results:
    for fname, labels in results.items():
        print(f'  {fname}: {len(labels)} change(s) applied')
        for l in labels:
            print(f'    - {l}')
else:
    print('  No changes applied (all already done or no anchors found).')
