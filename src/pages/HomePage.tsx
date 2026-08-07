import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

const FRAMEWORK = [
  {
    label: "Trust Infrastructure",
    statement: "The architectural discipline for governed autonomous execution.",
    to: "/trust-infrastructure",
  },
  {
    label: "Intelligence",
    statement: "Context and understanding operating through legitimate authority.",
    to: "/intelligence",
  },
  {
    label: "Assurance",
    statement: "Continuous verification that execution remains governed and attributable.",
    to: "/assurance",
  },
  {
    label: "Trust",
    statement: "The institutional confidence to delegate execution without surrendering control.",
    to: "/trust",
  },
] as const;

export default function HomePage() {
  return (
    <div className="cidg-v640-home">
      <Helmet>
        <title>CoreIdentity Development Group | Trust Infrastructure</title>
        <meta
          name="description"
          content="CoreIdentity establishes the Trust Infrastructure that enables organizations to deploy Intelligence with continuous Assurance—creating Trust while ensuring they remain in control."
        />
      </Helmet>

      <section className="cidg-v640-hero" aria-labelledby="cidg-v640-title">
        <div className="cidg-v640-copy">
          <div className="cidg-v640-brandline">
            <strong>Trust Infrastructure</strong>
            <span>Intelligence · Assurance · Trust</span>
          </div>

          <h1 id="cidg-v640-title">
            The Trust Infrastructure
            <span>the Autonomous Era Demands</span>
          </h1>

          <p>
            The institutional foundation that enables organizations to safely
            delegate autonomous execution while ensuring they remain in control.
          </p>

          <div className="cidg-v640-actions">
            <Link to="/trust-infrastructure" className="cidg-v640-primary">
              Explore the Ecosystem <span aria-hidden="true">→</span>
            </Link>
            <Link to="/resources" className="cidg-v640-secondary">
              Read Our Research
            </Link>
          </div>
        </div>

        <div className="cidg-v640-architecture">
          <img
            src="/trust-infrastructure-architecture.webp"
            alt="Layered Trust Infrastructure architecture"
            loading="eager"
            decoding="async"
          />

          <ol aria-label="Trust Infrastructure sequence">
            <li><strong>Intelligence</strong><span>Context and understanding</span></li>
            <li><strong>Assurance</strong><span>Verification and control</span></li>
            <li><strong>Trust</strong><span>Identity, authority, and institutional integrity</span></li>
            <li className="cidg-v640-result"><strong>Result</strong><span>Autonomous Governed Execution</span></li>
          </ol>
        </div>
      </section>

      <section className="cidg-v640-shift">
        <p className="cidg-v640-kicker">The Institutional Shift</p>
        <h2>Execution is becoming autonomous. Governance must become infrastructure.</h2>
        <p>
          Policies written for human-speed oversight cannot govern machine-speed execution.
          Authority, identity, accountability, and evidence must remain enforceable while execution occurs.
        </p>
      </section>

      <section className="cidg-v640-framework" aria-labelledby="cidg-v640-framework-title">
        <div className="cidg-v640-section-head">
          <p className="cidg-v640-kicker">The Institutional Framework</p>
          <h2 id="cidg-v640-framework-title">Four entry points into one governance discipline.</h2>
        </div>

        <div className="cidg-v640-framework-grid">
          {FRAMEWORK.map((item, index) => (
            <Link key={item.label} to={item.to} className="cidg-v640-framework-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.label}</strong>
              <small>{item.statement}</small>
              <b aria-hidden="true">→</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="cidg-v640-ecosystem">
        <div>
          <p className="cidg-v640-kicker">The Governance Ecosystem</p>
          <h2>One architecture for governed autonomous execution.</h2>
          <p>
            Trust Infrastructure establishes the architectural discipline.
            Autonomous Execution Governance defines the operational doctrine.
            The Institutional Chain of Legitimacy preserves authority throughout execution.
          </p>
          <Link to="/about">Understand CoreIdentity →</Link>
        </div>

        <div className="cidg-v640-sequence" aria-label="Governance Ecosystem sequence">
          <div>Trust Infrastructure</div>
          <span>↓</span>
          <div>Autonomous Execution Governance</div>
          <span>↓</span>
          <div>Institutional Chain of Legitimacy</div>
          <span>↓</span>
          <div>Autonomous Governed Execution</div>
        </div>
      </section>

      <section className="cidg-v640-closing">
        <p className="cidg-v640-kicker">Our Operating Principle</p>
        <h2>Humans lead. Machines execute. Governance protects both.</h2>
        <p>Delegate Execution. Never Surrender Control.</p>
        <Link to="/contact" className="cidg-v640-primary">
          Begin an Institutional Conversation
        </Link>
      </section>
    </div>
  );
}

