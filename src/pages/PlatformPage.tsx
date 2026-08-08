import { Helmet } from "react-helmet-async";
import { SectionHead, InfoCard, ProofStat, InstitutionalCTA, PlatinumProof } from "../components/institutional";

// Platform Architecture — the technical deep-dive for CTOs and security
// evaluators. Absorbs the former CoreIdentity Technologies deep-dive:
// the complete eight-component stack, governance tables, production stats,
// and build timeline.

type Component = { name: string; role: string; layer: string };

const ARCHITECTURE_SUMMARY = [
  { name: "Execution Integrity", to: "/execution-integrity", desc: "Every consequential action is provably attributable to a verified identity, at the moment it happens." },
  { name: "Verification at Scale", to: "/verification-at-scale", desc: "Policy is proven correct before it activates, and enforced identically across every agent, every time." },
  { name: "Sovereign Assurance", to: "/sovereign-assurance", desc: "Authority stays accountable as it is delegated across a fleet — traceable, and contained if it drifts." },
];

const TIMELINE: { phase: string; title: string; detail: string }[] = [
  { phase: "Foundation", title: "Identity & authorization substrate", detail: "Agent Identity Systems and the SAL Kernel establish verifiable identity and deterministic, fail-closed authorization in the execution path." },
  { phase: "Enforcement", title: "Policy, orchestration & evidence", detail: "Sentinel, Nexus, and AGO bring policy enforcement, governed orchestration, and autonomous supervision online with immutable audit trails." },
  { phase: "Verification", title: "Formal proof at scale", detail: "FGRE adds Z3 SMT verification — proving policy correctness before activation — validated by a Platinum Test Suite under continuous adversarial validation across the verification corpus — every invariant held, no exceptions." },
  { phase: "Hardening", title: "Post-quantum across every surface", detail: "The full enforcement chain migrates to NIST FIPS 203/204/205, with a post-quantum CA and QRNG-anchored entropy. First commercial platform in production with all three standards." },
  { phase: "Scale", title: "Governed connectivity & consensus", detail: "Governed MCP opens the platform to external AI clients under enforcement, and 2-of-3 multi-provider consensus with fail-close containment governs consequential decisions." },
];

export function PlatformPage() {
  return (
    <div className="space-y-14">
      <Helmet>
        <title>Platform Architecture | CoreIdentity</title>
        <meta
          name="description"
          content="The complete CoreIdentity architecture for CTOs and security evaluators: an eight-component governance substrate spanning identity, authorization, formal verification, orchestration, and post-quantum hardening — schema-enforced accountability boundaries across every agent action, a Platinum Test Suite with every invariant held, governed agent interactions at institutional scale in production."
        />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"CoreIdentity","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      <section className="pt-4 md:pt-8">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Platform Architecture
        </div>
        <h1 className="mt-4 font-serif text-display-xl tracking-tight text-ink md:text-display-2xl">
          The full governance substrate, end to end
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-secondary md:text-xl">
          This is the page for institutional evaluators who want depth before they sign. CoreIdentity
          is not an application layered over autonomous AI — it is the architectural substrate that
          makes every decision provable: authorized before execution, attributed to a verified
          identity, bounded by codified policy, and recorded in a tamper-evident trail hardened
          against current and future threats.
        </p>
      </section>

      <section>
        <SectionHead
          eyebrow="The enforcement chain"
          title="Eight components, one substrate"
          intro="Every agent action passes through a vertically integrated enforcement chain before execution is permitted. Each component has a distinct job and a clear boundary, and each maps to one of the four institutional assurance layers."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {ARCHITECTURE_SUMMARY.map((l) => (
            <a key={l.name} href={l.to} className="cidg-card block rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40">
              <h3 className="font-serif text-lg text-ink">{l.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{l.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section>
        <SectionHead
          eyebrow="The execution air gap"
          title="Where authorization sits"
          intro="Reasoning is decoupled from authorization. The agent reasons freely northbound; the SAL Kernel arbitrates deterministically; only SAL-certified rails execute southbound. No probabilistic model can override a codified business rule."
        />
        <div className="grid items-stretch gap-4 md:grid-cols-3">
          <InfoCard title="Northbound — reasoning">
            Any LLM, autonomous agent, or orchestration framework generating tool calls and action
            intents. SAL intercepts every call before it reaches enterprise infrastructure.
          </InfoCard>
          <div className="flex flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
            <div className="font-serif text-lg text-accent">SAL Kernel</div>
            <div className="mt-1 text-xs text-ink-secondary">Identity · Intent · Asset · Action · Context</div>
            <div className="mt-3 rounded-full border border-accent/30 px-3 py-1 text-xs text-accent">sub-3ms · deterministic</div>
          </div>
          <InfoCard title="Southbound — execution">
            SAL-certified rails — databases, payment gateways, APIs, enterprise connectors — that
            implement the southbound integration standard. Uncertified infrastructure is default-deny.
          </InfoCard>
        </div>
      </section>

      <section>
        <SectionHead title="Production posture" intro="Operating infrastructure, sourced from verified live deployments on AWS ECS Fargate (us-east-2) — not a roadmap." />
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
            <li key={t.phase} className="flex gap-4 rounded-2xl border border-line bg-carbon-panel p-5">
              <div className="tabular-figures shrink-0 font-serif text-2xl text-accent">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{t.phase}</div>
                <div className="font-serif text-lg text-ink">{t.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-ink-secondary">{t.detail}</p>
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
