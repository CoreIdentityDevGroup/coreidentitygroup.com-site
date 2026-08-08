// CIDG_VERTICAL_EDUCATION_v1
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function EducationGovernancePage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Education AI Governance | CoreIdentity</title>
        <meta name="description" content="CoreIdentity governs every agent that touches student records, federal aid, or research data — enforcing FERPA, Title IV, and federal research compliance with cryptographic audit trails." />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"CoreIdentity EducationOps AI Governance","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","description":"CoreIdentity governs every agent that touches student records, federal aid, or research data — enforcing FERPA, Title IV, and federal research compliance with cryptographic audit trails.","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Education · FERPA · Title IV · Federal Research Compliance
        </p>
        <h1 className="font-serif text-display-xl md:text-display-2xl tracking-tight leading-tight text-ink">
          Student Records Are Federally Protected. So Must Be the Agents That Touch Them.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-secondary">
          Universities and education providers are deploying agents across admissions, financial aid, advising, and research. FERPA governs every student record, Title IV governs every aid dollar, and federal research terms govern controlled data. An agent that discloses a protected record or mishandles aid is not a glitch — it is a federal compliance failure with funding consequences. CoreIdentity makes every agent action on protected data authorized, attributed, and auditable.
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
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">FERPA</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Education records may only be accessed and disclosed under defined authority. An autonomous agent that exposes a student record outside permitted scope creates a direct FERPA violation and institutional liability.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">Title IV Aid Integrity</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Federal student aid carries strict eligibility, disbursement, and documentation rules. An agent acting on aid decisions without an authorization chain puts Title IV participation itself at risk.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">Federal Research Compliance</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Sponsored research and controlled data carry access, export, and integrity obligations. Ungoverned agent access to research data threatens awards, accreditation, and federal standing.
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
            <div className="mb-2 text-lg font-semibold text-ink">Record-Aware Access Boundaries</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Governance enforcement enforces FERPA-scoped classification at the agent layer. No agent reads or discloses a protected education record outside an active, authorized purpose.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Cryptographic Audit Trails</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Every action on protected data produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident for an auditor or the Department of Education.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Fail-Closed on Ambiguity</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              When access falls outside authorized scope, Governance enforcement stops and escalates to a human. The agent does not guess with a student's protected record. It stops.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Compliance-Ready Evidence</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              CIAG Phase 0 maps your agents to FERPA, Title IV, and research obligations with a prioritized remediation roadmap your compliance team and general counsel can act on.
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

export default EducationGovernancePage;
