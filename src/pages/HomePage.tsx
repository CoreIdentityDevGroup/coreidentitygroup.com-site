import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import InstitutionalVisual from "../components/InstitutionalVisual";

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
        <div className="cidg-platinum-hero-copy">
          <div className="cidg-platinum-eyebrow">
            <strong>Trust Infrastructure</strong>
          </div>
          <div className="cidg-platinum-eyebrow-terms">Intelligence • Assurance • Trust</div>
          <div className="cidg-platinum-eyebrow-aeg"><strong>Autonomous Execution Governance</strong></div>

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
            src="/images/visuals/trust-infrastructure-3d.webp"
            alt="Trust Infrastructure architecture: Intelligence, Assurance and Trust enabling Autonomous Governed Execution."
            className="cidg-platinum-visual--hero"
            priority
          />
          <p className="cidg-platinum-hero-architecture-note">
            Each layer of our Trust Infrastructure is engineered with multiple proprietary components that work together
            to establish authority, enforce policy, verify execution, preserve evidence, and maintain institutional control.
            Together, these layers are designed to provide the highest level of Autonomous Execution Governance across the
            full lifecycle of autonomous execution.
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
          <p className="cidg-platinum-kicker">The Governance Ecosystem</p>
          <h2 id="cidg-platinum-ecosystem-title">
            Architecture, doctrine, and legitimacy—operating as one institutional system.
          </h2>
          <p>
            Trust Infrastructure establishes the architectural discipline.
            Autonomous Execution Governance defines the operational doctrine.
            The Institutional Chain of Legitimacy preserves authority, accountability,
            and evidence throughout autonomous execution.
          </p>
          <Link to="/about">Understand CoreIdentity →</Link>
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
