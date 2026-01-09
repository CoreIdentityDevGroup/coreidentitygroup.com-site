import { Link } from "@tanstack/react-router";
import globalAIGovernanceHero from "../assets/images/global-ai-governance-hero.webp";

function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* HERO */}
      <section className="max-w-4xl">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-white/70">
          CORE HOLDING CORPORATION
        </div>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Governance-first infrastructure
          <br />
          for safe, auditable agentic execution.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
          We build the control plane that keeps AI operations constrained,
          observable, and accountable—so organizations can deploy agentic
          capability without losing policy, approvals, and traceable evidence.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/coreidentity-technologies"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/15 transition"
          >
            Explore CoreIdentity Technologies
          </Link>

          <a
            href="mailto:info@coreholdingcorp.com"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition"
          >
            Talk to us
          </a>
        </div>
      </section>

      {/* GLOBAL GOVERNANCE VISUAL */}
      <section className="mt-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <img
            src={globalAIGovernanceHero}
            alt="Global AI governance signals and controlled agentic execution"
            className="h-auto w-full object-cover"
            loading="lazy"
          />

          {/* NOTE: This is intentionally NOT the same text as the H1 to avoid duplication */}
          <div className="absolute left-0 right-0 top-0 px-6 py-5 text-sm text-white/80">
            Global governance signals, enforceable constraints, and auditable
            execution.
          </div>

          <div className="px-6 py-4 text-sm text-white/60">
            Control plane visibility from policy to execution—built for review,
            compliance, and trust.
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mt-14">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold text-white">Policy-first</div>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Define what AI can and cannot do—then enforce it with explicit
              constraints, approvals, and guardrails.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold text-white">Audit-ready</div>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Capture traceable evidence of inputs, actions, approvals, and
              outcomes—built for review, compliance, and trust.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold text-white">Operational</div>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Move from demos to real execution with controls that survive
              production complexity, incidents, and change.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="mt-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold text-white">Next step</div>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-white/65">
            Start with the governed execution stack—Sentinel OS (governance),
            Nexus OS (orchestration), and SmartNation AI (deployment). We keep
            authority explicit: humans lead, machines execute, governance
            protects both.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
export { HomePage };
