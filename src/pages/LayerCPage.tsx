import { Helmet } from "react-helmet-async";
import {
  LayerHero,
  LayerNav,
  SectionHead,
  InfoCard,
  ProofStat,
  InstitutionalCTA,
} from "../components/institutional";

// Layer C — Sovereign Assurance. Powered by Nexus + AGO + behavioral
// genealogy. SoftwareApplication JSON-LD migrated from the retired Nexus
// and AGO surfaces (both blocks preserved).
export function LayerCPage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Sovereign Assurance — Layer C | CoreIdentity</title>
        <meta
          name="description"
          content="Sovereign Assurance governs multi-agent fleets where authority is delegated agent-to-agent — tracing identity lineage, scoring trust decay, and containing a compromised branch before it propagates. Powered by Nexus, AGO, and behavioral genealogy."
        />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Nexus","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"AGO — Autonomous Governance Orchestrator","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      <LayerHero
        eyebrow="Layer C · Sovereign Assurance"
        title="Sovereign Assurance"
        poweredBy={["Nexus", "AGO — Autonomous Governance Orchestrator", "Behavioral Genealogy"]}
        lead={
          <>
            In a fleet, authority is delegated agent-to-agent, and trust silently compounds down the
            chain. One compromised sub-agent can propagate elevated permissions across a workflow no
            human ever inspected. Sovereign Assurance keeps the governance boundary intact at fleet
            scale —{" "}
            <span className="text-ink">tracing every identity's lineage and containing a compromised branch before it spreads.</span>
          </>
        }
      />

      <LayerNav current="c" />

      <section>
        <SectionHead
          eyebrow="The institutional pain"
          title="A fleet is only as governed as its weakest delegation"
          intro="Multi-agent orchestration multiplies capability — and multiplies the attack surface. Without lineage and decay, you cannot answer which agent granted authority to which, or whether a long-running agent still deserves the trust it was issued. Sovereign Assurance makes delegation auditable and revocable end to end."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Governed orchestration (Nexus)">
            Nexus coordinates multi-agent workflows inside defined governance constraints — routing,
            integration, retries, and recovery all inherit policy boundaries automatically. The
            delegation chain is validated on every step; a broken link stops execution rather than
            propagating authority.
          </InfoCard>
          <InfoCard title="Behavioral genealogy">
            Every identity carries a lineage: who created it, who delegated to it, and how its
            behavior has evolved. Trust-decay scoring continuously reweights an agent's standing as
            its behavior drifts, so authority earned at issuance is not authority held forever.
          </InfoCard>
          <InfoCard title="Autonomous governance (AGO)">
            The Autonomous Governance Orchestrator runs the fleet under continuous self-supervision —
            detecting policy drift, scope violations, and compliance gaps, and intervening
            automatically. Every intervention is written as an immutable governance record.
          </InfoCard>
        </div>
      </section>

      <section>
        <SectionHead title="Production proof" intro="Evolutionary identity governance, live in production." />
        <div className="grid gap-4 sm:grid-cols-3">
          <ProofStat value="Live" label="Identity lineage" detail="Full delegation genealogy traced across the fleet" />
          <ProofStat value="Active" label="Trust-decay scoring" detail="Continuous reweighting of agent standing as behavior drifts" />
          <ProofStat value="Evolutionary" label="Identity governance" detail="Authority adapts to behavior, not frozen at issuance" />
        </div>
      </section>

      <InstitutionalCTA />
    </div>
  );
}

export default LayerCPage;
