import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { SectionHead } from "../components/institutional";

// Portfolio — two tiers: the governance infrastructure (primary positioning,
// the four assurance layers) and the commercial products that demonstrate the
// platform's capability in market (secondary, capability proof).

type LayerEntry = { id: string; to: string; title: string; body: string };
const LAYERS: LayerEntry[] = [
  {
    id: "execution-integrity",
    to: "/execution-integrity",
    title: "Execution Integrity",
    body: "Every consequential action is provably attributable to a verified identity, at the moment it happens — not reconstructed after an incident.",
  },
  {
    id: "verification-at-scale",
    to: "/verification-at-scale",
    title: "Verification at Scale",
    body: "Policy is proven correct before it ever activates, and enforced identically across every agent, every time — no drift, no exceptions.",
  },
  {
    id: "sovereign-assurance",
    to: "/sovereign-assurance",
    title: "Sovereign Assurance",
    body: "Authority stays accountable as it is delegated across a fleet — traceable end to end, and contained the moment a link drifts or breaks.",
  },
];

type Product = { name: string; tag: string; body: string; href?: string; external?: boolean };
const PRODUCTS: Product[] = [
  {
    name: "SmartNation AI",
    tag: "Governed digital labor",
    href: "/smartnation-ai",
    body: "Pre-built, compliance-ready digital labor deployed under full CoreIdentity enforcement from day one — every agent carries a governance profile and an audit trail across industry verticals.",
  },
  {
    name: "CoreG PCM",
    tag: "Private capital markets",
    body: "A live deployment governing agentic workflows for a private capital markets platform — deal intake, asset pipeline, and compliance screening, where a single unauthorized agent action carries regulatory and fiduciary consequence.",
  },
];

export function PortfolioPage() {
  return (
    <div className="space-y-14">
      <Helmet>
        <title>Portfolio | CoreIdentity</title>
        <meta
          name="description"
          content="The CoreIdentity portfolio: the governance infrastructure — four layers of progressive institutional assurance — and the commercial products that prove the platform's capability in market."
        />
      </Helmet>

      <section className="pt-4 md:pt-8">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          CoreIdentity Development Group
        </div>
        <h1 className="mt-4 font-serif text-display-xl tracking-tight text-ink md:text-display-2xl">
          Portfolio
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-secondary md:text-xl">
          CoreIdentity builds and operates institutional trust infrastructure for autonomous systems.
          The portfolio is organized in two tiers: the governance substrate itself — four layers of
          progressive assurance — and the commercial products that demonstrate that substrate at work
          in market.
        </p>
      </section>

      {/* 1 — Governance Infrastructure */}
      <section>
        <SectionHead
          eyebrow="Primary positioning"
          title="Governance Infrastructure"
          intro="The four-layer assurance model. Each layer adds a guarantee on the one beneath it, and the platform deep-dive ties them together."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {LAYERS.map((l) => (
            <Link
              key={l.id}
              to={l.to}
              className="cidg-card flex flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/30 bg-accent/5 font-serif text-lg text-accent">
                  {l.id}
                </span>
              </div>
              <h3 className="font-serif text-xl text-ink">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{l.body}</p>
              <span className="mt-4 text-sm font-medium text-accent">View layer →</span>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link to="/platform" className="text-sm font-medium text-accent hover:text-accent-strong">
            See the complete platform architecture →
          </Link>
        </div>
      </section>

      {/* 2 — Commercial Products */}
      <section>
        <SectionHead
          eyebrow="Capability proof — not primary positioning"
          title="Commercial Products"
          intro="Market-facing offerings that demonstrate the governance substrate in commercial use. They are evidence of capability, not the institutional positioning."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">{p.tag}</div>
              <h3 className="mt-2 font-serif text-xl text-ink">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{p.body}</p>
              {p.href ? (
                p.external ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-medium text-accent hover:text-accent-strong"
                  >
                    {p.name} →
                  </a>
                ) : (
                  <Link to={p.href} className="mt-4 inline-flex text-sm font-medium text-accent hover:text-accent-strong">
                    {p.name} →
                  </Link>
                )
              ) : (
                <span className="mt-4 inline-flex items-center gap-2 text-xs text-ink-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Live deployment
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
