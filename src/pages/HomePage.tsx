import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

const PILLARS = [
  {
    label: "Trust Infrastructure",
    statement: "The institutional foundation for governed autonomous execution.",
    to: "/trust-infrastructure",
  },
  {
    label: "Intelligence",
    statement: "Capability operating through legitimate authority and institutional intent.",
    to: "/intelligence",
  },
  {
    label: "Assurance",
    statement: "Continuous evidence that execution remains governed and attributable.",
    to: "/assurance",
  },
  {
    label: "Trust",
    statement: "The confidence to delegate execution without surrendering control.",
    to: "/trust",
  },
] as const;

export default function HomePage() {
  return (
    <div className="cidg-x10-home">
      <Helmet>
        <title>CoreIdentity Development Group | Trust Infrastructure</title>
        <meta
          name="description"
          content="CoreIdentity Development Group establishes the Trust Infrastructure that enables organizations to deploy Intelligence with continuous Assurance—creating Trust while ensuring they remain in control."
        />
      </Helmet>

      
      <section className="cidg-v638-hero" aria-labelledby="cidg-v638-title">
        <div className="cidg-v638-copy">
          <div className="cidg-v638-brandline">
            <strong>Trust Infrastructure</strong>
            <span>Intelligence · Assurance · Trust</span>
          </div>

          <h1 id="cidg-v638-title">
            The Trust Infrastructure
            <span>the Autonomous Era Demands</span>
          </h1>

          <p>
            The institutional foundation that enables organizations to safely
            delegate autonomous execution while ensuring they remain in control.
          </p>

          <div className="cidg-v638-actions">
            <Link to="/trust-infrastructure" className="cidg-v638-primary">
              Explore the Ecosystem <span aria-hidden="true">→</span>
            </Link>
            <Link to="/resources" className="cidg-v638-secondary">
              Read Our Research
            </Link>
          </div>
        </div>

        <div className="cidg-v638-visual" aria-label="Layered Governance Ecosystem architecture">
          <div className="cidg-v638-axis" aria-hidden="true" />

          {[1, 2, 3, 4].map((layer) => (
            <div key={layer} className={`cidg-v638-layer cidg-v638-layer-${layer}`}>
              <div className="cidg-v638-grid" />
              <div className="cidg-v638-node cidg-v638-node-a" />
              <div className="cidg-v638-node cidg-v638-node-b" />
              <div className="cidg-v638-node cidg-v638-node-c" />
            </div>
          ))}

          <div className="cidg-v638-label cidg-v638-label-1">
            <strong>Trust Infrastructure</strong>
            <span>The Architectural Discipline</span>
          </div>
          <div className="cidg-v638-label cidg-v638-label-2">
            <strong>Intelligence</strong>
            <span>Context and Understanding</span>
          </div>
          <div className="cidg-v638-label cidg-v638-label-3">
            <strong>Assurance</strong>
            <span>Verification and Control</span>
          </div>
          <div className="cidg-v638-label cidg-v638-label-4">
            <strong>Governed Execution</strong>
            <span>Autonomous Operations Within Guardrails</span>
          </div>
        </div>
      </section>


      <section className="cidg-x10-screen cidg-x10-statement">
        <div className="cidg-x10-narrow">
          <p className="cidg-x10-kicker">The Autonomous Era</p>
          <h2>Execution is becoming autonomous. Governance must become infrastructure.</h2>
          <p>
            Policies written for human-speed oversight cannot govern machine-speed execution. Authority, identity, accountability, and evidence must remain enforceable while execution occurs.
          </p>
        </div>
      </section>

      <section className="cidg-x10-screen cidg-x10-pillars">
        <div className="cidg-x10-section-head">
          <p className="cidg-x10-kicker">The CoreIdentity Framework</p>
          <h2>Four ideas. One institutional outcome.</h2>
        </div>

        <div className="cidg-x10-pillar-list">
          {PILLARS.map((pillar, index) => (
            <Link key={pillar.label} to={pillar.to} className="cidg-x10-pillar">
              <span className="cidg-x10-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="cidg-x10-pillar-copy">
                <strong>{pillar.label}</strong>
                <small>{pillar.statement}</small>
              </span>
              <span className="cidg-x10-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="cidg-x10-screen cidg-x10-ecosystem">
        <div className="cidg-x10-ecosystem-copy">
          <p className="cidg-x10-kicker">The Governance Ecosystem</p>
          <h2>One architecture for governed autonomous execution.</h2>
          <p>
            Trust Infrastructure establishes the foundation. Autonomous Execution Governance defines the doctrine. The Institutional Chain of Legitimacy preserves authority throughout execution.
          </p>
          <Link to="/about">Understand CoreIdentity →</Link>
        </div>

        <div className="cidg-x10-architecture" aria-label="Governance Ecosystem architecture">
          <div>Trust Infrastructure</div>
          <span>↓</span>
          <div>Autonomous Execution Governance</div>
          <span>↓</span>
          <div>Institutional Chain of Legitimacy</div>
          <span>↓</span>
          <div>Governed Execution</div>
        </div>
      </section>

      <section className="cidg-x10-screen cidg-x10-closing">
        <p className="cidg-x10-kicker">Our operating principle</p>
        <h2>Humans lead. Machines execute. Governance protects both.</h2>
        <Link to="/contact" className="cidg-x10-primary">
          Begin an Institutional Conversation
        </Link>
      </section>
    </div>
  );
}
