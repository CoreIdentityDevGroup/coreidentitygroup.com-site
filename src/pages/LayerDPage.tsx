import { Helmet } from "react-helmet-async";
import {
  LayerHero,
  LayerNav,
  SectionHead,
  InfoCard,
  ProofStat,
  InstitutionalCTA,
} from "../components/institutional";

// Layer D — Cryptographic Hardening. Absorbs the former Quantum Hardening
// surface. Powered by Sentinel + PQ-CA + MCP + multi-provider consensus.
// SoftwareApplication JSON-LD migrated from the retired Sentinel surface.

const POSTURE: [string, string, string][] = [
  ["Agent identity signing", "ML-DSA-65 (FIPS 204)", "Live — HSM-backed"],
  ["Governance audit signing", "ML-DSA-65 (FIPS 204)", "Live — HSM-backed"],
  ["CA trust chain", "ML-DSA-65 (FIPS 204)", "Live — HSM-backed"],
  ["Key encapsulation", "ML-KEM-768 (FIPS 203)", "Live — software layer, HSM pending AWS KMS PQC support"],
  ["Entropy source", "ANU QRNG + OS CSPRNG", "Live"],
  ["Stateless hash signing", "SLH-DSA-128s (FIPS 205)", "Live — persistent HSM-backed keypair"],
  ["FGRE proof attestation", "SLH-DSA-128s (FIPS 205)", "Live — machine-verifiable"],
];

export function LayerDPage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Cryptographic Hardening — Layer D | CoreIdentity</title>
        <meta
          name="description"
          content="Cryptographic Hardening protects the full enforcement chain against current and future threats — the first commercial platform in production with all three NIST FIPS post-quantum standards (203/204/205). Powered by Sentinel, a post-quantum CA, governed MCP, and 2-of-3 multi-provider consensus with fail-close containment."
        />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Sentinel","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      <LayerHero
        eyebrow="Layer D · Cryptographic Hardening"
        title="Cryptographic Hardening"
        poweredBy={["Sentinel", "PQ-CA (Post-Quantum CA)", "Governed MCP", "Multi-Provider Consensus"]}
        lead={
          <>
            Adversaries are harvesting encrypted governance evidence today to decrypt once quantum
            computers can. A governance record that is not provable in ten years is not evidence.
            Cryptographic Hardening protects every cryptographic surface across the enforcement
            chain —{" "}
            <span className="text-ink">not just the perimeter</span> — and makes CoreIdentity the
            first commercial platform in production with all three NIST FIPS post-quantum standards.
          </>
        }
      />

      <LayerNav current="d" />

      <section>
        <SectionHead
          eyebrow="The institutional pain"
          title="Harvest now, decrypt later is already happening"
          intro="The threat to long-lived governance evidence is not hypothetical — encrypted audit trails collected today are a future liability. Identity credentials, authorization proofs, and audit signatures are the highest-value targets, and they are exactly the surfaces that must outlive the cryptography that protects them."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Sentinel — policy enforcement under hardened keys">
            Sentinel captures the immutable governance record and enforces policy at the execution
            layer. Every audit signature and governance record it produces is signed with
            post-quantum algorithms — the evidence remains verifiable regardless of future advances
            in cryptanalysis.
          </InfoCard>
          <InfoCard title="PQ-CA — a post-quantum certificate authority">
            A two-tier post-quantum Certificate Authority is embedded directly in the identity
            substrate. The Root CA is cold-stored in AWS Secrets Manager, signs only the Issuing CA
            certificate, then its key is zeroed. The online Issuing CA issues and verifies ML-DSA-65
            credentials. Revocation requires an explicit manual-override header, making automated
            revocation architecturally impossible.
          </InfoCard>
          <InfoCard title="Governed MCP — no ungoverned path in">
            Every Model Context Protocol tool call — from internal agents or external AI clients —
            passes through identical identity enforcement, namespace isolation, and contract
            versioning. MCP connectivity without governance is an ungoverned liability surface;
            here there is no unguarded path into the platform.
          </InfoCard>
          <InfoCard title="Multi-provider consensus, fail-close containment">
            Consequential decisions are arbitrated under 2-of-3 multi-provider consensus — no single
            model provider is a single point of failure or compromise. When consensus cannot be
            reached, the system fails closed: the action is contained rather than guessed.
          </InfoCard>
        </div>
      </section>

      <section>
        <SectionHead
          title="Cryptographic posture"
          intro="Precision matters. We distinguish surfaces fully hardened under HSM-backed key protection from those on a software interim layer pending AWS KMS native PQC support. This is the standard of transparency we hold ourselves to."
        />
        <div className="overflow-x-auto rounded-2xl border border-line bg-carbon-panel">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="px-5 py-3 font-medium tracking-wide text-ink-muted">Surface</th>
                <th className="px-5 py-3 font-medium tracking-wide text-ink-muted">Algorithm</th>
                <th className="px-5 py-3 font-medium tracking-wide text-ink-muted">Status</th>
              </tr>
            </thead>
            <tbody>
              {POSTURE.map(([surface, algo, status]) => {
                const isInterim = status.includes("software layer");
                return (
                  <tr key={surface} className="border-b border-line/60 last:border-0">
                    <td className="px-5 py-3 text-ink">{surface}</td>
                    <td className="px-5 py-3 font-mono text-xs text-accent">{algo}</td>
                    <td className={["px-5 py-3 text-xs font-medium", isInterim ? "text-amber-400/80" : "text-ink-secondary"].join(" ")}>
                      {status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["ML-KEM-768", "ML-DSA-65", "SLH-DSA-128s", "SHA-3-512", "AES-256-GCM"].map((a) => (
            <span key={a} className="rounded border border-accent/30 bg-accent/5 px-2 py-1 font-mono text-xs text-accent">
              {a}
            </span>
          ))}
        </div>
      </section>

      <section>
        <SectionHead title="QRNG entropy — anchored to quantum noise" />
        <InfoCard title="Quantum photon vacuum fluctuation">
          Every agent credential is anchored to quantum entropy. The primary source is the ANU
          Quantum Random Number Generator — a photon vacuum fluctuation apparatus. On each refresh,
          1,024 quantum-sourced values are XOR-mixed with OS CSPRNG output into a 16&nbsp;KB circular
          entropy pool, refreshed every 30 seconds in production. If the quantum source is
          unavailable the system degrades gracefully to CSPRNG fallback without halting issuance —
          QUANTUM status is reported only when photon-sourced entropy is actively contributing.
        </InfoCard>
      </section>

      <section>
        <SectionHead title="Production proof" intro="Hardened across the full enforcement chain and verified under adversarial conditions." />
        <div className="grid gap-4 sm:grid-cols-3">
          <ProofStat value="Post-quantum hardened" label="Across all three NIST FIPS production standards (203, 204, 205)" detail="First commercial platform in production" />
          <ProofStat value="2 of 3" label="Multi-provider consensus" detail="No single model provider is a point of failure" />
          <ProofStat value="Fail-close" label="Containment" detail="When consensus fails, the action is contained, not guessed" />
        </div>
      </section>

      <InstitutionalCTA />
    </div>
  );
}

export default LayerDPage;
