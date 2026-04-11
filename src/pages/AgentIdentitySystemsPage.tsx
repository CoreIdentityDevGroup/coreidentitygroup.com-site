import React from "react";
import { Card, PageTitle, SectionTitle, PulseDot, Eyebrow } from "../components/ui";

export function AgentIdentitySystemsPage() {
  return (
    <div className="space-y-12">

      <div className="space-y-4 cidg-fadein">
        <Eyebrow>A COREIDENTITY DEVELOPMENT GROUP COMPANY</Eyebrow>
        <PageTitle>Agent Identity Systems</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed text-lg">
          Every agent needs an identity it can prove. Agent Identity Systems
          is the identity and accountability infrastructure for autonomous AI —
          authentication, authorization, provenance, and attribution enforced
          at the execution layer, not bolted on after the fact.
        </p>
        <a
          href="https://agentidentity.systems"
          target="_blank"
          rel="noopener noreferrer"
          className="cidg-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-indigo-500/30 text-indigo-300 hover:text-indigo-200 transition"
          style={{background:'rgba(99,102,241,0.08)'}}
        >
          Visit agentidentity.systems →
        </a>
      </div>

      <Card accent="indigo" className="cidg-fadein cidg-fadein-delay-1">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <PulseDot color="#6366f1" />
            <span className="text-xs font-mono tracking-[0.15em] text-indigo-400">
              PRODUCTION — LIVE DEPLOYMENT
            </span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            AIS is live in production and actively running under extended
            soak conditions — validating identity enforcement, authorization
            boundaries, and audit trail integrity at scale. The portal is
            publicly accessible at agentidentity.systems.
          </p>
          <a
            href="https://agentidentity.systems"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition"
          >
            View live portal at agentidentity.systems →
          </a>
        </div>
      </Card>

      <div className="space-y-4 cidg-fadein cidg-fadein-delay-2">
        <SectionTitle>Identity infrastructure for the agentic era</SectionTitle>
      </div>

      <div className="grid gap-5 md:grid-cols-2 cidg-fadein cidg-fadein-delay-3">
        <Card accent="indigo">
          <div className="font-semibold text-white mb-2">Agent Authentication</div>
          <p className="text-sm text-white/60 leading-relaxed">
            Cryptographically verifiable identity for every agent. Not session
            tokens — persistent, auditable credentials that prove who the agent
            is and who authorized it to act.
          </p>
        </Card>
        <Card accent="indigo">
          <div className="font-semibold text-white mb-2">Authorization Boundaries</div>
          <p className="text-sm text-white/60 leading-relaxed">
            Policy-linked identity boundaries that constrain what each agent
            can do, where it can do it, and under what conditions — enforced
            at runtime, not in configuration files.
          </p>
        </Card>
        <Card accent="indigo">
          <div className="font-semibold text-white mb-2">Provenance and Traceability</div>
          <p className="text-sm text-white/60 leading-relaxed">
            Every action an agent takes is traceable back to its identity,
            its authorization chain, and the human or system that initiated
            it. Full lineage with no gaps.
          </p>
        </Card>
        <Card accent="indigo">
          <div className="font-semibold text-white mb-2">Attribution and Accountability</div>
          <p className="text-sm text-white/60 leading-relaxed">
            When something goes wrong, you know exactly which agent acted,
            under which authorization, and what policy governed the decision.
            Audit-grade accountability built in.
          </p>
        </Card>
      </div>

      <Card className="cidg-fadein cidg-fadein-delay-4">
        <div className="font-semibold text-white mb-3">
          The problem every enterprise is about to face
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          Your agents are making consequential decisions right now. Most
          organizations cannot answer three basic questions: Which agent did
          this? Was it authorized to act? Can you prove it to a regulator?
          AIS makes those questions answerable — before an incident forces them.
        </p>
      </Card>

      <div
        className="rounded-2xl p-6 cidg-fadein cidg-fadein-delay-5"
        style={{border:'1px solid rgba(99,102,241,0.2)', background:'rgba(99,102,241,0.04)'}}
      >
        <div className="text-xs font-medium tracking-widest text-indigo-400 uppercase mb-3">
          Native to the CoreIdentity Enforcement Stack
        </div>
        <p className="text-sm text-white/70 leading-relaxed mb-4">
          AIS integrates natively with Sentinel OS for policy enforcement,
          SAL Kernel for semantic authorization, and Nexus OS for multi-agent
          orchestration. Identity is not a feature — it is the foundation
          every other control depends on.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Sentinel OS','SAL Kernel','Nexus OS','AGO'].map(function(p) {
            return (
              <span key={p} className="text-xs px-3 py-1 rounded border border-indigo-500/20 text-indigo-300" style={{background:'rgba(99,102,241,0.05)'}}>
                {p}
              </span>
            );
          })}
        </div>
      </div>

    </div>
  );
}
