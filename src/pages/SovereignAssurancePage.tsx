import { Helmet } from "react-helmet-async";
import { LayerHero, ArchitectureNav, SectionHead, InfoCard, ProofStat, InstitutionalCTA } from "../components/institutional";

export function SovereignAssurancePage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Sovereign Assurance | CoreIdentity</title>
        <meta
          name="description"
          content="Sovereign Assurance keeps authority accountable as it is delegated across a fleet of autonomous agents — tracing lineage and containing compromise before it spreads."
        />
      </Helmet>

      <LayerHero
        eyebrow="Institutional Architecture"
        title="Sovereign Assurance"
        lead={
          <>
            In a fleet, authority passes from agent to agent, and trust can silently compound down
            the chain. One compromised link can propagate elevated permissions across a workflow
            no person ever inspected.{" "}
            <span className="text-ink">Sovereign Assurance keeps that boundary intact, no matter how deep the chain runs.</span>
          </>
        }
      />

      <ArchitectureNav current="sovereign-assurance" />

      <section>
        <SectionHead
          eyebrow="Why it matters"
          title="A fleet is only as governed as its weakest delegation"
          intro="Coordinated autonomy multiplies capability — and multiplies the surface for something to go wrong. Without a traceable lineage, an institution cannot answer which agent granted authority to which, or whether a long-running agent still deserves the trust it was issued."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Traceable lineage">
            Every identity carries a record of who created it, who delegated to it, and how its
            behavior has evolved since. Authority earned at issuance is not authority held forever.
          </InfoCard>
          <InfoCard title="Continuous supervision">
            The fleet is watched for drift and policy violation in real time, with every
            intervention recorded permanently — not reconstructed after the fact.
          </InfoCard>
          <InfoCard title="Contained, not guessed">
            When a delegation link breaks or behavior drifts outside its bounds, the chain stops
            rather than propagating authority it can no longer account for.
          </InfoCard>
        </div>
      </section>

      <section>
        <SectionHead title="Operating today" intro="Delegation is governed and accountable across the live fleet." />
        <div className="grid gap-4 sm:grid-cols-3">
          <ProofStat value="Live" label="Delegation lineage" detail="Traced across the fleet, not reconstructed after an incident" />
          <ProofStat value="Continuous" label="Standing review" detail="Authority is reweighted as behavior changes" />
          <ProofStat value="Fail-closed" label="Containment" detail="A broken or drifting link stops the chain" />
        </div>
      </section>

      <InstitutionalCTA />
    </div>
  );
}

export default SovereignAssurancePage;
