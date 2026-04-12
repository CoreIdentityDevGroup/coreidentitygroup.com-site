import React from "react";
import { PageTitle, Eyebrow } from "../components/ui";

export function PrivacyPage() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div className="space-y-4">
        <Eyebrow>LEGAL</Eyebrow>
        <PageTitle>Privacy Policy</PageTitle>
        <p className="text-white/50 text-sm">Effective date: April 12, 2026</p>
      </div>

      <div className="space-y-6 text-white/70 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Overview</h2>
          <p>CoreIdentity Development Group Inc. ("CoreIdentity," "we," "us," or "our") operates coreidentitygroup.com and related platform services. This Privacy Policy describes how we collect, use, and protect information when you interact with our website and services.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Information We Collect</h2>
          <p>We collect information you provide directly, including name, email address, and organizational affiliation when you submit a contact or briefing request. We also collect standard server log data including IP addresses, browser type, and pages visited.</p>
          <p>We do not sell, rent, or share personal information with third parties for marketing purposes.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">How We Use Information</h2>
          <p>Information you provide is used solely to respond to your inquiry, schedule requested briefings, and communicate about CoreIdentity products and services. We do not use your information for automated decision-making or profiling.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Data Retention</h2>
          <p>We retain contact information for as long as necessary to fulfill the purpose for which it was collected or as required by applicable law. You may request deletion of your information at any time by contacting us directly.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Security</h2>
          <p>CoreIdentity applies institutional-grade security controls to all data we handle, consistent with the governance standards we build into our products. This includes encryption in transit and at rest, access controls, and audit logging.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p>For privacy-related inquiries, contact us at <a href="mailto:tmorgan@coreidentitygroup.com" className="text-white/80 hover:text-white transition">tmorgan@coreidentitygroup.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
