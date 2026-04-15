import React from "react";
import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 space-y-12">
      <Helmet>
        <title>AI Governance Resources | White Papers &amp; Research | CoreIdentity</title>
        <meta name="description" content="Access CoreIdentity AI governance resources including the AIP v0.1 White Paper, compliance frameworks, and strategic governance briefs." />
      </Helmet>

      <div className="space-y-4">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40">
          COREIDENTITY DEVELOPMENT GROUP
        </div>
        <h1 className="text-4xl font-semibold tracking-tight">Resources</h1>
        <p className="text-white/70 max-w-3xl leading-relaxed text-lg">
          Research, white papers, and strategic governance frameworks for
          enterprise and sovereign AI deployments.
        </p>
      </div>

      {/* AIP White Paper */}
      <div className="rounded-2xl border border-indigo-500/30 p-8" style={{background:"rgba(99,102,241,0.05)"}}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-medium tracking-widest text-indigo-400 uppercase">White Paper</span>
          <span className="text-xs text-white/30">·</span>
          <span className="text-xs text-white/40">April 2026</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-3">
          Agent Identity Protocol (AIP) v0.1 — White Paper
        </h2>
        <p className="text-white/70 leading-relaxed mb-4 max-w-3xl">
          The open standard for AI agent identity, verification, and governance.
          Includes full compliance mapping for EU AI Act, Colorado SB 24-205,
          and NIST AI RMF 1.0.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["AIP", "Agent Identity", "EU AI Act", "NIST AI RMF", "Governance Standard"].map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-indigo-500/20 text-indigo-300" style={{background:"rgba(99,102,241,0.06)"}}>
              {tag}
            </span>
          ))}
        </div>
        <a
          href="/AIP-v0.1-White-Paper-v2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-indigo-500/30 text-indigo-300 hover:text-indigo-200 transition"
          style={{background:"rgba(99,102,241,0.08)"}}
        >
          Download PDF →
        </a>
      </div>

      {/* Health100 Industry Brief */}
      <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-medium tracking-widest text-white/40 uppercase">Industry Brief</span>
          <span className="text-xs text-white/30">·</span>
          <span className="text-xs text-white/40">April 2026</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-3">
          Governing the Health100 Agentic Ecosystem
        </h2>
        <p className="text-white/70 leading-relaxed mb-4 max-w-3xl">
          Strategic governance framework for CVS Health’s Health100 initiative —
          100,000 autonomous agents, HIPAA compliance, and the CoreIdentity
          governance substrate.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["Healthcare AI", "HIPAA", "Health100", "CVS", "Agentic Governance"].map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/50" style={{background:"rgba(255,255,255,0.03)"}}>
              {tag}
            </span>
          ))}
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-white/15 text-white/70 hover:text-white hover:bg-white/5 transition"
        >
          Request Full Brief →
        </Link>
      </div>

      <div className="text-center pt-4">
        <p className="text-white/40 text-sm mb-4">
          Additional governance resources, compliance frameworks, and deployment guides available on request.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
        >
          Request Resources
        </Link>
      </div>
    </div>
  );
}
