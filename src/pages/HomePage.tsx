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

      
      
      <section className="cidg-v639-hero" aria-labelledby="cidg-v639-title">
        <div className="cidg-v639-copy">
          <div className="cidg-v639-brandline">
            <strong>Trust Infrastructure</strong>
            <span>Intelligence · Assurance · Trust</span>
          </div>
          <h1 id="cidg-v639-title">The Trust Infrastructure<span>the Autonomous Era Demands</span></h1>
          <p>The institutional foundation that enables organizations to safely delegate autonomous execution while ensuring they remain in control.</p>
          <div className="cidg-v639-actions">
            <Link to="/trust-infrastructure" className="cidg-v639-primary">Explore the Ecosystem <span aria-hidden="true">→</span></Link>
            <Link to="/resources" className="cidg-v639-secondary">Read Our Research</Link>
          </div>
        </div>

        <div className="cidg-v639-visual" aria-label="Trust Infrastructure architecture">
          <div className="cidg-v639-axis" aria-hidden="true" />
          {[
            ["Intelligence", "Context and Understanding"],
            ["Assurance", "Verification and Control"],
            ["Trust", "Identity, Authority and Institutional Integrity"],
            ["Autonomous Governed Execution", "Autonomous Operations Within Guardrails"],
          ].map(([title, description], index) => (
            <div key={title} className={`cidg-v639-layer cidg-v639-layer-${index + 1}`}>
              <div className="cidg-v639-grid" />
              <div className="cidg-v639-core" />
              <div className="cidg-v639-label"><strong>{title}</strong><span>{description}</span></div>
            </div>
          ))}
        </div>
      </section>



      
      <section className="cidg-v639-foundation" aria-labelledby="cidg-v639-foundation-title">
        <div className="cidg-v639-foundation-intro">
          <span>Built for institutions. Engineered for control.</span>
          <h2 id="cidg-v639-foundation-title">CoreIdentity delivers the Governance Ecosystem that establishes trust, enforces accountability, and protects what matters most.</h2>
        </div>

        <div className="cidg-v639-card-grid">
          <article><span className="cidg-v639-card-icon">◇</span><h3>Institutional Grade</h3><p>Engineered to meet the highest standards of security, compliance, and operational integrity.</p></article>
          <article><span className="cidg-v639-card-icon">◎</span><h3>Intelligent by Design</h3><p>Context-aware intelligence that understands, adapts, and supports decisions with precision.</p></article>
          <article><span className="cidg-v639-card-icon">⬡</span><h3>Assurance by Default</h3><p>Continuous verification, real-time monitoring, and immutable evidence at every layer.</p></article>
          <article><span className="cidg-v639-card-icon">⌂</span><h3>Trust by Foundation</h3><p>Identity, authority, and institutional integrity establish the foundation for legitimate action.</p></article>
        </div>

        <div className="cidg-v639-result">
          <span>The Result</span>
          <h2>Autonomous Execution Governance (AEG)</h2>
          <p>The continuous governance doctrine that ensures autonomous execution remains aligned with institutional intent, policy, and accountability.</p>
          <strong>Intelligence · Assurance · Trust → Autonomous Governed Execution</strong>
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
