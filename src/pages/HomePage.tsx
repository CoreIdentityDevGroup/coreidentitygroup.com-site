import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { DemoRequestBanner } from "../components/DemoRequestBanner";
import { PlatformStatsSection } from "../components/PlatformStatsSection";
import { SectionHead } from "../components/institutional";

// Institutional Carbon homepage — trust-deficit thesis, the live regulatory
// "why now", the four-layer assurance model, and production traction.
// DemoRequestBanner and PlatformStatsSection are preserved verbatim
// (Google compliance Gaps 2 and 3).

type RegEvent = { name: string; date: string; claim: string };
const WHY_NOW: RegEvent[] = [
  {
    name: "UAE AI Act",
    date: "March 2026",
    claim: "The world's first national AI legislation — moving AI governance from guidance to binding law.",
  },
  {
    name: "Singapore IMDA Agentic Framework",
    date: "January 22, 2026",
    claim: "The world's first agentic AI governance framework — written specifically for autonomous agents, not models.",
  },
  {
    name: "CBUAE Compliance Deadline",
    date: "September 16, 2026",
    claim: "Mandatory AI governance compliance for every UAE financial institution — a hard, dated obligation.",
  },
];

type Layer = { id: "A" | "B" | "C" | "D"; to: string; title: string; line: string };
const LAYERS: Layer[] = [
  { id: "A", to: "/layer-a", title: "Execution Integrity", line: "Prove which agent acted, under whose authority — attributed and ML-DSA-65 signed." },
  { id: "B", to: "/layer-b", title: "Verification at Scale", line: "Policy proven correct before it activates; enforced deterministically once it does." },
  { id: "C", to: "/layer-c", title: "Sovereign Assurance", line: "Delegation lineage and trust-decay scoring across the entire agent fleet." },
  { id: "D", to: "/layer-d", title: "Cryptographic Hardening", line: "Post-quantum protection across every cryptographic surface, not just the perimeter." },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Helmet>
        <title>CoreIdentity | Provable AI Decision Governance</title>
        <meta
          name="description"
          content="The market does not have an AI problem. It has a trust deficit problem. CoreIdentity is the institutional trust infrastructure that makes every AI decision provable — authorized, attributed, and auditable — across four layers of progressive assurance."
        />
      </Helmet>

      {/* 1 — Hero */}
      <section className="relative pt-6 md:pt-10">
        <img
          src="/logo-mark.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-20 z-0 hidden h-[420px] w-[420px] opacity-90 xl:block"
        />
        <div className="relative z-10">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Provable AI Decision Governance
          </div>
          <h1 className="mt-5 max-w-4xl font-serif text-display-2xl leading-[1.05] tracking-tight text-ink md:text-display-3xl">
            The market does not have an AI problem. It has a trust deficit problem.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-secondary md:text-xl">
            Organizations are delegating consequential authority to autonomous AI faster than they can
            prove those systems acted correctly. CoreIdentity is the institutional trust infrastructure
            that closes the gap — making every decision authorized before it executes, attributed to a
            verified identity, bounded by codified policy, and recorded in a tamper-evident audit trail.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
              Explore Technical Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — Why Now */}
      <section>
        <SectionHead
          eyebrow="Why now"
          title="Governance just became law"
          intro="The regulatory ground shifted in 2026. Three named, dated events move agentic AI governance from best practice to binding obligation — and every one of them rewards organizations that can already prove their AI acted within authority."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {WHY_NOW.map((e) => (
            <div key={e.name} className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">{e.date}</div>
              <h3 className="mt-2 font-serif text-xl text-ink">{e.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{e.claim}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 — Four layers visual */}
      <section>
        <SectionHead
          eyebrow="The assurance model"
          title="Four layers of progressive institutional assurance"
          intro="Each layer adds a guarantee on the one beneath it — identity, then verification, then fleet-scale lineage, then cryptographic permanence. Together they form one governance substrate."
        />
        <div className="grid items-stretch gap-3 md:grid-cols-4">
          {LAYERS.map((l, i) => (
            <div key={l.id} className="relative">
              <Link
                to={l.to}
                className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-5 transition hover:border-accent/40"
              >
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/30 bg-accent/5 font-serif text-lg text-accent">
                    {l.id}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-ink-muted">Layer {l.id}</span>
                </div>
                <h3 className="mt-3 font-serif text-lg text-ink">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{l.line}</p>
                <span className="mt-4 text-sm font-medium text-accent">Explore →</span>
              </Link>
              {i < LAYERS.length - 1 ? (
                <div aria-hidden="true" className="pointer-events-none absolute right-[-10px] top-1/2 hidden -translate-y-1/2 text-accent/50 md:block">
                  →
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Governance posture — static binary proof statements (no live feed) */}
      <section className="rounded-2xl border border-line bg-carbon-panel p-6">
        <div className="text-xs uppercase tracking-widest text-ink-muted">Governance posture</div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "OPERATIONAL", label: "Sentinel enforcement status" },
            { value: "FAIL-CLOSE", label: "Default governance posture" },
            { value: "POST-QUANTUM", label: "Cryptographic standard" },
            { value: "ZERO EXCEPTIONS", label: "Governance invariant record" },
          ].map((s) => (
            <div key={s.value}>
              <div className="text-2xl font-semibold tracking-tight text-accent">{s.value}</div>
              <div className="text-xs text-ink-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 — Preserved: PlatformStatsSection (Google compliance Gap 3) */}
      <section>
        <PlatformStatsSection />
      </section>

      {/* 4 — Preserved: DemoRequestBanner (Google compliance Gap 2) */}
      <section>
        <DemoRequestBanner />
      </section>

      {/* 6 — Closing CTAs */}
      <section className="rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center md:p-10">
        <h2 className="font-serif text-display-md text-ink">Prove every AI decision — before a regulator asks</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink-secondary">
          Bring your security, legal, and compliance reviewers. We will walk the full enforcement
          architecture and show you exactly how authority, attribution, and auditability are
          guaranteed at the execution layer.
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
            Explore Technical Architecture
          </Link>
        </div>
      </section>
    </div>
  );
}
