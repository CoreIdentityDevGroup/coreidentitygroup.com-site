import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { SectionHead } from "../components/institutional";

const FRAMEWORK = [
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

      <section className="cidg-v602-hero relative overflow-hidden rounded-[2rem] border border-stone-200">
        <div className="cidg-v602-grid" aria-hidden="true" />
        <div className="grid min-h-[650px] items-center gap-10 px-6 py-14 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14">
          <div className="relative z-10">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6f47]">
              Trust Infrastructure · Intelligence · Assurance · Trust
            </div>
            <h1 className="mt-6 max-w-4xl font-serif text-display-2xl leading-[1.02] tracking-tight text-[#1f2430] md:text-display-3xl">
              The Trust Infrastructure for the Autonomous Era
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#58606f] md:text-xl">
              Artificial intelligence is accelerating autonomous execution. CoreIdentity Development Group
              establishes the Trust Infrastructure that enables organizations to deploy Intelligence with
              continuous Assurance—creating Trust while ensuring they remain in control.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/trust-infrastructure"
                className="inline-flex items-center justify-center rounded-xl bg-[#1f2430] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#303744]"
              >
                Explore Trust Infrastructure
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center rounded-xl border border-[#c9c1b4] bg-white/80 px-6 py-3 text-sm font-semibold text-[#1f2430] transition hover:border-[#8b6f47] hover:bg-white"
              >
                Read Our Research
              </Link>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="cidg-v602-logo-stage relative flex aspect-square w-full max-w-[520px] items-center justify-center rounded-full">
              <div className="cidg-v602-orbit cidg-v602-orbit-one" aria-hidden="true" />
              <div className="cidg-v602-orbit cidg-v602-orbit-two" aria-hidden="true" />
              <div className="cidg-v602-orbit cidg-v602-orbit-three" aria-hidden="true" />
              <img
                src="/logo-mark.png"
                alt="CoreIdentity CI Sphere"
                className="cidg-v602-logo relative z-10 h-[78%] w-[78%] object-contain"
              />
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
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["01", "Human-speed governance", "Policies, approvals, and controls designed around people remaining in the execution loop."],
            ["02", "Machine-speed execution", "Intelligent systems increasingly initiate actions, delegate work, and operate across institutional boundaries."],
            ["03", "Infrastructure-level control", "Authority, policy, identity, accountability, and evidence must remain enforceable during execution."],
          ].map(([number, title, copy]) => (
            <article key={number} className="cidg-v602-card rounded-2xl border border-stone-200 bg-white p-7">
              <div className="text-xs font-semibold tracking-[0.2em] text-[#8b6f47]">{number}</div>
              <h3 className="mt-6 font-serif text-2xl text-[#1f2430]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#606877]">{copy}</p>
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
              className="cidg-v602-card group relative min-h-[19rem] rounded-2xl border border-stone-200 bg-white p-6 no-underline"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#8b6f47]">{stage.number}</span>
                <span className="text-xs text-[#7a818f]">{stage.role}</span>
              </div>
              <h3 className="mt-10 font-serif text-2xl text-[#1f2430]">{stage.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#606877]">{stage.description}</p>
              <span className="absolute bottom-6 left-6 text-sm font-semibold text-[#8b6f47] transition group-hover:text-[#1f2430]">
                Explore →
              </span>
              {index < FRAMEWORK.length - 1 ? (
                <span aria-hidden="true" className="absolute -right-[0.9rem] top-1/2 z-10 hidden -translate-y-1/2 text-xl text-[#9a8b74] lg:block">
                  →
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-[#1f2430] px-6 py-14 text-center text-white md:px-10 md:py-18">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8c6a8]">Our operating principle</div>
        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-display-md tracking-tight text-white md:text-display-lg">
          Humans lead. Machines execute. Governance protects both.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/70">
          CoreIdentity is establishing Trust Infrastructure as the institutional foundation for autonomous execution.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#d8c6a8] px-6 py-3 text-sm font-semibold text-[#1f2430] transition hover:bg-white"
        >
          Begin an Institutional Conversation
        </Link>
      </section>
    </div>
  );
}
