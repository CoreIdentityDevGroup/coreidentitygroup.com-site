#!/usr/bin/env python3
"""
Positioning rewrite — Group 05: CoreIdentity Technologies (routed) + CoreIdentityPage (dead).

CoreIdentityTechnologiesPage.tsx:
  * add per-page <Helmet> meta
  * reframe hero to "institutional trust infrastructure for autonomous systems"
  * drop "AEG"/"Agentic Execution Governance" -> "CoreIdentity enforcement"
  * reconcile vertical count (10 -> 12)
  * standardize SAL = "Semantic Authorization Layer" (kill "Arbitration")

CoreIdentityPage.tsx (unrouted dead code): full rewrite for parity, guarded by
the CIDG_POSITIONING_V2_COREIDENTITY marker.

Idempotent throughout.
"""
import sys

TECH_PATH = "src/pages/CoreIdentityTechnologiesPage.tsx"
HELMET_IMPORT = '\nimport { Helmet } from "react-helmet-async";'

TECH_EDITS = [
    # Helmet block
    (
        "<title>CoreIdentity Technologies | Institutional Trust Infrastructure for Autonomous Systems</title>",
        '    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">\n\n      {/* Hero */}',
        '    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">\n'
        '      <Helmet>\n'
        '        <title>CoreIdentity Technologies | Institutional Trust Infrastructure for Autonomous Systems</title>\n'
        '        <meta name="description" content="The CoreIdentity enforcement chain — SAL authorization, Sentinel policy, Nexus orchestration, Agent Identity Systems, and FGRE — that makes every autonomous AI decision provable across twelve industry verticals." />\n'
        '      </Helmet>\n\n'
        '      {/* Hero */}',
    ),
    # Hero subtitle
    (
        "Institutional trust infrastructure for autonomous systems — defining authority, enforcing",
        "Governance infrastructure for agentic execution — defining authority, enforcing\n          constraints, and preserving auditability from policy definition through execution\n          and outcome.",
        "Institutional trust infrastructure for autonomous systems — defining authority, enforcing\n          constraints, and preserving auditability from policy definition through execution\n          and outcome, so every AI decision is provable.",
    ),
    # Verticals catalog comment
    (
        "// VERTICALS-v2 — Full 12-vertical CoreIdentity enforcement catalog",
        "// VERTICALS-v2 — Full 12-vertical AEG catalog",
        "// VERTICALS-v2 — Full 12-vertical CoreIdentity enforcement catalog",
    ),
    # BFSI one-liner
    (
        "BFSI brings CoreIdentity enforcement to every autonomous decision",
        "BFSI brings AEG enforcement to every autonomous decision",
        "BFSI brings CoreIdentity enforcement to every autonomous decision",
    ),
    # LogisticsOps one-liner
    (
        "LogisticsOps brings CoreIdentity enforcement to autonomous logistics networks",
        "LogisticsOps brings AEG to autonomous logistics networks",
        "LogisticsOps brings CoreIdentity enforcement to autonomous logistics networks",
    ),
    # Enforcement stack heading
    (
        '<h2 className="text-2xl font-semibold text-white">The CoreIdentity Enforcement Stack</h2>',
        '<h2 className="text-2xl font-semibold text-white">The AEG Enforcement Stack</h2>',
        '<h2 className="text-2xl font-semibold text-white">The CoreIdentity Enforcement Stack</h2>',
    ),
    # SmartNation card body
    (
        "deployed under full CoreIdentity enforcement from day one. Every agent has a real labor position",
        "deployed under full AEG enforcement from day one. Every agent has a real labor position",
        "deployed under full CoreIdentity enforcement from day one. Every agent has a real labor position",
    ),
    # Verticals section heading
    (
        '<h2 className="text-2xl font-semibold text-white">Twelve Governed Industry Verticals</h2>',
        '<h2 className="text-2xl font-semibold text-white">Agentic Execution Governance — 10 Industry Verticals</h2>',
        '<h2 className="text-2xl font-semibold text-white">Twelve Governed Industry Verticals</h2>',
    ),
    # Verticals section paragraph
    (
        "Twelve governed industry verticals. Each deploys under full CoreIdentity enforcement",
        "Ten governed industry verticals. Each deploys under full AEG enforcement — SAL authorization, Sentinel policy, Nexus orchestration, and AIS identity verification — from day one.",
        "Twelve governed industry verticals. Each deploys under full CoreIdentity enforcement — SAL authorization, Sentinel policy, Nexus orchestration, and AIS identity verification — from day one.",
    ),
    # SAL name standardization (subtitle)
    (
        "The Semantic Authorization Layer (SAL) is the deterministic enforcement kernel powering",
        "The Semantic Arbitration Layer (SAL) is the deterministic enforcement kernel powering",
        "The Semantic Authorization Layer (SAL) is the deterministic enforcement kernel powering",
    ),
    # SAL diagram label
    (
        '<div className="text-xs text-amber-400/70 mt-1">Authorization Layer</div>',
        '<div className="text-xs text-amber-400/70 mt-1">Arbitration Layer</div>',
        '<div className="text-xs text-amber-400/70 mt-1">Authorization Layer</div>',
    ),
]

# ---- Dead page full rewrite ----
COREIDENTITY_PATH = "src/pages/CoreIdentityPage.tsx"
COREIDENTITY_MARKER = "CIDG_POSITIONING_V2_COREIDENTITY"
NEW_COREIDENTITY = r'''import { Helmet } from "react-helmet-async";
import heroImg from "../assets/images/coreidentity-governance-hero.webp";

// CIDG_POSITIONING_V2_COREIDENTITY
export function CoreIdentityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <Helmet>
        <title>CoreIdentity | Institutional Trust Infrastructure for Autonomous Systems</title>
        <meta name="description" content="CoreIdentity is institutional trust infrastructure for autonomous systems — making every AI decision provable: authorized before execution, attributed to a verified identity, and auditable." />
      </Helmet>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          CoreIdentity
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-white/70">
          Institutional trust infrastructure for autonomous systems — making every AI decision
          provable from policy definition through execution and outcome: authorized before it
          runs, attributed to a verified identity, and recorded in evidence built to be accepted.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img
            src={heroImg}
            alt="CoreIdentity — autonomous systems operating under provable trust"
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Enforcement chain */}
      <section className="mb-12">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">The enforcement chain</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            CoreIdentity is a vertically integrated enforcement chain. Each layer has a distinct
            job, a clear boundary, and a clean contract — so trust scales across industries
            without losing control.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/80">Governance</div>
            <div className="mt-1 text-xl font-semibold text-white">Sentinel</div>
            <div className="mt-2 text-white/70">
              Policy, identity, permissions, audit logging, and enforcement at the execution layer.
              Humans lead; machines execute — Sentinel keeps that authority explicit and provable.
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/60">
              <li>Policy + controls at the execution layer</li>
              <li>Authorization boundaries + traceability</li>
              <li>Risk containment + compliance posture</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/80">Orchestration</div>
            <div className="mt-1 text-xl font-semibold text-white">Nexus</div>
            <div className="mt-2 text-white/70">
              Coordinates workflows, tools, agents, approvals, and handoffs — while staying inside
              Sentinel's enforced boundaries.
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/60">
              <li>Workflow routing + escalation</li>
              <li>Agent orchestration + tool use</li>
              <li>Human-in-the-loop checkpoints</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/80">Digital Labor</div>
            <div className="mt-1 text-xl font-semibold text-white">SmartNation AI</div>
            <div className="mt-2 text-white/70">
              Packaged, governed digital labor — vertical agents and workflows that operate in real
              environments with controls that survive production.
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/60">
              <li>Vertical "digital workforce" packages</li>
              <li>Integration-ready delivery patterns</li>
              <li>Measured outcomes + reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Operating principle */}
      <section>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl font-semibold text-white">Operating principle</h3>
          <p className="mt-2 text-white/70">
            We do not sell "AI." We sell provable trust: every autonomous decision authorized,
            attributed, and auditable — with the evidence to prove it.
          </p>
        </div>
      </section>
    </div>
  );
}

export default CoreIdentityPage;
'''


def read(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def write(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


def apply_edit(path, guard, find, replace):
    content = read(path)
    if guard in content:
        print(f"[SKIP] {path} — already updated: {guard[:48]!r}")
        return True
    if find not in content:
        print(f"[ERROR] {path} — anchor not found and guard absent.")
        print(f"        Expected anchor: {find[:120]!r}")
        return False
    write(path, content.replace(find, replace, 1))
    print(f"[OK] {path} — applied: {guard[:48]!r}")
    return True


def main():
    ok = True

    # CoreIdentity Technologies: Helmet import first
    content = read(TECH_PATH)
    if "react-helmet-async" in content:
        print(f"[SKIP] {TECH_PATH} — Helmet already imported.")
    else:
        anchor = 'import OperationalVerticalsSection from "../components/OperationalVerticalsSection";'
        if anchor in content:
            write(TECH_PATH, content.replace(anchor, anchor + HELMET_IMPORT, 1))
            print(f"[OK] {TECH_PATH} — Helmet import added.")
        else:
            print(f"[ERROR] {TECH_PATH} — import anchor not found.")
            ok = False

    for guard, find, replace in TECH_EDITS:
        ok = apply_edit(TECH_PATH, guard, find, replace) and ok

    # CoreIdentityPage full rewrite
    ci = read(COREIDENTITY_PATH)
    if COREIDENTITY_MARKER in ci:
        print(f"[SKIP] {COREIDENTITY_PATH} — already at positioning v2.")
    else:
        write(COREIDENTITY_PATH, NEW_COREIDENTITY)
        print(f"[OK] {COREIDENTITY_PATH} — rewritten to positioning v2.")

    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
