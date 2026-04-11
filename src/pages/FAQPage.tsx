import React from "react";
import { Link } from "@tanstack/react-router";
import { PageTitle, Eyebrow } from "../components/ui";

function FAQCard({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-lg font-semibold text-white mb-3">{q}</div>
      <div className="text-white/65 leading-relaxed text-sm">{children}</div>
    </div>
  );
}

export function FAQPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Eyebrow>AGENTIC EXECUTION GOVERNANCE</Eyebrow>
        <PageTitle>Frequently Asked Questions</PageTitle>
        <p className="text-white/60 max-w-3xl leading-relaxed">
          Practical answers about CoreIdentity, Agentic Execution Governance,
          and how governed execution differs from autonomy-first AI deployment.
        </p>
      </div>

      <div className="grid gap-5">

        <FAQCard q="What is Agentic Execution Governance?">
          <p>
            Agentic Execution Governance (AEG) is the infrastructure discipline
            that governs autonomous AI at the execution layer — not through
            dashboards or after-the-fact monitoring, but through deterministic
            enforcement embedded in the execution chain itself. Under AEG,
            every agent action is authorized before it executes, attributed
            to a verified identity, bounded by codified policy, and recorded
            in an immutable audit trail. CoreIdentity builds and operates the
            AEG stack.
          </p>
        </FAQCard>

        <FAQCard q="What is CoreIdentity Development Group Inc.?">
          <p>
            CoreIdentity Development Group Inc. is the parent entity governing
            a portfolio of infrastructure systems and operating capabilities
            designed for safe, auditable agentic execution. CoreIdentity exists
            to enforce clarity: what can be automated, under what controls,
            with what evidence, and with what escalation path when uncertainty
            appears. We build the control plane that makes autonomous AI
            governable at enterprise scale.
          </p>
        </FAQCard>

        <FAQCard q="What does governance-first mean in practice?">
          <div className="space-y-3">
            <p>
              Governance-first means the rules and evidence requirements exist
              before automation is allowed to run. The system must be able to
              answer: who authorized this, what policy applies, what data was
              used, what happened, and how do we prove it.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Policy and decision rights are explicit before execution.</li>
              <li>Approvals are traceable and logged.</li>
              <li>Outputs are attributable and reviewable.</li>
              <li>When uncertain, the system fails closed and escalates.</li>
            </ul>
          </div>
        </FAQCard>

        <FAQCard q="What is fail-closed and why do you emphasize it?">
          <p>
            Fail-closed means the system defaults to stopping safely rather
            than guessing. If authority, policy, inputs, or confidence are
            insufficient, the correct behavior is escalation — so a human
            can decide. This is the architectural opposite of autonomy-first
            deployment, where agents proceed unless explicitly told to stop.
          </p>
        </FAQCard>

        <FAQCard q="How does the CoreIdentity enforcement stack work?">
          <div className="space-y-3">
            <p>
              The stack operates as a vertically integrated enforcement chain.
              Every agent action passes through the following layers before
              and during execution:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link to="/sal" className="text-white/80 hover:text-white">SAL Kernel</Link>
                {" "}— deterministic pre-execution authorization. Evaluates every
                request across five dimensions before execution is permitted.
                Fail-closed by design.
              </li>
              <li>
                <Link to="/sentinel-os" className="text-white/80 hover:text-white">Sentinel OS</Link>
                {" "}— governance layer enforcing policy, identity boundaries,
                approval gates, and evidence capture.
              </li>
              <li>
                <Link to="/nexus-os" className="text-white/80 hover:text-white">Nexus OS</Link>
                {" "}— orchestration layer coordinating controlled multi-agent
                execution with structured operational traces.
              </li>
              <li>
                <Link to="/agentidentity-systems" className="text-white/80 hover:text-white">Agent Identity Systems</Link>
                {" "}— cryptographically verifiable agent identity, authorization
                boundaries, provenance, and attribution.
              </li>
              <li>
                <Link to="/smartnation-ai" className="text-white/80 hover:text-white">SmartNation AI</Link>
                {" "}— governed digital labor catalog. 10,000 agents across
                eight verticals, deployed under full AEG enforcement.
              </li>
            </ul>
          </div>
        </FAQCard>

        <FAQCard q="What is Agent Identity Systems?">
          <p>
            Agent Identity Systems (AIS) is the identity and accountability
            infrastructure for autonomous AI. AIS provides cryptographically
            verifiable agent authentication, policy-linked authorization
            boundaries, full provenance tracking, and audit-grade attribution
            — enforced at the execution layer. AIS is live at{" "}
            <a href="https://agentidentity.systems" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
              agentidentity.systems
            </a>
            {" "}with an active 30-day soak test running.
          </p>
        </FAQCard>

        <FAQCard q="What is quantum hardening and why does it matter?">
          <p>
            CoreIdentity is the first AI governance platform to complete
            post-quantum cryptographic hardening across its full enforcement
            stack — SAL Kernel, Sentinel OS, AIS, and Nexus OS. This means
            every cryptographic surface has been migrated to FIPS 203, 204,
            and 205 post-quantum algorithms. Adversaries are collecting
            encrypted data today to decrypt once quantum computers become
            capable. Governance audit trails and agent identity credentials
            require the same protection as any other sensitive institutional
            infrastructure.
          </p>
        </FAQCard>

        <FAQCard q="What is AGO-1?">
          <p>
            AGO-1 is an internal operating agent used to harden the CoreIdentity
            execution stack in real workflows, produce repeatable governance
            evidence, and validate fail-closed controls before client-facing
            deployments. AGO-1 runs under full Sentinel OS and Nexus OS
            enforcement and augments CoreIdentity Advisory Group operations.
            It is not client-facing.
          </p>
        </FAQCard>

        <FAQCard q="Are you replacing human positions?">
          <p>
            No. CoreIdentity's posture is augmentation — removing friction,
            waste, and cognitive overload so human talent operates at a higher
            level. We explicitly avoid automating decisions requiring ethics,
            accountability, empathy, or human judgment. Human authority is
            preserved at every critical decision point.
          </p>
        </FAQCard>

        <FAQCard q="What does a pilot engagement look like?">
          <p>
            We follow a controlled assessment to pilot to production pathway
            with explicit scope boundaries, success metrics, evidence
            requirements, escalation triggers, and termination thresholds.
            If a workflow cannot be governed safely under AEG constraints,
            it is deferred rather than forced.
          </p>
        </FAQCard>

        <FAQCard q="How do you approach integrations and data access?">
          <div className="space-y-2">
            <p>
              Integrations are treated as controlled interfaces, not
              conveniences. We default to least privilege and explicit scopes.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Least privilege and scoped authorization tokens</li>
              <li>Audit logging and evidence retention rules</li>
              <li>Explicit escalation paths for exceptions</li>
              <li>Data minimization — only what is required for the task</li>
            </ul>
          </div>
        </FAQCard>

      </div>
    </div>
  );
}
