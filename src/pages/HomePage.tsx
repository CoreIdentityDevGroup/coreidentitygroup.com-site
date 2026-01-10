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

        {/* Updated paragraph ONLY (leads into the image below) */}
        <p className="mt-6 text-lg text-white/70 max-w-3xl leading-relaxed">
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

      {/* GLOBAL GOVERNANCE VISUAL (keep image + baked-in overlay text untouched) */}
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

      {/* VALUE PILLARS */}
      <section className="mt-16 grid gap-6">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-lg font-semibold">Policy-first</div>
          <div className="mt-2 text-white/65 leading-relaxed">
            Define what AI can and cannot do—then enforce it with explicit
            constraints, approvals, and guardrails.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-lg font-semibold">Audit-ready</div>
          <div className="mt-2 text-white/65 leading-relaxed">
            Capture traceable evidence of inputs, actions, approvals, and
            outcomes—built for review, compliance, and trust.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-lg font-semibold">Operational</div>
          <div className="mt-2 text-white/65 leading-relaxed">
            Move from demos to real execution with controls that survive
            production complexity, incidents, and change.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-lg font-semibold">Next step</div>
          <div className="mt-2 text-white/65 leading-relaxed">
            Start with the governed execution stack—Sentinel OS (governance),
            Nexus OS (orchestration), and SmartNation AI (deployment). We keep
            authority explicit: humans lead, machines execute, governance
            protects both.
          </div>
        </div>
      </section>
    </div>
  );
}
