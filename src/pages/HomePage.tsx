import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import InstitutionalVisual from "../components/InstitutionalVisual";

import AutonomousGovernanceEcosystem from "../assets/governance/autonomous-governance-ecosystem-alpha.png";
export default function HomePage() {
  return (
    <div className="cidg-platinum-home cidg-home-page cidg-home-trust-sequence">
      <Helmet>
        <title>CoreIdentity Development Group | Trust Infrastructure</title>
        <meta
          name="description"
          content="CoreIdentity establishes the Trust Infrastructure that enables institutions to safely delegate autonomous execution while ensuring they remain in control."
        />
      </Helmet>

      <section className="cidg-platinum-hero" aria-labelledby="cidg-platinum-title">
        <div className="cidg-platinum-hero-sequence" aria-label="Autonomous Governance Ecosystem">
          <div className="cidg-platinum-eyebrow"><strong>Autonomous Governance Ecosystem</strong></div>
          <div className="cidg-platinum-eyebrow-terms">Governance • Intelligence • Assurance • Trust</div>
        </div>

        <div className="cidg-platinum-hero-copy">
          <h1 id="cidg-platinum-title">
            The Institutional Foundation
            <span>for the Autonomous Era</span>
          </h1>

          <p>
            CoreIdentity enables organizations to safely delegate autonomous execution while ensuring they remain in control.
          </p>
        </div>
        <div className="cidg-platinum-hero-visual-col">
          <InstitutionalVisual
            src={AutonomousGovernanceEcosystem}
            alt="CoreIdentity Autonomous Governance Ecosystem: Governance, Intelligence, Assurance, and Trust."
            className="cidg-platinum-visual--hero cidg-platinum-visual--governance-globe"
            priority
          />
          <p className="cidg-platinum-hero-architecture-note">
            CoreIdentity has built the production Governance Ecosystem for the Autonomous Era—integrating Governance, Intelligence, Assurance, and Trust so institutions can delegate autonomous execution without surrendering institutional authority or control.
          </p>
          <div className="cidg-platinum-hero-actions">
            <Link to="/trust-infrastructure" className="cidg-platinum-primary">
              Explore Trust Infrastructure <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cidg-platinum-shift">
        <p className="cidg-platinum-kicker">The Institutional Shift</p>
        <h2>Execution is becoming autonomous. Governance must become infrastructure.</h2>
        <p>
          Policies designed for human-speed oversight cannot govern machine-speed execution.
          Authority, identity, accountability, and evidence must remain enforceable while execution occurs.
        </p>
      </section>

      <section className="cidg-platinum-ecosystem" aria-labelledby="cidg-platinum-ecosystem-title">
        <div>
          <p className="cidg-platinum-kicker">One Ecosystem. One System. Continuous Control.</p>
          <h2 id="cidg-platinum-ecosystem-title">Designed, defined, and built for governed autonomous execution.</h2>
          <div className="cidg-home-system-grid">
            <article><h3>Autonomous Governance Ecosystem</h3><p>What the system is: the institutional governance model for the Autonomous Era.</p></article>
            <article><h3>Trust Infrastructure</h3><p>What makes it operational: the production institutional infrastructure beneath governed execution.</p><Link to="/trust-infrastructure">Explore Trust Infrastructure →</Link></article>
            <article><h3>Autonomous Execution Governance</h3><p>How it operates: the continuous governance doctrine that governs execution in motion.</p><Link to="/governance-ecosystem">Explore AEG →</Link></article>
          </div>
        </div>
      </section>

      <section className="cidg-platinum-closing">
        <p className="cidg-platinum-kicker">Our Operating Principle</p>
        <h2>Humans lead. Machines execute. Governance protects both.</h2>
        <p>Delegate Execution. Never Surrender Control.</p>
        <Link to="/contact" className="cidg-platinum-primary">
          Begin an Institutional Conversation
        </Link>
      </section>
    </div>
  );
}
