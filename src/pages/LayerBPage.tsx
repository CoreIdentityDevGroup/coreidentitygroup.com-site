import { Helmet } from "react-helmet-async";
import {
  LayerHero,
  LayerNav,
  SectionHead,
  InfoCard,
  ProofStat,
  InstitutionalCTA,
} from "../components/institutional";

// Layer B — Verification at Scale. Powered by FGRE + SAL (Semantic
// Authorization Layer). SoftwareApplication JSON-LD migrated from the
// retired SAL Enforcement Kernel surface.
export function LayerBPage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Verification at Scale — Layer B | CoreIdentity</title>
        <meta
          name="description"
          content="Verification at Scale proves governance policy is correct before it activates and enforces it deterministically once it does. Powered by the FGRE formal reasoning engine and the SAL Semantic Authorization Layer — 734/734 tests passing across 100K+ governed calls."
        />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"SAL Enforcement Kernel","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      <LayerHero
        eyebrow="Layer B · Verification at Scale"
        title="Verification at Scale"
        poweredBy={["FGRE — Formal Governance Reasoning Engine", "SAL — Semantic Authorization Layer"]}
        lead={
          <>
            A governance policy that reads correctly on paper can still contain contradictions that
            only surface in production — at the worst possible moment, across thousands of agents at
            once. Verification at Scale closes that gap:{" "}
            <span className="text-ink">policy is mathematically proven correct before it activates,</span>{" "}
            and enforced deterministically — within sub-3ms — once it does.
          </>
        }
      />

      <LayerNav current="b" />

      <section>
        <SectionHead
          eyebrow="The institutional pain"
          title="Policy correctness cannot be a matter of review"
          intro="Human review catches typos, not logical contradictions across thousands of interacting rules. And enforcement that works for one agent must hold identically for one hundred thousand calls. Verification at Scale separates proving the policy from enforcing it — formal proof upstream, deterministic enforcement downstream."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="FGRE — formal proof before activation">
            The Formal Governance Reasoning Engine applies Z3 SMT verification to every policy before
            it goes live — detecting contradictions, validating execution paths, and generating
            machine-verifiable proof artifacts signed with SLH-DSA-128s (FIPS 205), exportable for
            regulatory submission. No policy activates until it is proven sound.
          </InfoCard>
          <InfoCard title="SAL — deterministic enforcement at runtime">
            The Semantic Authorization Layer is the deterministic gateway in the execution path.
            Every machine-initiated action is evaluated across the five-dimension IIAAC model —
            Identity, Intent, Asset, Action, Context — and any single failure returns a deterministic
            deny. Fail-closed by design: ambiguity stops the agent, not the business.
          </InfoCard>
        </div>
      </section>

      <section>
        <SectionHead title="Production proof" intro="Verified continuously under adversarial soak conditions across live infrastructure." />
        <div className="grid gap-4 sm:grid-cols-3">
          <ProofStat value="734 / 734" label="Tests passing" detail="Security, PQ-CA, load, DR, compliance, and adversarial suites" />
          <ProofStat value="96%" label="Pass rate" detail="Sustained across the full verification corpus" />
          <ProofStat value="100K+" label="Governed calls" detail="Continuous soak across live AWS ECS and GKE infrastructure" />
        </div>
      </section>

      <InstitutionalCTA />
    </div>
  );
}

export default LayerBPage;
