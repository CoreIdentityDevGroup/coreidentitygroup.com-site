// CIDG_HUB_REGULATED_v1
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function RegulatedIndustriesPage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Regulated Industries AI Governance | CoreIdentity</title>
        <meta name="description" content="CoreIdentity enforces autonomous-agent governance across eleven regulated industries — authorization, attribution, and audit mapped to the obligations each regulator enforces, from SEC and HIPAA to CMMC and FinCEN." />
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Governance · Regulated Industries
        </p>
        <h1 className="font-serif text-display-xl md:text-display-2xl tracking-tight leading-tight text-ink">
          Institutional governance, mapped to your regulator.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-secondary">
          Every regulated industry delegates consequential authority to autonomous agents under a
          different rulebook — but the requirement is the same: prove each agent acted within authority.
          CoreIdentity enforces authorization, attribution, and audit at the execution layer, mapped to
          the obligations your regulator actually enforces.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
          >
            Request Governance Architecture Review
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-xl border border-line px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/40"
          >
            Explore Platform Architecture
          </Link>
        </div>
      </div>

      {/* ── Verticals ───────────────────────────────────────────────────── */}
      <section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link
            key="/governance/bfsi"
            to="/governance/bfsi"
            className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"
          >
            <h2 className="font-serif text-xl text-ink">BFSI</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">Authorize, attribute, and prove every autonomous action across trading, credit, and payments — to SEC, FINRA, OCC, Basel III, and PCI-DSS standards.</p>
            <span className="mt-4 text-sm font-medium text-accent">Explore →</span>
          </Link>
          <Link
            key="/governance/education"
            to="/governance/education"
            className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"
          >
            <h2 className="font-serif text-xl text-ink">EducationOps</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">Govern every agent that touches student records, federal aid, or research data — to FERPA, Title IV, and federal research standards.</p>
            <span className="mt-4 text-sm font-medium text-accent">Explore →</span>
          </Link>
          <Link
            key="/governance/finance"
            to="/governance/finance"
            className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"
          >
            <h2 className="font-serif text-xl text-ink">FinanceOps</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">Keep autonomous agents inside SOX controls across the close, treasury, and reporting — authorized, segregated, and audit-ready.</p>
            <span className="mt-4 text-sm font-medium text-accent">Explore →</span>
          </Link>
          <Link
            key="/governance/healthcare"
            to="/governance/healthcare"
            className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"
          >
            <h2 className="font-serif text-xl text-ink">HealthcareOps</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">Enforce HIPAA-grade access, attribution, and audit across every clinical and administrative agent — to HIPAA, FDA, CMS, and Cures Act standards.</p>
            <span className="mt-4 text-sm font-medium text-accent">Explore →</span>
          </Link>
          <Link
            key="/governance/hospitality"
            to="/governance/hospitality"
            className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"
          >
            <h2 className="font-serif text-xl text-ink">HospitalityOps</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">Govern guest payment and personal data across brands and borders — to PCI-DSS, GDPR, and data-sovereignty requirements.</p>
            <span className="mt-4 text-sm font-medium text-accent">Explore →</span>
          </Link>
          <Link
            key="/governance/legal"
            to="/governance/legal"
            className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"
          >
            <h2 className="font-serif text-xl text-ink">LegalOps</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">Preserve privilege and work product across every agent that touches a matter — to ABA Model Rules and privilege doctrine.</p>
            <span className="mt-4 text-sm font-medium text-accent">Explore →</span>
          </Link>
          <Link
            key="/governance/logistics"
            to="/governance/logistics"
            className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"
          >
            <h2 className="font-serif text-xl text-ink">LogisticsOps</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">Govern routing, customs clearance, and party screening across the supply chain — to CISA, DHS, and export-control standards.</p>
            <span className="mt-4 text-sm font-medium text-accent">Explore →</span>
          </Link>
          <Link
            key="/governance/manufacturing"
            to="/governance/manufacturing"
            className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"
          >
            <h2 className="font-serif text-xl text-ink">ManufacturingOps</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">Protect CUI and controlled technical data across design and production — to CMMC, ITAR, and EAR requirements.</p>
            <span className="mt-4 text-sm font-medium text-accent">Explore →</span>
          </Link>
          <Link
            key="/governance/private-capital"
            to="/governance/private-capital"
            className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"
          >
            <h2 className="font-serif text-xl text-ink">PrivateCapitalOps</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">Govern diligence, valuation, and LP-reporting agents — to SEC private-fund rules, FINRA, and fiduciary duty.</p>
            <span className="mt-4 text-sm font-medium text-accent">Explore →</span>
          </Link>
          <Link
            key="/governance/real-estate"
            to="/governance/real-estate"
            className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"
          >
            <h2 className="font-serif text-xl text-ink">RealEstateOps</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">Govern origination, title, and closing agents against money-laundering and consumer-protection risk — to FinCEN, BSA, and CFPB standards.</p>
            <span className="mt-4 text-sm font-medium text-accent">Explore →</span>
          </Link>
          <Link
            key="/governance/retail"
            to="/governance/retail"
            className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"
          >
            <h2 className="font-serif text-xl text-ink">RetailOps</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">Govern pricing, payments, and personalization agents across millions of consumers — to PCI-DSS, CCPA/CPRA, and consumer-protection law.</p>
            <span className="mt-4 text-sm font-medium text-accent">Explore →</span>
          </Link>
        </div>
      </section>

      {/* ── Sovereign pointer ───────────────────────────────────────────── */}
      <section className="rounded-2xl border border-line bg-carbon-panel p-6">
        <div className="text-xs font-medium uppercase tracking-widest text-accent">Sovereign & Government</div>
        <h2 className="mt-2 font-serif text-xl text-ink">Operating with public authority?</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-secondary">
          Government and sovereign missions are held to accreditation, not commercial, standards. See how
          CoreIdentity governs autonomous agents to FedRAMP, FISMA, IL4/IL5, the UAE AI Act, and Singapore IMDA.
        </p>
        <Link to="/governance/sovereign" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition hover:text-accent-strong">
          Sovereign & Government governance →
        </Link>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center md:p-10">
        <h2 className="font-serif text-display-md text-ink">Bring This in Front of Your Evaluators</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink-secondary">
          CoreIdentity is institutional trust infrastructure for autonomous systems — governance proven at the execution layer, not asserted in a policy document. Bring your security, legal, and compliance reviewers; we will walk the full enforcement architecture.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
          >
            Request Governance Architecture Review
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/40"
          >
            Explore Platform Architecture
          </Link>
        </div>
      </section>
    </div>
  );
}

export default RegulatedIndustriesPage;
