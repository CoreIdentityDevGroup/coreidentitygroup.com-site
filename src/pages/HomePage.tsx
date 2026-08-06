import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { SectionHead } from "../components/institutional";

type FrameworkStage = {
  number: string;
  title: string;
  role: string;
  description: string;
  to: string;
};

const FRAMEWORK: FrameworkStage[] = [
  {
    number: "01",
    title: "Trust Infrastructure",
    role: "Foundation",
    description:
      "The architecture that preserves authority, accountability, identity, policy, and evidence as execution becomes autonomous.",
    to: "/trust-infrastructure",
  },
  {
    number: "02",
    title: "Intelligence",
    role: "Capability",
    description:
      "Human and artificial intelligence operating through legitimate authority, enforceable boundaries, and institutional intent.",
    to: "/intelligence",
  },
  {
    number: "03",
    title: "Assurance",
    role: "Continuous proof",
    description:
      "Persistent verification that delegated execution remains governed, attributable, and capable of surviving scrutiny.",
    to: "/assurance",
  },
  {
    number: "04",
    title: "Trust",
    role: "Institutional outcome",
    description:
      "The confidence required to delegate consequential execution while preserving control and legitimacy.",
    to: "/trust",
  },
];

const INDUSTRIES = [
  ["Sovereign & Public Sector", "/governance/sovereign"],
  ["Financial Services", "/governance/bfsi"],
  ["Healthcare", "/governance/healthcare"],
  ["Private Capital", "/governance/private-capital"],
  ["Critical Infrastructure", "/governance/regulated"],
  ["Manufacturing", "/governance/manufacturing"],
] as const;

const RESEARCH = [
  {
    label: "Thought Leadership",
    title: "When AI Governance Is Not Enough",
    description:
      "Why autonomous execution requires architecture that preserves authority, accountability, identity, and evidence at machine speed.",
    to: "/resources",
  },
  {
    label: "Executive Analysis",
    title: "The Trust Deficit in Autonomous Systems",
    description:
      "The institutional problem is no longer whether AI can act. It is whether organizations can prove it acted legitimately.",
    to: "/blog",
  },
] as const;

export default function HomePage() {
  return (
    <div className="space-y-24 pb-8 md:space-y-32">
      <Helmet>
        <title>CoreIdentity Development Group | Trust Infrastructure</title>
        <meta
          name="description"
          content="CoreIdentity Development Group establishes the Trust Infrastructure that enables organizations to deploy Intelligence with continuous Assurance—creating Trust while ensuring they remain in control."
        />
      </Helmet>

      <section className="cidg-v51-hero relative isolate min-h-[660px] overflow-hidden rounded-[2rem] border border-line">
        <div className="cidg-v51-network" aria-hidden="true" />
        <div className="cidg-v51-horizon" aria-hidden="true" />
        <img
          src="/logo-mark.png"
          alt=""
          aria-hidden="true"
          className="cidg-v51-sphere pointer-events-none absolute right-[-6rem] top-1/2 hidden h-[36rem] w-[36rem] -translate-y-1/2 xl:block"
        />

        <div className="relative z-10 flex min-h-[660px] items-center px-6 py-16 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.26em] text-platinum">
              Trust Infrastructure · Intelligence · Assurance · Trust
            </div>
            <h1 className="mt-7 max-w-4xl font-serif text-display-2xl leading-[1.01] tracking-tight text-ink md:text-display-3xl">
              The Trust Infrastructure for the Autonomous Era
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink-secondary md:text-xl">
              Artificial intelligence is accelerating autonomous execution. CoreIdentity Development Group
              establishes the Trust Infrastructure that enables organizations to deploy Intelligence with
              continuous Assurance—creating Trust while ensuring they remain in control.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/trust-infrastructure"
                className="cidg-btn-primary inline-flex items-center justify-center rounded-xl bg-platinum px-6 py-3 text-sm font-semibold text-carbon"
              >
                Explore Trust Infrastructure
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center rounded-xl border border-line bg-carbon/40 px-6 py-3 text-sm font-medium text-ink transition hover:border-platinum/40 hover:bg-carbon-panel"
              >
                Read Our Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHead
          eyebrow="The institutional shift"
          title="Autonomous execution changes the governance requirement"
          intro="Organizations are no longer only using artificial intelligence to inform human decisions. They are beginning to delegate execution. That transition moves governance from documentation into live institutional infrastructure."
        />
        <div className="cidg-v51-shift grid gap-0 overflow-hidden rounded-[2rem] border border-line lg:grid-cols-3">
          {[
            ["01", "Human-speed governance", "Policies, approvals, and controls designed around people remaining in the execution loop."],
            ["02", "Machine-speed execution", "Intelligent systems increasingly initiate actions, delegate work, and operate across institutional boundaries."],
            ["03", "Infrastructure-level control", "Authority, policy, identity, accountability, and evidence must remain enforceable during execution."],
          ].map(([number, title, copy]) => (
            <article key={number} className="border-b border-line bg-carbon-panel p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <div className="text-xs font-semibold tracking-[0.2em] text-platinum">{number}</div>
              <h3 className="mt-6 font-serif text-2xl text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHead
          eyebrow="The CoreIdentity Framework"
          title="From Intelligence to Trust"
          intro="Intelligence alone is not enough. Institutions require continuous Assurance before they can establish Trust. Trust Infrastructure makes that progression operational."
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {FRAMEWORK.map((stage, index) => (
            <Link
              key={stage.title}
              to={stage.to}
              className="cidg-v51-framework-card group relative min-h-[19rem] rounded-2xl border border-line bg-carbon-panel p-6 no-underline transition hover:border-platinum/35"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.2em] text-platinum">{stage.number}</span>
                <span className="text-xs text-ink-muted">{stage.role}</span>
              </div>
              <h3 className="mt-10 font-serif text-2xl text-ink">{stage.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-secondary">{stage.description}</p>
              <span className="absolute bottom-6 left-6 text-sm font-semibold text-platinum transition group-hover:text-ink">
                Explore →
              </span>
              {index < FRAMEWORK.length - 1 ? (
                <span aria-hidden="true" className="absolute -right-[0.9rem] top-1/2 z-10 hidden -translate-y-1/2 text-xl text-platinum/55 lg:block">
                  →
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </section>

      <section className="cidg-v51-ecosystem overflow-hidden rounded-[2rem] border border-line">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="bg-carbon-panel p-8 md:p-10 lg:p-12">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-platinum">
              The Governance Ecosystem
            </div>
            <h2 className="mt-5 font-serif text-display-md tracking-tight text-ink md:text-display-lg">
              One architecture for governed autonomous execution
            </h2>
            <p className="mt-5 leading-relaxed text-ink-secondary">
              CoreIdentity integrates governance doctrine, operational architecture, advisory capability, and
              continuously verifiable controls as one institutional system. Intelligence remains powerful—but
              never independent of legitimate authority.
            </p>
            <Link to="/about" className="mt-7 inline-flex text-sm font-semibold text-platinum transition hover:text-ink">
              Understand CoreIdentity →
            </Link>
          </div>
          <div className="cidg-v51-blueprint relative p-8 md:p-10 lg:p-12">
            <div className="relative z-10 grid gap-3">
              {[
                ["Trust Infrastructure", "Architectural discipline"],
                ["Autonomous Execution Governance", "Operational doctrine"],
                ["Institutional Chain of Legitimacy", "Continuous governance model"],
                ["Governed Execution", "Operational capability"],
              ].map(([title, role], index) => (
                <div key={title} className="flex items-center gap-5 rounded-xl border border-line bg-carbon/75 px-5 py-4 backdrop-blur">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-platinum/30 text-xs font-semibold text-platinum">
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
        </div>
      </section>

      <section>
        <SectionHead
          eyebrow="Institutional applicability"
          title="Built for environments where governance failure carries consequence"
          intro="CoreIdentity is designed for regulated, fiduciary, capital-intensive, and mission-critical institutions delegating consequential execution."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(([label, to]) => (
            <Link key={label} to={to} className="cidg-card flex items-center justify-between rounded-xl border border-line bg-carbon-panel px-5 py-5 no-underline">
              <span className="font-medium text-ink">{label}</span>
              <span className="text-platinum">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <SectionHead
          eyebrow="Research & doctrine"
          title="Advancing the discipline"
          intro="CoreIdentity publishes institutional analysis, executive briefs, and doctrine for leaders navigating autonomous execution."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {RESEARCH.map((item) => (
            <Link key={item.title} to={item.to} className="cidg-card group rounded-2xl border border-line bg-carbon-panel p-7 no-underline">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-platinum">{item.label}</div>
              <h3 className="mt-5 font-serif text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{item.description}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-platinum transition group-hover:text-ink">Read more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="cidg-v51-closing relative overflow-hidden rounded-[2rem] border border-platinum/20 px-6 py-14 text-center md:px-10 md:py-20">
        <div className="relative z-10">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-platinum">
            Our operating principle
          </div>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-display-md tracking-tight text-ink md:text-display-lg">
            Humans lead. Machines execute. Governance protects both.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-secondary">
            CoreIdentity is establishing Trust Infrastructure as the institutional foundation for autonomous execution.
          </p>
          <Link
            to="/contact"
            className="cidg-btn-primary mt-8 inline-flex items-center justify-center rounded-xl bg-platinum px-6 py-3 text-sm font-semibold text-carbon"
          >
            Begin an Institutional Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
