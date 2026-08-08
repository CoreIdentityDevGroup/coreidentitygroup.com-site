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
          content="Answers about CoreIdentity, provable AI decision governance, fail-closed enforcement, fail-closed enforcement, and post-quantum hardening."
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

        <FAQCard q="What is CoreIdentity's institutional architecture?">
          <div className="space-y-2">
            <p>Three layers, each adding a guarantee on the one beneath it — every one hardened against current and future threats by construction, not as a separate add-on:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <Link to="/execution-integrity" className="text-accent hover:text-accent-strong">Execution Integrity</Link>{" "}
                — every action is provably attributable to a verified identity, at the moment it happens.
              </li>
              <li>
                <Link to="/verification-at-scale" className="text-accent hover:text-accent-strong">Verification at Scale</Link>{" "}
                — policy is proven correct before it activates, and enforced identically every time.
              </li>
              <li>
                <Link to="/sovereign-assurance" className="text-accent hover:text-accent-strong">Sovereign Assurance</Link>{" "}
                — authority stays accountable as it is delegated across a fleet, traceable end to end.
              </li>
            </ul>
            <p>
              The{" "}
              <Link to="/platform" className="text-accent hover:text-accent-strong">platform architecture</Link>{" "}
              page ties them together for technical evaluators.
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
          Every machine-initiated action is evaluated in milliseconds before it is permitted — checked against identity, intent, and policy boundaries all at once. Any single failure returns a deterministic denial, not a guess. This is{" "}
          <Link to="/verification-at-scale" className="text-accent hover:text-accent-strong">Verification at Scale</Link> in practice.
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
                must meet the same bar.
              </li>
            </ul>
          </div>
        </FAQCard>

        <FAQCard q="How are agent credentials protected against future threats?">
          Every agent credential is issued and verified through a dedicated post-quantum trust
          authority. Its highest-privilege key is cold-stored and used once, then permanently
          retired — nothing in production ever holds the authority to mint new trust silently.
          Revocation is deliberately hard to automate, by design: it requires an explicit,
          auditable manual action, never a background process.
        </FAQCard>

        <FAQCard q="How is randomness generated for credentials?">
          Every credential draws on a genuine hardware source of quantum randomness, not a purely
          software-generated approximation. If that source is ever unavailable, the system degrades
          gracefully to a strong software fallback rather than halting — availability is never
          sacrificed for a marginal gain in entropy quality.
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
