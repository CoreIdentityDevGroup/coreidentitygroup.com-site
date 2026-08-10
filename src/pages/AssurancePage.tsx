import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function AssurancePage() {
  return (
    <div className="cidg-framework-page cidg-framework-expanded">
      <Helmet>
        <title>Institutional Assurance | CoreIdentity Development Group</title>
        <meta name="description" content="Institutional Assurance provides the evidentiary foundation through which organizations can verify whether autonomous execution remained within established authority, governance requirements, institutional obligations, and operational controls." />
      </Helmet>

      <section className="cidg-framework-hero">
        <p className="cidg-framework-kicker">Demonstrable governance</p>
        <h1>Institutional Assurance</h1>
        <p className="cidg-framework-lead">Governance must be demonstrable, not assumed.</p>
        <p className="cidg-framework-support">Institutional Assurance provides the evidentiary foundation through which organizations can verify whether autonomous execution remained within established authority, governance requirements, institutional obligations, and operational controls.</p>
      </section>

      <section className="cidg-framework-architecture cidg-framework-architecture--assurance">
        <p className="cidg-framework-kicker">From governance requirements to evidence</p>
        <div className="cidg-framework-vertical-flow" aria-label="Institutional obligations to Institutional Assurance">
          {["Institutional Obligations", "Regulatory & Standards Mapping", "Governance Requirements", "Operational Enforcement", "Continuous Evidence", "Institutional Assurance"].map((item, index) => (
            <div key={item}><strong>{item}</strong>{index < 5 ? <span aria-hidden="true">↓</span> : null}</div>
          ))}
        </div>
      </section>

      <section className="cidg-framework-statement">
        <p className="cidg-framework-kicker">Regulatory & Standards Mapping</p>
        <h2>Applicable obligations must remain connected to operational governance.</h2>
        <p>CoreIdentity&apos;s Governance Ecosystem is designed to support operation within regulated and mission-critical environments. Governance controls can be mapped to applicable regulatory, risk, security, privacy, and AI governance frameworks, with those mappings maintained as requirements evolve.</p>
        <p>CoreIdentity applies the standards and regulatory requirements relevant to each institutional environment so that autonomous execution can be governed, verified, evidenced, and controlled in accordance with the organization&apos;s applicable obligations.</p>
        <p className="cidg-framework-qualification">Where formal certification, independent assessment, or jurisdiction-specific conformity is required, those requirements are addressed through the applicable assurance and deployment model. Architectural support or framework mapping is not represented as independent certification.</p>
      </section>

      <section className="cidg-framework-adaptability">
        <p className="cidg-framework-kicker">Regulation evolves. Assurance must adapt.</p>
        <div className="cidg-framework-adaptability-grid">
          <div><strong>Stable</strong><span>Trust Infrastructure principles and institutional controls.</span></div>
          <div><strong>Adaptable</strong><span>Regulatory and standards mappings.</span></div>
          <div><strong>Institution-specific</strong><span>Applicable obligations determined by jurisdiction, sector, use case, risk, and mandate.</span></div>
        </div>
      </section>

      <section className="cidg-framework-evidence-standard">
        <p className="cidg-framework-kicker">Evidence before claims</p>
        <h2>CoreIdentity distinguishes architectural support from independent assurance.</h2>
        <div className="cidg-framework-flow cidg-framework-flow--five cidg-framework-flow--evidence" aria-label="Evidence maturity states">
          {["Supported", "Mapped", "Validated", "Independently Assessed", "Certified"].map((item, index) => (
            <div className="cidg-framework-flow-step" key={item}><strong>{item}</strong>{index < 4 ? <span aria-hidden="true">→</span> : null}</div>
          ))}
        </div>
        <p>These states are deliberately distinct. CoreIdentity does not represent architectural support, framework mapping, or internal validation as independent assessment or certification.</p>
      </section>

      <section className="cidg-framework-behaviors">
        <p className="cidg-framework-kicker">What Institutional Assurance establishes</p>
        <dl className="cidg-framework-definition-list">
          <div><dt>Verification</dt><dd>Determine whether execution conformed to established governance requirements.</dd></div>
          <div><dt>Attribution</dt><dd>Connect material actions to their originating identity and delegated authority.</dd></div>
          <div><dt>Traceability</dt><dd>Support reconstruction of relevant execution and governance decisions.</dd></div>
          <div><dt>Evidence</dt><dd>Support governance assertions with demonstrable records.</dd></div>
          <div><dt>Control effectiveness</dt><dd>Evaluate whether required governance mechanisms operated as intended.</dd></div>
          <div><dt>Assurance readiness</dt><dd>Organize relevant evidence for internal review, audit, regulatory examination, or independent assessment where applicable.</dd></div>
        </dl>
        <p className="cidg-framework-evidence-note">Final declarative capability claims remain subject to technical evidence validation before publication as independently demonstrated capabilities.</p>
      </section>

      <section className="cidg-framework-callout">
        <strong>Compliance establishes requirements.</strong>
        <strong>Trust Infrastructure operationalizes governance.</strong>
        <strong>Institutional Assurance demonstrates what can be evidenced about whether governance held.</strong>
      </section>

      <section className="cidg-framework-next">
        <p>Assurance establishes what can be demonstrated. Institutional Trust establishes what the institution can justifiably rely upon.</p>
        <Link to="/trust">Explore Institutional Trust →</Link>
      </section>
    </div>
  );
}
