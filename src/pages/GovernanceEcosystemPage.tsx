import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import InstitutionalVisual from "../components/InstitutionalVisual";

import ContinuousGovernanceCycle from "../assets/governance/continuous-governance-cycle.png";
export function GovernanceEcosystemPage() {
  return (
    <div className="cidg-framework-page cidg-governance-page cidg-governance-fullbleed">
      <Helmet>
        <title>Autonomous Execution Governance | CoreIdentity Development Group</title>
        <meta
          name="description"
          content="Autonomous Execution Governance (AEG) is CoreIdentity’s operational doctrine for continuously governing autonomous execution while preserving institutional authority, assurance, evidence, and control."
        />
      </Helmet>

      <section className="cidg-framework-hero">
          <p className="cidg-framework-kicker">Autonomous Execution Governance</p>
          <h1>Continuous Governance for Autonomous Execution.</h1>
          <p className="cidg-framework-lead">Autonomous Execution Governance (AEG) is the operational doctrine that governs execution in motion—ensuring delegated autonomous execution remains within institutional authority, policy, boundaries, and accountability at every step.</p>
          <p className="cidg-framework-doctrine">Delegate Execution. Never Surrender Control.</p>
        </section>

      <div className="cidg-aeg-cycle-stage" aria-label="Autonomous Execution Governance continuous cycle">
          <InstitutionalVisual src={ContinuousGovernanceCycle} alt="Continuous governance cycle for autonomous execution under persistent institutional authority and oversight." className="cidg-aeg-cycle-visual" />
        </div>

      {/* CIDG_V716B_ECOSYSTEM_INTERPRETATION */}
      <section className="cidg-ecosystem-interpretation cidg-aeg-interpretation">
          <p className="cidg-framework-kicker">The Continuous Cycle</p>
          <h2>Authority That Persists Through Execution</h2>
          <p>AEG governs the transition from institutional intent and delegated authority into autonomous execution. Governance does not remain upstream from the action; it persists throughout the execution lifecycle.</p>
          <div className="cidg-aeg-sequence" aria-label="Continuous governance sequence">
            <div><strong>Intelligence</strong><span>Informs Governance</span></div><span aria-hidden="true">→</span>
            <div><strong>Governance</strong><span>Controls Execution</span></div><span aria-hidden="true">→</span>
            <div><strong>Assurance</strong><span>Continuously Verifies</span></div><span aria-hidden="true">→</span>
            <div><strong>Trust</strong><span>Is Established</span></div>
          </div>
          <p>The resulting execution state, evidence, and risk context become new institutional intelligence and inform the next governance cycle.</p>
          <p className="cidg-ecosystem-principle"><strong>Continuous Governance. Verifiable Execution. Institutional Control.</strong></p>
        </section>


      <section className="cidg-framework-next">
        <p>Explore the production foundation beneath governed execution.</p>
        <Link to="/trust-infrastructure">Trust Infrastructure →</Link>
      </section>
    </div>
  );
}
