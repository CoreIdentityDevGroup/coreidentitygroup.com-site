import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { SectionHead } from "../components/institutional";

type FrameworkStage = {
  number: string;
  title: string;
  role: string;
  description: string;
};

const FRAMEWORK: FrameworkStage[] = [
  {
    number: "01",
    title: "Trust Infrastructure",
    role: "Foundation",
    description:
      "The institutional architecture that preserves authority, accountability, identity, policy, and evidence as execution becomes autonomous.",
  },
  {
    number: "02",
    title: "Intelligence",
    role: "Capability",
    description:
      "Human and artificial intelligence operating through defined authority, enforceable boundaries, and institutional intent.",
  },
  {
    number: "03",
    title: "Assurance",
    role: "Continuous proof",
    description:
      "Persistent verification that delegated execution remains legitimate, governed, attributable, and capable of surviving scrutiny.",
  },
  {
    number: "04",
    title: "Trust",
    role: "Institutional outcome",
    description:
      "The confidence required to delegate consequential execution while preserving control, accountability, and organizational legitimacy.",
  },
];

const CAPABILITIES = [
  {
    title: "Advisory",
    description:
      "Executive governance strategy, institutional readiness, operating-model design, and implementation guidance for autonomous execution.",
    to: "/ciag",
    label: "Explore Advisory",
  },
  {
    title: "Technology",
    description:
      "Operational architecture for governed identity, deterministic authorization, runtime enforcement, orchestration, and verifiable evidence.",
    to: "/platform",
    label: "Explore Architecture",
  },
  {
    title: "Research",
    description:
      "Doctrine, executive briefs, white papers, and institutional analysis advancing Trust Infrastructure as a distinct discipline.",
    to: "/resources",
    label: "Read the Research",
  },
] as const;

export default function HomePage() {
  return (
    <div className="space-y-24 pb-6 md:space-y-32">
      <Helmet>
        <title>CoreIdentity Development Group | Trust Infrastructure</title>
        <meta
          name="description"
          content="CoreIdentity Development Group establishes the Trust Infrastructure that enables organizations to deploy Intelligence with continuous Assurance—creating Trust while ensuring they remain in control."
        />
      </Helmet>

      <section className="cidg-v5-hero relative isolate overflow-hidden rounded-[2rem] border border-line bg-carbon-panel/40 px-6 py-14 md:px-10 md:py-20">
        <div className="cidg-v5-hero-grid" aria-hidden="true" />
        <div className="cidg-v5-hero-glow" aria-hidden="true" />
        <img
          src="/logo-mark.png"
          alt=""
          aria-hidden="true"
          className="cidg-v5-sphere pointer-events-none absolute right-[-4rem] top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 xl:block"
        />

        <div className="relative z-10 max-w-4xl">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-platinum">
            Trust Infrastructure · Intelligence · Assurance · Trust
          </div>
          <h1 className="mt-6 max-w-4xl font-serif text-display-2xl leading-[1.02] tracking-tight text-ink md:text-display-3xl">
            The Trust Infrastructure for the Autonomous Era
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink-secondary md:text-xl">
            Artificial intelligence is accelerating autonomous execution. CoreIdentity Development Group
            establishes the Trust Infrastructure that enables organizations to deploy Intelligence with
            continuous Assurance—creating Trust while ensuring they remain in control.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/platform"
              className="cidg-btn-primary inline-flex items-center justify-center rounded-xl bg-platinum px-6 py-3 text-sm font-semibold text-carbon"
            >
              Explore Trust Infrastructure
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center rounded-xl border border-line bg-carbon/30 px-6 py-3 text-sm font-medium text-ink transition hover:border-platinum/40 hover:bg-carbon-panel"
            >
              Read Our Research
            </Link>
          </div>
        </div>
      </section>

      <section>
        <SectionHead
          eyebrow="The institutional shift"
          title="Autonomous execution changes the governance requirement"
          intro="Institutions are moving beyond using artificial intelligence to inform human decisions. They are beginning to delegate execution. When intelligent systems can act, coordinate, and make consequential decisions at machine speed, governance can no longer remain static, manual, or retrospective."
        />
        <div className="grid gap-5 md:grid-cols-3">
          <article className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-platinum">Past</div>
            <h3 className="mt-3 font-serif text-xl text-ink">Governance as documentation</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
              Policies, approvals, and controls were designed around human-speed execution and periodic review.
            </p>
          </article>
          <article className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-platinum">Present</div>
            <h3 className="mt-3 font-serif text-xl text-ink">Intelligence becomes operational</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
              Autonomous systems increasingly initiate actions, delegate work, and operate across institutional boundaries.
            </p>
          </article>
          <article className="cidg-card rounded-2xl border border-platinum/20 bg-platinum/[0.04] p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-platinum">Required</div>
            <h3 className="mt-3 font-serif text-xl text-ink">Governance becomes infrastructure</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
              Authority, policy, identity, evidence, and accountability must remain continuously enforceable during execution.
            </p>
          </article>
        </div>
      </section>

      <section>
        <SectionHead
          eyebrow="The CoreIdentity Framework"
          title="From Intelligence to Trust"
          intro="Intelligence alone is not enough. Institutions require continuous Assurance before they can establish Trust. Trust Infrastructure makes that progression operational."
        />

        <div className="cidg-v5-framework grid gap-3 lg:grid-cols-4">
          {FRAMEWORK.map((stage, index) => (
            <article
              key={stage.title}
              className="cidg-v5-framework-card relative rounded-2xl border border-line bg-carbon-panel p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-platinum">
                  {stage.number}
                </span>
                <span className="text-xs text-ink-muted">{stage.role}</span>
              </div>
              <h3 className="mt-8 font-serif text-2xl text-ink">{stage.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{stage.description}</p>
              {index < FRAMEWORK.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute -right-[0.85rem] top-1/2 z-10 hidden -translate-y-1/2 text-xl text-platinum/60 lg:block"
                >
                  →
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-line bg-carbon-panel/70 p-7 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-platinum">
              The Governance Ecosystem
            </div>
            <h2 className="mt-4 font-serif text-display-md tracking-tight text-ink md:text-display-lg">
              One institutional architecture for governed autonomous execution
            </h2>
            <p className="mt-4 leading-relaxed text-ink-secondary">
              CoreIdentity brings governance doctrine, operational architecture, advisory capability, and
              continuously verifiable controls together as one Governance Ecosystem. The objective is not to
              constrain Intelligence. It is to ensure capability remains subordinate to legitimate institutional
              authority.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center text-sm font-semibold text-platinum transition hover:text-ink"
            >
              Understand CoreIdentity →
            </Link>
          </div>

          <div className="grid gap-3">
            {[
              ["Trust Infrastructure", "Architectural discipline"],
              ["Autonomous Execution Governance", "Operational doctrine"],
              ["Institutional Chain of Legitimacy", "Continuous governance model"],
              ["Governed Execution", "Operational capability"],
            ].map(([title, role], index) => (
              <div key={title} className="relative flex items-center gap-5 rounded-xl border border-line bg-carbon px-5 py-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-platinum/30 text-xs font-semibold text-platinum">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="font-medium text-ink">{title}</div>
                  <div className="text-sm text-ink-muted">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionHead
          eyebrow="Institutional capabilities"
          title="Architecture, execution, and evidence"
          intro="CoreIdentity operates across the strategic, technical, and intellectual dimensions required to establish Trust Infrastructure at institutional scale."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {CAPABILITIES.map((capability) => (
            <article key={capability.title} className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6">
              <h3 className="font-serif text-2xl text-ink">{capability.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">{capability.description}</p>
              <Link to={capability.to} className="mt-6 text-sm font-semibold text-platinum transition hover:text-ink">
                {capability.label} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="cidg-v5-closing relative overflow-hidden rounded-[2rem] border border-platinum/20 px-6 py-12 text-center md:px-10 md:py-16">
        <div className="relative z-10">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-platinum">
            Our operating principle
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-display-md tracking-tight text-ink md:text-display-lg">
            Humans lead. Machines execute. Governance protects both.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-secondary">
            CoreIdentity is establishing Trust Infrastructure as the institutional foundation for autonomous execution.
          </p>
          <Link
            to="/contact"
            className="cidg-btn-primary mt-7 inline-flex items-center justify-center rounded-xl bg-platinum px-6 py-3 text-sm font-semibold text-carbon"
          >
            Begin an Institutional Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
