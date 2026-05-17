import React from "react";
import { Card, PageTitle, SectionTitle, PulseDot, Eyebrow } from "../components/ui";
import { Helmet } from "react-helmet-async";

export function FGREPage() {
 return (
 <div className="space-y-12">
      <Helmet>
        <title>FGRE — Formal Governance Reasoning Engine | CoreIdentity</title>
        <meta name="description" content="Mathematical assurance for governance policy integrity. Z3 SMT formal verification detects policy contradictions, validates execution paths, and generates machine-verifiable SLH-DSA-128s signed proof artifacts before any policy activates." />
      </Helmet>

 <div className="space-y-4 cidg-fadein">
 <Eyebrow>GOVERNANCE INFRASTRUCTURE</Eyebrow>
 <PageTitle>Formal Governance Verification</PageTitle>
 <p className="text-white/70 max-w-3xl leading-relaxed text-lg">
 Mathematical assurance for governance policy integrity — before any policy activates.
 FGRE applies Z3 SMT formal verification to detect contradictions, validate execution
 paths, and generate machine-verifiable proof artifacts signed with SLH-DSA-128s (FIPS 205).
 </p>
 </div>

 <Card accent="indigo" className="cidg-fadein cidg-fadein-delay-1">
 <div className="space-y-4">
 <div className="flex items-center gap-3">
 <PulseDot color="#8b5cf6" />
 <span className="text-xs font-mono tracking-[0.15em] text-violet-400">
 LIVE — FORMAL VERIFICATION ACTIVE
 </span>
 </div>
 <p className="text-white/70 text-sm leading-relaxed">
 FGRE is live in the CoreIdentity enforcement stack, running Z3 SMT verification
 across all governance policies before activation. 44 contract tests passing at 100%
 across all four verification phases. Every proof artifact is SLH-DSA-128s signed
 and machine-verifiable by any party holding the public key.
 </p>
 <div className="flex flex-wrap gap-2 pt-1">
 {['Z3 SMT Solver','SLH-DSA-128s (FIPS 205)','44/44 Contract Tests','4 Verification Phases'].map(function(a) {
 return (
 <span key={a} className="text-xs font-mono px-2 py-1 rounded border border-violet-500/30 text-violet-300" style={{background:'rgba(139,92,246,0.05)'}}>
 {a}
 </span>
 );
 })}
 </div>
 </div>
 </Card>

 {/* Stats Bar */}
 <div className="grid grid-cols-2 gap-4 md:grid-cols-4 cidg-fadein cidg-fadein-delay-1">
 {[
 { stat: '44/44', label: 'Contract Tests Passing' },
 { stat: '4', label: 'Verification Phases' },
 { stat: 'Z3 SMT', label: 'Formal Solver' },
 { stat: 'FIPS 205', label: 'Proof Signing Standard' },
 ].map(function(item) {
 return (
 <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 px-6 py-5 text-center">
 <div className="text-2xl font-bold text-violet-400">{item.stat}</div>
 <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">{item.label}</div>
 </div>
 );
 })}
 </div>

 <div className="space-y-4 cidg-fadein cidg-fadein-delay-2">
 <SectionTitle>What FGRE Does</SectionTitle>
 </div>

 <div className="grid gap-5 md:grid-cols-2 cidg-fadein cidg-fadein-delay-3">
 <Card accent="indigo">
 <div className="font-semibold text-white mb-2">Policy Contradiction Detection</div>
 <p className="text-sm text-white/60 leading-relaxed">
 Z3 SMT solver exhaustively checks governance policy sets for internal contradictions —
 rules that conflict under specific conditions, permission boundaries that overlap
 in unsafe ways, or invariants that cannot simultaneously hold. No contradiction
 survives activation.
 </p>
 </Card>
 <Card accent="indigo">
 <div className="font-semibold text-white mb-2">Invariant Validation</div>
 <p className="text-sm text-white/60 leading-relaxed">
 Governance invariants — properties that must hold across all execution states — are
 formally verified before any policy activates. FGRE proves these hold under all
 reachable conditions, not just the conditions the policy author anticipated.
 </p>
 </Card>
 <Card accent="indigo">
 <div className="font-semibold text-white mb-2">Execution Path Analysis</div>
 <p className="text-sm text-white/60 leading-relaxed">
 FGRE enumerates and validates reachable execution paths through the governance policy
 graph. Every path an agent could take is verified against stated policy intent
 before deployment. Unexpected paths are flagged before they become incidents.
 </p>
 </Card>
 <Card accent="indigo">
 <div className="font-semibold text-white mb-2">Simulation Replay</div>
 <p className="text-sm text-white/60 leading-relaxed">
 Governance scenarios are replayed against proposed policy changes in a formal simulation
 environment. The simulation produces a machine-readable trace that can be inspected,
 audited, and retained as evidence of pre-deployment due diligence.
 </p>
 </Card>
 <Card accent="indigo">
 <div className="font-semibold text-white mb-2">Proof Serialization</div>
 <p className="text-sm text-white/60 leading-relaxed">
 Each verification run produces a serialized proof artifact — a structured, signed
 record of what was verified, under what assumptions, and what the solver concluded.
 These artifacts are SLH-DSA-128s signed and stored for regulatory and audit purposes.
 </p>
 </Card>
 </div>

 {/* Four-Phase Verification Table */}
 <div className="space-y-6 cidg-fadein cidg-fadein-delay-2">
 <SectionTitle>Four-Phase Verification</SectionTitle>
 <p className="text-white/70 max-w-3xl leading-relaxed">
 Every governance policy traverses four sequential verification phases before activation.
 All four must complete successfully — a failure at any phase blocks policy activation.
 </p>
 <div className="overflow-x-auto">
 <table className="w-full text-sm border-collapse">
 <thead>
 <tr className="border-b border-white/10">
 <th className="text-left py-3 pr-6 text-white/50 font-medium tracking-wide">Phase</th>
 <th className="text-left py-3 pr-6 text-white/50 font-medium tracking-wide">Name</th>
 <th className="text-left py-3 text-white/50 font-medium tracking-wide">What is verified</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-white/5">
 {[
 ['1', 'Policy Contradiction Detection', 'Internal policy consistency — no rule set can contain contradictions that produce undefined behavior at runtime'],
 ['2', 'Execution Path Validation', 'All reachable execution paths through the policy graph are enumerated and verified against stated intent'],
 ['3', 'Governance Simulation', 'Representative scenarios are replayed against the proposed policy in a formal simulation environment'],
 ['4', 'Regulatory Proof Export', 'A SLH-DSA-128s signed proof artifact is generated, serialized, and made available for regulatory submission'],
 ].map(function([phase, name, what]) {
 return (
 <tr key={phase as string}>
 <td className="py-3 pr-6 font-mono text-violet-400 text-xs">Phase {phase}</td>
 <td className="py-3 pr-6 text-white/80 font-medium">{name}</td>
 <td className="py-3 text-xs text-white/55 leading-relaxed">{what}</td>
 </tr>
 );
 })}
 </tbody>
 </table>
 </div>
 </div>

 {/* Proof Artifacts */}
 <div
 className="rounded-2xl p-6 cidg-fadein cidg-fadein-delay-2"
 style={{border:'1px solid rgba(139,92,246,0.2)', background:'rgba(139,92,246,0.04)'}}
 >
 <div className="text-xs font-medium tracking-widest text-violet-400 uppercase mb-3">
 Proof Artifacts
 </div>
 <div className="font-semibold text-white mb-3">
 Machine-verifiable. Exportable. Sovereign.
 </div>
 <p className="text-sm text-white/70 leading-relaxed mb-5">
 Every FGRE verification run produces a proof artifact — a structured, serialized record
 of the formal verification outcome. Each artifact is signed with SLH-DSA-128s (FIPS 205),
 making it verifiable by any party that holds the CoreIdentity public key. No custodian
 is required to verify the proof; the cryptographic signature is self-contained evidence.
 </p>
 <div className="grid grid-cols-2 gap-3">
 {[
 {name:'Signing algorithm', detail:'SLH-DSA-128s (FIPS 205) — stateless hash-based signature'},
 {name:'Verifiability', detail:'Any party with the public key can verify — no CoreIdentity involvement required'},
 {name:'Export format', detail:'Structured proof bundle — exportable for regulatory submission and sovereign audit'},
 {name:'Retention', detail:'Persistent storage with cryptographic integrity — tamper-evident by design'},
 ].map(function(p) {
 return (
 <div key={p.name} className="rounded-xl p-4 border border-violet-500/15" style={{background:'rgba(139,92,246,0.04)'}}>
 <div className="text-sm font-medium text-violet-300 mb-1">{p.name}</div>
 <div className="text-xs text-white/50">{p.detail}</div>
 </div>
 );
 })}
 </div>
 </div>

 {/* Integration Stack */}
 <div
 className="rounded-2xl p-6 cidg-fadein cidg-fadein-delay-4"
 style={{border:'1px solid rgba(139,92,246,0.2)', background:'rgba(139,92,246,0.04)'}}
 >
 <div className="text-xs font-medium tracking-widest text-violet-400 uppercase mb-3">
 Complete Governance Assurance Stack
 </div>
 <p className="text-sm text-white/70 leading-relaxed mb-5">
 FGRE pre-deployment verification, SAL runtime enforcement, and Sentinel immutable audit
 form the complete governance assurance stack. Each layer has a distinct and
 non-overlapping responsibility.
 </p>
 <div className="grid grid-cols-1 gap-3">
 {[
 {name:'FGRE', detail:'Pre-deployment — formal mathematical proof that policy is correct before activation', color:'text-violet-300', border:'border-violet-500/15'},
 {name:'SAL Kernel', detail:'Runtime enforcement — deterministic pre-execution authorization on every agent action', color:'text-amber-300', border:'border-amber-500/15'},
 {name:'Sentinel', detail:'Immutable audit — tamper-evident record of every policy decision and agent action', color:'text-blue-300', border:'border-blue-500/15'},
 ].map(function(p) {
 return (
 <div key={p.name} className={`rounded-xl p-4 border ${p.border}`} style={{background:'rgba(255,255,255,0.02)'}}>
 <div className={`text-sm font-medium ${p.color} mb-1`}>{p.name}</div>
 <div className="text-xs text-white/50">{p.detail}</div>
 </div>
 );
 })}
 </div>
 </div>

 </div>
 );
}
