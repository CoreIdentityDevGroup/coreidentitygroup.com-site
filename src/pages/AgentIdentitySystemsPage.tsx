import React from "react";
import { Card, PageTitle } from "../components/ui";

export function AgentIdentitySystemsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40">A COREIDENTITY DEVELOPMENT GROUP COMPANY</div>
        <PageTitle>Agent Identity Systems</PageTitle>
        <p className="text-white/70 max-w-3xl">Every agent needs an identity it can prove. Agent Identity Systems is the identity and accountability infrastructure for autonomous AI — authentication, authorization, provenance, and attribution enforced at the execution layer, not bolted on after the fact.</p>
      </div>

      <Card>
        <div className="space-y-2">
          <div className="text-xs font-medium tracking-[0.15em] text-indigo-400 mb-3">LIVE — 30-DAY SOAK TEST RUNNING</div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">SOAK CYCLES</div>
              <div className="text-2xl font-bold text-indigo-300">32,784+</div>
              <div className="text-xs text-white/50">100% pass rate</div>
            </div>
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">AVG LATENCY</div>
              <div className="text-2xl font-bold text-indigo-300">99ms</div>
              <div className="text-xs text-white/50">identity verify p95</div>
            </div>
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">UPTIME</div>
              <div className="text-2xl font-bold text-indigo-300">100%</div>
              <div className="text-xs text-white/50">30-day soak window</div>
            </div>
          </div>
          <a href="https://agentidentity.systems" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition">View live portal at agentidentity.systems →</a>
        </div>
      </Card>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Identity infrastructure for the agentic era</h2>
      </div>

      <Card>
        <div className="space-y-4">
          <div>
            <div className="font-semibold text-white mb-1">Agent Authentication</div>
            <p className="text-sm text-white/60 leading-relaxed">Cryptographically verifiable identity for every agent. Not session tokens — persistent, auditable credentials that prove who the agent is and who authorized it to act.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-1">Authorization Boundaries</div>
            <p className="text-sm text-white/60 leading-relaxed">Policy-linked identity boundaries that constrain what each agent can do, where it can do it, and under what conditions — enforced at runtime, not in configuration files.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-1">Provenance and Traceability</div>
            <p className="text-sm text-white/60 leading-relaxed">Every action an agent takes is traceable back to its identity, its authorization chain, and the human or system that initiated it. Full lineage with no gaps.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-1">Attribution and Accountability</div>
            <p className="text-sm text-white/60 leading-relaxed">When something goes wrong, you know exactly which agent acted, under which authorization, and what policy governed the decision. Audit-grade accountability built in.</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-3">
          <div className="font-semibold text-white">The problem every enterprise is about to face</div>
          <p className="text-sm text-white/60 leading-relaxed">Your agents are making consequential decisions right now. Most organizations cannot answer three basic questions: Which agent did this? Was it authorized to act? Can you prove it to a regulator? AIS makes those questions answerable — before an incident forces them.</p>
        </div>
      </Card>

      <div className="rounded-2xl border border-indigo-400/20 bg-indigo-400/5 p-6">
        <div className="text-sm font-semibold tracking-wide text-indigo-400 uppercase mb-3">Native to the CoreIdentity Enforcement Stack</div>
        <p className="text-sm text-white/70 leading-relaxed">AIS integrates natively with Sentinel OS for policy enforcement, SAL Kernel for semantic authorization, and Nexus OS for multi-agent orchestration. Identity is not a feature — it is the foundation every other control depends on.</p>
        <a href="/sentinel-os" className="mt-3 inline-flex items-center gap-1 text-sm text-indigo-400/80 hover:text-indigo-400 transition">Explore the enforcement stack →</a>
      </div>
    </div>
  );
}
