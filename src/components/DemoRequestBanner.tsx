// CIDG_GOOGLE_COMPLIANCE_DEMO_BANNER_v1
import React from "react";

/**
 * DemoRequestBanner
 * Google Compliance Sprint — Gap 2: Digital-Native Business Model Signal
 * Signals live product + scalable engagement model to reviewers.
 * Primary CTA: intake.coreidentitygroup.com
 */
export function DemoRequestBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-950/60 via-indigo-950/40 to-slate-900/60 p-8 md:p-10">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/8 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Institutional Trust Infrastructure · Live in Production
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            Prove Every AI Decision —<br className="hidden md:block" /> Authorized, Attributed, Auditable
          </h2>
          <p className="text-white/65 leading-relaxed">
            Schedule a live walkthrough of the Governance Portal — real-time policy
            enforcement, agent identity management, and autonomous audit trails.
            Structured for CISOs, CTOs, and compliance leads who need provable AI decision governance —
            proof that every agent acted within authority.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0 min-w-[200px]">
          <a
            href="https://intake.coreidentitygroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-blue-900/40 text-center"
          >
            Book a Consultation →
          </a>
          <a
            href="/governance-console"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-white/15 hover:border-white/35 text-white/70 hover:text-white font-semibold text-sm transition-colors duration-200 text-center"
          >
            View Governance Console
          </a>
        </div>
      </div>
    </div>
  );
}
