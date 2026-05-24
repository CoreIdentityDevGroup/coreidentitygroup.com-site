import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { SectionHead } from "../components/institutional";

function FAQCard({ q, children }: { q: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-carbon-panel p-6">
      <h3 className="mb-3 font-serif text-lg text-ink">{q}</h3>
      <div className="text-sm leading-relaxed text-ink-secondary">{children}</div>
    </div>
  );
}

export function FAQPage() {
  return (
    <div className="space-y-10">
      <Helmet>
        <title>Frequently Asked Questions | CoreIdentity</title>
        <meta
          name="description"
          content="Answers about CoreIdentity, provable AI decision governance, the four-layer assurance model, fail-closed enforcement, and post-quantum hardening."
        />
      </Helmet>

      <section className="pt-4 md:pt-8">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          CoreIdentity Development Group
        </div>
        <h1 className="mt-4 font-serif text-display-xl tracking-tight text-ink md:text-display-2xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-secondary">
          Practical answers about CoreIdentity, provable AI decision governance, and how a governance
          substrate differs from autonomy-first AI deployment.
        </p>
      </section>

      <div className="grid gap-5">
        <FAQCard q="What is institutional trust infrastructure for autonomous systems?">
          The market does not have an AI problem — it has a trust deficit problem. Institutional trust
          infrastructure closes that gap: it makes every autonomous AI decision provable. Every action
          is authorized before it executes, attributed to a verified identity, bounded by codified
          policy, and recorded in a tamper-evident audit trail. CoreIdentity builds and operates that
          infrastructure as a governance substrate, not an application bolted on after the fact.
        </FAQCard>

        <FAQCard q="What are the four assurance layers?">
          <div className="space-y-2">
            <p>Each layer adds a guarantee on the one beneath it:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Link to="/layer-a" className="text-accent hover:text-accent-strong">Execution Integrity</Link>{" "}
                — verified identity, runtime behavioral fingerprinting, and an immutable ML-DSA-65 signed trail.
              </li>
              <li>
                <Link to="/layer-b" className="text-accent hover:text-accent-strong">Verification at Scale</Link>{" "}
                — FGRE formal proof of policy correctness, enforced deterministically by the SAL kernel.
              </li>
              <li>
                <Link to="/layer-c" className="text-accent hover:text-accent-strong">Sovereign Assurance</Link>{" "}
                — Nexus orchestration, AGO supervision, and behavioral genealogy across the fleet.
              </li>
              <li>
                <Link to="/layer-d" className="text-accent hover:text-accent-strong">Cryptographic Hardening</Link>{" "}
                — post-quantum protection across every cryptographic surface.
              </li>
            </ul>
            <p>
              The{" "}
              <Link to="/platform" className="text-accent hover:text-accent-strong">platform architecture</Link>{" "}
              page ties all four together for technical evaluators.
            </p>
          </div>
        </FAQCard>

        <FAQCard q="What does governance-first mean in practice?">
          <div className="space-y-3">
            <p>
              The rules and evidence requirements exist before automation is allowed to run. The
              system must answer: who authorized this, what policy applies, what data was used, what
              happened, and how do we prove it.
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Policy and decision rights are explicit before execution.</li>
              <li>Approvals are traceable and logged.</li>
              <li>Outputs are attributable and reviewable.</li>
              <li>When uncertain, the system fails closed and escalates.</li>
            </ul>
          </div>
        </FAQCard>

        <FAQCard q="What is fail-closed, and why do you emphasize it?">
          Fail-closed means the system defaults to stopping safely rather than guessing. If authority,
          policy, inputs, or confidence are insufficient, the correct behavior is escalation — so a
          human can decide. This is the architectural opposite of autonomy-first deployment, where
          agents proceed unless explicitly told to stop.
        </FAQCard>

        <FAQCard q="How does enforcement work at runtime?">
          Every machine-initiated action is arbitrated by the Semantic Authorization Layer across five
          dimensions — Identity, Intent, Asset, Action, and Context (IIAAC) — in sub-3ms before
          execution is permitted. All five must pass; a single failure returns a deterministic deny.
          This is the substrate of{" "}
          <Link to="/layer-b" className="text-accent hover:text-accent-strong">Verification at Scale</Link>.
        </FAQCard>

        <FAQCard q="What is post-quantum hardening, and why does it matter now?">
          <div className="space-y-3">
            <p>
              Post-quantum cryptography runs across the full enforcement chain using NIST-finalized
              algorithms (FIPS 203, 204, and 205). It matters now for two reasons:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-ink">Harvest now, decrypt later.</span> Adversaries
                collect encrypted data today to decrypt once quantum computers are capable — governance
                audit trails and identity credentials signed with classical algorithms are already at risk.
              </li>
              <li>
                <span className="font-medium text-ink">NIST finalized in August 2024.</span> Federal
                agencies and contractors face migration deadlines; enterprise governance infrastructure
                must meet the same bar. See{" "}
                <Link to="/layer-d" className="text-accent hover:text-accent-strong">Cryptographic Hardening</Link>.
              </li>
            </ul>
          </div>
        </FAQCard>

        <FAQCard q="What is the PQ-CA?">
          The PQ-CA (Post-Quantum Certificate Authority) is a two-tier cryptographic trust authority
          embedded in the identity substrate. It issues and verifies ML-DSA-65 signed agent
          credentials. The Root CA is cold-stored in AWS Secrets Manager — it signs only the Issuing
          CA certificate, after which its key is zeroed. Revocation requires an explicit{" "}
          <span className="font-mono text-ink">X-Manual-Override: true</span> header, making automated
          revocation architecturally impossible.
        </FAQCard>

        <FAQCard q="What is quantum entropy anchoring?">
          The randomness used to generate every agent credential is sourced from a physical quantum
          process — the ANU Quantum Random Number Generator, which measures photon vacuum fluctuations.
          On each refresh, 1,024 quantum-sourced values are XOR-mixed with OS CSPRNG output into a
          16&nbsp;KB entropy pool. If the quantum source is unavailable, the system degrades to CSPRNG
          fallback without halting issuance; QUANTUM status is reported only when photon-sourced
          entropy is actively contributing.
        </FAQCard>

        <FAQCard q="Are you replacing human positions?">
          No. CoreIdentity's posture is augmentation — removing friction, waste, and cognitive
          overload so human talent operates at a higher level. We explicitly avoid automating
          decisions requiring ethics, accountability, empathy, or human judgment. Human authority is
          preserved at every critical decision point.
        </FAQCard>

        <FAQCard q="What does an engagement look like?">
          We follow a controlled assessment-to-pilot-to-production pathway with explicit scope
          boundaries, success metrics, evidence requirements, escalation triggers, and termination
          thresholds. If a workflow cannot be governed safely under enforcement constraints, it is
          deferred rather than forced. Start with a{" "}
          <Link to="/ciag" className="text-accent hover:text-accent-strong">governance architecture review</Link>.
        </FAQCard>
      </div>

      <SectionHead title="Still have questions?" />
      <div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
