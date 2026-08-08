// Institutional Carbon — shared page primitives (Platinum / Blue / Purple palette).
// Used by the Layer A/B/C/D and Platform pages so the institutional
// vocabulary (carbon surfaces, ink text, blue accent, serif display) stays
// consistent. Language rule: infrastructure / substrate / layer — never
// "product", "tool", or "SaaS".
import type { ReactNode } from "react";

// Internal links use plain anchors (as elsewhere in this codebase) so these
// shared primitives do not depend on TanStack's typed route registry — the
// /layer-* and /platform routes are registered in the router rebuild step.

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
      {children}
    </div>
  );
}

export function PoweredBy({ items }: { items: string[] }) {
  return (
    <div className="mt-6">
      <div className="mb-2 text-xs uppercase tracking-widest text-ink-muted">Powered by</div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LayerHero({
  eyebrow,
  title,
  lead,
  poweredBy,
}: {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  poweredBy?: string[];
}) {
  return (
    <section className="pt-4 md:pt-8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 font-serif text-display-xl tracking-tight text-ink md:text-display-2xl">
        {title}
      </h1>
      <div className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-secondary md:text-xl">
        {lead}
      </div>
      {poweredBy && poweredBy.length > 0 ? <PoweredBy items={poweredBy} /> : null}
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-serif text-display-md tracking-tight text-ink md:text-display-lg">
        {title}
      </h2>
      {intro ? <p className="mt-3 max-w-3xl leading-relaxed text-ink-secondary">{intro}</p> : null}
    </div>
  );
}

export function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
      <h3 className="font-serif text-xl text-ink">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-ink-secondary">{children}</div>
    </div>
  );
}

export function ProofStat({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail?: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-carbon-panel p-5">
      <div className="tabular-figures text-3xl font-semibold leading-none text-ink">{value}</div>
      <div className="mt-2 text-sm font-medium text-accent">{label}</div>
      {detail ? <p className="mt-1 text-xs leading-relaxed text-ink-muted">{detail}</p> : null}
    </div>
  );
}

export const PLATINUM_STATEMENT =
  "Our infrastructure is under continuous adversarial validation through the execution of a Platinum Test Suite against the Computational Trust Fabric's institutional assurance domains — sustained adversarial pressure, simulated breach, load collapse, cryptographic attack, regulatory edge case, and coordinated multi-vector failure — all against live production infrastructure. Every governance invariant held. Every boundary enforced. No exceptions.";

export function PlatinumProof() {
  return (
    <div className="rounded-2xl border border-line bg-carbon-panel p-8 text-center">
      <p className="mx-auto max-w-3xl text-base leading-relaxed text-ink-secondary md:text-lg">
        {PLATINUM_STATEMENT}
      </p>
    </div>
  );
}

const ARCHITECTURE: { id: string; to: string; label: string }[] = [
  { id: "execution-integrity", to: "/execution-integrity", label: "Execution Integrity" },
  { id: "verification-at-scale", to: "/verification-at-scale", label: "Verification at Scale" },
  { id: "sovereign-assurance", to: "/sovereign-assurance", label: "Sovereign Assurance" },
];

export function ArchitectureNav({ current }: { current: string }) {
  return (
    <nav aria-label="Institutional architecture" className="flex flex-wrap gap-2">
      {ARCHITECTURE.map((l) => (
        <a
          key={l.id}
          href={l.to}
          className={[
            "rounded-full border px-4 py-1.5 text-xs font-medium transition",
            l.id === current
              ? "border-accent/40 bg-accent/10 text-accent"
              : "border-line bg-carbon-panel text-ink-secondary hover:text-ink",
          ].join(" ")}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}

export function InstitutionalCTA() {
  return (
    <section className="rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center md:p-10">
      <h2 className="font-serif text-display-md text-ink">Bring this in front of your evaluators</h2>
      <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink-secondary">
        CoreIdentity is institutional infrastructure for autonomous systems — a governance
        substrate, not an application bolted on after the fact. Bring your security, legal,
        and compliance reviewers; we will walk the full enforcement architecture.
      </p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href="/ciag"
          className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
        >
          Request Governance Architecture Review
        </a>
        <a
          href="/platform"
          className="inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/40"
        >
          Explore Technical Architecture
        </a>
      </div>
    </section>
  );
}
