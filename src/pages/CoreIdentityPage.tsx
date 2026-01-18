import heroImg from "../assets/images/coreidentity-governance-hero.webp";

export function CoreIdentityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          CoreIdentity
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-white/70">
          Governance infrastructure for agentic execution—defining authority, enforcing constraints,
          and preserving auditability from policy definition through execution and outcome.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img
            src={heroImg}
            alt="CoreIdentity — AI operates under governance"
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Three-layer governance stack */}
      <section className="mb-12">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">The governed execution stack</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            CoreIdentity is organized as a three-layer platform. Each layer has a distinct job, a clear
            boundary, and a clean contract—so we can scale across industries without losing control.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/80">Layer 1</div>
            <div className="mt-1 text-xl font-semibold text-white">Sentinel OS</div>
            <div className="mt-2 text-white/70">
              Governance, policy, identity, permissions, audit logging, constraints, and enforcement.
              Humans lead; machines execute—Sentinel keeps that authority explicit.
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/60">
              <li>Policy + controls at the execution layer</li>
              <li>Authorization boundaries + traceability</li>
              <li>Risk containment + compliance posture</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/80">Layer 2</div>
            <div className="mt-1 text-xl font-semibold text-white">Nexus OS</div>
            <div className="mt-2 text-white/70">
              Orchestration and tasking. Nexus coordinates workflows, tools, agents, approvals, and
              handoffs—while staying inside Sentinel’s rules.
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/60">
              <li>Workflow routing + escalation</li>
              <li>Agent orchestration + tool use</li>
              <li>Human-in-the-loop checkpoints</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/80">Layer 3</div>
            <div className="mt-1 text-xl font-semibold text-white">SmartNation AI</div>
            <div className="mt-2 text-white/70">
              Deployment layer: packaged, governed digital labor offerings (vertical agents + workflows)
              that operate in real environments with controls that survive production.
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/60">
              <li>Vertical “digital workforce” packages</li>
              <li>Integration-ready delivery patterns</li>
              <li>Measured outcomes + reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Operational Governance Verticals */}
      <section className="mb-12">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">Operational governance verticals</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            These are the initial markets we serve through SmartNation AI packages, governed by Sentinel
            and orchestrated by Nexus. We start with revenue-first execution (LegalOps + ComplianceOps),
            while running the HospitalityOps POC in parallel.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-lg font-semibold text-white">LegalOps</div>
            <p className="mt-2 text-white/70">
              Governed autonomous workflows for law firms and legal departments—intake, document
              triage, matter support, deadline discipline, evidence organization, and audit-ready output.
            </p>
            <div className="mt-4 text-sm text-white/60">
              Launch focus: <span className="font-semibold text-white/80">Yes</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-lg font-semibold text-white">ComplianceOps</div>
            <p className="mt-2 text-white/70">
              Policy-driven compliance execution—control checks, evidence capture, reporting, exception
              handling, and continuous monitoring with traceability.
            </p>
            <div className="mt-4 text-sm text-white/60">
              Launch focus: <span className="font-semibold text-white/80">Yes</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-lg font-semibold text-white">HospitalityOps</div>
            <p className="mt-2 text-white/70">
              Operational automation for hospitality operators—starting with the Cole Hospitality POC.
              We run this in parallel as a validated “production POC” track while LegalOps/ComplianceOps
              generate revenue.
            </p>
            <div className="mt-4 text-sm text-white/60">
              Parallel POC track: <span className="font-semibold text-white/80">Active</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-lg font-semibold text-white">LaborOps</div>
            <p className="mt-2 text-white/70">
              Workforce operations and back-office execution—routing tasks, enforcing SOPs, capturing
              evidence, and producing audit-ready records across operational teams.
            </p>
            <div className="mt-4 text-sm text-white/60">
              Launch focus: <span className="font-semibold text-white/80">Planned</span>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold tracking-wide text-white/80">Link strategy</div>
          <p className="mt-2 text-white/70">
            For now, this page is the canonical summary. If/when we need supporting pages, we’ll add
            one page per vertical with: problem → governed solution → controls → workflow → outcomes.
            No placeholder links until we have real content.
          </p>
        </div>
      </section>

      {/* Positioning / close */}
      <section>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl font-semibold text-white">Operating principle</h3>
          <p className="mt-2 text-white/70">
            We do not sell “AI.” We sell governed execution: measurable outcomes with explicit authority,
            enforced constraints, and auditability built in.
          </p>
        </div>
      </section>
    </div>
  );
}

export default CoreIdentityPage;
