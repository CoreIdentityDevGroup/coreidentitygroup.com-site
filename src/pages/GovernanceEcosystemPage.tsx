import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import InstitutionalVisual from "../components/InstitutionalVisual";

export function GovernanceEcosystemPage() {
  return (
    <div className="cidg-framework-page">
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

      <div className="cidg-platinum-visual-section" aria-label="The Governance Ecosystem">
        <InstitutionalVisual
          src="/images/visuals/governance-ecosystem-3d.webp"
          alt="The CoreIdentity Governance Ecosystem: Trust Infrastructure, Autonomous Execution Governance, the Institutional Chain of Legitimacy, and Autonomous Governed Execution."
          className="cidg-platinum-visual--ecosystem"
        />
      </div>

      <section className="cidg-framework-next">
        <p>Foundation</p>
        <Link to="/trust-infrastructure">Trust Infrastructure →</Link>
      </section>
    </div>
  );
}
