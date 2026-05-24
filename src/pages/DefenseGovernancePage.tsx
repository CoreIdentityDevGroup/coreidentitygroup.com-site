// CIDG_VERTICAL_DEFENSE_v1
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function DefenseGovernancePage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Defense & Intelligence AI Governance | CoreIdentity</title>
        <meta
          name="description"
          content="CoreIdentity enforces need-to-know agent governance for defense and intelligence missions — so every autonomous action on controlled information is attributable, authorized, and auditable to the standard accreditation authorities enforce."
        />
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Defense & Intelligence · CMMC 2.0 · NIST 800-171 · ICD 503 · RMF
        </p>
        <h1 className="font-serif text-display-xl md:text-display-2xl tracking-tight leading-tight text-ink">
          Autonomy at Mission Speed. Accountability at Audit Standard.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-secondary">
          In national security environments, an autonomous agent acting on classified or controlled information must be attributable to a verified identity, operating inside its authorized scope, with an audit trail an accreditation authority will accept. The question is never whether the agent is fast. It is whether you can prove it acted within its authority. CoreIdentity is built to that standard — by operators who have worked inside these institutions.
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
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">CMMC 2.0 / NIST SP 800-171</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Handling Controlled Unclassified Information requires enforced access control, least privilege, and continuous audit. An autonomous workflow without an authorization chain puts the contract and the accreditation at risk.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">ICD 503 / RMF (NIST 800-53)</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              An Authorization to Operate depends on demonstrable, continuous control over who — and what — accesses the system. Autonomous agents are no exception; they are subjects that must be governed and recorded.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">Need-to-Know & Attribution</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              An action no one can attribute to a verified identity is both a counterintelligence exposure and an accreditation failure. Attribution cannot be reconstructed after the fact — it must exist at the moment of action.
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
            <div className="mb-2 text-lg font-semibold text-ink">Need-to-Know Access Boundaries</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Sentinel enforces classification- and compartment-aware authorization at the agent layer. No agent accesses controlled information outside an active, scoped authorization — independent of how the model was prompted.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Post-Quantum Audit Trails</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident, attributable, and hardened against both current and future cryptographic threats.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Fail-Closed on Ambiguity</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              When an agent encounters a scenario outside its authorized scope, Sentinel stops and escalates to a cleared operator. The agent does not infer authority it was not granted. It stops.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">ATO-Ready Evidence Packages</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              CIAG Phase 0 produces a governance gap analysis mapped to CMMC, NIST 800-171, and RMF control families — with a prioritized remediation roadmap your ISSM and authorizing official can act on.
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
          CoreIdentity is hardened against both current and future threats — implementing all three NIST FIPS post-quantum standards in production: ML-DSA-65 (FIPS 204), ML-KEM-768 (FIPS 203), and SLH-DSA-128s (FIPS 205). Mission systems with long classification lifetimes are protected against harvest-now, decrypt-later exposure from the day they deploy.
        </p>
        <Link to="/layer-d" className="mt-3 inline-flex items-center gap-1 text-sm text-accent/80 transition hover:text-accent">
          View full quantum hardening posture →
        </Link>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center md:p-10">
        <h2 className="font-serif text-display-md text-ink">Ready to Govern Autonomy at Mission Standard?</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink-secondary">
          CIAG Phase 0 delivers a control-mapped governance gap analysis, accreditation exposure assessment, and prioritized enforcement roadmap — scoped to your mission systems and your authorization requirements, not a generic framework.
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

export default DefenseGovernancePage;
