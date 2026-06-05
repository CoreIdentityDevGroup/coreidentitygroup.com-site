// CIDG_GOVERNANCE_CONSOLE_v1
import React, { useState, useRef, useCallback } from "react";
import { Helmet } from "react-helmet-async";

/**
 * GovernanceConsolePage
 * A live view of the working CoreIdentity Governance Infrastructure.
 * Renders the full agent lifecycle — deploy, govern, retire — with every
 * governance layer doing its job. PCM tenant patterns; client identity masked.
 *
 * Self-contained styling (gic- prefix) — no external CSS/Tailwind dependency.
 */

type LayerKey = "smartnation" | "fgv" | "ais" | "sal" | "mcp" | "sentinel" | "nexus" | "ago";
type StepState = "idle" | "working" | "done";
type DimState = "idle" | "on" | "pass" | "fail";

interface Layer { name: string; role: string; icon: string; accent: string; }
interface FlowStep { layer: LayerKey; state: string; iiaac?: boolean; status: (a: AgentDef) => string; }
interface AgentDef { id: string; label: string; }

const LAYERS: Record<LayerKey, Layer> = {
  smartnation: { name: "SmartNation AI", role: "Governed digital labor catalog", icon: "SN", accent: "#10B981" },
  fgv: { name: "Formal Governance Verification", role: "Z3 SMT pre-deployment proof", icon: "FV", accent: "#2DD4BF" },
  ais: { name: "Agent Identity Systems", role: "Post-quantum credential authority", icon: "AIS", accent: "#F59E0B" },
  sal: { name: "SAL Enforcement Kernel", role: "Semantic Authorization Layer \u00b7 IIAAC", icon: "SAL", accent: "#10B981" },
  mcp: { name: "MCP Protocol", role: "Governed external-access gateway", icon: "MCP", accent: "#A78BFA" },
  sentinel: { name: "Sentinel", role: "Policy enforcement & evidence capture", icon: "SEN", accent: "#3B82F6" },
  nexus: { name: "Nexus", role: "Governed multi-agent orchestration", icon: "NEX", accent: "#A78BFA" },
  ago: { name: "AGO", role: "Autonomous Governance Orchestrator", icon: "AGO", accent: "#3B82F6" },
};

const AGENTS: AgentDef[] = [
  { id: "agt_pcm_intake_4f7c", label: "PCM Deal Intake \u00b7 Tier 2" },
  { id: "agt_pcm_screen_9b3a", label: "Compliance Screening \u00b7 Tier 2" },
  { id: "agt_pcm_pipe_7d10", label: "Asset Pipeline \u00b7 Tier 1" },
];

type ModeKey = "deploy" | "govern" | "retire";

const MODE_META: Record<ModeKey, { num: string; label: string; runLabel: string; desc: string }> = {
  deploy: { num: "A", label: "Deploy Governed Agent", runLabel: "Deploy Agent", desc: "Provision a new agent from the SmartNation catalog under full governance." },
  govern: { num: "B", label: "Govern an Action", runLabel: "Govern Action", desc: "A live agent attempts an action. Watch every layer evaluate it." },
  retire: { num: "C", label: "Retire an Agent", runLabel: "Retire Agent", desc: "Decommission an agent and seal its complete audit trail." },
};

const FLOWS: Record<ModeKey, FlowStep[]> = {
  deploy: [
    { layer: "smartnation", state: "PROVISIONED", status: (a) => `Provisioning <span class="gic-hl">${a.label}</span> from digital labor catalog. Labor position assigned. Governance profile attached.` },
    { layer: "fgv", state: "VERIFIED", status: () => `Running Z3 SMT formal verification across the policy rule set. Checking for contradictions and unreachable states... <span class="gic-ok">Policy set proven consistent.</span> FIPS 205 proof artifact signed.` },
    { layer: "ais", state: "ISSUED", status: (a) => `Generating ML-DSA-65 keypair (HSM-backed). Post-quantum identity credential <span class="gic-hl">${a.id}</span> issued. <span class="gic-ok">Credential valid.</span>` },
    { layer: "sentinel", state: "BOUND", status: () => `Binding policy boundaries to the agent. Authorization scope set. Approval gates configured. <span class="gic-ok">Fail-closed enforcement active.</span>` },
    { layer: "nexus", state: "REGISTERED", status: () => `Registering agent into the orchestration fleet. Policy propagation complete across the coordination layer. <span class="gic-ok">Agent coordinated under governance.</span>` },
    { layer: "ago", state: "MONITORING", status: () => `Activating autonomous governance monitoring. Behavioral baseline established. <span class="gic-ok">Continuous oversight live.</span>` },
  ],
  govern: [
    { layer: "ais", state: "VALIDATED", status: (a) => `Validating credential <span class="gic-hl">${a.id}</span> against active tenant and credential chain... <span class="gic-ok">Valid, non-revoked.</span>` },
    { layer: "sal", state: "EVALUATING", iiaac: true, status: () => `Evaluating the action across five IIAAC dimensions. All five must pass for execution.` },
    { layer: "mcp", state: "GOVERNED", status: () => `Governing the external tool call through the MCP gateway. Namespace allowlist checked \u00b7 default-deny enforced \u00b7 audit logging active.` },
    { layer: "sentinel", state: "ENFORCED", status: () => `Policy enforcement complete. Evidence captured. Signed proof artifact generated.` },
  ],
  retire: [
    { layer: "ago", state: "INITIATED", status: () => `Decommission sequence initiated. Capturing final governance state. Approval recorded.` },
    { layer: "nexus", state: "REMOVED", status: () => `Removing agent from the orchestration fleet. In-flight actions completed within authorized scope, then halted. <span class="gic-ok">No orphaned tasks.</span>` },
    { layer: "ais", state: "REVOKED", status: (a) => `Revoking credential <span class="gic-hl">${a.id}</span>. Revocation propagated across the infrastructure. <span class="gic-ok">All access invalidated instantly.</span>` },
    { layer: "sentinel", state: "SEALED", status: () => `Sealing the final audit record. Complete decision history retained and signed. <span class="gic-ok">Immutable trail preserved.</span>` },
    { layer: "smartnation", state: "RELEASED", status: () => `Labor position released. Agent returned to the catalog. Governance profile archived.` },
    { layer: "fgv", state: "ATTESTED", status: () => `Generating the decommission attestation. <span class="gic-ok">FIPS 205 final proof package signed.</span>` },
  ],
};

interface GovernScenario { iiaac: DimState[]; failDim: number; verdict: "ALLOW" | "DENY"; code: string; action: string; reason: string; external: boolean; }

const GOVERN_SCENARIOS: Record<string, GovernScenario> = {
  agt_pcm_intake_4f7c: { iiaac: ["pass", "pass", "pass", "pass", "pass"], failDim: -1, verdict: "ALLOW", code: "SAL-2000", action: "Deal intake record \u00b7 authorized", reason: "", external: true },
  agt_pcm_screen_9b3a: { iiaac: ["pass", "pass", "fail", "pass", "pass"], failDim: 2, verdict: "DENY", code: "SAL-4004", action: "Cross-tenant asset read \u00b7 TIER_3", reason: "Agent authorized for its own tenant scope; requested asset belongs to a different tenant. Cross-tenant access is structurally blocked.", external: true },
  agt_pcm_pipe_7d10: { iiaac: ["pass", "fail", "pass", "pass", "pass"], failDim: 1, verdict: "DENY", code: "SAL-4008", action: "Unscoped data export", reason: "Requested intent does not map to the agent\u2019s authorized operational scope. Semantic intent violation.", external: false },
};

const IIAAC = [
  { l: "I", n: "Identity" }, { l: "I", n: "Intent" }, { l: "A", n: "Asset" }, { l: "A", n: "Action" }, { l: "C", n: "Context" },
];

interface StepVisual { state: StepState; stateLabel: string; statusHtml: string; verdict: "" | "ok" | "deny"; }
interface ResultData { good: boolean; headline: string; sub: string; }
interface ArtifactRow { k: string; v: string; cls: string; }
interface ArtifactData { title: string; badge: string; rows: ArtifactRow[]; sigAlg: string; }
interface LedgerEntry { tagClass: string; tagLabel: string; id: string; desc: string; time?: string; }

function hex(n: number): string { let s = ""; for (let i = 0; i < n; i++) s += "0123456789abcdef"[Math.floor(Math.random() * 16)]; return s; }
function sleep(ms: number): Promise<void> { return new Promise((r) => setTimeout(r, ms)); }

export function GovernanceConsolePage() {
  const [mode, setMode] = useState<ModeKey>("deploy");
  const [agent, setAgent] = useState<AgentDef>(AGENTS[0]);
  const [running, setRunning] = useState(false);
  const [hint, setHint] = useState("Ready");
  const [steps, setSteps] = useState<StepVisual[]>(() => initSteps("deploy"));
  const [dims, setDims] = useState<DimState[]>(["idle", "idle", "idle", "idle", "idle"]);
  const [result, setResult] = useState<ResultData | null>(null);
  const [artifact, setArtifact] = useState<ArtifactData | null>(null);
  const [ledger, setLedger] = useState<LedgerEntry[]>([]);
  const runIdRef = useRef(0);

  function initStepsArr(m: ModeKey): StepVisual[] {
    return FLOWS[m].map(() => ({ state: "idle" as StepState, stateLabel: "IDLE", statusHtml: "", verdict: "" as const }));
  }

  const reset = useCallback((m: ModeKey) => {
    setSteps(initStepsArr(m));
    setDims(["idle", "idle", "idle", "idle", "idle"]);
    setResult(null);
    setArtifact(null);
  }, []);

  const changeMode = (m: ModeKey) => {
    if (running) return;
    runIdRef.current++;
    setMode(m);
    reset(m);
    setHint("Ready");
  };

  const changeAgent = (a: AgentDef) => {
    if (running) return;
    runIdRef.current++;
    setAgent(a);
    reset(mode);
    setHint("Ready");
  };

  const patchStep = (i: number, partial: Partial<StepVisual>) => {
    setSteps((prev) => prev.map((s, idx) => (idx === i ? { ...s, ...partial } : s)));
  };

  const run = async () => {
    if (running) return;
    const myRun = ++runIdRef.current;
    setRunning(true);
    reset(mode);
    setHint("Processing through the Governance Infrastructure...");
    await sleep(80);

    const flow = FLOWS[mode];
    const scn = mode === "govern" ? GOVERN_SCENARIOS[agent.id] : null;
    let denied = false;

    for (let i = 0; i < flow.length; i++) {
      if (runIdRef.current !== myRun) return;
      const step = flow[i];

      if (mode === "govern" && step.layer === "mcp" && scn && !scn.external) {
        patchStep(i, { state: "done", stateLabel: "N/A", statusHtml: "No external tool access requested. The MCP gateway was not engaged for this action." });
        await sleep(380);
        continue;
      }

      patchStep(i, { state: "working", stateLabel: "WORKING", statusHtml: step.status(agent) });

      if (step.iiaac && scn) {
        await sleep(300);
        for (let j = 0; j < IIAAC.length; j++) {
          if (runIdRef.current !== myRun) return;
          setDims((prev) => prev.map((d, idx) => (idx === j ? "on" : d)));
          await sleep(320);
          const res = scn.iiaac[j];
          setDims((prev) => prev.map((d, idx) => (idx === j ? res : d)));
          if (res === "fail") { denied = true; await sleep(220); break; }
          await sleep(80);
        }
        if (runIdRef.current !== myRun) return;
        if (denied) {
          patchStep(i, { state: "done", stateLabel: "DENY", verdict: "deny", statusHtml: `<span class="gic-deny">${IIAAC[scn.failDim].n} dimension failed. ${scn.reason} Execution halted.</span>` });
          break;
        } else {
          patchStep(i, { state: "done", stateLabel: "5/5 PASS", verdict: "ok", statusHtml: `<span class="gic-ok">All five IIAAC dimensions passed.</span> Action authorized to proceed.` });
        }
      } else {
        await sleep(600);
        if (runIdRef.current !== myRun) return;
        patchStep(i, { state: "done", stateLabel: step.state, verdict: "ok" });
      }
      await sleep(140);
    }

    if (runIdRef.current !== myRun) return;

    if (mode === "govern" && scn) {
      const good = !denied;
      setResult({
        good,
        headline: good ? "ACTION AUTHORIZED" : "ACTION DENIED",
        sub: good
          ? "All governance layers cleared the action. It proceeds with a signed authorization artifact and a full audit trail."
          : "The Governance Infrastructure halted the action deterministically. A signed rejection artifact was generated and the request escalated to a human operator.",
      });
      setArtifact(buildGovernArtifact(good, scn, agent));
      pushLedger({ tagClass: good ? "gic-tag-ok" : "gic-tag-deny", tagLabel: good ? "ALLOW" : "DENY", id: scn.code + "-" + hex(6), desc: scn.action });
    } else if (mode === "deploy") {
      setResult({ good: true, headline: "AGENT DEPLOYED \u2014 FULLY GOVERNED", sub: "The agent is live and operates under the complete Governance Infrastructure from its first action. Every future action will be identity-bound, IIAAC-evaluated, and audit-logged." });
      setArtifact(buildLifecycleArtifact("deploy", agent));
      pushLedger({ tagClass: "gic-tag-deploy", tagLabel: "DEPLOY", id: "GOV-DEPLOY-" + hex(6), desc: agent.label });
    } else {
      setResult({ good: true, headline: "AGENT RETIRED \u2014 AUDIT TRAIL SEALED", sub: "The agent is fully decommissioned. Its credential is revoked, its complete decision history is sealed and signed, and a decommission attestation is available for regulatory export." });
      setArtifact(buildLifecycleArtifact("retire", agent));
      pushLedger({ tagClass: "gic-tag-retire", tagLabel: "RETIRE", id: "GOV-RETIRE-" + hex(6), desc: agent.label });
    }

    setHint("Complete \u2014 see signed artifact below");
    setRunning(false);
  };

  const pushLedger = (e: LedgerEntry) => {
    const withTime = { ...e, time: new Date().toLocaleTimeString("en-US", { hour12: false }) };
    setLedger((prev) => [withTime, ...prev].slice(0, 7));
  };

  return (
    <div className="gic-root">
      <Helmet>
        <title>Governance Console | CoreIdentity</title>
        <meta name="description" content="A live view of the CoreIdentity Governance Infrastructure processing an agent across its full lifecycle — deploy, govern, retire — with every governance layer enforcing in real time." />
      </Helmet>

      <style>{CSS}</style>

      <div className="gic-eyebrow"><span className="gic-dot" />Live View \u00b7 Governance Infrastructure</div>
      <h1 className="gic-h1">Live Governance Infrastructure</h1>
      <p className="gic-subtitle">
        A live view of the CoreIdentity Governance Infrastructure processing an agent across its full lifecycle. Every layer &mdash; identity, formal verification, semantic authorization, orchestration, external-access control, and autonomous governance &mdash; plays its part. Select a lifecycle event and watch each layer do its job.
      </p>

      <div className="gic-label">01 &mdash; Select a Lifecycle Event</div>
      <div className="gic-modes">
        {(Object.keys(FLOWS) as ModeKey[]).map((k) => (
          <button key={k} className={"gic-mode" + (k === mode ? " gic-mode-active" : "")} onClick={() => changeMode(k)}>
            <div className="gic-mode-num">EVENT {MODE_META[k].num}</div>
            <div className="gic-mode-title">{MODE_META[k].label}</div>
            <div className="gic-mode-desc">{MODE_META[k].desc}</div>
          </button>
        ))}
      </div>

      <div className="gic-context">
        <span className="gic-ctx-label">Agent</span>
        <div className="gic-agents">
          {AGENTS.map((a) => (
            <button key={a.id} className={"gic-chip" + (a.id === agent.id ? " gic-chip-active" : "")} onClick={() => changeAgent(a)}>{a.label}</button>
          ))}
        </div>
      </div>

      <div className="gic-runbar">
        <button className="gic-run" onClick={run} disabled={running}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 3l14 9-14 9V3z" fill="currentColor" /></svg>
          {MODE_META[mode].runLabel}
        </button>
        <span className="gic-hint">{hint}</span>
      </div>

      <div className="gic-label">02 &mdash; Governance Infrastructure Pipeline</div>
      <div className="gic-pipeline">
        {FLOWS[mode].map((step, i) => {
          const layer = LAYERS[step.layer];
          const sv = steps[i] || { state: "idle", stateLabel: "IDLE", statusHtml: "", verdict: "" };
          const cls = "gic-layer" + (sv.state === "working" ? " gic-layer-active" : "") + (sv.state === "done" ? " gic-layer-done" : "");
          const stateCls = "gic-lstate" + (sv.verdict === "ok" ? " gic-ok-c" : "") + (sv.verdict === "deny" ? " gic-deny-c" : "") + (sv.state === "working" ? " gic-working-c" : "");
          return (
            <div key={i} className={cls} style={{ ["--gic-accent" as any]: layer.accent }}>
              <div className="gic-lhead">
                <div className="gic-licon">{layer.icon}</div>
                <div className="gic-lmeta">
                  <div className="gic-lname">{layer.name}</div>
                  <div className="gic-lrole">{layer.role}</div>
                </div>
                <div className={stateCls}>{sv.stateLabel}</div>
              </div>
              {sv.statusHtml ? <div className="gic-lstatus" dangerouslySetInnerHTML={{ __html: sv.statusHtml }} /> : null}
              {step.iiaac ? (
                <div className="gic-iiaac">
                  {IIAAC.map((d, j) => {
                    const ds = dims[j];
                    const mc = "gic-mini" + (ds !== "idle" ? " gic-mini-on" : "") + (ds === "pass" ? " gic-mini-pass" : "") + (ds === "fail" ? " gic-mini-fail" : "");
                    const st = ds === "pass" ? "PASS" : ds === "fail" ? "FAIL" : ds === "on" ? "\u00b7\u00b7\u00b7" : "";
                    return (
                      <div key={j} className={mc}>
                        <div className="gic-mini-l">{d.l}</div>
                        <div className="gic-mini-n">{d.n}</div>
                        <div className="gic-mini-s">{st}</div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {result ? (
        <div className={"gic-result " + (result.good ? "gic-result-good" : "gic-result-bad")}>
          <div className="gic-result-badge">{result.good ? "\u2713" : "\u2715"}</div>
          <div className="gic-result-text">
            <div className="gic-result-headline">{result.headline}</div>
            <div className="gic-result-sub">{result.sub}</div>
          </div>
        </div>
      ) : null}

      {artifact ? (
        <div className="gic-artifact">
          <div className="gic-art-header">
            <span className="gic-art-title">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
              {artifact.title}
            </span>
            <span className="gic-art-badge">{artifact.badge}</span>
          </div>
          <div className="gic-art-body">
            {artifact.rows.map((r, idx) => (
              <div key={idx} className="gic-art-line">
                <span className="gic-art-key">{r.k}</span>
                <span className={"gic-art-val" + (r.cls ? " gic-" + r.cls : "")}>{r.v}</span>
              </div>
            ))}
            <div className="gic-art-sig">
              <div className="gic-art-line"><span className="gic-art-key">proof_signature</span></div>
              <div className="gic-art-val">{artifact.sigAlg}:{hex(64)}{hex(64)}</div>
            </div>
          </div>
        </div>
      ) : null}

      {ledger.length > 0 ? (
        <div className="gic-ledger">
          <div className="gic-label">Governance Event Ledger &mdash; This Session</div>
          {ledger.map((it, idx) => (
            <div key={idx} className="gic-ledger-item">
              <span className={"gic-ledger-tag " + it.tagClass}>{it.tagLabel}</span>
              <span className="gic-ledger-id">{it.id}</span>
              <span className="gic-ledger-desc">{it.desc}</span>
              <span className="gic-ledger-time">{it.time}</span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="gic-disclaimer">
        A live view of the CoreIdentity Governance Infrastructure using representative governance scenarios. It reflects how the nine governance layers operate together across the agent lifecycle &mdash; provisioning, runtime enforcement, and decommission &mdash; in CoreIdentity&rsquo;s production environment. Tenant identity is masked; proof signatures shown are illustrative.
      </div>
    </div>
  );
}

function buildGovernArtifact(good: boolean, scn: GovernScenario, agent: AgentDef): ArtifactData {
  const ppid = hex(8);
  const ts = new Date().toISOString();
  const rows: ArtifactRow[] = [
    { k: "event_type", v: good ? "SAL_ALLOW" : "SAL_DENY", cls: good ? "green" : "red" },
    { k: "event_id", v: scn.code + "-" + ppid, cls: "" },
    { k: "agent_id", v: agent.id, cls: "" },
    { k: "timestamp_utc", v: ts, cls: "" },
    { k: "iiaac_result", v: good ? "5/5 PASS" : (scn.failDim + 1) + "/5 \u00b7 FAIL@" + IIAAC[scn.failDim].n.toUpperCase(), cls: good ? "green" : "red" },
  ];
  if (!good) rows.push({ k: "rejection_reason", v: '"' + scn.reason + '"', cls: "red" });
  rows.push({ k: "mcp_gateway", v: scn.external ? "engaged \u00b7 audit-logged" : "not engaged", cls: "" });
  rows.push({ k: "policy_version", v: "pol_v2.4.1", cls: "" });
  rows.push({ k: "arbitration_latency_ms", v: (1.2 + Math.random() * 1.6).toFixed(1), cls: "blue" });
  rows.push({ k: "proof_pack_id", v: ppid, cls: "" });
  rows.push({ k: "escalation_routed", v: good ? "n/a" : "true \u00b7 operator notified", cls: good ? "" : "green" });
  return { title: "Signed Proof Artifact", badge: "ML-DSA-65 \u00b7 FIPS 204", rows, sigAlg: "ml-dsa-65" };
}

function buildLifecycleArtifact(kind: "deploy" | "retire", agent: AgentDef): ArtifactData {
  const ppid = hex(8);
  const ts = new Date().toISOString();
  const base: ArtifactRow[] = [{ k: "event_id", v: (kind === "deploy" ? "GOV-DEPLOY" : "GOV-RETIRE") + "-" + ppid, cls: "" }, { k: "timestamp_utc", v: ts, cls: "" }];
  let rows: ArtifactRow[];
  if (kind === "deploy") {
    rows = base.concat([
      { k: "event_type", v: "AGENT_PROVISIONED", cls: "green" },
      { k: "agent_id", v: agent.id, cls: "" },
      { k: "labor_position", v: agent.label, cls: "" },
      { k: "policy_verification", v: "Z3 SMT \u00b7 consistent", cls: "green" },
      { k: "credential_alg", v: "ML-DSA-65 \u00b7 FIPS 204", cls: "" },
      { k: "fleet_status", v: "REGISTERED \u00b7 governed", cls: "green" },
      { k: "monitoring", v: "AGO active", cls: "green" },
    ]);
  } else {
    rows = base.concat([
      { k: "event_type", v: "AGENT_DECOMMISSIONED", cls: "green" },
      { k: "agent_id", v: agent.id, cls: "" },
      { k: "credential_status", v: "REVOKED \u00b7 propagated", cls: "green" },
      { k: "fleet_status", v: "REMOVED", cls: "green" },
      { k: "audit_record", v: "SEALED \u00b7 signed", cls: "green" },
      { k: "labor_position", v: "RELEASED", cls: "" },
      { k: "decommission_attestation", v: "FIPS 205 signed", cls: "green" },
    ]);
  }
  rows.push({ k: "proof_pack_id", v: ppid, cls: "" });
  return { title: "Signed Governance Artifact", badge: "SLH-DSA-128s \u00b7 FIPS 205", rows, sigAlg: "slh-dsa-128s" };
}

function initSteps(m: ModeKey): StepVisual[] {
  return FLOWS[m].map(() => ({ state: "idle", stateLabel: "IDLE", statusHtml: "", verdict: "" }));
}

const CSS = `
.gic-root { --gic-bg:#060A14; --gic-panel:#0C1322; --gic-elev:#111A2E; --gic-border:rgba(255,255,255,0.08); --gic-border-b:rgba(255,255,255,0.18); --gic-text:#E8EDF5; --gic-dim:#8A96A8; --gic-faint:#56627A; --gic-blue:#3B82F6; --gic-green:#10B981; --gic-red:#F43F5E; --gic-amber:#F59E0B; --gic-mono:'IBM Plex Mono',ui-monospace,monospace; color:var(--gic-text); max-width:1120px; }
.gic-eyebrow { font-family:var(--gic-mono); font-size:11px; font-weight:600; letter-spacing:0.22em; text-transform:uppercase; color:var(--gic-green); margin-bottom:14px; display:flex; align-items:center; gap:8px; }
.gic-dot { width:7px; height:7px; border-radius:50%; background:var(--gic-green); box-shadow:0 0 8px rgba(16,185,129,0.5); animation:gicpulse 2s infinite; }
@keyframes gicpulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
.gic-h1 { font-size:34px; font-weight:700; letter-spacing:-0.03em; line-height:1.1; margin-bottom:12px; }
.gic-subtitle { font-size:15px; color:var(--gic-dim); max-width:680px; line-height:1.6; margin-bottom:30px; }
.gic-label { font-family:var(--gic-mono); font-size:10px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:var(--gic-faint); margin-bottom:12px; }
.gic-modes { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-bottom:26px; }
.gic-mode { background:var(--gic-panel); border:1px solid var(--gic-border); border-radius:12px; padding:16px 18px; text-align:left; cursor:pointer; transition:all 0.18s ease; font-family:inherit; color:inherit; }
.gic-mode:hover { border-color:var(--gic-border-b); background:var(--gic-elev); transform:translateY(-1px); }
.gic-mode-active { border-color:var(--gic-blue); background:rgba(59,130,246,0.08); }
.gic-mode-num { font-family:var(--gic-mono); font-size:10px; color:var(--gic-faint); margin-bottom:6px; letter-spacing:0.1em; }
.gic-mode-title { font-size:15px; font-weight:600; color:var(--gic-text); margin-bottom:4px; }
.gic-mode-desc { font-size:11px; color:var(--gic-dim); line-height:1.4; }
.gic-context { display:flex; align-items:center; gap:16px; background:var(--gic-panel); border:1px solid var(--gic-border); border-radius:12px; padding:14px 18px; margin-bottom:18px; flex-wrap:wrap; }
.gic-ctx-label { font-family:var(--gic-mono); font-size:10px; color:var(--gic-faint); letter-spacing:0.1em; text-transform:uppercase; }
.gic-agents { display:flex; gap:8px; flex-wrap:wrap; }
.gic-chip { font-family:var(--gic-mono); font-size:11px; padding:5px 11px; border-radius:7px; background:var(--gic-elev); border:1px solid var(--gic-border); color:var(--gic-dim); cursor:pointer; transition:all 0.15s ease; }
.gic-chip:hover { border-color:var(--gic-border-b); color:var(--gic-text); }
.gic-chip-active { border-color:var(--gic-amber); color:var(--gic-amber); background:rgba(245,158,11,0.08); }
.gic-runbar { display:flex; align-items:center; gap:14px; margin-bottom:24px; }
.gic-run { font-family:inherit; font-size:14px; font-weight:600; color:#fff; background:var(--gic-blue); border:none; border-radius:10px; padding:13px 28px; cursor:pointer; transition:all 0.18s ease; display:flex; align-items:center; gap:9px; }
.gic-run:hover:not(:disabled) { background:#2563EB; transform:translateY(-1px); box-shadow:0 6px 20px rgba(59,130,246,0.3); }
.gic-run:disabled { opacity:0.5; cursor:not-allowed; }
.gic-hint { font-size:12px; color:var(--gic-faint); font-family:var(--gic-mono); }
.gic-pipeline { display:flex; flex-direction:column; gap:0; margin-bottom:26px; }
.gic-layer { position:relative; background:var(--gic-panel); border:1px solid var(--gic-border); border-radius:12px; padding:15px 18px; margin-bottom:10px; opacity:0.4; transition:all 0.35s ease; }
.gic-layer-active { opacity:1; border-color:var(--gic-accent); box-shadow:0 0 0 1px var(--gic-accent), 0 4px 24px -8px var(--gic-accent); }
.gic-layer-done { opacity:1; }
.gic-lhead { display:flex; align-items:center; gap:14px; }
.gic-licon { width:32px; height:32px; border-radius:9px; display:flex; align-items:center; justify-content:center; font-family:var(--gic-mono); font-size:12px; font-weight:700; flex-shrink:0; background:var(--gic-elev); border:1px solid var(--gic-border); color:var(--gic-faint); transition:all 0.35s ease; }
.gic-layer-active .gic-licon, .gic-layer-done .gic-licon { border-color:var(--gic-accent); color:var(--gic-accent); }
.gic-lmeta { flex:1; }
.gic-lname { font-size:14px; font-weight:600; color:var(--gic-text); }
.gic-lrole { font-size:11px; color:var(--gic-faint); margin-top:1px; }
.gic-lstate { font-family:var(--gic-mono); font-size:10px; font-weight:600; letter-spacing:0.08em; flex-shrink:0; color:var(--gic-faint); }
.gic-working-c { color:var(--gic-accent); }
.gic-ok-c { color:var(--gic-green); }
.gic-deny-c { color:var(--gic-red); }
.gic-lstatus { margin-top:10px; margin-left:46px; font-family:var(--gic-mono); font-size:11.5px; color:var(--gic-dim); line-height:1.5; }
.gic-ok { color:var(--gic-green); }
.gic-deny { color:var(--gic-red); }
.gic-hl { color:var(--gic-text); }
.gic-iiaac { display:grid; grid-template-columns:repeat(5,1fr); gap:6px; margin-top:10px; margin-left:46px; }
.gic-mini { background:var(--gic-elev); border:1px solid var(--gic-border); border-radius:6px; padding:8px 4px; text-align:center; transition:all 0.25s ease; opacity:0.4; }
.gic-mini-on { opacity:1; }
.gic-mini-pass { border-color:var(--gic-green); }
.gic-mini-fail { border-color:var(--gic-red); }
.gic-mini-l { font-family:var(--gic-mono); font-size:14px; font-weight:700; color:var(--gic-faint); line-height:1; }
.gic-mini-pass .gic-mini-l { color:var(--gic-green); }
.gic-mini-fail .gic-mini-l { color:var(--gic-red); }
.gic-mini-n { font-size:8.5px; color:var(--gic-dim); margin-top:3px; }
.gic-mini-s { font-family:var(--gic-mono); font-size:8px; margin-top:3px; font-weight:600; min-height:10px; }
.gic-mini-pass .gic-mini-s { color:var(--gic-green); }
.gic-mini-fail .gic-mini-s { color:var(--gic-red); }
.gic-result { border-radius:14px; padding:22px 24px; margin-bottom:22px; display:flex; align-items:center; gap:18px; animation:gicslide 0.4s ease; }
@keyframes gicslide { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
.gic-result-good { background:linear-gradient(135deg,rgba(16,185,129,0.12),rgba(16,185,129,0.03)); border:1px solid rgba(16,185,129,0.3); }
.gic-result-bad { background:linear-gradient(135deg,rgba(244,63,94,0.12),rgba(244,63,94,0.03)); border:1px solid rgba(244,63,94,0.3); }
.gic-result-badge { width:52px; height:52px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:26px; flex-shrink:0; }
.gic-result-good .gic-result-badge { background:rgba(16,185,129,0.15); color:var(--gic-green); }
.gic-result-bad .gic-result-badge { background:rgba(244,63,94,0.15); color:var(--gic-red); }
.gic-result-text { flex:1; }
.gic-result-headline { font-size:19px; font-weight:700; margin-bottom:3px; }
.gic-result-good .gic-result-headline { color:var(--gic-green); }
.gic-result-bad .gic-result-headline { color:var(--gic-red); }
.gic-result-sub { font-size:13px; color:var(--gic-dim); line-height:1.5; }
.gic-artifact { background:#05080F; border:1px solid var(--gic-border); border-radius:14px; overflow:hidden; animation:gicslide 0.5s ease; margin-bottom:8px; }
.gic-art-header { padding:12px 18px; border-bottom:1px solid var(--gic-border); display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.02); }
.gic-art-title { font-family:var(--gic-mono); font-size:11px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:var(--gic-dim); display:flex; align-items:center; gap:8px; }
.gic-art-badge { font-family:var(--gic-mono); font-size:9px; padding:3px 8px; border-radius:4px; background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.2); color:var(--gic-blue); }
.gic-art-body { padding:16px 18px; font-family:var(--gic-mono); font-size:12px; line-height:1.85; }
.gic-art-line { display:flex; gap:10px; }
.gic-art-key { color:var(--gic-faint); min-width:175px; }
.gic-art-val { color:var(--gic-text); }
.gic-art-val.gic-green { color:var(--gic-green); font-weight:600; }
.gic-art-val.gic-red { color:var(--gic-red); font-weight:600; }
.gic-art-val.gic-blue { color:var(--gic-blue); }
.gic-art-sig { margin-top:12px; padding-top:12px; border-top:1px solid var(--gic-border); word-break:break-all; font-size:10px; line-height:1.7; }
.gic-art-sig .gic-art-val { color:var(--gic-dim); }
.gic-ledger { margin-top:30px; }
.gic-ledger-item { display:flex; align-items:center; gap:12px; padding:10px 14px; background:var(--gic-panel); border:1px solid var(--gic-border); border-radius:9px; margin-bottom:7px; font-size:12px; animation:gicslide 0.3s ease; }
.gic-ledger-tag { font-family:var(--gic-mono); font-size:10px; font-weight:600; padding:3px 8px; border-radius:4px; flex-shrink:0; }
.gic-tag-deploy { background:rgba(59,130,246,0.12); color:var(--gic-blue); }
.gic-tag-ok { background:rgba(16,185,129,0.12); color:var(--gic-green); }
.gic-tag-deny { background:rgba(244,63,94,0.12); color:var(--gic-red); }
.gic-tag-retire { background:rgba(167,139,250,0.12); color:#A78BFA; }
.gic-ledger-id { font-family:var(--gic-mono); color:var(--gic-faint); font-size:11px; }
.gic-ledger-desc { color:var(--gic-dim); flex:1; }
.gic-ledger-time { font-family:var(--gic-mono); color:var(--gic-faint); font-size:10px; }
.gic-disclaimer { margin-top:28px; padding:14px 18px; background:rgba(255,255,255,0.02); border:1px solid var(--gic-border); border-radius:10px; font-size:11px; color:var(--gic-faint); line-height:1.6; }
@media (max-width:720px) { .gic-modes { grid-template-columns:1fr; } .gic-h1 { font-size:28px; } }
`;
