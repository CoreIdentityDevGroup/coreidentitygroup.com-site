import { Helmet } from "react-helmet-async";
import { LayerHero, ArchitectureNav, SectionHead, InfoCard, InstitutionalCTA } from "../components/institutional";

export function VerificationAtScalePage() {
  return (
    <div className="space-y-12 cidg-framework-page">
      <Helmet>
        <title>Verification at Scale | CoreIdentity</title>
        <meta
          name="description"
          content="Verification at Scale proves governance policy is correct before it activates, and enforces it identically across every agent, every time."
        />
      </Helmet>

      <LayerHero
        eyebrow="Institutional Architecture"
        title="Verification at Scale"
        lead={
          <>
            A governance policy that reads correctly on paper can still contain contradictions
            that only surface in production — at the worst possible moment, across thousands of
            agents at once. Verification at Scale closes that gap:{" "}
            <span className="text-ink">policy is proven correct before it ever activates, and enforced identically once it does.</span>
          </>
        }
      />

      <ArchitectureNav current="verification-at-scale" />

      <section>
        <SectionHead
          eyebrow="Why it matters"
          title="Policy correctness cannot be a matter of review"
          intro="Human review catches typos, not logical contradictions across thousands of interacting rules. And enforcement that holds for one agent must hold identically across a hundred thousand actions. Verification at Scale separates proving a policy from enforcing it."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Proven before it activates">
            Every policy is checked for contradictions and validated across every path it could
            take, before it ever reaches production. Nothing goes live until it is proven sound.
          </InfoCard>
          <InfoCard title="Enforced without exception">
            Every action is evaluated the same way, every time. A failure returns a denial, not a
            guess — ambiguity stops the agent, not the institution.
          </InfoCard>
        </div>
      </section>

      <InstitutionalCTA />
    </div>
  );
}

export default VerificationAtScalePage;
