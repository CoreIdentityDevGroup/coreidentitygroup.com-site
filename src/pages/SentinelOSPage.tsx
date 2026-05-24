import React from "react";
import { Card, PageTitle, Eyebrow } from "../components/ui";
import { Helmet } from "react-helmet-async";

export function SentinelOSPage() {
  return (
    <div className="space-y-8">
      <Helmet>
        <title>Sentinel — AI Agent Policy Enforcement | CoreIdentity</title>
        <meta name="description" content="Sentinel enforces policy, controls identity boundaries, gates approvals, and captures the audit evidence that proves your AI fleet acted within authority — before a regulator asks." />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Sentinel","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>
      <div className="space-y-3">
        <Eyebrow>GOVERNANCE INFRASTRUCTURE</Eyebrow>
        <PageTitle>Sentinel</PageTitle>
        <p className="text-white/70 max-w-3xl">The reason your AI fleet cannot make a decision your legal team did not authorize. Sentinel enforces policy, controls identity boundaries, gates approvals, and captures the evidence your auditors will require — before a regulator asks for it.</p>
      </div>
      <Card>
        <ul className="list-disc pl-5 space-y-2 text-white/75">
          <li>Policy enforcement — agents execute only what was explicitly authorized</li><li>Identity + permissions — every agent action is attributed and bounded</li><li>Approval gates — human authority preserved at every critical decision point</li><li>Evidence + audit trails — the documentation your legal team needs before regulators ask</li><li>Fail-closed controls — ambiguity stops the agent, not the business</li>
        </ul>
      </Card>

      {/* SAL Trust Section */}
      <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
        <div className="flex items-center gap-3 mb-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-amber-400" aria-hidden="true">
            <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span className="text-sm font-semibold tracking-wide text-amber-400 uppercase">Governance Guaranteed by SAL</span>
        </div>
        <p className="text-sm text-white/70 leading-relaxed">
          All Sentinel enforcement operations are powered by the SAL Enforcement Kernel — the deterministic gateway that mathematically prevents any machine action violating codified business logic or safety thresholds. Every policy decision, approval gate, and audit trail is arbitrated through SAL's five-dimensional IIAAC model.
        </p>
        <a href="/sal" className="mt-3 inline-flex items-center gap-1 text-sm text-amber-400/80 hover:text-amber-400 transition">
          Learn how SAL enforces boundaries →
        </a>
      </div>

      {/* FGRE Sovereign Attestation Export */}
      <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6">
        <div className="flex items-center gap-3 mb-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-violet-400" aria-hidden="true">
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm font-semibold tracking-wide text-violet-400 uppercase">FGRE Sovereign Attestation Export</span>
        </div>
        <p className="text-sm text-white/70 leading-relaxed">
          Sentinel’s immutable audit records are now complemented by FGRE sovereign attestation
          export — machine-verifiable SLH-DSA-128s signed proof bundles exportable for
          regulatory submission and institutional due diligence. Where Sentinel captures what
          happened and proves it cannot be altered, FGRE proves the governance policy itself
          was mathematically sound before it activated. Together they provide complete
          governance evidence: verified policy integrity upstream, immutable execution record
          downstream.
        </p>
      </div>
    </div>
  );
}
