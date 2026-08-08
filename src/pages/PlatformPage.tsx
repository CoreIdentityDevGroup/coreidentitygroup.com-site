import { Helmet } from "react-helmet-async";
import { SectionHead, InfoCard, ProofStat, InstitutionalCTA, PlatinumProof } from "../components/institutional";

// Platform Architecture — the technical overview for CTOs and security
// evaluators. Describes the three institutional architecture layers at a
// summary level; internal implementation is not named here, consistent
// with the rest of the site.

const ARCHITECTURE_SUMMARY = [
  { name: "Execution Integrity", to: "/execution-integrity", desc: "Every consequential action is provably attributable to a verified identity, at the moment it happens." },
  { name: "Verification at Scale", to: "/verification-at-scale", desc: "Policy is proven correct before it activates, and enforced identically across every agent, every time." },
  { name: "Sovereign Assurance", to: "/sovereign-assurance", desc: "Authority stays accountable as it is delegated across a fleet — traceable, and contained if it drifts." },
];

const TIMELINE: { phase: string; title: string; detail: string }[] = [
  { phase: "Foundation", title: "Identity & authorization", detail: "A verifiable identity and a deterministic, fail-closed authorization boundary were established first — nothing else in the architecture is meaningful without this." },
  { phase: "Enforcement", title: "Policy, orchestration & evidence", detail: "Policy enforcement, governed multi-agent orchestration, and autonomous supervision came online together, each writing to an immutable audit trail from day one." },
  { phase: "Verification", title: "Formal proof at scale", detail: "Formal verification was added so policy correctness is proven before activation, not discovered in production — validated under continuous adversarial testing, every invariant held, no exceptions." },
  { phase: "Hardening", title: "Post-quantum across every surface", detail: "The full enforcement chain migrated to NIST-finalized post-quantum standards (FIPS 203/204/205) — the first commercial platform in production with all three." },
  { phase: "Scale", title: "Governed connectivity & consensus", detail: "External AI clients can now connect under the same enforcement every internal agent inherits, and consequential decisions require independent multi-provider agreement before executing." },
];

export function PlatformPage() {
  return (
    <div className="space-y-14">
      <Helmet>
        <title>Platform Architecture | CoreIdentity</title>
        <meta
          name="description"
          content="The complete CoreIdentity architecture for CTOs and security evaluators: institutional-grade identity, policy verification, and delegation assurance — every action authorized, attributed, and recorded in a tamper-evident trail, operating in production today."
        />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"CoreIdentity","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      <section className="pt-4 md:pt-8">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Platform Architecture
        </div>
        <h1 className="mt-4 font-serif text-display-xl tracking-tight text-[#151d2a] md:text-display-2xl">
          The full governance substrate, end to end
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#465365] md:text-xl">
          This is the page for institutional evaluators who want depth before they sign. CoreIdentity
          is not an application layered over autonomous AI — it is the architectural substrate that
          makes every decision provable: authorized before execution, attributed to a verified
          identity, bounded by codified policy, and recorded in a tamper-evident trail hardened
          against current and future threats.
        </p>
      </section>

      <section>
        <SectionHead
          eyebrow="The architecture"
          title="Three layers, one substrate"
          intro="Every agent action passes through a governed chain before execution is permitted. Each layer has a distinct job and a clear boundary."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {ARCHITECTURE_SUMMARY.map((l) => (
            <a
              key={l.name}
              href={l.to}
              className="block rounded-2xl border border-[rgba(21,29,42,0.13)] bg-white p-6 shadow-[0_1px_2px_rgba(21,29,42,0.04)] transition hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(21,29,42,0.08)]"
            >
              <h3 className="font-serif text-lg text-[#151d2a]">{l.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#465365]">{l.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section>
        <SectionHead
          eyebrow="How authority is decided"
          title="Reasoning is decoupled from authorization"
          intro="An agent can reason freely about what it wants to do. Whether it is allowed to do it is decided separately, deterministically, and cannot be overridden by the model's own confidence."
        />
        <div className="grid items-stretch gap-4 md:grid-cols-3">
          <InfoCard title="Reasoning">
            Any model, agent, or orchestration framework generating an intended action. Nothing it
            proposes reaches production systems unchecked.
          </InfoCard>
          <div className="flex flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
            <div className="font-serif text-lg text-accent">Authorization</div>
            <div className="mt-1 text-xs text-[#465365]">Evaluated in milliseconds, every time</div>
            <div className="mt-3 rounded-full border border-accent/30 px-3 py-1 text-xs text-accent">deterministic · fail-closed</div>
          </div>
          <InfoCard title="Execution">
            Only actions that clear authorization reach real infrastructure — databases, payment
            rails, external systems. Anything uncertified is default-deny.
          </InfoCard>
        </div>
      </section>

      <section>
        <SectionHead title="Production posture" intro="Operating infrastructure, sourced from verified live deployments — not a roadmap." />
        <PlatinumProof />
      </section>

      <section>
        <SectionHead
          eyebrow="Build timeline"
          title="How the substrate was built"
          intro="The architecture matured in deliberate phases — each adding a layer of assurance on the one beneath it, rather than bolting controls on after deployment."
        />
        <ol className="space-y-4">
          {TIMELINE.map((t, i) => (
            <li key={t.phase} className="flex gap-4 rounded-2xl border border-[rgba(21,29,42,0.13)] bg-white p-5">
              <div className="tabular-figures shrink-0 font-serif text-2xl text-accent">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6E6C66]">{t.phase}</div>
                <div className="font-serif text-lg text-[#151d2a]">{t.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-[#465365]">{t.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <InstitutionalCTA />
    </div>
  );
}

export default PlatformPage;
