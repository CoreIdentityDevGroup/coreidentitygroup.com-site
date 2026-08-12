import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import InstitutionalVisual from "../components/InstitutionalVisual";

export function GovernanceEcosystemPage() {
  return (
    <div className="cidg-framework-page cidg-governance-page cidg-governance-fullbleed">
      <Helmet>
        <title>The Governance Ecosystem | CoreIdentity Development Group</title>
        <meta
          name="description"
          content="The CoreIdentity Governance Ecosystem: Trust Infrastructure, Autonomous Execution Governance, and the Institutional Chain of Legitimacy operating as one institutional system."
        />
      </Helmet>

      <section className="cidg-framework-hero">
        <p className="cidg-framework-kicker">The Governance Ecosystem</p>
        <h1>Architecture, doctrine, and legitimacy operating as one institutional system.</h1>
        <p className="cidg-framework-lead">
          Trust Infrastructure establishes the architectural discipline. Autonomous Execution
          Governance defines the operational doctrine. The Institutional Chain of Legitimacy
          preserves institutional authority throughout autonomous execution. Together, they
          enable Autonomous Governed Execution.
        </p>
      </section>

      <div className="cidg-alpha-stage cidg-alpha-stage--ecosystem" aria-label="The Governance Ecosystem">
        <InstitutionalVisual
          src="/images/visuals/governance-ecosystem-3d-alpha.png"
          alt="The CoreIdentity Governance Ecosystem: Trust Infrastructure, Autonomous Execution Governance, the Institutional Chain of Legitimacy, and Autonomous Governed Execution."
          className="cidg-alpha-visual cidg-alpha-visual--ecosystem"
        />
      </div>

      {/* CIDG_V716B_ECOSYSTEM_INTERPRETATION */}
      <section className="cidg-ecosystem-interpretation">
        <p className="cidg-framework-kicker">Institutional Continuity</p>
        <h2>Governance That Persists Through Execution</h2>
        <p>
          The Governance Ecosystem is not a collection of disconnected controls. It is a continuous
          institutional architecture that carries authority from governance intent into autonomous execution.
        </p>
        <p>
          Trust Infrastructure establishes the conditions under which intelligence may operate. Autonomous
          Execution Governance defines how delegated execution is governed. The Institutional Chain of
          Legitimacy maintains the continuity of authority, control, evidence, and accountability throughout execution.
        </p>
        <p>
          The result is an operating environment in which institutions can increase autonomy without surrendering control.
        </p>
        <p className="cidg-ecosystem-principle">
          <strong>Authority is established. Execution is governed. Assurance is continuous. Trust becomes verifiable.</strong>
        </p>
      </section>


      <section className="cidg-framework-next">
        <p>Return to the Foundation</p>
        <Link to="/trust-infrastructure">Trust Infrastructure →</Link>
      </section>
    </div>
  );
}
