// CIDG_GOOGLE_COMPLIANCE_CONTACT_v1
import React from "react";
import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";

export default function ContactPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-3">
        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>
        <PageTitle>Contact</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed">
          CoreIdentity engages with enterprise teams, institutional investors, and
          technology partners evaluating governance infrastructure for agentic AI deployment.
        </p>
      </div>

      {/* Primary CTA */}
      <section className="space-y-5">
        <SectionTitle>Advisory Intake</SectionTitle>
        <Card>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              CoreIdentity is scheduling Phase 0 governance discovery sessions beginning August 2026.
              Complete the advisory intake to reserve your place and receive a recommended engagement
              path based on your organization's AI landscape and regulatory environment.
              Discovery sessions are structured for CISOs, CTOs, CCOs, and compliance leads
              evaluating enterprise AI governance requirements.
            </p>
            <a
              href="https://advisory.coreidentitygroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-blue-900/30"
            >
              Begin Advisory Intake →
            </a>
          </div>
        </Card>
      </section>

      {/* Developer Access */}
      <section className="space-y-5">
        <SectionTitle>Developer and API Access</SectionTitle>
        <Card>
          <div className="space-y-4">
            <p className="text-white/70 leading-relaxed">
              Technical teams can register agents, access the Agent Identity Systems API,
              and integrate with CoreIdentity's post-quantum identity infrastructure directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://agentidentity.systems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-blue-500/40 hover:border-blue-400 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors duration-200"
              >
                Agent Identity Systems →
              </a>
              <a
                href="https://portal.coreidentitygroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-white/15 hover:border-white/30 text-white/60 hover:text-white/80 font-semibold text-sm transition-colors duration-200"
              >
                Governance Portal →
              </a>
            </div>
          </div>
        </Card>
      </section>

      {/* Direct Contact */}
      <section className="space-y-5">
        <SectionTitle>Direct Contact</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <div className="text-sm font-semibold text-white/80 mb-1">General Inquiries</div>
            <a href="mailto:info@coreidentitygroup.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
              info@coreidentitygroup.com
            </a>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white/80 mb-1">Investor Relations</div>
            <a href="mailto:investors@coreidentitygroup.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
              investors@coreidentitygroup.com
            </a>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white/80 mb-1">Advisory Inquiries</div>
            <a href="mailto:advisory@coreidentitygroup.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
              advisory@coreidentitygroup.com
            </a>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-white/80 mb-1">Media and Press</div>
            <a href="mailto:info@coreidentitygroup.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
              info@coreidentitygroup.com
            </a>
          </Card>
        </div>
      </section>

    </div>
  );
}
