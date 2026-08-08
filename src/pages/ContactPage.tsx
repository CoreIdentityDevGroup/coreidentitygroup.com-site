// CIDG_GOOGLE_COMPLIANCE_CONTACT_v2
import React from "react";
import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";
import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <Helmet>
        <title>Contact | CoreIdentity</title>
        <meta name="description" content="Engage CoreIdentity on institutional trust infrastructure for autonomous systems — developer and API access, and direct contact." />
      </Helmet>

      <div className="space-y-3">
        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>
        <PageTitle>Contact</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed">
          CoreIdentity engages with enterprise teams, institutional investors, and
          technology partners evaluating institutional trust infrastructure for autonomous AI deployment.
        </p>
      </div>

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
                href="/governance-console"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-white/15 hover:border-white/30 text-white/60 hover:text-white/80 font-semibold text-sm transition-colors duration-200"
              >
                Governance Console →
              </a>
            </div>
          </div>
        </Card>
      </section>

      {/* Direct Contact */}
      <section className="space-y-5">
        <SectionTitle>Direct Contact</SectionTitle>
        <Card>
          <p className="text-white/70 leading-relaxed mb-3">
            For advisory intake, investor relations, media inquiries, or any other correspondence,
            please contact us directly and we will route your inquiry appropriately.
          </p>
          <a
            href="mailto:info@coreidentitygroup.com"
            className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
          >
            info@coreidentitygroup.com
          </a>
        </Card>
      </section>

    </div>
  );
}
