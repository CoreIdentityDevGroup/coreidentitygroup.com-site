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

        {/* Kicker tagline (new, non-duplicate) */}
        <div className="mt-8 text-xs font-medium tracking-[0.22em] text-white/50">
          GOVERNANCE AT THE EXECUTION LAYER
        </div>

        {/* Main paragraph (updated to lead into the image/overlay text) */}
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
          Our infrastructure establishes the governance layer beneath agentic
          systems—defining authority, enforcing constraints, and maintaining
          visibility from policy definition through execution and outcome.
        </p>

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

      {/* GLOBAL GOVERNANCE VISUAL (image overlay text stays untouched) */}
      <section className="mt-20">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
          <img
            src={globalAIGovernanceHero}
            alt="Global AI governance and controlled agentic execution"
            className="w-full object-cover"
          />
          <div className="px-6 py-4 text-sm text-white/60">
            Global governance signals, enforceable constraints, and auditable
            execution.
          </div>
        </div>
      </section>
    </div>
  );
}
