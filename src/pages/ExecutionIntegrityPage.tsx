import { Helmet } from "react-helmet-async";
import { LayerHero, ArchitectureNav, SectionHead, InfoCard, ProofStat, InstitutionalCTA } from "../components/institutional";

export function ExecutionIntegrityPage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Execution Integrity | CoreIdentity</title>
        <meta
          name="description"
          content="Execution Integrity is the assurance that every autonomous action is provably attributable — to a verified identity, at the moment it happens."
        />
      </Helmet>

      <LayerHero
        eyebrow="Institutional Architecture"
        title="Execution Integrity"
        lead={
          <>
            An autonomous agent moves money, exports a regulated dataset, or changes a production
            system — and afterward no one can prove which agent acted, under whose authority, or
            whether the action was ever permitted. That is the exposure Execution Integrity closes:{" "}
            <span className="text-ink">every consequential action is provably attributable, from the moment it happens.</span>
          </>
        }
      />

      <ArchitectureNav current="execution-integrity" />

      <section>
        <SectionHead
          eyebrow="Why it matters"
          title="Authority without attribution is uninsurable exposure"
          intro="When agents act faster than people can supervise, the question is never whether something will go wrong — it is whether the institution can prove what happened when it does. Execution Integrity makes every consequential action attributable to a verified identity at the moment it occurs, not reconstructed after an incident."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="A verified identity behind every action">
            Every agent carries a persistent, verifiable identity — not a session token. Every
            action traces back to who acted and who authorized it, on demand.
          </InfoCard>
          <InfoCard title="Deviation surfaced as it happens">
            An agent drifting from its established behavior is detected in real time — surfacing a
            compromised or malfunctioning agent before it produces an irreversible action.
          </InfoCard>
          <InfoCard title="A record that cannot be altered">
            Every decision is written to a tamper-evident trail. It cannot be changed after the
            fact — exactly what auditors, regulators, and insurers require as evidence.
          </InfoCard>
        </div>
      </section>

      <section>
        <SectionHead title="Operating today" intro="Execution Integrity is live infrastructure, not a roadmap." />
        <div className="grid gap-4 sm:grid-cols-3">
          <ProofStat value="Every governed agent" label="Attributed and replayable" detail="Live behavioral monitoring under continuous supervision" />
          <ProofStat value="Immutable" label="Audit trail" detail="Tamper-evident record on every governed decision" />
          <ProofStat value="Hardened" label="Credentialing" detail="Built to remain verifiable against current and future threats" />
        </div>
      </section>

      <InstitutionalCTA />
    </div>
  );
}

export default ExecutionIntegrityPage;
