import React from "react";
import { Card, PageTitle } from "../components/ui";

export function SentinelOSPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageTitle>Sentinel OS</PageTitle>
        <p className="text-white/70 max-w-3xl">Governance layer enforcing policy, approvals, identity boundaries, and audit-ready evidence for autonomous systems.</p>
      </div>
      <Card>
        <ul className="list-disc pl-5 space-y-2 text-white/75">
          <li>Policy enforcement</li><li>Identity + permissions</li><li>Approval gates</li><li>Evidence + audit trails</li><li>Fail-closed controls</li>
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
          All Sentinel OS enforcement operations are powered by the SAL Enforcement Kernel — the deterministic gateway that mathematically prevents any machine action violating codified business logic or safety thresholds. Every policy decision, approval gate, and audit trail is arbitrated through SAL's five-dimensional IIAAC model.
        </p>
        <a href="/sal" className="mt-3 inline-flex items-center gap-1 text-sm text-amber-400/80 hover:text-amber-400 transition">
          Learn how SAL enforces boundaries →
        </a>
      </div>
    </div>
  );
}
