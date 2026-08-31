// CIDG_VERTICAL_LEGAL_v2
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function LegalGovernancePage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Legal & Professional Services AI Governance | CoreIdentity</title>
        <meta name="description" content="CoreIdentity enforces privilege-aware agent governance across legal and professional services — so an autonomous agent never waives privilege, breaches an ethical wall, or leaves a matter without a defensible record." />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"CoreIdentity LegalOps AI Governance","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","description":"CoreIdentity enforces privilege-aware agent governance across legal and professional services — so an autonomous agent never waives privilege, breaches an ethical wall, or leaves a matter without a defensible record.","provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Legal & Professional Services · ABA Model Rules · Attorney-Client Privilege · Work Product
        </p>
        <h1 className="font-serif text-display-xl md:text-display-2xl tracking-tight leading-tight text-ink">
          Privileged Information Stays Privileged.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-secondary">
          When an AI agent drafts, reviews, or routes a matter, the first question a court, a bar regulator, or opposing counsel will ask is whether privilege was preserved — and whether anyone can prove it. A single inadvertent disclosure can waive privilege irreversibly. CoreIdentity makes every agent action on privileged material authorized, attributable, and auditable before that question is ever asked.
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
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">ABA Model Rules 1.1 & 1.6</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              The duties of competence and confidentiality make the firm responsible for what its AI does. An agent that exposes client confidences — even inadvertently — is an ethics violation, not a technical glitch.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">Attorney-Client Privilege</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Privilege is waived the moment protected material reaches an unauthorized recipient. An autonomous agent routing a document outside the privilege boundary can forfeit protection that cannot be recovered.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">Work Product Doctrine</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Litigation work product carries heightened protection. Ungoverned agent handling of work product risks disclosure that undermines the matter and the engagement.
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
            <div className="mb-2 text-lg font-semibold text-ink">Privilege-Aware Boundaries</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Governance enforcement enforces matter-level classification at the agent layer. No agent reads or moves privileged material outside an active, scoped authorization.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Cryptographic Audit Trails</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Every action on a matter produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident and ready for a court or bar inquiry.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Fail-Closed on Ambiguity</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              When access falls outside authorized scope, Governance enforcement stops and escalates to a supervising attorney. The agent does not guess across an ethical wall. It stops.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Matter-Scoped Evidence</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              CIAG Phase 0 maps your agents to conflicts, retention, and confidentiality obligations with a remediation roadmap your general counsel can take to the partnership.
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

export default LegalGovernancePage;
