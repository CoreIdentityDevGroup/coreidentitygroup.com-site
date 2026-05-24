#!/usr/bin/env python3
"""
feat: governance dropdown — all six verticals.

1. Creates three new governance vertical pages (Institutional Carbon palette,
   following the HealthcareGovernancePage structure — lead with the governance
   need, not product description; CTAs to /ciag and /platform):
       - src/pages/LegalGovernancePage.tsx                 -> /governance/legal
       - src/pages/CriticalInfrastructureGovernancePage.tsx-> /governance/critical-infrastructure
       - src/pages/DefenseGovernancePage.tsx               -> /governance/defense
2. Expands the Header governance dropdown to all six verticals.
3. Registers the three new routes in router.tsx (imports + route defs + tree).

Idempotent: new files are written only when absent; each edit is guarded on a
distinctive post-change marker.
"""
import os
import sys

# ── Page template (Institutional Carbon) ───────────────────────────────────
TEMPLATE = '''// @@MARKER@@
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function @@COMP@@() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>@@TITLE@@</title>
        <meta
          name="description"
          content="@@DESC@@"
        />
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          @@EYEBROW@@
        </p>
        <h1 className="font-serif text-display-xl md:text-display-2xl tracking-tight leading-tight text-ink">
          @@HEADLINE@@
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-secondary">
          @@LEAD@@
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
          >
            Schedule a Governance Assessment →
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-xl border border-line px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/40"
          >
            Explore the Platform
          </Link>
        </div>
      </div>

      {/* ── The Regulatory Reality ──────────────────────────────────────── */}
      <section>
        <h2 className="mb-6 font-serif text-display-md md:text-display-lg tracking-tight text-ink">
          The Regulatory Reality
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
@@REALITY@@
        </div>
      </section>

      {/* ── What CoreIdentity Enforces ──────────────────────────────────── */}
      <section>
        <h2 className="mb-6 font-serif text-display-md md:text-display-lg tracking-tight text-ink">
          What CoreIdentity Enforces
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
@@ENFORCES@@
        </div>
      </section>

      {/* ── Post-Quantum Posture ────────────────────────────────────────── */}
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
        <div className="mb-3 flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent" aria-hidden="true">
            <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">Post-Quantum Cryptographic Infrastructure</span>
        </div>
        <p className="text-sm leading-relaxed text-ink-secondary">
          @@PQC@@
        </p>
        <Link to="/layer-d" className="mt-3 inline-flex items-center gap-1 text-sm text-accent/80 transition hover:text-accent">
          View full quantum hardening posture →
        </Link>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center md:p-10">
        <h2 className="font-serif text-display-md text-ink">@@CTA_TITLE@@</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink-secondary">
          @@CTA_BODY@@
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
          >
            Schedule a Phase 0 Assessment
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/40"
          >
            Explore the Platform
          </Link>
        </div>
      </section>
    </div>
  );
}

export default @@COMP@@;
'''


def reality_cards(items):
    out = []
    for label, body in items:
        out.append(
            '          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">\n'
            f'            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">{label}</div>\n'
            '            <p className="text-sm leading-relaxed text-ink-secondary">\n'
            f'              {body}\n'
            '            </p>\n'
            '          </div>'
        )
    return "\n".join(out)


def enforce_cards(items):
    out = []
    for label, body in items:
        out.append(
            '          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">\n'
            f'            <div className="mb-2 text-lg font-semibold text-ink">{label}</div>\n'
            '            <p className="text-sm leading-relaxed text-ink-secondary">\n'
            f'              {body}\n'
            '            </p>\n'
            '          </div>'
        )
    return "\n".join(out)


def render(page):
    out = TEMPLATE
    out = out.replace("@@MARKER@@", page["marker"])
    out = out.replace("@@COMP@@", page["comp"])
    out = out.replace("@@TITLE@@", page["title"])
    out = out.replace("@@DESC@@", page["desc"])
    out = out.replace("@@EYEBROW@@", page["eyebrow"])
    out = out.replace("@@HEADLINE@@", page["headline"])
    out = out.replace("@@LEAD@@", page["lead"])
    out = out.replace("@@REALITY@@", reality_cards(page["reality"]))
    out = out.replace("@@ENFORCES@@", enforce_cards(page["enforces"]))
    out = out.replace("@@PQC@@", page["pqc"])
    out = out.replace("@@CTA_TITLE@@", page["cta_title"])
    out = out.replace("@@CTA_BODY@@", page["cta_body"])
    return out


PAGES = [
    {
        "file": "src/pages/LegalGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_LEGAL_v1",
        "comp": "LegalGovernancePage",
        "title": "Legal & Professional Services AI Governance | CoreIdentity",
        "desc": "CoreIdentity enforces privilege-aware agent governance across legal and professional services — so an autonomous agent never waives privilege, breaches an ethical wall, or leaves a matter without a defensible record.",
        "eyebrow": "Legal & Professional Services · Privilege · ABA Model Rules · Work Product",
        "headline": "Privileged Information Stays Privileged.",
        "lead": "When an AI agent drafts, reviews, or routes a matter, the first question a court, a bar regulator, or opposing counsel will ask is whether privilege was preserved — and whether anyone can prove it. A single inadvertent disclosure can waive privilege irreversibly. CoreIdentity makes every agent action on privileged material authorized, attributable, and auditable before that question is ever asked.",
        "reality": [
            ("ABA Model Rules 1.1 & 1.6", "The duties of competence and confidentiality make the firm responsible for what its AI does. An agent that exposes client confidences — even inadvertently — is an ethics violation, not a technical glitch."),
            ("Privilege & Work Product", "Privilege is waived the moment protected material reaches an unauthorized recipient. An autonomous agent routing a document outside the privilege boundary can forfeit protection that cannot be recovered."),
            ("Conflicts & Ethical Walls", "Information barriers between matters must hold at machine speed. An agent that crosses a screen creates immediate disqualification and malpractice exposure for the entire engagement."),
        ],
        "enforces": [
            ("Privilege-Aware Access Boundaries", "Sentinel enforces matter-level classification at the agent layer. No agent reads or moves privileged material outside an active, scoped authorization — regardless of how the underlying model was prompted."),
            ("Cryptographic Audit Trails", "Every agent action on a matter produces a proof artifact signed by the Semantic Authorization Layer. ML-DSA-65 (FIPS 204) post-quantum signatures keep the record tamper-evident and ready for a court or bar inquiry."),
            ("Fail-Closed on Ambiguity", "When an agent meets an access scenario outside its authorized scope, Sentinel stops and escalates to a supervising attorney. The agent does not guess across an ethical wall. It stops."),
            ("Matter-Scoped Evidence Packages", "CIAG Phase 0 produces a governance gap analysis mapped to your conflicts, retention, and confidentiality obligations — with a remediation roadmap your general counsel can take straight to the partnership."),
        ],
        "pqc": "CoreIdentity is hardened against both current and future threats — implementing all three NIST FIPS post-quantum standards in production: ML-DSA-65 (FIPS 204), ML-KEM-768 (FIPS 203), and SLH-DSA-128s (FIPS 205). Privileged records retained for decades stay defensible against tomorrow's cryptographic threats, not just today's.",
        "cta_title": "Ready to Close Your Privilege Governance Gap?",
        "cta_body": "CIAG Phase 0 delivers a privilege-mapped governance gap analysis, ethical-wall exposure assessment, and prioritized enforcement roadmap — scoped to your matters and your obligations, not a generic framework.",
    },
    {
        "file": "src/pages/CriticalInfrastructureGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_CRITICAL_INFRA_v1",
        "comp": "CriticalInfrastructureGovernancePage",
        "title": "Critical Infrastructure AI Governance | CoreIdentity",
        "desc": "CoreIdentity enforces actuation-level agent governance across energy, water, transportation, and industrial control systems — so an autonomous agent can never issue an operational command outside its authorized, auditable bounds.",
        "eyebrow": "Critical Infrastructure · NERC CIP · TSA Directives · CISA · IEC 62443",
        "headline": "An Agent Should Never Be Able to Trip the Grid.",
        "lead": "When an autonomous agent reaches into operational technology — energy, water, pipelines, transportation — the failure mode is not a fine. It is physical consequence. Regulators and operators will ask exactly what the agent was authorized to actuate, and whether a tamper-evident record proves it stayed inside safe bounds. CoreIdentity answers both before an incident, not during the post-mortem.",
        "reality": [
            ("NERC CIP / FERC", "Bulk electric system cyber assets require documented access control, change management, and auditable evidence. An undocumented automated action against a BES asset is a reportable compliance failure."),
            ("TSA Security Directives", "Pipeline and rail directives mandate enforced access governance, segmentation, and incident reporting for operational technology. Autonomous access without an authorization chain is a finding."),
            ("CISA Guidance & IEC 62443", "Defense-in-depth and zone-and-conduit segmentation are baseline. An agent that crosses a defined trust boundary into a control zone is a security event that must be detected and recorded."),
        ],
        "enforces": [
            ("OT Actuation Boundaries", "Sentinel enforces command-level authorization at the agent layer. No agent issues a control or setpoint change outside an active, scoped authorization — the model cannot be prompted past the boundary."),
            ("Cryptographic Audit Trails", "Every consequential action produces a proof artifact signed by the Semantic Authorization Layer — ML-DSA-65 (FIPS 204) signed and tamper-evident, exactly the evidence an auditor or incident investigator requires."),
            ("Fail-Closed on Ambiguity", "Against physical systems, an agent never guesses. When an action falls outside authorized policy, Sentinel halts and escalates to a human operator before anything actuates."),
            ("Operator-Ready Evidence Packages", "CIAG Phase 0 produces a governance gap analysis mapped to NERC CIP, TSA, and IEC 62443 control requirements — with a prioritized remediation roadmap your operations and compliance teams can act on."),
        ],
        "pqc": "CoreIdentity is hardened against both current and future threats — implementing all three NIST FIPS post-quantum standards in production: ML-DSA-65 (FIPS 204), ML-KEM-768 (FIPS 203), and SLH-DSA-128s (FIPS 205). Infrastructure operators planning multi-decade asset lifecycles can deploy CoreIdentity knowing the cryptographic surface is already hardened.",
        "cta_title": "Ready to Close Your OT Governance Gap?",
        "cta_body": "CIAG Phase 0 delivers an OT-mapped governance gap analysis, regulatory exposure assessment, and prioritized enforcement roadmap — scoped to your control systems and your obligations, not a generic framework.",
    },
    {
        "file": "src/pages/DefenseGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_DEFENSE_v1",
        "comp": "DefenseGovernancePage",
        "title": "Defense & Intelligence AI Governance | CoreIdentity",
        "desc": "CoreIdentity enforces need-to-know agent governance for defense and intelligence missions — so every autonomous action on controlled information is attributable, authorized, and auditable to the standard accreditation authorities enforce.",
        "eyebrow": "Defense & Intelligence · CMMC 2.0 · NIST 800-171 · ICD 503 · RMF",
        "headline": "Autonomy at Mission Speed. Accountability at Audit Standard.",
        "lead": "In national security environments, an autonomous agent acting on classified or controlled information must be attributable to a verified identity, operating inside its authorized scope, with an audit trail an accreditation authority will accept. The question is never whether the agent is fast. It is whether you can prove it acted within its authority. CoreIdentity is built to that standard — by operators who have worked inside these institutions.",
        "reality": [
            ("CMMC 2.0 / NIST SP 800-171", "Handling Controlled Unclassified Information requires enforced access control, least privilege, and continuous audit. An autonomous workflow without an authorization chain puts the contract and the accreditation at risk."),
            ("ICD 503 / RMF (NIST 800-53)", "An Authorization to Operate depends on demonstrable, continuous control over who — and what — accesses the system. Autonomous agents are no exception; they are subjects that must be governed and recorded."),
            ("Need-to-Know & Attribution", "An action no one can attribute to a verified identity is both a counterintelligence exposure and an accreditation failure. Attribution cannot be reconstructed after the fact — it must exist at the moment of action."),
        ],
        "enforces": [
            ("Need-to-Know Access Boundaries", "Sentinel enforces classification- and compartment-aware authorization at the agent layer. No agent accesses controlled information outside an active, scoped authorization — independent of how the model was prompted."),
            ("Post-Quantum Audit Trails", "Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident, attributable, and hardened against both current and future cryptographic threats."),
            ("Fail-Closed on Ambiguity", "When an agent encounters a scenario outside its authorized scope, Sentinel stops and escalates to a cleared operator. The agent does not infer authority it was not granted. It stops."),
            ("ATO-Ready Evidence Packages", "CIAG Phase 0 produces a governance gap analysis mapped to CMMC, NIST 800-171, and RMF control families — with a prioritized remediation roadmap your ISSM and authorizing official can act on."),
        ],
        "pqc": "CoreIdentity is hardened against both current and future threats — implementing all three NIST FIPS post-quantum standards in production: ML-DSA-65 (FIPS 204), ML-KEM-768 (FIPS 203), and SLH-DSA-128s (FIPS 205). Mission systems with long classification lifetimes are protected against harvest-now, decrypt-later exposure from the day they deploy.",
        "cta_title": "Ready to Govern Autonomy at Mission Standard?",
        "cta_body": "CIAG Phase 0 delivers a control-mapped governance gap analysis, accreditation exposure assessment, and prioritized enforcement roadmap — scoped to your mission systems and your authorization requirements, not a generic framework.",
    },
]


# ── Header dropdown ─────────────────────────────────────────────────────────
HEADER = "src/components/Header.tsx"
HEADER_FIND = '''const GOVERNANCE_MENU: NavLink[] = [
  { to: "/governance/healthcare", label: "Healthcare" },
  { to: "/governance/bfsi", label: "BFSI" },
  { to: "/governance/sovereign", label: "Sovereign" },
];'''
HEADER_REPLACE = '''const GOVERNANCE_MENU: NavLink[] = [
  { to: "/governance/healthcare", label: "Healthcare" },
  { to: "/governance/bfsi", label: "Financial Services (BFSI)" },
  { to: "/governance/sovereign", label: "Sovereign & Government" },
  { to: "/governance/legal", label: "Legal & Professional Services" },
  { to: "/governance/critical-infrastructure", label: "Critical Infrastructure" },
  { to: "/governance/defense", label: "Defense & Intelligence" },
];'''
HEADER_GUARD = '{ to: "/governance/legal", label: "Legal & Professional Services" }'

# ── Router ──────────────────────────────────────────────────────────────────
ROUTER = "src/router.tsx"

ROUTER_IMPORT_FIND = 'import { SovereignGovernancePage } from "./pages/SovereignGovernancePage";'
ROUTER_IMPORT_REPLACE = (
    'import { SovereignGovernancePage } from "./pages/SovereignGovernancePage";\n'
    'import { LegalGovernancePage } from "./pages/LegalGovernancePage";\n'
    'import { CriticalInfrastructureGovernancePage } from "./pages/CriticalInfrastructureGovernancePage";\n'
    'import { DefenseGovernancePage } from "./pages/DefenseGovernancePage";'
)
ROUTER_IMPORT_GUARD = 'import { LegalGovernancePage } from "./pages/LegalGovernancePage";'

ROUTER_DEFS_FIND = '''const sovereignRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/sovereign",
  component: SovereignGovernancePage,
});'''
ROUTER_DEFS_REPLACE = ROUTER_DEFS_FIND + '''

const legalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/legal",
  component: LegalGovernancePage,
});

const criticalInfrastructureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/critical-infrastructure",
  component: CriticalInfrastructureGovernancePage,
});

const defenseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/defense",
  component: DefenseGovernancePage,
});'''
ROUTER_DEFS_GUARD = 'const legalRoute = createRoute({'

ROUTER_TREE_FIND = '''  // Governance verticals
  healthcareRoute,
  bfsiRoute,
  sovereignRoute,
]);'''
ROUTER_TREE_REPLACE = '''  // Governance verticals
  healthcareRoute,
  bfsiRoute,
  sovereignRoute,
  legalRoute,
  criticalInfrastructureRoute,
  defenseRoute,
]);'''
ROUTER_TREE_GUARD = '''  sovereignRoute,
  legalRoute,'''


def edit_file(path, guard, find, replace, label):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    if guard in content:
        print(f"[SKIP] {path} — {label} already applied.")
        return True
    if find not in content:
        print(f"[ERROR] {path} — {label}: anchor not found and guard absent.")
        return False
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.replace(find, replace, 1))
    print(f"[OK] {path} — {label} applied.")
    return True


def main():
    ok = True

    # 1) create new page files
    for page in PAGES:
        path = page["file"]
        if os.path.exists(path):
            print(f"[SKIP] {path} — already exists.")
            continue
        with open(path, "w", encoding="utf-8") as f:
            f.write(render(page))
        print(f"[OK] {path} — created.")

    # 2) header dropdown
    ok = edit_file(HEADER, HEADER_GUARD, HEADER_FIND, HEADER_REPLACE, "governance menu") and ok

    # 3) router wiring
    ok = edit_file(ROUTER, ROUTER_IMPORT_GUARD, ROUTER_IMPORT_FIND, ROUTER_IMPORT_REPLACE, "imports") and ok
    ok = edit_file(ROUTER, ROUTER_DEFS_GUARD, ROUTER_DEFS_FIND, ROUTER_DEFS_REPLACE, "route defs") and ok
    ok = edit_file(ROUTER, ROUTER_TREE_GUARD, ROUTER_TREE_FIND, ROUTER_TREE_REPLACE, "route tree") and ok

    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
