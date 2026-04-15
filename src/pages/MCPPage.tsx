// CHC-MCP-PAGE-v1
import React from "react";
import { Helmet } from "react-helmet-async";

export function MCPPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <Helmet>
        <title>Model Context Protocol Governance | CoreIdentity MCP Integration</title>
        <meta name="description" content="CoreIdentity governs Model Context Protocol integrations with identity enforcement, authorization boundaries, and audit trails for every MCP tool call." />
      </Helmet>
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          MCP Protocol
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-white/70">
          CoreIdentity exposes eleven live governance tools through a production MCP server —
          making the entire platform queryable by any MCP-compatible AI client, agent,
          or orchestration framework, with policy enforcement and audit logging on every call.
        </p>
      </div>

      <section className="mb-12">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">The governed MCP layer</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            The CoreIdentity MCP server runs on GCP Cloud Run as the governance proxy
            between external AI clients and the platform's operational surface. Every
            tool invocation passes through the same enforcement stack that governs
            internal agent execution — no exceptions for external callers.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-lg font-semibold text-white mb-2">Identity enforcement</div>
            <p className="text-sm text-white/70">
              Every MCP call must carry a validated context envelope — tenant, actor,
              purpose, classification, and traceId. Missing or malformed context is
              rejected before any tool executes.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-lg font-semibold text-white mb-2">Namespace isolation</div>
            <p className="text-sm text-white/70">
              Tool access is governed by a tenant namespace allowlist on a default-deny
              basis. Callers can only invoke tools within their authorized namespace —
              cross-tenant access is structurally impossible.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-lg font-semibold text-white mb-2">Contract versioning</div>
            <p className="text-sm text-white/70">
              Every tool carries a minimum contract version requirement. Callers on
              outdated contracts receive a structured rejection — no silent degradation,
              no compatibility drift, no ungoverned fallback paths.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">Eleven live governance tools</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            The MCP server exposes a structured tool registry across four tenant namespaces.
            Any MCP-compatible client — AI agent, LLM, or orchestration platform — can
            discover and invoke these tools through the standard protocol.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/60 uppercase mb-3">Shared namespace</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/40 shrink-0"></span>
                <span><span className="text-white/90 font-mono">artifact_registry.read</span> — retrieve governed artifacts by query</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/40 shrink-0"></span>
                <span><span className="text-white/90 font-mono">artifact_registry.readById</span> — retrieve a specific artifact by ID</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/40 shrink-0"></span>
                <span><span className="text-white/90 font-mono">artifact_registry.search</span> — full-text governance artifact search</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/60 uppercase mb-3">CoreIdentity · CIAG · Hospitality namespaces</div>
            <p className="text-sm text-white/70 mb-3">
              Each vertical namespace exposes the same three-tool surface — read,
              readById, and search — scoped to that tenant's governed artifact space.
              Eight additional tools across three namespaces, all contract-versioned
              and namespace-isolated.
            </p>
            <div className="text-xs text-white/50 font-mono">chc.* · ciag.* · hospitality.*</div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">AGO and the MCP execution plane</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            AGO agents — CoreIdentity Ops, CIAG, and Hospitality — consume the MCP server through
            ago-1-core, the single authoritative MCP gateway. Tool calls made by AGO agents
            pass through identical governance enforcement as external MCP callers.
            The governance layer does not distinguish between internal and external invocations.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/60 uppercase mb-1">AGO CoreIdentity Ops</div>
            <div className="text-base font-semibold text-white mb-2">MCP server host</div>
            <p className="text-sm text-white/70">
              Hosts the shared MCP server and owns the full smoke test suite validating
              tool registry parity, tenant isolation, and contract enforcement across all namespaces.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/60 uppercase mb-1">AGO CIAG</div>
            <div className="text-base font-semibold text-white mb-2">Advisory execution</div>
            <p className="text-sm text-white/70">
              Advisory pipeline agent wired to ago-1-core MCP with compile-time
              validation. Governance context is injected at invocation — not assumed.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/60 uppercase mb-1">AGO Hospitality</div>
            <div className="text-base font-semibold text-white mb-2">Vertical execution</div>
            <p className="text-sm text-white/70">
              Hospitality vertical agent wired to ago-1-core MCP with compile-time
              validation. Namespace-scoped to hospitality.* — structurally isolated
              from all other tenants.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl font-semibold text-white">Operating principle</h3>
          <p className="mt-2 text-white/70">
            MCP connectivity without governance is an ungoverned liability surface.
            Every tool the platform exposes — to internal agents or external AI clients —
            operates under the same policy enforcement, the same identity requirements,
            and the same audit trail. There is no unguarded path into the platform.
          </p>
        </div>
      </section>
    </div>
  );
}

export default MCPPage;
