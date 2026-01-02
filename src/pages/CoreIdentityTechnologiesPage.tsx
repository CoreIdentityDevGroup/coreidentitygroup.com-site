import React from "react";
import { Card, PageTitle, SectionTitle } from "../components/ui";
import { BrandIcon } from "../components/BrandIcon";

export function CoreIdentityTechnologiesPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <PageTitle>CoreIdentity Technologies</PageTitle>
        <div className="text-sm text-white/60">A Core Holding Corporation company.</div>
        <p className="text-white/70 max-w-3xl">
          CoreIdentity Technologies is the platform company delivering the governance-first execution stack for safe, auditable AI operations.
        </p>
      </div>

      <section className="space-y-5">
        <SectionTitle>Three-layer governed execution stack</SectionTitle>
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <div className="flex items-start gap-4">
              <BrandIcon src="/assets/sentinel-icon.svg" alt="Sentinel OS icon" />
              <div>
                <div id="sentinel-os" className="text-xl font-semibold">Sentinel OS</div>
                <div className="mt-2 text-white/70">Governance layer enforcing policy, approvals, and evidence capture.</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <BrandIcon src="/assets/nexus-icon.svg" alt="Nexus OS icon" />
              <div>
                <div id="nexus-os" className="text-xl font-semibold">Nexus OS</div>
                <div className="mt-2 text-white/70">Orchestration layer coordinating workflows, integrations, and recovery.</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <BrandIcon src="/assets/smartnation-icon.svg" alt="SmartNation AI icon" />
              <div>
                <div id="smartnation-ai" className="text-xl font-semibold">SmartNation AI</div>
                <div className="mt-2 text-white/70">Digital labor layer deploying governed AI workers executing real operational work.</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
