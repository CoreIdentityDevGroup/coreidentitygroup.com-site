#!/usr/bin/env python3
"""
platinum_test_suite.py — deploy locked Platinum Test Suite language sitewide.

Replaces test-count / pass-rate marketing claims with locked institutional proof
language across the public marketing site (src/ pages + components) and the
Cloudflare Pages OG middleware (functions/_middleware.js).

Per the chosen rendering: the big-number ProofStat *grids* (Platform, Layer B) and
the PlatformStatsSection collapse into a single full locked-statement proof block;
the five specific stat mappings are applied inline (prose / meta / standalone cards).

Idempotent — safe to re-run. Each edit is verified; a required edit that neither
applies nor is already present aborts the run.
"""
import os
import re
import sys
import subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

FULL = ("Our infrastructure is under continuous adversarial validation through the "
        "execution of a Platinum Test Suite against the Computational Trust Fabric's "
        "institutional assurance domains — sustained adversarial pressure, simulated "
        "breach, load collapse, cryptographic attack, regulatory edge case, and "
        "coordinated multi-vector failure — all against live production infrastructure. "
        "Every governance invariant held. Every boundary enforced. No exceptions.")

failures = []
applied = []

def edit(rel, old, new, required=True, check=None, guard=None):
    path = os.path.join(ROOT, rel)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    chk = check if check is not None else new.strip()[:32]
    # guard: if this marker is already present, the edit is done — never re-apply.
    # Needed when `new` contains `old` (otherwise the replace would re-fire).
    if guard is not None and guard in content:
        applied.append(f"{rel}: already done (guard {guard[:40]!r})")
        return
    if old in content:
        content = content.replace(old, new)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        applied.append(f"{rel}: applied ({old.strip()[:40]!r}...)")
    elif chk and chk in content:
        applied.append(f"{rel}: already done ({chk[:40]!r}...)")
    elif required:
        failures.append(f"{rel}: NOT FOUND — {old.strip()[:60]!r}")

# ── institutional.tsx — add PlatinumProof component (marker-guarded) ──────────
inst = os.path.join(ROOT, "src/components/institutional.tsx")
with open(inst, "r", encoding="utf-8") as f:
    inst_src = f.read()
if "PlatinumProof" not in inst_src:
    anchor = 'const LAYERS: { id: "a" | "b" | "c" | "d"; to: string; label: string }[] = ['
    component = (
        'export const PLATINUM_STATEMENT =\n'
        '  "' + FULL.replace('"', '\\"') + '";\n\n'
        'export function PlatinumProof() {\n'
        '  return (\n'
        '    <div className="rounded-2xl border border-line bg-carbon-panel p-8 text-center">\n'
        '      <p className="mx-auto max-w-3xl text-base leading-relaxed text-ink-secondary md:text-lg">\n'
        '        {PLATINUM_STATEMENT}\n'
        '      </p>\n'
        '    </div>\n'
        '  );\n'
        '}\n\n'
    )
    if anchor in inst_src:
        inst_src = inst_src.replace(anchor, component + anchor, 1)
        with open(inst, "w", encoding="utf-8") as f:
            f.write(inst_src)
        applied.append("institutional.tsx: added PlatinumProof + PLATINUM_STATEMENT")
    else:
        failures.append("institutional.tsx: LAYERS anchor not found")
else:
    applied.append("institutional.tsx: PlatinumProof already present")

# ── LayerBPage.tsx ───────────────────────────────────────────────────────────
edit("src/pages/LayerBPage.tsx",
     '  ProofStat,\n  InstitutionalCTA,\n} from "../components/institutional";',
     '  ProofStat,\n  InstitutionalCTA,\n  PlatinumProof,\n} from "../components/institutional";',
     check="  PlatinumProof,")
edit("src/pages/LayerBPage.tsx",
     '        <div className="grid gap-4 sm:grid-cols-3">\n'
     '          <ProofStat value="734 / 734" label="Tests passing" detail="Security, PQ-CA, load, DR, compliance, and adversarial suites" />\n'
     '          <ProofStat value="96%" label="Pass rate" detail="Sustained across the full verification corpus" />\n'
     '          <ProofStat value="100K+" label="Governed calls" detail="Continuous soak across live AWS ECS and GKE infrastructure" />\n'
     '        </div>',
     '        <PlatinumProof />')
edit("src/pages/LayerBPage.tsx",
     "— 734/734 tests passing across 100K+ governed calls.",
     "— a Platinum Test Suite under continuous adversarial validation, every invariant held, across governed agent interactions at institutional scale.")

# ── PlatformPage.tsx ─────────────────────────────────────────────────────────
edit("src/pages/PlatformPage.tsx",
     'import { SectionHead, InfoCard, ProofStat, InstitutionalCTA } from "../components/institutional";',
     'import { SectionHead, InfoCard, ProofStat, InstitutionalCTA, PlatinumProof } from "../components/institutional";',
     check="InstitutionalCTA, PlatinumProof")
edit("src/pages/PlatformPage.tsx",
     '        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">\n'
     '          <ProofStat value="25" label="Governance tables" detail="Codified policy, controls, and evidence schemas across the platform" />\n'
     '          <ProofStat value="734 / 734" label="Tests passing" detail="Security, PQ-CA, load, DR, compliance, and adversarial suites" />\n'
     '          <ProofStat value="100K+" label="Governed calls" detail="Continuous soak across live AWS ECS and GKE infrastructure" />\n'
     '          <ProofStat value="3 of 3" label="NIST FIPS PQ standards" detail="FIPS 203, 204, and 205 — first commercial platform in production" />\n'
     '        </div>',
     '        <PlatinumProof />')
edit("src/pages/PlatformPage.tsx",
     "reaching 734/734 tests passing across the verification corpus.",
     "validated by a Platinum Test Suite under continuous adversarial validation across the verification corpus — every invariant held, no exceptions.")
edit("src/pages/PlatformPage.tsx",
     "— 25 governance tables, 734/734 tests passing, 100K+ governed calls in production.",
     "— schema-enforced accountability boundaries across every agent action, a Platinum Test Suite with every invariant held, governed agent interactions at institutional scale in production.")

# ── PlatformStatsSection.tsx — collapse grid → statement ─────────────────────
edit("src/components/PlatformStatsSection.tsx",
     'import React from "react";',
     'import React from "react";\nimport { PlatinumProof } from "./institutional";',
     guard='import { PlatinumProof } from "./institutional";')
edit("src/components/PlatformStatsSection.tsx",
     'interface Stat {\n'
     '  value: string;\n'
     '  label: string;\n'
     '  proof: string;\n'
     '}\n\n'
     'const PRODUCTION_STATS: Stat[] = [\n'
     '  {\n'
     '    value: "25",\n'
     '    label: "Governance Tables",\n'
     '    proof: "Every agent action has a defined accountability boundary — schema-enforced, not policy-documented.",\n'
     '  },\n'
     '  {\n'
     '    value: "734/734",\n'
     '    label: "Tests Passing",\n'
     '    proof: "Adversarial, compliance, load, and disaster recovery — all suites, simultaneously, all green.",\n'
     '  },\n'
     '  {\n'
     '    value: "14",\n'
     '    label: "Agents Fingerprinted",\n'
     '    proof: "Real agents. Real executions. Every action cryptographically signed, attributed, and permanently recorded.",\n'
     '  },\n'
     '  {\n'
     '    value: "3 of 3",\n'
     '    label: "NIST FIPS PQ Standards",\n'
     '    proof: "The only platform hardened against both current threats and future quantum decryption — FIPS 203, 204, and 205.",\n'
     '  },\n'
     '];\n\n',
     '',
     required=False, check="PRODUCTION_STATS")
edit("src/components/PlatformStatsSection.tsx",
     "Every number below is a proof, not a projection.",
     "Proof, not projection.")
edit("src/components/PlatformStatsSection.tsx",
     '      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">\n'
     '        {PRODUCTION_STATS.map((stat) => (\n'
     '          <div\n'
     '            key={stat.label}\n'
     '            className="cidg-card space-y-2 rounded-2xl border border-line bg-carbon-panel p-5 transition hover:border-accent/40"\n'
     '          >\n'
     '            <div className="tabular-figures text-3xl font-semibold leading-none text-ink">{stat.value}</div>\n'
     '            <div className="text-sm font-medium text-accent">{stat.label}</div>\n'
     '            <p className="text-xs leading-relaxed text-ink-secondary">{stat.proof}</p>\n'
     '          </div>\n'
     '        ))}\n'
     '      </div>',
     '      <PlatinumProof />')

# ── LayerAPage.tsx — "14 agents fingerprinted" card → mapped phrase ───────────
edit("src/pages/LayerAPage.tsx",
     '          <ProofStat value="14" label="Agents fingerprinted" detail="Live runtime behavioral profiles under continuous monitoring" />',
     '          <ProofStat value="Every production agent" label="Cryptographically attributed and forensically replayable" detail="Live runtime behavioral profiles under continuous monitoring" />')

# ── LayerDPage.tsx — "3 of 3 NIST FIPS" card → mapped phrase ──────────────────
edit("src/pages/LayerDPage.tsx",
     '          <ProofStat value="3 of 3" label="NIST FIPS PQ standards" detail="FIPS 203, 204, and 205 — first commercial platform in production" />',
     '          <ProofStat value="Post-quantum hardened" label="Across all three NIST FIPS production standards (203, 204, 205)" detail="First commercial platform in production" />')

# ── AboutPage.tsx — caption prose ────────────────────────────────────────────
edit("src/pages/AboutPage.tsx",
     "The platform is live in production with 734/734 Platinum-grade tests passing",
     "The platform is live in production with a Platinum Test Suite under continuous adversarial validation")

# ── PortfolioPage.tsx — Layer B card body prose ──────────────────────────────
edit("src/pages/PortfolioPage.tsx",
     "enforcing it deterministically in sub-3ms. 734/734 tests across 100K+ governed calls.",
     "enforcing it deterministically in sub-3ms. Validated by a Platinum Test Suite across governed agent interactions at institutional scale — every invariant held, no exceptions.")

# ── FoundersPage.tsx — status block ──────────────────────────────────────────
edit("src/pages/FoundersPage.tsx",
     '<div className="text-sm font-mono text-green-400">23 / 23 passing</div>',
     '<div className="text-sm font-mono text-green-400">Verified — no exceptions</div>')
edit("src/pages/FoundersPage.tsx",
     '<div className="text-sm font-mono text-indigo-400">Live — 100% pass rate</div>',
     '<div className="text-sm font-mono text-indigo-400">Live — every invariant held</div>')

# ── functions/_middleware.js — OG meta description ───────────────────────────
edit("functions/_middleware.js",
     "— 25 governance tables, 734/734 tests passing, 100K+ governed calls.",
     "— schema-enforced accountability boundaries across every agent action, a Platinum Test Suite with every invariant held, governed agent interactions at institutional scale.")

# ── Report ───────────────────────────────────────────────────────────────────
print("\n── Applied / skipped ─────────────────────────────────────────────────")
for a in applied:
    print("  ✓", a)
if failures:
    print("\n── FAILED (required edits not matched) ───────────────────────────────")
    for fl in failures:
        print("  ✗", fl)
    sys.exit(1)

# ── Residual scan ────────────────────────────────────────────────────────────
print("\n── Residual test-count / pass-rate tokens (excludes intentional NIST prose) ──")
TOKENS = ["734", "tests passing", "Tests Passing", "100K+ governed", "governed calls",
          "23 / 23 passing", "100% pass rate", "96% pass", "Agents fingerprinted",
          "Agents Fingerprinted", "Governance tables", "Governance Tables",
          "NIST FIPS PQ standards", "NIST FIPS PQ Standards"]
res = subprocess.run(
    ["grep", "-rnI", "-e", "|".join(re.escape(t) for t in []) or "x", "src/", "functions/"],
    cwd=ROOT, capture_output=True, text=True)
hits = []
for dirpath in ("src", "functions"):
    for base, _, files in os.walk(os.path.join(ROOT, dirpath)):
        for fn in files:
            if not fn.endswith((".tsx", ".ts", ".js", ".jsx")):
                continue
            fp = os.path.join(base, fn)
            with open(fp, "r", encoding="utf-8", errors="ignore") as f:
                for i, line in enumerate(f, 1):
                    for t in TOKENS:
                        if t in line:
                            hits.append(f"{os.path.relpath(fp, ROOT)}:{i}: {line.strip()[:100]}")
if hits:
    for h in hits:
        print("  •", h)
else:
    print("  (none)")

print("\n✅ platinum_test_suite.py complete.")
