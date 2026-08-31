// CIDG_VERTICAL_HEALTHCARE_v2
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function HealthcareGovernancePage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Healthcare AI Governance | CoreIdentity</title>
        <meta name="description" content="CoreIdentity enforces HIPAA-grade access, attribution, and audit across every clinical and administrative AI agent — aligned to HIPAA, FDA, CMS, and the 21st Century Cures Act." />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"CoreIdentity HealthcareOps AI Governance","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","description":"CoreIdentity enforces HIPAA-grade access, attribution, and audit across every clinical and administrative AI agent — aligned to HIPAA, FDA, CMS, and the 21st Century Cures Act.","provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Healthcare · HIPAA · FDA · CMS · 21st Century Cures Act
        </p>
        <h1 className="font-serif text-display-xl md:text-display-2xl tracking-tight leading-tight text-ink">
          PHI Never Touches an Unauthorized Agent.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-secondary">
          When OCR investigates, the first question is not which system failed — it is what the AI agent was authorized to access, why it accessed it, and whether a cryptographic record proves it stayed within bounds. Across clinical operations, claims, and care coordination, an ungoverned agent that touches protected health information is a reportable breach. CoreIdentity answers authorization, attribution, and audit before the investigation begins.
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
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">HIPAA & HITECH</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Every agent that touches PHI must operate under a documented authorization chain. A missing audit trail is not a gap — it is prima facie evidence of a violation, and OCR penalties run into the hundreds of millions.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">FDA AI/ML Guidance</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Autonomous clinical AI must demonstrate bounded behavior, traceable decisions, and human oversight at defined escalation thresholds under the FDA's change-control framework.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">CMS & 21st Century Cures</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Interoperability and information-blocking rules expand data flow — and the surface for unauthorized agent access. Governed access is the precondition for compliant data exchange.
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
            <div className="mb-2 text-lg font-semibold text-ink">PHI Access Boundaries</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Governance enforcement enforces data classification at the agent level. No agent accesses PHI without an active, scoped authorization — regardless of what the model was prompted to do.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Cryptographic Audit Trails</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Every action on protected data produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident and regulator-ready.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Fail-Closed on Ambiguity</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              When an agent meets a scenario outside its authorized scope, Governance enforcement stops and escalates to a clinician or operator. It does not guess. It stops.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">HIPAA-Ready Evidence</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              CIAG Phase 0 produces a governance gap analysis mapped to HIPAA administrative, physical, and technical safeguards with a prioritized remediation roadmap for compliance and legal.
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

export default HealthcareGovernancePage;
