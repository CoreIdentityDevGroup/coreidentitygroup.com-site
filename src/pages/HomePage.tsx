import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  return (
    <main className="cidg-v641-home">
      <Helmet>
        <title>CoreIdentity Development Group | Trust Infrastructure</title>
        <meta
          name="description"
          content="CoreIdentity establishes the Trust Infrastructure that enables institutions to safely delegate autonomous execution while ensuring they remain in control."
        />
      </Helmet>

      <section className="cidg-v641-hero" aria-labelledby="cidg-v641-title">
        <div className="cidg-v641-copy">
          <div className="cidg-v641-brandline">
            <strong>Trust Infrastructure</strong>
            <span>Intelligence · Assurance · Trust</span>
          </div>

          <h1 id="cidg-v641-title">
            The Trust Infrastructure
            <span>the Autonomous Era Demands</span>
          </h1>

          <p>
            The institutional foundation that enables organizations to safely
            delegate autonomous execution while ensuring they remain in control.
          </p>

          <div className="cidg-v641-actions">
            <Link to="/trust-infrastructure" className="cidg-v641-primary">
              Explore the Ecosystem <span aria-hidden="true">→</span>
            </Link>
            <Link to="/resources" className="cidg-v641-secondary">
              Read Our Research
            </Link>
          </div>
        </div>

        <figure className="cidg-v641-architecture">
          <img
            src="/trust-infrastructure-architecture.png"
            alt="Layered Trust Infrastructure architecture"
            loading="eager"
            decoding="async"
          />
          <figcaption>
            <div>
              <span>01</span>
              <strong>Intelligence</strong>
              <small>Context and understanding</small>
            </div>
            <div>
              <span>02</span>
              <strong>Assurance</strong>
              <small>Verification and control</small>
            </div>
            <div>
              <span>03</span>
              <strong>Trust</strong>
              <small>Identity, authority, and institutional integrity</small>
            </div>
            <div className="cidg-v641-outcome">
              <span>Result</span>
              <strong>Autonomous Governed Execution</strong>
              <small>Execution within institutional guardrails</small>
            </div>
          </figcaption>
        </figure>
      </section>

      <section className="cidg-v641-shift">
        <p className="cidg-v641-kicker">The Institutional Shift</p>
        <h2>Execution is becoming autonomous. Governance must become infrastructure.</h2>
        <p>
          Policies designed for human-speed oversight cannot govern machine-speed execution.
          Authority, identity, accountability, and evidence must remain enforceable while execution occurs.
        </p>
      </section>

      <section className="cidg-v641-ecosystem" aria-labelledby="cidg-v641-ecosystem-title">
        <div className="cidg-v641-ecosystem-copy">
          <p className="cidg-v641-kicker">The Governance Ecosystem</p>
          <h2 id="cidg-v641-ecosystem-title">One architecture. One doctrine. Continuous institutional control.</h2>
          <p>
            Trust Infrastructure establishes the architectural discipline.
            Autonomous Execution Governance defines the operational doctrine.
            The Institutional Chain of Legitimacy preserves authority, accountability,
            and evidence throughout autonomous execution.
          </p>
          <Link to="/about">Understand CoreIdentity →</Link>
        </div>

        <div className="cidg-v641-sequence" aria-label="Governance Ecosystem sequence">
          <div>Trust Infrastructure</div>
          <span>↓</span>
          <div>Autonomous Execution Governance</div>
          <span>↓</span>
          <div>Institutional Chain of Legitimacy</div>
          <span>↓</span>
          <div className="cidg-v641-sequence-result">Autonomous Governed Execution</div>
        </div>
      </section>

      <section className="cidg-v641-closing">
        <p className="cidg-v641-kicker">Our Operating Principle</p>
        <h2>Humans lead. Machines execute. Governance protects both.</h2>
        <p>Delegate Execution. Never Surrender Control.</p>
        <Link to="/contact" className="cidg-v641-primary">
          Begin an Institutional Conversation
        </Link>
      </section>
    </main>
  );
}

