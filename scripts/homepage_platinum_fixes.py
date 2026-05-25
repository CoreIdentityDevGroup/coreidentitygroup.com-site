#!/usr/bin/env python3
"""
homepage_platinum_fixes.py — two homepage (HomePage.tsx) fixes.

1. Platinum statement on the homepage → short line linking to /platform.
   (The full statement stays on Platform + Layer pages, which use <PlatinumProof/>
   directly; the homepage renders it via PlatformStatsSection, edited here.)
2. Live enforcement numeric stats + live feed → removed; replaced with four
   static binary proof statements. Drops the /api/live-metrics fetch entirely.

Idempotent — safe to re-run.
"""
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
applied, failures = [], []

def edit(rel, old, new, check=None, guard=None):
    p = os.path.join(ROOT, rel)
    with open(p, encoding="utf-8") as f:
        c = f.read()
    chk = check if check is not None else new.strip()[:34]
    if guard is not None and guard in c:
        applied.append(f"{rel}: already done (guard)"); return
    if old in c:
        with open(p, "w", encoding="utf-8") as f:
            f.write(c.replace(old, new))
        applied.append(f"{rel}: applied")
    elif chk and chk in c:
        applied.append(f"{rel}: already done")
    else:
        failures.append(f"{rel}: NOT FOUND — {old.strip()[:60]!r}")

def remove(rel, old, marker_gone=None):
    """Delete `old`. Idempotent: if already gone, no-op."""
    p = os.path.join(ROOT, rel)
    with open(p, encoding="utf-8") as f:
        c = f.read()
    if old in c:
        with open(p, "w", encoding="utf-8") as f:
            f.write(c.replace(old, ""))
        applied.append(f"{rel}: removed block")
    else:
        applied.append(f"{rel}: already removed")

# ── FIX 1 — PlatformStatsSection: full statement → short line + link ─────────
edit("src/components/PlatformStatsSection.tsx",
     'import { PlatinumProof } from "./institutional";',
     'import { Link } from "@tanstack/react-router";',
     check='from "@tanstack/react-router"')
edit("src/components/PlatformStatsSection.tsx",
     "      <PlatinumProof />",
     '      <Link\n'
     '        to="/platform"\n'
     '        className="group block rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"\n'
     '      >\n'
     '        <p className="text-base leading-relaxed text-ink-secondary md:text-lg">\n'
     '          Validated through the Platinum Test Suite. Every invariant held. No exceptions.\n'
     '        </p>\n'
     '        <span className="mt-2 inline-block text-sm font-medium text-accent">\n'
     '          Read the full assurance statement →\n'
     '        </span>\n'
     '      </Link>',
     check='Validated through the Platinum Test Suite.')

# ── FIX 2 — HomePage: remove live feed plumbing, replace stats ───────────────
# (a) drop the React hooks import (only used by liveData)
remove("src/pages/HomePage.tsx",
       'import { useEffect, useState } from "react";\n')
# (b) drop the LiveMetrics type + its comment
remove("src/pages/HomePage.tsx",
       '// Live metrics fed by the secured /api/live-metrics Worker (Step 0).\n'
       'type LiveMetrics = {\n'
       '  enforcement?: { total?: number; blocked?: number; permitted?: number; status?: string };\n'
       '  platform?: { totalAgents?: number; activeAgents?: number; verticals?: number };\n'
       '} | null;\n\n')
# (c) drop the liveData state + fetch + fmt helper
remove("src/pages/HomePage.tsx",
       '  const [liveData, setLiveData] = useState<LiveMetrics>(null);\n\n'
       '  useEffect(() => {\n'
       '    fetch("/api/live-metrics")\n'
       '      .then((r) => r.json())\n'
       '      .then((d) => {\n'
       '        if (d && d.success && d.data) setLiveData(d.data as NonNullable<LiveMetrics>);\n'
       '      })\n'
       '      .catch(() => {});\n'
       '  }, []);\n\n'
       '  const fmt = (n?: number) => (typeof n === "number" ? n.toLocaleString() : "—");\n\n')
# (d) replace the live enforcement numeric section with static binary proof stats
edit("src/pages/HomePage.tsx",
     '      {/* Live enforcement — fed by the secured /api/live-metrics Worker (Step 0) */}\n'
     '      {liveData ? (\n'
     '        <section className="rounded-2xl border border-line bg-carbon-panel p-6">\n'
     '          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink-muted">\n'
     '            <span className="cidg-pulse inline-block h-2 w-2 rounded-full bg-accent" style={{ boxShadow: "0 0 6px var(--accent)" }} />\n'
     '            Live enforcement · {liveData.enforcement?.status ?? "OPERATIONAL"}\n'
     '          </div>\n'
     '          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">\n'
     '            <div>\n'
     '              <div className="tabular-figures text-2xl font-semibold text-ink">{fmt(liveData.enforcement?.total)}</div>\n'
     '              <div className="text-xs text-ink-muted">Decisions governed</div>\n'
     '            </div>\n'
     '            <div>\n'
     '              <div className="tabular-figures text-2xl font-semibold text-ink">{fmt(liveData.enforcement?.blocked)}</div>\n'
     '              <div className="text-xs text-ink-muted">Actions blocked</div>\n'
     '            </div>\n'
     '            <div>\n'
     '              <div className="tabular-figures text-2xl font-semibold text-ink">{fmt(liveData.enforcement?.permitted)}</div>\n'
     '              <div className="text-xs text-ink-muted">Actions permitted</div>\n'
     '            </div>\n'
     '            <div>\n'
     '              <div className="tabular-figures text-2xl font-semibold text-ink">{fmt(liveData.platform?.activeAgents)}</div>\n'
     '              <div className="text-xs text-ink-muted">Active agents</div>\n'
     '            </div>\n'
     '          </div>\n'
     '        </section>\n'
     '      ) : null}',
     '      {/* Governance posture — static binary proof statements (no live feed) */}\n'
     '      <section className="rounded-2xl border border-line bg-carbon-panel p-6">\n'
     '        <div className="text-xs uppercase tracking-widest text-ink-muted">Governance posture</div>\n'
     '        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">\n'
     '          {[\n'
     '            { value: "OPERATIONAL", label: "Sentinel enforcement status" },\n'
     '            { value: "FAIL-CLOSE", label: "Default governance posture" },\n'
     '            { value: "POST-QUANTUM", label: "Cryptographic standard" },\n'
     '            { value: "ZERO EXCEPTIONS", label: "Governance invariant record" },\n'
     '          ].map((s) => (\n'
     '            <div key={s.value}>\n'
     '              <div className="text-2xl font-semibold tracking-tight text-accent">{s.value}</div>\n'
     '              <div className="text-xs text-ink-muted">{s.label}</div>\n'
     '            </div>\n'
     '          ))}\n'
     '        </div>\n'
     '      </section>',
     check="Governance posture — static binary proof statements")

# ── Report ───────────────────────────────────────────────────────────────────
print("── Applied / skipped ─────────────────────────────────────────────")
for a in applied:
    print("  ✓", a)
if failures:
    print("\n── FAILED ─────────────────────────────────────────────────────────")
    for f in failures:
        print("  ✗", f)
    sys.exit(1)

# ── Residual scan ────────────────────────────────────────────────────────────
print("\n── Residual checks ────────────────────────────────────────────────")
home = open(os.path.join(ROOT, "src/pages/HomePage.tsx"), encoding="utf-8").read()
pss = open(os.path.join(ROOT, "src/components/PlatformStatsSection.tsx"), encoding="utf-8").read()
res = []
for tok in ["liveData", "live-metrics", "Decisions governed", "Actions blocked",
            "Active agents", "fmt(", "LiveMetrics", "useState", "useEffect"]:
    if tok in home:
        res.append(f"HomePage.tsx still contains {tok!r}")
if "PlatinumProof" in pss:
    res.append("PlatformStatsSection.tsx still references PlatinumProof")
if "Validated through the Platinum Test Suite." not in pss:
    res.append("short Platinum line missing from PlatformStatsSection")
if res:
    for r in res:
        print("  •", r)
else:
    print("  (clean — homepage live feed removed, short line linked to /platform)")

print("\n✅ homepage_platinum_fixes.py complete.")
