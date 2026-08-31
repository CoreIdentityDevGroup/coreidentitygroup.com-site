// CIDG_VERTICAL_FINANCE_v1
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function FinanceGovernancePage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Corporate Finance AI Governance | CoreIdentity</title>
        <meta name="description" content="CoreIdentity keeps autonomous agents inside SOX controls across the financial close, treasury, and reporting — authorized, segregated, and audit-ready for the SEC and external auditors." />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"CoreIdentity FinanceOps AI Governance","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","description":"CoreIdentity keeps autonomous agents inside SOX controls across the financial close, treasury, and reporting — authorized, segregated, and audit-ready for the SEC and external auditors.","provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Corporate Finance · SOX · SEC Algorithmic Guidance · Fiduciary Duty
        </p>
        <h1 className="font-serif text-display-xl md:text-display-2xl tracking-tight leading-tight text-ink">
          An Agent in Your Financial Close Is an Agent in Your Controls.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-secondary">
          Autonomous agents are entering the financial close, reconciliation, treasury, and reporting. Under SOX, every control must be documented, tested, and attributable to an accountable actor. An agent that touches the numbers without a governed authorization chain breaks internal control over financial reporting — and a CFO cannot certify what cannot be proven. CoreIdentity makes every agent action in the financial process authorized, attributed, and permanently recorded.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
          >
            Request Governance Architecture Review
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-xl border border-line px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/40"
          >
            Explore Platform Architecture
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
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">Sarbanes-Oxley (SOX)</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Internal control over financial reporting requires documented authorization and segregation of duties. An ungoverned agent in the close is a material control deficiency waiting to be found by an auditor.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">SEC Algorithmic Guidance</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Automated decisioning that affects disclosures or markets must be controllable and explainable. Regulators expect evidence that algorithms acted within defined authority.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">Fiduciary Duty</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Officers and directors owe a duty of care over financial systems. Delegating consequential financial actions to agents without provable governance is a breach exposure, not an efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ── How CoreIdentity Governs It ─────────────────────────────────── */}
      <section>
        <h2 className="mb-6 font-serif text-display-md md:text-display-lg tracking-tight text-ink">
          How CoreIdentity Governs It
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Segregation Enforced in Software</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Governance enforcement enforces authorization and segregation-of-duties at the agent layer. No agent posts, approves, or alters financial records outside its scoped authority.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Cryptographic Audit Trails</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident evidence for external auditors and the audit committee.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Fail-Closed on Ambiguity</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              When an action exceeds authorized policy, Governance enforcement halts and escalates. The agent does not self-approve. It stops.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Audit-Ready Evidence</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              CIAG Phase 0 maps your agents to SOX control families and SEC expectations with a prioritized roadmap your controller and external auditor can rely on.
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
          CoreIdentity is hardened against both current and future threats — implementing all three NIST FIPS post-quantum standards in production: ML-DSA-65 (FIPS 204), ML-KEM-768 (FIPS 203), and SLH-DSA-128s (FIPS 205). Long-lived regulated records stay defensible against tomorrow's cryptographic threats, not just today's.
        </p>
        <Link to="/platform" className="mt-3 inline-flex items-center gap-1 text-sm text-accent/80 transition hover:text-accent">
          View our technical architecture →
        </Link>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center md:p-10">
        <h2 className="font-serif text-display-md text-ink">Bring This in Front of Your Evaluators</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink-secondary">
          CoreIdentity is institutional trust infrastructure for autonomous systems — governance proven at the execution layer, not asserted in a policy document. Bring your security, legal, and compliance reviewers; we will walk the full enforcement architecture.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
          >
            Request Governance Architecture Review
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/40"
          >
            Explore Platform Architecture
          </Link>
        </div>
      </section>
    </div>
  );
}

export default FinanceGovernancePage;
