import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ago1Route } from "../router";

type FAQItem = { q: string; a: ReactNode };

const faq: FAQItem[] = [
  {
    q: "What is Core Holding Corporation (CHC)?",
    a: (
      <p className="text-muted-foreground leading-relaxed">
        CHC is the parent organization that governs a portfolio of systems and operating capabilities designed for safe, auditable agentic execution. CHC
        exists to enforce clarity: what can be automated, under what controls, with what evidence, and with what escalation path when uncertainty appears.
      </p>
    ),
  },
  {
    q: "What does “governance-first” mean in practice?",
    a: (
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        <p>
          Governance-first means the rules and evidence requirements exist <em>before</em> automation is allowed to run. The system must be able to answer:
          who authorized this, what policy applies, what data was used, what happened, and how do we prove it.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Policy and decision rights are explicit.</li>
          <li>Approvals are traceable and logged.</li>
          <li>Outputs are attributable and reviewable.</li>
          <li>When uncertain, the system fails closed and escalates.</li>
        </ul>
      </div>
    ),
  },
  {
    q: "What is “fail-closed” and why do you emphasize it?",
    a: (
      <p className="text-muted-foreground leading-relaxed">
        Fail-closed means the system defaults to <strong>stopping safely</strong> rather than guessing. If authority, policy, inputs, or confidence are
        insufficient, the correct behavior is escalation—so a human can decide. This is the opposite of “autonomy-first.”
      </p>
    ),
  },
  {
    q: "How do Sentinel, Nexus, and SmartNation relate to each other?",
    a: (
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        <p>They form a three-layer governed execution stack:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <Link to="/sentinel" className="text-blue-100 hover:text-blue-200">
              Sentinel OS
            </Link>{" "}
            — governance: policy enforcement, approvals, identity boundaries, auditability, and evidence capture.
          </li>
          <li>
            <Link to="/nexus" className="text-blue-100 hover:text-blue-200">
              Nexus OS
            </Link>{" "}
            — orchestration: workflow coordination, integrations, retries, recovery, and controlled execution.
          </li>
          <li>
            <Link to="/smartnation" className="text-blue-100 hover:text-blue-200">
              SmartNation AI
            </Link>{" "}
            — delivery surface: packages governed deployments and repeatable patterns by industry/use case.
          </li>
        </ul>
      </div>
    ),
  },
  {
    q: "What is AGO‑1?",
    a: (
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        <p>
          <Link to={ago1Route.to} className="text-blue-100">
  AGO-1
</Link>
          is an internal operating agent (non-client-facing) used to harden the execution stack in real workflows. AGO‑1 runs under Sentinel OS and Nexus OS
          controls and is used to augment CHC and CoreIdentity AI Advisory Group operations.
        </p>
        <p>
          AGO‑1 also serves as a controlled pilot pattern for hospitality workflows (beginning with the Cole Hospitality pilot), producing repeatable
          evidence and governance templates that can later be packaged as SmartNation AI deployment patterns.
        </p>
      </div>
    ),
  },
  {
    q: "Are you replacing human positions?",
    a: (
      <p className="text-muted-foreground leading-relaxed">
        No. CHC’s posture is augmentation: removing friction, waste, and cognitive overload so human talent operates at a higher level. We avoid automating
        decisions requiring ethics, accountability, empathy, or human judgment—and we keep people in the loop.
      </p>
    ),
  },
  {
    q: "What is CoreIdentity?",
    a: (
      <p className="text-muted-foreground leading-relaxed">
        <Link to="/coreidentity" className="text-blue-100 hover:text-blue-200">
          CoreIdentity
        </Link>{" "}
        is the platform company that owns and monetizes governed digital labor. It houses the execution stack and the productization of repeatable
        deployments.
      </p>
    ),
  },
  {
    q: "What is CoreIdentity Advisory Group?",
    a: (
      <p className="text-muted-foreground leading-relaxed">
        <Link to="/coreidentityadvisorygroup" className="text-blue-100 hover:text-blue-200">
          CoreIdentity Advisory Group
        </Link>{" "}
        is the advisory capability used for early revenue, executive readiness and risk reviews, and governance-first assessments. It also feeds validated
        operational learnings back into the platform roadmap.
      </p>
    ),
  },
  {
    q: "What is AgentIdentity Systems?",
    a: (
      <p className="text-muted-foreground leading-relaxed">
        <Link to="/agentidentitysystems" className="text-blue-100 hover:text-blue-200">
          AgentIdentity Systems
        </Link>{" "}
        is a governance- and identity-focused system component intended for regulated environments. It is designed to be compatible with Sentinel OS and can
        be positioned as an acquisition-grade capability.
      </p>
    ),
  },
  {
    q: "How do you approach integrations and data access?",
    a: (
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        <p>
          Integrations are treated as controlled interfaces, not conveniences. We default to least privilege and explicit scopes: what data is accessed,
          why, for how long, and what gets retained.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Least privilege / scoped tokens</li>
          <li>Audit logging and evidence retention rules</li>
          <li>Explicit escalation paths for exceptions</li>
          <li>Data minimization: only what is required for the task</li>
        </ul>
      </div>
    ),
  },
  {
    q: "What does a pilot engagement look like?",
    a: (
      <p className="text-muted-foreground leading-relaxed">
        We follow a controlled assessment → pilot → production pathway with explicit scope boundaries, success metrics, evidence requirements, and termination
        thresholds. If a workflow cannot be governed safely, it is deferred rather than forced.
      </p>
    ),
  },
];

function FAQCard({ item }: { item: FAQItem }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="text-lg font-semibold">{item.q}</div>
      <div className="mt-3">{item.a}</div>
    </div>
  );
}

export function FAQPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Frequently Asked Questions</h1>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Practical answers about portfolio structure, governance posture, and how governed execution differs from autonomy-first agent deployment.
        </p>
      </div>

      <div className="grid gap-5">
        {faq.map((item) => (
          <FAQCard key={item.q} item={item} />
        ))}
      </div>
    </div>
  );
}
