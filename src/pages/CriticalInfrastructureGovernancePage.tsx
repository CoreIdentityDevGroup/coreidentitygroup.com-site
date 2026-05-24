// CIDG_VERTICAL_CRITICAL_INFRA_v1
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function CriticalInfrastructureGovernancePage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Critical Infrastructure AI Governance | CoreIdentity</title>
        <meta
          name="description"
          content="CoreIdentity enforces actuation-level agent governance across energy, water, transportation, and industrial control systems — so an autonomous agent can never issue an operational command outside its authorized, auditable bounds."
        />
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Critical Infrastructure · NERC CIP · TSA Directives · CISA · IEC 62443
        </p>
        <h1 className="font-serif text-display-xl md:text-display-2xl tracking-tight leading-tight text-ink">
          An Agent Should Never Be Able to Trip the Grid.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-secondary">
          When an autonomous agent reaches into operational technology — energy, water, pipelines, transportation — the failure mode is not a fine. It is physical consequence. Regulators and operators will ask exactly what the agent was authorized to actuate, and whether a tamper-evident record proves it stayed inside safe bounds. CoreIdentity answers both before an incident, not during the post-mortem.
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
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">NERC CIP / FERC</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Bulk electric system cyber assets require documented access control, change management, and auditable evidence. An undocumented automated action against a BES asset is a reportable compliance failure.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">TSA Security Directives</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Pipeline and rail directives mandate enforced access governance, segmentation, and incident reporting for operational technology. Autonomous access without an authorization chain is a finding.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">CISA Guidance & IEC 62443</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Defense-in-depth and zone-and-conduit segmentation are baseline. An agent that crosses a defined trust boundary into a control zone is a security event that must be detected and recorded.
            </p>
          </div>
        </div>
      </section>

      {/* ── What CoreIdentity Enforces ──────────────────────────────────── */}
      <section>
        <h2 className="mb-6 font-serif text-display-md md:text-display-lg tracking-tight text-ink">
          What CoreIdentity Enforces
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">OT Actuation Boundaries</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Sentinel enforces command-level authorization at the agent layer. No agent issues a control or setpoint change outside an active, scoped authorization — the model cannot be prompted past the boundary.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Cryptographic Audit Trails</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Every consequential action produces a proof artifact signed by the Semantic Authorization Layer — ML-DSA-65 (FIPS 204) signed and tamper-evident, exactly the evidence an auditor or incident investigator requires.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Fail-Closed on Ambiguity</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Against physical systems, an agent never guesses. When an action falls outside authorized policy, Sentinel halts and escalates to a human operator before anything actuates.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Operator-Ready Evidence Packages</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              CIAG Phase 0 produces a governance gap analysis mapped to NERC CIP, TSA, and IEC 62443 control requirements — with a prioritized remediation roadmap your operations and compliance teams can act on.
            </p>
          </div>
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
          CoreIdentity is hardened against both current and future threats — implementing all three NIST FIPS post-quantum standards in production: ML-DSA-65 (FIPS 204), ML-KEM-768 (FIPS 203), and SLH-DSA-128s (FIPS 205). Infrastructure operators planning multi-decade asset lifecycles can deploy CoreIdentity knowing the cryptographic surface is already hardened.
        </p>
        <Link to="/layer-d" className="mt-3 inline-flex items-center gap-1 text-sm text-accent/80 transition hover:text-accent">
          View full quantum hardening posture →
        </Link>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center md:p-10">
        <h2 className="font-serif text-display-md text-ink">Ready to Close Your OT Governance Gap?</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink-secondary">
          CIAG Phase 0 delivers an OT-mapped governance gap analysis, regulatory exposure assessment, and prioritized enforcement roadmap — scoped to your control systems and your obligations, not a generic framework.
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

export default CriticalInfrastructureGovernancePage;
