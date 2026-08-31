// CIDG_VERTICAL_BFSI_v2
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function BFSIGovernancePage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>BFSI AI Governance | CoreIdentity</title>
        <meta name="description" content="CoreIdentity enforces authorization, attribution, and audit on every autonomous action across banking, trading, credit, and payments — to SEC, FINRA, OCC, Basel III, and PCI-DSS standards." />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"CoreIdentity BFSI AI Governance","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","description":"CoreIdentity enforces authorization, attribution, and audit on every autonomous action across banking, trading, credit, and payments — to SEC, FINRA, OCC, Basel III, and PCI-DSS standards.","provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Banking & Financial Services · SEC · FINRA · OCC · Basel III · PCI-DSS
        </p>
        <h1 className="font-serif text-display-xl md:text-display-2xl tracking-tight leading-tight text-ink">
          When an Agent Moves Money, You Must Prove It Was Authorized.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-secondary">
          Autonomous agents are already executing trades, adjudicating credit, screening transactions, and moving capital. When the SEC, FINRA, or the OCC asks who authorized an action — and on what basis — a reconstructed guess is not an answer. An unprovable automated decision is an enforcement action waiting to happen. CoreIdentity makes every agent action authorized before it executes, attributed to a verified identity, and recorded in evidence a supervisor can defend.
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
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">SEC & FINRA Supervision</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Supervisory rules require firms to control and document who is authorized to act and why. An autonomous agent with no authorization chain is an unsupervised actor — a finding on its face, regardless of outcome.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">OCC & Basel III Risk</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Model risk, operational risk, and accountability frameworks demand demonstrable control over automated decisioning. Examiners expect evidence, not assurances, that agents stayed within risk limits.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">PCI-DSS & Data Handling</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Cardholder and account data carry strict access mandates. An agent that touches protected financial data outside an authorized scope is a breach event with immediate regulatory and contractual exposure.
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
            <div className="mb-2 text-lg font-semibold text-ink">Authorization Before Execution</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Governance enforcement evaluates every agent action against codified policy before it runs. No trade, transfer, or data access proceeds outside an active, scoped authorization — the model cannot be prompted past the limit.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Cryptographic Audit Trails</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident, attributable evidence ready for an examiner or internal audit.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Fail-Closed on Ambiguity</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              When an action falls outside authorized policy, Governance enforcement halts and escalates to a human supervisor. The agent does not improvise against a control limit. It stops.
            </p>
          </div>
          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="mb-2 text-lg font-semibold text-ink">Examiner-Ready Evidence</div>
            <p className="text-sm leading-relaxed text-ink-secondary">
              CIAG Phase 0 maps your agent fleet to SEC, FINRA, OCC, and PCI-DSS obligations and delivers a prioritized enforcement roadmap your risk and compliance functions can defend.
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

export default BFSIGovernancePage;
