import { Link } from "@tanstack/react-router";
import globalAIGovernanceHero from "../assets/images/global-ai-governance-hero.webp";

export function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* HERO */}
      <section className="max-w-4xl">
        <h1 className="text-5xl font-semibold tracking-tight">
          Governance-first infrastructure
          <br />
          for agentic execution.
        </h1>

        <p className="mt-6 text-lg text-white/70 max-w-3xl leading-relaxed">
          Governance-first infrastructure for safe, auditable agentic execution.
          We build the control plane that keeps AI operations constrained, observable, and accountable—so organizations can deploy
          agentic capability without losing policy, approvals, and traceable evidence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/coreidentity-technologies"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
          >
            Explore CoreIdentity Technologies
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
          >
            Talk to us
          </Link>
        </div>
      </section>

      {/* GLOBAL GOVERNANCE VISUAL */}
      <section className="mt-10">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
          <img
            src={globalAIGovernanceHero}
            alt="Global AI governance and controlled agentic execution"
            className="w-full object-cover"
            loading="lazy"
          />
          <div className="px-6 py-4 text-sm text-white/60">
            Global governance signals, enforceable constraints, and auditable execution.
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
