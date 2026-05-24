import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function ResourcesPage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Resources — White Papers &amp; Governance Research | CoreIdentity</title>
        <meta
          name="description"
          content="CoreIdentity governance resources: the Agent Identity Protocol (AIP) v0.1 white paper, compliance mappings (EU AI Act, NIST AI RMF), and institutional governance briefs."
        />
      </Helmet>

      <section className="pt-4 md:pt-8">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          CoreIdentity Development Group
        </div>
        <h1 className="mt-4 font-serif text-display-xl tracking-tight text-ink md:text-display-2xl">
          Resources
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-secondary">
          Research, white papers, and governance frameworks for institutional and sovereign AI
          deployments — written for the security, legal, and compliance reviewers who evaluate
          autonomous systems before they sign.
        </p>
      </section>

      {/* Featured white paper */}
      <section className="rounded-2xl border border-accent/25 bg-accent/5 p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">White Paper</span>
          <span className="text-xs text-ink-muted">·</span>
          <span className="text-xs text-ink-muted">v0.1</span>
        </div>
        <h2 className="font-serif text-display-md text-ink">
          Agent Identity Protocol (AIP) v0.1
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-ink-secondary">
          The open standard for AI agent identity, verification, and governance — the foundation of
          Execution Integrity. Includes full compliance mapping for the EU AI Act, Colorado SB
          24-205, and NIST AI RMF 1.0.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["AIP", "Agent Identity", "EU AI Act", "NIST AI RMF", "Governance Standard"].map((tag) => (
            <span key={tag} className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs text-accent">
              {tag}
            </span>
          ))}
        </div>
        <a
          href="/AIP-v0.1-White-Paper-v2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
        >
          Download PDF →
        </a>
      </section>

      {/* Industry brief */}
      <section className="rounded-2xl border border-line bg-carbon-panel p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">Industry Brief</span>
        </div>
        <h2 className="font-serif text-display-md text-ink">
          Governing Large-Scale Agentic Healthcare Ecosystems
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-ink-secondary">
          A governance framework for deploying autonomous agents at population scale under HIPAA — how
          the four-layer assurance model maps to clinical workflows, evidence capture, and regulatory
          submission.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Healthcare", "HIPAA", "Agentic Governance", "Audit Evidence"].map((tag) => (
            <span key={tag} className="rounded-full border border-line bg-carbon-raised px-3 py-1 text-xs text-ink-secondary">
              {tag}
            </span>
          ))}
        </div>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/40"
        >
          Request Full Brief →
        </Link>
      </section>

      <section className="rounded-2xl border border-line bg-carbon-panel p-8 text-center">
        <p className="mx-auto mb-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Additional governance frameworks, compliance mappings, and deployment guides are available
          to qualified institutional and sovereign evaluators on request.
        </p>
        <Link
          to="/ciag"
          className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
        >
          Request Resources
        </Link>
      </section>
    </div>
  );
}
