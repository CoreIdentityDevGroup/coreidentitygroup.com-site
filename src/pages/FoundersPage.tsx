import React from "react";
import { Card, PageTitle, Eyebrow } from "../components/ui";

export function FoundersPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Eyebrow>INTERNAL — NOT INDEXED</Eyebrow>
        <PageTitle>Founder's Brief</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed">
          CoreIdentity Development Group Inc. — the control plane for autonomous enterprise AI.
          This page is not linked from any public navigation.
        </p>
      </div>

      <Card>
        <div className="space-y-4">
          <div className="text-xs text-white/40 tracking-widest uppercase mb-2">The Mission</div>
          <p className="text-white/80 leading-relaxed">
            To make autonomous AI governable — by building the identity, enforcement,
            orchestration, and audit infrastructure that enterprises and sovereign institutions
            require before agentic execution can be trusted at scale.
          </p>
        </div>
      </Card>

      <Card>
        <div className="space-y-4">
          <div className="text-xs text-white/40 tracking-widest uppercase mb-2">The Vision</div>
          <p className="text-white/80 leading-relaxed">
            A world in which autonomous AI operates inside the boundaries of human authority —
            where every agent action is authorized, every decision is attributable, and every
            organization retains provable control over the systems acting on its behalf.
          </p>
        </div>
      </Card>

      <Card>
        <div className="space-y-4">
          <div className="text-xs text-white/40 tracking-widest uppercase mb-2">Platform Status</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">STABLE TAG</div>
              <div className="text-sm font-mono text-white/80">cidg-stable-20260412-013246</div>
            </div>
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">CONTRACTS</div>
              <div className="text-sm font-mono text-green-400">23 / 23 passing</div>
            </div>
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">AIS SOAK</div>
              <div className="text-sm font-mono text-indigo-400">Live — 100% pass rate</div>
            </div>
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">PQC</div>
              <div className="text-sm font-mono text-teal-400">Verified — Jul 1 2026</div>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-4">
          <div className="text-xs text-white/40 tracking-widest uppercase mb-2">Revenue Trajectory</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">2026</div>
              <div className="text-sm text-white/60">Pre-revenue. AGO billing Q4 2026.</div>
            </div>
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">2027</div>
              <div className="text-sm text-white/60">$875K projected</div>
            </div>
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">2028</div>
              <div className="text-sm text-white/60">$5.25M projected</div>
            </div>
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">2029</div>
              <div className="text-sm text-white/60">$17.4M projected</div>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-3">
          <div className="text-xs text-white/40 tracking-widest uppercase mb-2">Primary 2026 Milestone</div>
          <div className="font-semibold text-white">CVS Health</div>
          <p className="text-sm text-white/60 leading-relaxed">
            Advisory engagement first, platform deployment second. BAA is critical path
            for PHI agent governance. Phase 0 engagement: $450K–$550K.
            Five-year lifetime value: $28M–$42M.
          </p>
        </div>
      </Card>

      <div className="rounded-2xl border border-white/5 bg-black/20 p-6">
        <div className="text-xs text-white/25 leading-relaxed font-mono">
          CoreIdentity is not a pivot or a pivot story. It is the deliberate construction
          of something that should exist and did not.
        </div>
      </div>
    </div>
  );
}
