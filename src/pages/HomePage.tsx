import { Link } from "@tanstack/react-router";
import globalAIGovernanceHero from "../assets/images/global-ai-governance-hero.webp";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* HERO */}
      <section className="max-w-4xl">
        <h1 className="text-5xl font-semibold tracking-tight">
          Governance-first infrastructure
          <br />
          for safe, auditable agentic execution.
        </h1>

        {/* TAGLINE (EYEBROW) */}
        <p className="mt-6 text-sm uppercase tracking-wide text-white/60">
          Governance at the execution layer
        </p>

        {/* PRIMARY PARAGRAPH */}
        <p className="mt-4 text-lg text-white/70 leading-relaxed">
          Our infrastructure establishes the governance layer beneath agentic
          systems—defining authority, enforcing constraints, and maintaining
          visibility from policy definition through execution and outcome.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/coreidentity-technologies"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
          >
            Explore CoreIdentity Technologies
          </Link>

          <a
            href="mailto:info@coreholdingcorp.com"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
          >
            Talk to us
          </a>
        </div>
      </section>

      {/* GLOBAL GOVERNANCE VISUAL */}
      <section className="mt-16">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
          <img
            src={globalAIGovernanceHero}
            alt="Global AI governance and controlled agentic execution"
            className="w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
