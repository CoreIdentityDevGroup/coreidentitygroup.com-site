import React from "react";
import { Card, PageTitle, Eyebrow, PulseDot } from "../components/ui";

export function PortalPage() {
  return (
    <div className="space-y-12">

      <div className="space-y-4 cidg-fadein">
        <Eyebrow>CUSTOMER ACCESS</Eyebrow>
        <PageTitle>Governance Portal</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed text-lg">
          The CoreIdentity Governance Portal provides authorized clients
          with real-time visibility into their governed agent fleet —
          enforcement events, compliance posture, audit trails, and
          operational telemetry. Access is provisioned during onboarding.
        </p>
      </div>

      <Card className="cidg-fadein cidg-fadein-delay-1">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <PulseDot color="#22c55e" />
            <span className="text-xs font-mono tracking-[0.15em] text-green-400">
              PORTAL OPERATIONAL
            </span>
          </div>
          <p className="text-white/60 leading-relaxed text-sm">
            Your portal credentials are issued by CoreIdentity upon completion
            of your onboarding engagement. Each client account provides access
            exclusively to your organization's governed environment — agents,
            enforcement events, compliance scores, and audit records.
          </p>
          <a
            href="https://portal.coreidentitygroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cidg-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-white/15 text-white hover:border-white/30 transition"
            style={{background:'rgba(255,255,255,0.06)'}}
          >
            Access Portal →
          </a>
        </div>
      </Card>

      <div className="space-y-5 cidg-fadein cidg-fadein-delay-2">
        <div className="text-sm font-medium text-white/40 tracking-widest uppercase">What You Have Access To</div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="font-semibold text-white mb-2">Enforcement Dashboard</div>
            <p className="text-sm text-white/60 leading-relaxed">Real-time SAL enforcement events, policy decisions, and active governance status across your entire agent fleet.</p>
          </Card>
          <Card>
            <div className="font-semibold text-white mb-2">Compliance Posture</div>
            <p className="text-sm text-white/60 leading-relaxed">Framework coverage, governance scores, audit schedules, and compliance evidence for your regulated environment.</p>
          </Card>
          <Card>
            <div className="font-semibold text-white mb-2">Audit Trail</div>
            <p className="text-sm text-white/60 leading-relaxed">Immutable, cryptographically anchored records of every agent action, authorization decision, and policy enforcement event.</p>
          </Card>
        </div>
      </div>

      <Card className="cidg-fadein cidg-fadein-delay-3">
        <div className="font-semibold text-white mb-3">Not yet a client?</div>
        <p className="text-sm text-white/60 leading-relaxed mb-4">
          Portal access is available to organizations engaged with CoreIdentity
          through an active advisory or platform deployment agreement.
          To begin the onboarding process, contact us directly.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition"
        >
          Request an Engagement →
        </a>
      </Card>

    </div>
  );
}
