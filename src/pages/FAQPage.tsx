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
        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>
        <PageTitle>Frequently Asked Questions</PageTitle>
        <p className="text-white/60 max-w-3xl leading-relaxed">
          Practical answers about CoreIdentity, provable AI decision governance,
          and how governed execution differs from autonomy-first AI deployment.
        </p>
      </div>

      <div className="grid gap-5">

        <FAQCard q="What is institutional trust infrastructure for autonomous systems?">
          <p>
            The market does not have an AI problem — it has a trust deficit
            problem. Institutional trust infrastructure is what closes that gap:
            it makes every autonomous AI decision provable. Every agent action
            is authorized before it executes, attributed to a verified identity,
            bounded by codified policy, and recorded in an immutable audit trail.
            CoreIdentity builds and operates that infrastructure — and its
            near-term wedge is Provable AI Decision Governance.
          </p>
        </FAQCard>

        <FAQCard q="What is CoreIdentity Development Group Inc.?">
          <p>
            CoreIdentity Development Group Inc. is the parent entity governing
            a portfolio of infrastructure systems and operating capabilities
            designed for safe, auditable agentic execution. CoreIdentity exists
            to enforce clarity: what can be automated, under what controls,
            with what evidence, and with what escalation path when uncertainty
            appears. We build the institutional trust infrastructure that makes autonomous AI
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
                <Link to="/sentinel" className="text-white/80 hover:text-white">Sentinel</Link>
                {" "}— governance layer enforcing policy, identity boundaries,
                approval gates, and evidence capture.
              </li>
              <li>
                <Link to="/nexus" className="text-white/80 hover:text-white">Nexus</Link>
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
                twelve verticals, deployed under full CoreIdentity enforcement.
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
            — enforced at the execution layer. AIS is live and production-stable at{" "}
            <a href="https://agentidentity.systems" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
              agentidentity.systems
            </a>
            {" "}with 100,000+ governed endpoint calls validated at a 96%+ pass rate.
          </p>
        </FAQCard>

        <FAQCard q="What is quantum hardening and why does it matter?">
          <div className="space-y-3">
            <p>
              CoreIdentity is hardened against both current and future threats — post-quantum cryptographic (PQC)
              hardening runs across its full enforcement chain: SAL Kernel, Sentinel, Agent Identity Systems,
              and Nexus. Every cryptographic surface uses NIST-finalized post-quantum
              algorithms (FIPS 203, 204, and 205). This matters now for two reasons:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-white/80 font-medium">Harvest Now, Decrypt Later (HNDL).</span>{" "}
                Adversaries are collecting encrypted data today with the intent to decrypt it once
                cryptographically relevant quantum computers become available. Governance audit trails
                and agent identity credentials signed with classical algorithms are already at risk.
              </li>
              <li>
                <span className="text-white/80 font-medium">NIST finalized in August 2024.</span>{" "}
                FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), and FIPS 205 (SLH-DSA) are the official
                post-quantum standards. Federal agencies and their contractors face migration deadlines.
                Enterprise governance infrastructure must meet the same bar.
              </li>
            </ul>
          </div>
        </FAQCard>

        <FAQCard q="What is the PQ-CA?">
          <p>
            The PQ-CA (Post-Quantum Certificate Authority) is a two-tier cryptographic trust authority
            embedded in Agent Identity Systems. It issues and verifies ML-DSA-65 signed agent identity
            certificates. The Root CA is cold-stored in AWS Secrets Manager — its private key signs only
            the Issuing CA certificate, after which it is immediately zeroed and never loaded into memory
            again. The Issuing CA is online, signs every agent credential, and is the trust anchor for
            the entire AIS identity chain. Four CA endpoints are live: GET /ca/crl, POST /ca/issue,
            POST /ca/verify, and POST /ca/revoke. The /ca/revoke endpoint requires an{" "}
            <span className="font-mono text-white/80">X-Manual-Override: true</span> header, making automated
            revocation architecturally impossible.
          </p>
        </FAQCard>

        <FAQCard q="What algorithm does the PQ-CA use?">
          <div className="space-y-3">
            <p>
              ML-DSA-65, defined in NIST FIPS 204 (finalized August 2024). ML-DSA-65 is a lattice-based
              digital signature algorithm in the Module-Lattice-Digital Signature Algorithm family —
              designed specifically to resist attacks from cryptographically relevant quantum computers.
              It produces signatures that are mathematically unforgeable without solving the Module
              Learning With Errors (MLWE) problem, which is believed to be hard for both classical and
              quantum adversaries.
            </p>
            <p>
              ML-DSA-65 provides NIST security level 3, equivalent to 192-bit classical security — the
              same level used in many high-assurance government and defense applications. CoreIdentity
              selected ML-DSA-65 for agent identity credentials because identity certificates are the
              highest-value cryptographic artifact in the enforcement chain.
            </p>
          </div>
        </FAQCard>

        <FAQCard q="What is quantum entropy anchoring?">
          <p>
            Quantum entropy anchoring means that the randomness used to generate every agent identity
            credential is sourced from a physical quantum process — not from a purely deterministic
            algorithmic source. The primary entropy source is the ANU Quantum Random Number Generator,
            which measures photon vacuum fluctuations: an inherently non-deterministic quantum-mechanical
            event that cannot be predicted or reproduced. On each refresh cycle, 1,024 quantum-sourced
            values from the ANU QRNG API are XOR-mixed with OS CSPRNG output and loaded into a 16 KB
            entropy pool. If the ANU QRNG API is unavailable, the system degrades to OS CSPRNG fallback
            (DEGRADED status). QUANTUM status is only reported when photon-sourced entropy is actively
            contributing to the pool. The result: every agent credential derives its key material from
            a physically random quantum source, not a software approximation.
          </p>
        </FAQCard>

        <FAQCard q="What is AGO?">
          <p>
            AGO is CoreIdentity's Autonomous Governance Orchestrator — the operating agent
            that runs CoreIdentity's own governance workflows under full Sentinel and Nexus
            enforcement. AGO validates the enforcement stack in real operational conditions,
            produces repeatable governance evidence, and serves as the verified pilot pattern
            for enterprise deployments. Every AGO workflow produces cryptographically signed
            audit records, demonstrating fail-closed governance in practice.
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
            If a workflow cannot be governed safely under CoreIdentity enforcement constraints,
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
