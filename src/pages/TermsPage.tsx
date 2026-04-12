import React from "react";
import { PageTitle, Eyebrow } from "../components/ui";

export function TermsPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div className="space-y-4">
        <Eyebrow>LEGAL</Eyebrow>
        <PageTitle>Terms of Use</PageTitle>
        <p className="text-white/50 text-sm">Effective date: April 12, 2026</p>
      </div>

      <div className="space-y-6 text-white/70 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Acceptance</h2>
          <p>By accessing coreidentitygroup.com or any CoreIdentity platform service, you agree to these Terms of Use. If you do not agree, do not access or use our services.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Use of This Site</h2>
          <p>This website is provided for informational purposes. You may not use it for any unlawful purpose, attempt to gain unauthorized access to any system or data, or engage in any activity that disrupts or interferes with the site or its infrastructure.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Intellectual Property</h2>
          <p>All content on this site — including text, images, product names, trademarks, and platform architecture descriptions — is the property of CoreIdentity Development Group Inc. and is protected by applicable intellectual property laws. Agentic Execution Governance (AEG) is a proprietary category defined by CoreIdentity. Unauthorized use or reproduction is prohibited.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Platform Access</h2>
          <p>Access to the CoreIdentity Governance Portal is granted exclusively to authorized clients under an active engagement agreement. Unauthorized access attempts are prohibited and may be subject to legal action.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Disclaimers</h2>
          <p>This site is provided "as is" without warranties of any kind. CoreIdentity does not warrant that the site will be uninterrupted, error-free, or free of harmful components.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Governing Law</h2>
          <p>These terms are governed by the laws of the United States. Any disputes arising from use of this site shall be resolved in accordance with applicable federal and state law.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:tmorgan@coreidentitygroup.com" className="text-white/80 hover:text-white transition">tmorgan@coreidentitygroup.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
