import React from "react";
import { Eyebrow } from "../components/ui";
import { Helmet } from "react-helmet-async";

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-400" aria-hidden="true">
      <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-emerald-400 flex-shrink-0" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BlockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-red-400 flex-shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M4.93 4.93l14.14 14.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SALPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <Helmet>
        <title>SAL Enforcement Kernel — Semantic Authorization Layer | CoreIdentity</title>
        <meta name="description" content="The SAL Enforcement Kernel is the deterministic pre-execution gateway for autonomous AI. Sub-3ms arbitration latency. IIAAC validation model. Fail-closed by design." />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"SAL Enforcement Kernel","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400 mb-4">
          <ShieldIcon />
          ENFORCEMENT KERNEL · FOUNDATIONAL LAYER
        </div>
        <Eyebrow>GOVERNANCE INFRASTRUCTURE</Eyebrow>
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          SAL Enforcement Kernel
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-white/70 leading-relaxed">
          Your AI agents can reason about anything. SAL determines what they are actually permitted to do. The CoreIdentity Semantic Authorization Layer is the deterministic enforcement kernel that sits in the execution path — not the policy document — mathematically preventing any machine action that violates your codified business logic, safety thresholds, or regulatory boundaries. The architectural guarantee that transforms probabilistic AI into institutional-grade digital labor.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">sub-3ms arbitration latency</span>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">IIAAC validation model</span>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">SAL-Certified Rail standard</span>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">Parameter bounds enforcement</span>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">Delegation chain validation</span>
          <span className="inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-400">Deterministic · Not probabilistic</span>
        </div>
      </div>

      {/* The Problem */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">The Delegated Authority Problem</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-red-400/15 bg-red-400/5 p-6">
            <div className="text-base font-semibold text-red-300 mb-2">Traditional security is insufficient</div>
            <p className="text-sm text-white/70 leading-relaxed">
              RBAC and IAM govern <em>who</em> can access a resource. They cannot answer: Is this action <em>appropriate</em> given the agent's current intent? Does this tool call <em>fit</em> within the delegated scope? Is this data export <em>authorized</em> by the business?
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-6">
            <div className="text-base font-semibold text-emerald-300 mb-2">SAL decouples reasoning from authorization</div>
            <p className="text-sm text-white/70 leading-relaxed">
              SAL separates the Reasoning Engine (the AI) from the Authorization Kernel (SAL). The agent reasons freely; SAL arbitrates deterministically. No probabilistic model can override a codified business rule or safety threshold.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Architectural Placement: The Execution Air Gap</h2>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="grid gap-4 md:grid-cols-3 items-center">
            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <div className="text-xs font-semibold tracking-wide text-white/50 uppercase mb-3">Northbound</div>
              <div className="text-base font-semibold text-white mb-2">Reasoning Engine</div>
              <p className="text-sm text-white/60 mb-3">Any LLM, autonomous agent, or orchestration system generating tool calls and action intents.</p>
              <ul className="space-y-1">
                {["AGO-1 (CoreIdentity)", "Customer AI agents", "Third-party LLM systems"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs text-white/50"><CheckIcon />{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-amber-400/30 mb-2" />
              <div className="rounded-2xl border-2 border-amber-400/40 bg-amber-400/10 p-5 text-center w-full">
                <ShieldIcon />
                <div className="text-base font-bold text-amber-400 mt-2">SAL Kernel</div>
                <div className="text-xs text-amber-400/70 mt-1">Semantic Authorization Layer</div>
                <div className="mt-3 space-y-1 text-left">
                  {["Identity validation", "Intent classification", "Asset boundary check", "Action authorization", "Context evaluation"].map(item => (
                    <div key={item} className="flex items-center gap-2 text-xs text-white/70"><CheckIcon />{item}</div>
                  ))}
                </div>
                <div className="mt-3 rounded-full border border-amber-400/20 bg-amber-400/5 px-2 py-1 text-xs text-amber-400/80">
                  sub-3ms · deterministic
                </div>
              </div>
              <div className="w-0.5 h-6 bg-amber-400/30 mt-2" />
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <div className="text-xs font-semibold tracking-wide text-white/50 uppercase mb-3">Southbound</div>
              <div className="text-base font-semibold text-white mb-2">SAL-Certified Rails</div>
              <p className="text-sm text-white/60 mb-3">Enterprise infrastructure implementing the SAL Southbound Integration Standard.</p>
              <ul className="space-y-1">
                {["Databases & data warehouses", "Payment gateways & APIs", "Enterprise SaaS connectors"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs text-white/50"><CheckIcon />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IIAAC Model */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">The IIAAC Validation Model</h2>
        <p className="text-white/70 mb-6 max-w-3xl">Every machine-initiated action is evaluated across five dimensions before any execution occurs. All five must pass — a single failure results in a deterministic DENY with a structured rejection reason.</p>
        <div className="grid gap-4 md:grid-cols-5">
          {[
            { letter: "I", label: "Identity", desc: "Who is making the request? Validated tenant, actor, and credential chain." },
            { letter: "I", label: "Intent", desc: "Why is this action being requested? Semantic classification of purpose." },
            { letter: "A", label: "Asset", desc: "What resource is being accessed? Classification and sensitivity level." },
            { letter: "A", label: "Action", desc: "What operation is being performed? Scope and privilege level check." },
            { letter: "C", label: "Context", desc: "When and where? Temporal, environmental, and workflow position." },
          ].map((dim) => (
            <div key={dim.label} className="rounded-2xl border border-amber-400/15 bg-amber-400/5 p-4 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-1">{dim.letter}</div>
              <div className="text-sm font-semibold text-white mb-2">{dim.label}</div>
              <p className="text-xs text-white/60 leading-relaxed">{dim.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Enforcement Capabilities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Advanced Enforcement Capabilities</h2>
        <div className="space-y-6">
          <div className="rounded-2xl border border-amber-400/15 bg-amber-400/5 p-6">
            <div className="text-base font-semibold text-white mb-2">Parameter Semantic Validation</div>
            <p className="text-sm text-white/70 leading-relaxed">
              SAL enforces parameter-level bounds on every agent action — not just whether the action is permitted, but whether the specific values are within authorized ranges. A financial agent authorized to process payments cannot submit a transaction outside its declared dollar bounds. A data agent cannot export a record count beyond its authorized scope. Out-of-bounds parameters return SAL-4010 before execution — regardless of whether the action type is permitted. This closes the prompt injection gap that RBAC cannot address.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-400/15 bg-amber-400/5 p-6">
            <div className="text-base font-semibold text-white mb-2">Inter-Agent Trust Propagation</div>
            <p className="text-sm text-white/70 leading-relaxed">
              In multi-agent workflows, SAL validates the full delegation chain — every agent that passed authority to the current agent, back to the original authorization source. A compromised sub-agent cannot propagate elevated permissions to a downstream agent. SAL-4011 fires when any link in the chain is invalid. Maximum delegation depth is enforced at the infrastructure level. The governance boundary holds regardless of how complex the agent topology becomes.
            </p>
          </div>
        </div>
      </section>

      {/* SAL in the Ecosystem */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">SAL in the CoreIdentity Ecosystem</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-base font-semibold text-white mb-2">Powers Sentinel</div>
            <p className="text-sm text-white/70 leading-relaxed">Every Sentinel policy enforcement decision, approval gate evaluation, and kill switch trigger is arbitrated through the SAL Kernel. Sentinel's guarantees are SAL's guarantees.</p>
            <a href="/sentinel" className="mt-3 inline-flex items-center gap-1 text-sm text-white/50 hover:text-white/80 transition">View Sentinel →</a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-base font-semibold text-white mb-2">Powers AGO</div>
            <p className="text-sm text-white/70 leading-relaxed">The Autonomous Governance Operator runs under SAL enforcement. Every AGO task execution is SAL-arbitrated — no action can exceed delegated authority or trigger unauthorized external calls.</p>
            <a href="/ago-1" className="mt-3 inline-flex items-center gap-1 text-sm text-white/50 hover:text-white/80 transition">View AGO-1 →</a>
          </div>
        </div>
      </section>

      {/* SAL + FGRE: Complete Governance Assurance Stack */}
      <section className="mb-12">
        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6">
          <div className="flex items-center gap-3 mb-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-violet-400" aria-hidden="true">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-semibold tracking-wide text-violet-400 uppercase">Complete Governance Assurance Stack</span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-3">
            SAL deterministic enforcement is complemented by FGRE pre-deployment formal verification —
            together they represent the complete governance assurance stack. SAL enforces policy at
            runtime, preventing any execution that violates codified business logic. FGRE proves
            policy correctness before activation, using Z3 SMT formal verification to detect
            contradictions and validate execution paths before any policy goes live.
          </p>
          <p className="text-sm text-white/70 leading-relaxed">
            The result: governance policies that are mathematically verified before they activate
            and deterministically enforced once they do. Formal proof upstream, deterministic
            enforcement downstream.
          </p>
        </div>
      </section>

      {/* Out-of-Scope Declarations */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">Out-of-Scope Declarations</h2>
        <p className="text-white/70 mb-6 max-w-3xl text-sm">Institutional-grade infrastructure defines its limitations explicitly. The following are deliberate exclusions from SAL's enforcement scope.</p>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-3">
            {[
              "SAL does not govern human judgment decisions — ethical, legal, or hiring determinations remain outside machine authority by design.",
              "SAL does not provide model-level safety (that is the responsibility of the underlying LLM provider). SAL governs the execution boundary, not the reasoning layer.",
              "SAL-Certified Rail certification requires third-party infrastructure to implement the Southbound Integration Standard. Uncertified infrastructure is default-deny.",
              "SAL enforcement guarantees apply to actions initiated within the CoreIdentity execution boundary. External system behavior post-action is outside SAL's scope.",
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                <BlockIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-8 text-center">
          <ShieldIcon />
          <h3 className="mt-3 text-xl font-semibold text-white">Ready to verify the enforcement guarantees?</h3>
          <p className="mt-2 text-white/70 max-w-xl mx-auto text-sm">
            Contact us to receive the SAL Enforcement Guarantee v1.0 and Southbound Integration Specification for your security and legal review.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition">
              Request SAL Specification
            </a>
            <a href="/coreidentity-technologies" className="inline-flex items-center justify-center rounded-full border border-white/15 hover:bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition">
              View CoreIdentity Technologies
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
