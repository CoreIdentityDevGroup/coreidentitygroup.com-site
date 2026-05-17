import React from "react";
import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";

const VERTICALS = [
  {
    label: "Healthcare",
    count: "2,500",
    frameworks: "HIPAA · SOC2 · HITRUST · FDA 21 CFR Part 11",
    roles: ["Prior Authorization Review", "Clinical Documentation", "Claims Adjudication", "Medication Reconciliation", "HIPAA Privacy Audit", "Formulary Management"],
  },
  {
    label: "Financial Services",
    count: "1,500",
    frameworks: "GLBA · PCI-DSS · SOX · DORA · Basel III",
    roles: ["AML Transaction Monitoring", "KYC Onboarding Verification", "Credit Risk Underwriting", "Trade Surveillance", "Regulatory Reporting", "Fraud Detection"],
  },
  {
    label: "Retail",
    count: "1,500",
    frameworks: "PCI-DSS · CCPA · GDPR · FTC Act",
    roles: ["Demand Forecasting", "Inventory Replenishment", "Price Optimization", "Loss Prevention", "Customer Segmentation", "Shrink Detection"],
  },
  {
    label: "Enterprise / BFSI",
    count: "1,000",
    frameworks: "SOX · Basel III · DORA · ISO 27001",
    roles: ["Financial Close", "SOX Compliance", "Enterprise Risk Assessment", "ISO 27001 Compliance", "ESG Reporting", "Internal Audit"],
  },
  {
    label: "Manufacturing",
    count: "1,000",
    frameworks: "ISO 9001 · OSHA · FDA 21 CFR · ITAR",
    roles: ["Production Scheduling", "Machine Downtime Prediction", "ISO 9001 Audit", "OSHA Compliance", "Predictive Maintenance", "CAPA Tracking"],
  },
  {
    label: "Logistics",
    count: "1,000",
    frameworks: "CTPAT · IATA · DOT Compliance · OSHA",
    roles: ["Route Optimization", "Freight Audit", "Customs Documentation", "Carrier Selection", "Warehouse Slotting", "Trade Compliance"],
  },
  {
    label: "Legal",
    count: "750",
    frameworks: "ABA Model Rules · CCPA · GDPR · FRCP",
    roles: ["eDiscovery Classification", "Contract Review", "Privilege Review", "Regulatory Filing", "Legal Research", "Matter Budgeting"],
  },
  {
    label: "Hospitality",
    count: "750",
    frameworks: "PCI-DSS · CCPA · GDPR",
    roles: ["Dynamic Pricing", "Demand Forecasting", "Guest Preference", "Housekeeping Schedule", "Revenue Management", "PCI-DSS Compliance"],
  },
];

function VerticalCard({ label, count, frameworks, roles }: { label: string; count: string; frameworks: string; roles: string[] }) {
  return (
    <Card>
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="text-lg font-semibold">{label}</div>
          <div className="text-blue-300 font-mono text-sm shrink-0">{count} agents</div>
        </div>
        <p className="text-white/50 text-xs">{frameworks}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {roles.map((r) => (
            <span key={r} className="text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded-full">{r}</span>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function SmartNationAIPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <Eyebrow>GOVERNANCE INFRASTRUCTURE</Eyebrow>
        <PageTitle>SmartNation AI</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed">
          The governed digital labor registry. SmartNation AI catalogs, deploys, and monitors 10,000 enterprise-grade autonomous agents across 8 regulated verticals. Every agent maps to a real operational labor position, carries a full governance profile, and executes exclusively under Sentinel policy enforcement with an immutable audit trail anchored by the SAL Kernel.
        </p>
      </div>

      <section className="space-y-5">
        <SectionTitle>Registry at a Glance</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            { label: "Governed Agents", value: "10,000" },
            { label: "Active Agents", value: "8,240" },
            { label: "Regulated Verticals", value: "8" },
            { label: "Avg Governance Score", value: "63 / 100" },
          ].map(({ label, value }) => (
            <Card key={label}>
              <div className="text-2xl font-bold text-blue-300">{value}</div>
              <div className="text-white/60 text-sm mt-1">{label}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionTitle>Governance Architecture</SectionTitle>
        <Card>
          <div className="space-y-3 text-white/75 leading-relaxed">
            <p>Every agent in the SmartNation registry executes under the CoreIdentity governance stack. No agent reaches production without a governance profile, a risk tier assignment, and a compliance framework mapping. At runtime, every execution request is evaluated by the Semantic Arbitration Layer (SAL) across five dimensions — Identity, Intent, Asset, Action, and Context — before execution is permitted. Every decision generates an immutable Proof Pack anchored to a cryptographic ledger.</p>
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {[
                { tier: "TIER 1 — Critical", count: "6,021 agents (60%)", desc: "Highest risk. Dual approval required. Human review on escalation. Healthcare, financial, and legal agents." },
                { tier: "TIER 2 — Elevated", count: "3,030 agents (30%)", desc: "Elevated oversight. Automated policy checks with exception routing. Operations and supply chain agents." },
                { tier: "TIER 3 — Standard", count: "949 agents (10%)", desc: "Standard governance. Automated execution within defined policy bounds. Administrative and logistics agents." },
              ].map(({ tier, count, desc }) => (
                <div key={tier} className="space-y-1">
                  <div className="text-white font-semibold text-sm">{tier}</div>
                  <div className="text-blue-300 text-xs font-mono">{count}</div>
                  <p className="text-white/55 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-5">
        <SectionTitle>Agent Registry — by Vertical</SectionTitle>
        <p className="text-white/60 max-w-2xl text-sm">Agents are named after real enterprise labor positions. Each carries a compliance framework mapping, audit history, execution metrics, and a SAL IIAAC profile.</p>
        <div className="grid gap-5 md:grid-cols-2">
          {VERTICALS.map((v) => (
            <VerticalCard key={v.label} {...v} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionTitle>Certification Tiers</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            { tier: "Platinum", score: "85–100", count: "907", color: "text-cyan-300" },
            { tier: "Gold",     score: "70–84",  count: "2,472", color: "text-yellow-300" },
            { tier: "Silver",   score: "55–69",  count: "3,662", color: "text-slate-300" },
            { tier: "Foundation", score: "0–54", count: "2,959", color: "text-orange-300" },
          ].map(({ tier, score, count, color }) => (
            <Card key={tier}>
              <div className={`text-lg font-bold ${color}`}>{tier}</div>
              <div className="text-white/50 text-xs mt-1">Score {score}</div>
              <div className="text-white/70 text-sm mt-2 font-mono">{count} agents</div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
