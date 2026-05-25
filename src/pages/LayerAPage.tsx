import { Helmet } from "react-helmet-async";
import {
  LayerHero,
  LayerNav,
  SectionHead,
  InfoCard,
  ProofStat,
  InstitutionalCTA,
} from "../components/institutional";

// Layer A — Execution Integrity. Powered by Agent Identity Systems (AIS) +
// Runtime Behavioral Fingerprinting. SoftwareApplication JSON-LD migrated
// from the retired Agent Identity Systems surface.
export function LayerAPage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Execution Integrity — Layer A | CoreIdentity</title>
        <meta
          name="description"
          content="Execution Integrity is the layer that proves which agent acted, under whose authority, and whether it was permitted — before a regulator asks. Powered by Agent Identity Systems and runtime behavioral fingerprinting, ML-DSA-65 signed."
        />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Agent Identity Systems","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      <LayerHero
        eyebrow="Layer A · Execution Integrity"
        title="Execution Integrity"
        poweredBy={["Agent Identity Systems", "Runtime Behavioral Fingerprinting", "ML-DSA-65 Signing"]}
        lead={
          <>
            An autonomous agent moves money, exports a regulated dataset, or changes a production
            system — and afterward no one can prove which agent acted, under whose authority, or
            whether the action was ever permitted. That is the catastrophe Execution Integrity
            prevents. It eliminates the single most expensive liability in autonomous operations:{" "}
            <span className="text-ink">the inability to prove what your AI did.</span>
          </>
        }
      />

      <LayerNav current="a" />

      <section>
        <SectionHead
          eyebrow="The institutional pain"
          title="Authority without attribution is uninsurable exposure"
          intro="When agents act faster than humans can supervise, the question is never whether something will go wrong — it is whether you can prove what happened when it does. Execution Integrity makes every consequential action attributable to a verified identity at the moment it occurs, not reconstructed after an incident."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Verified agent identity">
            Every agent carries a cryptographically verifiable, persistent identity — not a session
            token. Authentication, authorization boundaries, provenance, and attribution are bound
            to the agent at the execution layer, so every action traces back to who acted and who
            authorized it.
          </InfoCard>
          <InfoCard title="Runtime behavioral fingerprinting">
            Each agent's runtime behavior is fingerprinted continuously. Deviation from an agent's
            established behavioral profile is detected as it happens — surfacing a compromised or
            drifting agent before it produces an irreversible action.
          </InfoCard>
          <InfoCard title="Immutable audit trail">
            Every decision is written to a tamper-evident record signed with ML-DSA-65 (FIPS 204).
            The trail cannot be altered after the fact, which is exactly what your auditors,
            regulators, and insurers require as evidence.
          </InfoCard>
        </div>
      </section>

      <section>
        <SectionHead title="Production proof" intro="Execution Integrity is operating infrastructure, not a roadmap." />
        <div className="grid gap-4 sm:grid-cols-3">
          <ProofStat value="Every production agent" label="Cryptographically attributed and forensically replayable" detail="Live runtime behavioral profiles under continuous monitoring" />
          <ProofStat value="Immutable" label="Audit trail" detail="Tamper-evident record on every governed decision" />
          <ProofStat value="ML-DSA-65" label="Identity signing" detail="FIPS 204 post-quantum signatures on every credential" />
        </div>
      </section>

      <InstitutionalCTA />
    </div>
  );
}

export default LayerAPage;
