import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { SectionHead } from "../components/institutional";

// Portfolio — two tiers: the governance infrastructure (primary positioning,
// the four assurance layers) and the commercial products that demonstrate the
// platform's capability in market (secondary, capability proof).

type LayerEntry = { id: string; to: string; title: string; body: string };
const LAYERS: LayerEntry[] = [
  {
    id: "A",
    to: "/layer-a",
    title: "Execution Integrity",
    body: "Verified agent identity, runtime behavioral fingerprinting, and an immutable, ML-DSA-65 signed audit trail — proof of which agent acted and under whose authority.",
  },
  {
    id: "B",
    to: "/layer-b",
    title: "Verification at Scale",
    body: "FGRE formal proof of policy correctness before activation, and the SAL Semantic Authorization Layer enforcing it deterministically in sub-3ms. 734/734 tests across 100K+ governed calls.",
  },
  {
    id: "C",
    to: "/layer-c",
    title: "Sovereign Assurance",
    body: "Nexus governed orchestration, AGO autonomous supervision, and behavioral genealogy — delegation lineage and trust-decay scoring across the entire agent fleet.",
  },
  {
    id: "D",
    to: "/layer-d",
    title: "Cryptographic Hardening",
    body: "Post-quantum protection across every cryptographic surface — the first commercial platform in production with all three NIST FIPS standards (203/204/205), 2-of-3 consensus, fail-close containment.",
  },
];

type Product = { name: string; tag: string; body: string; href?: string; external?: boolean };
const PRODUCTS: Product[] = [
  {
    name: "ClearShield",
    tag: "Cryptographic hygiene",
    href: "https://clearshield.coreidentitygroup.com",
    external: true,
    body: "Cryptographic posture assessment and remediation for enterprise AI deployments — identify classical algorithm exposure, map quantum-vulnerable surfaces, and receive a prioritized hardening roadmap aligned to NIST FIPS 203, 204, and 205.",
  },
  {
    name: "ShadowScan",
    tag: "Threat visibility",
    href: "https://shadowscan.coreidentitygroup.com",
    external: true,
    body: "Autonomous discovery of unsanctioned AI activity across the enterprise — surface agents, models, and integrations operating without proof of authority before they become liability.",
  },
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
                <span className="text-xs uppercase tracking-widest text-ink-muted">Layer {l.id}</span>
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
