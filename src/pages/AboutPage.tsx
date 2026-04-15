import React from "react";
import { Link } from "@tanstack/react-router";
import { Card, PageTitle, SectionTitle } from "../components/ui";
import { Helmet } from "react-helmet-async";

export function AboutPage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>About CoreIdentity Development Group | Agentic AI Governance</title>
        <meta name="description" content="CoreIdentity Development Group Inc. is the infrastructure company behind Agentic Execution Governance — the discipline that governs autonomous AI at the execution layer." />
      </Helmet>

      <div className="space-y-4">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40">
          AGENTIC EXECUTION GOVERNANCE
        </div>
        <PageTitle>About Us</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed text-lg">
          CoreIdentity Development Group Inc. is the infrastructure company
          behind Agentic Execution Governance — the discipline that governs
          autonomous AI at the execution layer. We build the control plane
          that enterprise organizations require to deploy agentic digital labor
          safely, accountably, and at scale.
        </p>
      </div>

      <section className="space-y-5">
        <SectionTitle>Mission</SectionTitle>
        <Card>
          <p className="text-white/80 leading-relaxed text-lg">
            To make autonomous AI governable — by building the identity,
            enforcement, orchestration, and audit infrastructure that
            enterprises and sovereign institutions require before agentic
            execution can be trusted at scale.
          </p>
        </Card>
      </section>

      <section className="space-y-5">
        <SectionTitle>Vision</SectionTitle>
        <Card>
          <p className="text-white/80 leading-relaxed text-lg">
            A world in which autonomous AI operates inside the boundaries
            of human authority — where every agent action is authorized,
            every decision is attributable, and every organization retains
            provable control over the systems acting on its behalf.
          </p>
        </Card>
      </section>

      <section className="space-y-5">
        <SectionTitle>Who We Are</SectionTitle>
        <Card>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              CoreIdentity Development Group Inc. is the parent entity
              governing a portfolio of infrastructure systems and operating
              capabilities — from advisory engagement to platform enforcement
              to governed digital labor deployment at enterprise scale.
            </p>
            <p>
              We are governance-first by design. Every system we build
              operates on the principle that autonomous execution without
              enforceable boundaries is not a capability — it is a liability.
              Our platform enforces those boundaries at machine speed, before
              incidents occur, and generates the immutable evidence trail
              that regulators, boards, and institutional counterparties require.
            </p>
            <p>
              CoreIdentity is not a dashboard company. We do not observe
              AI behavior after the fact. We govern it at the execution layer —
              through the Semantic Arbitration Layer, Sentinel OS, and a
              cryptographically hardened identity infrastructure that meets
              the most demanding institutional standards.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-5">
        <SectionTitle>The Standard We Build To</SectionTitle>
        <Card>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              CoreIdentity's design standard is set by the regulatory
              environments our clients operate in — plus one level of margin.
              We do not set the bar. The frameworks that govern healthcare,
              financial services, federal procurement, and critical
              infrastructure set it. We build to that bar, and then exceed it.
            </p>
            <p>
              This is what Platinum Standard means in practice: institutional
              rigor applied to every layer of the stack, from cryptographic
              posture to audit evidence to fail-closed enforcement behavior.
              No exceptions for early-stage convenience.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-5">
        <SectionTitle>Corporate Structure</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="space-y-2">
              <div className="text-sm font-medium text-white/40 tracking-widest">HOLDING COMPANY</div>
              <div className="font-semibold text-white">CoreIdentity Development Group Inc.</div>
              <p className="text-sm text-white/60 leading-relaxed">Parent entity governing the full portfolio of infrastructure systems and operating capabilities.</p>
            </div>
          </Card>
          <Card>
            <div className="space-y-2">
              <div className="text-sm font-medium text-white/40 tracking-widest">ADVISORY</div>
              <div className="font-semibold text-white">CoreIdentity Advisory Group</div>
              <p className="text-sm text-white/60 leading-relaxed">Governance-first advisory engagements, executive readiness assessments, and enterprise deployment strategy.</p>
            </div>
          </Card>
          <Card>
            <div className="space-y-2">
              <div className="text-sm font-medium text-white/40 tracking-widest">TECHNOLOGY</div>
              <div className="font-semibold text-white">CoreIdentity Technologies</div>
              <p className="text-sm text-white/60 leading-relaxed">Platform R&D, enforcement stack, and governed digital labor deployment at enterprise scale.</p>
            </div>
          </Card>
        </div>
      </section>

      <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
        <p className="text-white/70 leading-relaxed mb-6">
          Learn more about the people behind CoreIdentity or explore the
          full platform portfolio.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/leadership"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
          >
            Leadership Team →
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
          >
            Platform Portfolio →
          </Link>
        </div>
      </div>

    </div>
  );
}
