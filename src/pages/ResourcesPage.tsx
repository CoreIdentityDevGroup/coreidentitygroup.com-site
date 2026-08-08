import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function ResourcesPage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Thought Leadership | CoreIdentity</title>
        <meta
          name="description"
          content="CoreIdentity governance research and resources — coming soon."
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
          Research, governance frameworks, and institutional briefings are in preparation.
        </p>
      </section>

      <section className="rounded-2xl border border-line bg-carbon-panel p-8 text-center">
        <p className="mx-auto mb-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Governance frameworks, compliance mappings, and deployment guides are available
          to qualified institutional and sovereign evaluators on request.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
