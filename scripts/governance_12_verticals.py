#!/usr/bin/env python3
"""
feat: 12 vertical governance pages + hub.

Generates a consistent Institutional-Carbon page for all 12 governance
verticals (regulator-first framing, SoftwareApplication JSON-LD, CTAs to
/ciag + /platform, no "SaaS/product/tool"), plus the Regulated Industries hub
listing all 11 non-sovereign verticals. Then wires router.tsx, public/sitemap.xml,
and functions/_middleware.js, and retires the two superseded prior-session
pages (Critical Infrastructure -> folded into Logistics; Defense -> folded
into Sovereign).

Deterministic generation (idempotent: re-running rewrites identical page bytes);
router/sitemap/middleware edits are guarded on a post-change marker.
"""
import os
import sys

ROOT = os.getcwd()

PQC = ("CoreIdentity is hardened against both current and future threats — implementing all three "
       "NIST FIPS post-quantum standards in production: ML-DSA-65 (FIPS 204), ML-KEM-768 (FIPS 203), "
       "and SLH-DSA-128s (FIPS 205). Long-lived regulated records stay defensible against tomorrow's "
       "cryptographic threats, not just today's.")

# ── 12 verticals (11 regulated + sovereign) ─────────────────────────────────
VERTICALS = [
    {
        "slug": "bfsi", "comp": "BFSIGovernancePage", "file": "BFSIGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_BFSI_v2", "hub_name": "BFSI",
        "title": "BFSI AI Governance | CoreIdentity",
        "desc": "CoreIdentity enforces authorization, attribution, and audit on every autonomous action across banking, trading, credit, and payments — to SEC, FINRA, OCC, Basel III, and PCI-DSS standards.",
        "eyebrow": "Banking & Financial Services · SEC · FINRA · OCC · Basel III · PCI-DSS",
        "headline": "When an Agent Moves Money, You Must Prove It Was Authorized.",
        "lead": "Autonomous agents are already executing trades, adjudicating credit, screening transactions, and moving capital. When the SEC, FINRA, or the OCC asks who authorized an action — and on what basis — a reconstructed guess is not an answer. An unprovable automated decision is an enforcement action waiting to happen. CoreIdentity makes every agent action authorized before it executes, attributed to a verified identity, and recorded in evidence a supervisor can defend.",
        "reality": [
            ("SEC & FINRA Supervision", "Supervisory rules require firms to control and document who is authorized to act and why. An autonomous agent with no authorization chain is an unsupervised actor — a finding on its face, regardless of outcome."),
            ("OCC & Basel III Risk", "Model risk, operational risk, and accountability frameworks demand demonstrable control over automated decisioning. Examiners expect evidence, not assurances, that agents stayed within risk limits."),
            ("PCI-DSS & Data Handling", "Cardholder and account data carry strict access mandates. An agent that touches protected financial data outside an authorized scope is a breach event with immediate regulatory and contractual exposure."),
        ],
        "addresses": [
            ("Authorization Before Execution", "Sentinel evaluates every agent action against codified policy before it runs. No trade, transfer, or data access proceeds outside an active, scoped authorization — the model cannot be prompted past the limit."),
            ("Cryptographic Audit Trails", "Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident, attributable evidence ready for an examiner or internal audit."),
            ("Fail-Closed on Ambiguity", "When an action falls outside authorized policy, Sentinel halts and escalates to a human supervisor. The agent does not improvise against a control limit. It stops."),
            ("Examiner-Ready Evidence", "CIAG Phase 0 maps your agent fleet to SEC, FINRA, OCC, and PCI-DSS obligations and delivers a prioritized enforcement roadmap your risk and compliance functions can defend."),
        ],
        "hub_blurb": "Authorize, attribute, and prove every autonomous action across trading, credit, and payments — to SEC, FINRA, OCC, Basel III, and PCI-DSS standards.",
    },
    {
        "slug": "education", "comp": "EducationGovernancePage", "file": "EducationGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_EDUCATION_v1", "hub_name": "EducationOps",
        "title": "Education AI Governance | CoreIdentity",
        "desc": "CoreIdentity governs every agent that touches student records, federal aid, or research data — enforcing FERPA, Title IV, and federal research compliance with cryptographic audit trails.",
        "eyebrow": "Education · FERPA · Title IV · Federal Research Compliance",
        "headline": "Student Records Are Federally Protected. So Must Be the Agents That Touch Them.",
        "lead": "Universities and education providers are deploying agents across admissions, financial aid, advising, and research. FERPA governs every student record, Title IV governs every aid dollar, and federal research terms govern controlled data. An agent that discloses a protected record or mishandles aid is not a glitch — it is a federal compliance failure with funding consequences. CoreIdentity makes every agent action on protected data authorized, attributed, and auditable.",
        "reality": [
            ("FERPA", "Education records may only be accessed and disclosed under defined authority. An autonomous agent that exposes a student record outside permitted scope creates a direct FERPA violation and institutional liability."),
            ("Title IV Aid Integrity", "Federal student aid carries strict eligibility, disbursement, and documentation rules. An agent acting on aid decisions without an authorization chain puts Title IV participation itself at risk."),
            ("Federal Research Compliance", "Sponsored research and controlled data carry access, export, and integrity obligations. Ungoverned agent access to research data threatens awards, accreditation, and federal standing."),
        ],
        "addresses": [
            ("Record-Aware Access Boundaries", "Sentinel enforces FERPA-scoped classification at the agent layer. No agent reads or discloses a protected education record outside an active, authorized purpose."),
            ("Cryptographic Audit Trails", "Every action on protected data produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident for an auditor or the Department of Education."),
            ("Fail-Closed on Ambiguity", "When access falls outside authorized scope, Sentinel stops and escalates to a human. The agent does not guess with a student's protected record. It stops."),
            ("Compliance-Ready Evidence", "CIAG Phase 0 maps your agents to FERPA, Title IV, and research obligations with a prioritized remediation roadmap your compliance team and general counsel can act on."),
        ],
        "hub_blurb": "Govern every agent that touches student records, federal aid, or research data — to FERPA, Title IV, and federal research standards.",
    },
    {
        "slug": "finance", "comp": "FinanceGovernancePage", "file": "FinanceGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_FINANCE_v1", "hub_name": "FinanceOps",
        "title": "Corporate Finance AI Governance | CoreIdentity",
        "desc": "CoreIdentity keeps autonomous agents inside SOX controls across the financial close, treasury, and reporting — authorized, segregated, and audit-ready for the SEC and external auditors.",
        "eyebrow": "Corporate Finance · SOX · SEC Algorithmic Guidance · Fiduciary Duty",
        "headline": "An Agent in Your Financial Close Is an Agent in Your Controls.",
        "lead": "Autonomous agents are entering the financial close, reconciliation, treasury, and reporting. Under SOX, every control must be documented, tested, and attributable to an accountable actor. An agent that touches the numbers without a governed authorization chain breaks internal control over financial reporting — and a CFO cannot certify what cannot be proven. CoreIdentity makes every agent action in the financial process authorized, attributed, and permanently recorded.",
        "reality": [
            ("Sarbanes-Oxley (SOX)", "Internal control over financial reporting requires documented authorization and segregation of duties. An ungoverned agent in the close is a material control deficiency waiting to be found by an auditor."),
            ("SEC Algorithmic Guidance", "Automated decisioning that affects disclosures or markets must be controllable and explainable. Regulators expect evidence that algorithms acted within defined authority."),
            ("Fiduciary Duty", "Officers and directors owe a duty of care over financial systems. Delegating consequential financial actions to agents without provable governance is a breach exposure, not an efficiency."),
        ],
        "addresses": [
            ("Segregation Enforced in Software", "Sentinel enforces authorization and segregation-of-duties at the agent layer. No agent posts, approves, or alters financial records outside its scoped authority."),
            ("Cryptographic Audit Trails", "Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident evidence for external auditors and the audit committee."),
            ("Fail-Closed on Ambiguity", "When an action exceeds authorized policy, Sentinel halts and escalates. The agent does not self-approve. It stops."),
            ("Audit-Ready Evidence", "CIAG Phase 0 maps your agents to SOX control families and SEC expectations with a prioritized roadmap your controller and external auditor can rely on."),
        ],
        "hub_blurb": "Keep autonomous agents inside SOX controls across the close, treasury, and reporting — authorized, segregated, and audit-ready.",
    },
    {
        "slug": "healthcare", "comp": "HealthcareGovernancePage", "file": "HealthcareGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_HEALTHCARE_v2", "hub_name": "HealthcareOps",
        "title": "Healthcare AI Governance | CoreIdentity",
        "desc": "CoreIdentity enforces HIPAA-grade access, attribution, and audit across every clinical and administrative AI agent — aligned to HIPAA, FDA, CMS, and the 21st Century Cures Act.",
        "eyebrow": "Healthcare · HIPAA · FDA · CMS · 21st Century Cures Act",
        "headline": "PHI Never Touches an Unauthorized Agent.",
        "lead": "When OCR investigates, the first question is not which system failed — it is what the AI agent was authorized to access, why it accessed it, and whether a cryptographic record proves it stayed within bounds. Across clinical operations, claims, and care coordination, an ungoverned agent that touches protected health information is a reportable breach. CoreIdentity answers authorization, attribution, and audit before the investigation begins.",
        "reality": [
            ("HIPAA & HITECH", "Every agent that touches PHI must operate under a documented authorization chain. A missing audit trail is not a gap — it is prima facie evidence of a violation, and OCR penalties run into the hundreds of millions."),
            ("FDA AI/ML Guidance", "Autonomous clinical AI must demonstrate bounded behavior, traceable decisions, and human oversight at defined escalation thresholds under the FDA's change-control framework."),
            ("CMS & 21st Century Cures", "Interoperability and information-blocking rules expand data flow — and the surface for unauthorized agent access. Governed access is the precondition for compliant data exchange."),
        ],
        "addresses": [
            ("PHI Access Boundaries", "Sentinel enforces data classification at the agent level. No agent accesses PHI without an active, scoped authorization — regardless of what the model was prompted to do."),
            ("Cryptographic Audit Trails", "Every action on protected data produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident and regulator-ready."),
            ("Fail-Closed on Ambiguity", "When an agent meets a scenario outside its authorized scope, Sentinel stops and escalates to a clinician or operator. It does not guess. It stops."),
            ("HIPAA-Ready Evidence", "CIAG Phase 0 produces a governance gap analysis mapped to HIPAA administrative, physical, and technical safeguards with a prioritized remediation roadmap for compliance and legal."),
        ],
        "hub_blurb": "Enforce HIPAA-grade access, attribution, and audit across every clinical and administrative agent — to HIPAA, FDA, CMS, and Cures Act standards.",
    },
    {
        "slug": "hospitality", "comp": "HospitalityGovernancePage", "file": "HospitalityGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_HOSPITALITY_v1", "hub_name": "HospitalityOps",
        "title": "Hospitality AI Governance | CoreIdentity",
        "desc": "CoreIdentity governs guest payment and personal data across brands and borders — enforcing PCI-DSS, GDPR, and data-sovereignty requirements on every autonomous agent.",
        "eyebrow": "Hospitality · PCI-DSS · GDPR · Data Sovereignty",
        "headline": "Guest Data Crosses Borders. Your Governance Cannot Lapse at One.",
        "lead": "Hospitality runs on guest data — payment cards, identities, preferences, and movement — across properties, brands, and jurisdictions. Agents handling bookings, payments, and service decisions touch regulated data under PCI-DSS, GDPR, and a patchwork of data-sovereignty laws. An agent that mishandles a card or moves personal data across a forbidden border is a breach and a fine. CoreIdentity makes every agent action on guest data authorized, attributed, and auditable per jurisdiction.",
        "reality": [
            ("PCI-DSS", "Cardholder data carries strict storage, access, and transmission controls. An agent that touches payment data outside an authorized scope is an immediate compliance and contractual liability."),
            ("GDPR", "Personal data demands lawful basis, purpose limitation, and accountability. An autonomous agent processing guest data without a governed authorization chain is an Article 5 and 32 exposure."),
            ("Data Sovereignty", "Jurisdictions increasingly require that personal data stay within borders. An agent that moves guest data across a prohibited boundary creates direct regulatory risk."),
        ],
        "addresses": [
            ("Jurisdiction-Aware Boundaries", "Sentinel enforces data classification and residency at the agent layer. No agent processes or transfers guest data outside its authorized scope and region."),
            ("Cryptographic Audit Trails", "Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident evidence for a data-protection authority or card brand."),
            ("Fail-Closed on Ambiguity", "When an action falls outside authorized policy, Sentinel halts and escalates. The agent does not move data it was not cleared to move. It stops."),
            ("Compliance-Ready Evidence", "CIAG Phase 0 maps your agents to PCI-DSS, GDPR, and residency obligations with a prioritized enforcement roadmap across your properties."),
        ],
        "hub_blurb": "Govern guest payment and personal data across brands and borders — to PCI-DSS, GDPR, and data-sovereignty requirements.",
    },
    {
        "slug": "legal", "comp": "LegalGovernancePage", "file": "LegalGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_LEGAL_v2", "hub_name": "LegalOps",
        "title": "Legal & Professional Services AI Governance | CoreIdentity",
        "desc": "CoreIdentity enforces privilege-aware agent governance across legal and professional services — so an autonomous agent never waives privilege, breaches an ethical wall, or leaves a matter without a defensible record.",
        "eyebrow": "Legal & Professional Services · ABA Model Rules · Attorney-Client Privilege · Work Product",
        "headline": "Privileged Information Stays Privileged.",
        "lead": "When an AI agent drafts, reviews, or routes a matter, the first question a court, a bar regulator, or opposing counsel will ask is whether privilege was preserved — and whether anyone can prove it. A single inadvertent disclosure can waive privilege irreversibly. CoreIdentity makes every agent action on privileged material authorized, attributable, and auditable before that question is ever asked.",
        "reality": [
            ("ABA Model Rules 1.1 & 1.6", "The duties of competence and confidentiality make the firm responsible for what its AI does. An agent that exposes client confidences — even inadvertently — is an ethics violation, not a technical glitch."),
            ("Attorney-Client Privilege", "Privilege is waived the moment protected material reaches an unauthorized recipient. An autonomous agent routing a document outside the privilege boundary can forfeit protection that cannot be recovered."),
            ("Work Product Doctrine", "Litigation work product carries heightened protection. Ungoverned agent handling of work product risks disclosure that undermines the matter and the engagement."),
        ],
        "addresses": [
            ("Privilege-Aware Boundaries", "Sentinel enforces matter-level classification at the agent layer. No agent reads or moves privileged material outside an active, scoped authorization."),
            ("Cryptographic Audit Trails", "Every action on a matter produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident and ready for a court or bar inquiry."),
            ("Fail-Closed on Ambiguity", "When access falls outside authorized scope, Sentinel stops and escalates to a supervising attorney. The agent does not guess across an ethical wall. It stops."),
            ("Matter-Scoped Evidence", "CIAG Phase 0 maps your agents to conflicts, retention, and confidentiality obligations with a remediation roadmap your general counsel can take to the partnership."),
        ],
        "hub_blurb": "Preserve privilege and work product across every agent that touches a matter — to ABA Model Rules and privilege doctrine.",
    },
    {
        "slug": "logistics", "comp": "LogisticsGovernancePage", "file": "LogisticsGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_LOGISTICS_v1", "hub_name": "LogisticsOps",
        "title": "Logistics & Supply Chain AI Governance | CoreIdentity",
        "desc": "CoreIdentity governs routing, customs clearance, and party screening across the supply chain — enforcing CISA, DHS, and export-control obligations on every autonomous action.",
        "eyebrow": "Logistics & Supply Chain · CISA · DHS · Export Controls",
        "headline": "An Agent Should Never Route Cargo Past a Control It Cannot See.",
        "lead": "Logistics agents now schedule freight, clear customs, screen parties, and orchestrate supply chains that cross every border and sanctions regime. An agent that ships to a denied party, mislabels a controlled item, or actuates a connected operational system without authority is not an error — it is an export violation, a security incident, or a physical-safety event. CoreIdentity makes every consequential agent action authorized, attributed, and auditable before cargo moves.",
        "reality": [
            ("CISA & DHS Guidance", "Supply-chain and operational-technology security guidance requires enforced access control, segmentation, and incident reporting. Ungoverned agent access to logistics systems is a reportable security gap."),
            ("Export Controls (EAR / OFAC)", "Shipping decisions implicate denied-party screening, license requirements, and sanctions. An agent that clears a shipment outside authorized policy creates direct export-control liability."),
            ("Supply-Chain Integrity", "Provenance, chain-of-custody, and tamper-evidence obligations are expanding. An action no one can attribute breaks the evidentiary chain regulators and partners now demand."),
        ],
        "addresses": [
            ("Action Boundaries at the Agent Layer", "Sentinel enforces authorization on every consequential action — routing, clearance, party screening, or system actuation — so no agent acts outside its scoped authority."),
            ("Cryptographic Audit Trails", "Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident chain-of-custody evidence for an auditor or investigator."),
            ("Fail-Closed on Ambiguity", "When an action falls outside authorized policy, Sentinel halts and escalates to a human. The agent does not ship against a control. It stops."),
            ("Operator-Ready Evidence", "CIAG Phase 0 maps your agents to CISA, DHS, and export-control obligations with a prioritized enforcement roadmap across your network."),
        ],
        "hub_blurb": "Govern routing, customs clearance, and party screening across the supply chain — to CISA, DHS, and export-control standards.",
    },
    {
        "slug": "manufacturing", "comp": "ManufacturingGovernancePage", "file": "ManufacturingGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_MANUFACTURING_v1", "hub_name": "ManufacturingOps",
        "title": "Manufacturing AI Governance | CoreIdentity",
        "desc": "CoreIdentity protects CUI and controlled technical data across design and production — enforcing CMMC, ITAR, and EAR requirements on every autonomous agent.",
        "eyebrow": "Manufacturing · CMMC · ITAR · EAR · Defense Industrial Base",
        "headline": "Controlled Technical Data Cannot Leak Through an Ungoverned Agent.",
        "lead": "Manufacturers in the defense industrial base hold controlled technical data, export-restricted designs, and CUI that agents now touch across design, procurement, and production. An agent that exposes ITAR or EAR controlled data, or accesses CUI outside authority, is not a process slip — it is an export violation and a CMMC failure that can end a contract. CoreIdentity makes every agent action on controlled data authorized, attributed, and auditable.",
        "reality": [
            ("CMMC 2.0", "Defense contracts require enforced access control, least privilege, and continuous audit over CUI. An autonomous agent without an authorization chain puts certification and the contract at risk."),
            ("ITAR & EAR", "Controlled technical data carries strict access and export restrictions. An agent that exposes a controlled design to an unauthorized person or destination creates immediate export-control liability."),
            ("Defense Industrial Base Security", "DIB security expectations demand attribution and evidence for every actor in the system. Agents are subjects that must be governed and recorded, not exceptions."),
        ],
        "addresses": [
            ("CUI-Aware Access Boundaries", "Sentinel enforces classification- and export-aware authorization at the agent layer. No agent accesses controlled technical data outside an active, scoped authorization."),
            ("Cryptographic Audit Trails", "Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident, attributable evidence for an assessor."),
            ("Fail-Closed on Ambiguity", "When access falls outside authorized scope, Sentinel stops and escalates to a cleared operator. The agent does not infer authority it was not granted. It stops."),
            ("Assessment-Ready Evidence", "CIAG Phase 0 maps your agents to CMMC, ITAR, and EAR obligations with a prioritized remediation roadmap your ISSM and program lead can act on."),
        ],
        "hub_blurb": "Protect CUI and controlled technical data across design and production — to CMMC, ITAR, and EAR requirements.",
    },
    {
        "slug": "private-capital", "comp": "PrivateCapitalGovernancePage", "file": "PrivateCapitalGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_PRIVATE_CAPITAL_v1", "hub_name": "PrivateCapitalOps",
        "title": "Private Capital AI Governance | CoreIdentity",
        "desc": "CoreIdentity governs diligence, valuation, and LP-reporting agents — enforcing SEC private-fund rules, FINRA information barriers, and fiduciary duty with cryptographic evidence.",
        "eyebrow": "Private Capital · SEC · FINRA · Fiduciary Duty · LP Obligations",
        "headline": "An Agent Acting for the Fund Is Acting on Your Fiduciary Duty.",
        "lead": "Private equity, venture, and credit managers are deploying agents across diligence, portfolio monitoring, valuation, and LP reporting. Under SEC private-fund rules and fiduciary duty, every consequential action must be controllable and defensible to LPs and examiners. An agent that mishandles material nonpublic information or misstates a valuation is a fiduciary breach, not a productivity gain. CoreIdentity makes every agent action authorized, attributed, and auditable.",
        "reality": [
            ("SEC Private Fund Rules", "Heightened disclosure, valuation, and conflict requirements demand demonstrable control over automated processes. Examiners expect evidence that agents acted within authorized policy."),
            ("FINRA & MNPI Controls", "Information barriers around material nonpublic information must hold at machine speed. An agent that crosses a wall creates immediate regulatory and reputational exposure."),
            ("Fiduciary & LP Obligations", "Managers owe LPs a duty of care and candor. Delegating consequential actions to agents without provable governance is a breach exposure that surfaces in the next audit or side letter."),
        ],
        "addresses": [
            ("Wall-Aware Access Boundaries", "Sentinel enforces information barriers and scoped authorization at the agent layer. No agent accesses MNPI or fund data outside its authorized purpose."),
            ("Cryptographic Audit Trails", "Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident evidence for LPs, auditors, and the SEC."),
            ("Fail-Closed on Ambiguity", "When an action exceeds authorized policy, Sentinel halts and escalates. The agent does not cross a wall or self-approve a valuation. It stops."),
            ("Examiner- and LP-Ready Evidence", "CIAG Phase 0 maps your agents to SEC, FINRA, and fiduciary obligations with a prioritized roadmap your CCO and operating partners can defend."),
        ],
        "hub_blurb": "Govern diligence, valuation, and LP-reporting agents — to SEC private-fund rules, FINRA, and fiduciary duty.",
    },
    {
        "slug": "real-estate", "comp": "RealEstateGovernancePage", "file": "RealEstateGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_REAL_ESTATE_v1", "hub_name": "RealEstateOps",
        "title": "Real Estate AI Governance | CoreIdentity",
        "desc": "CoreIdentity governs origination, title, and closing agents against money-laundering and consumer-protection risk — enforcing FinCEN, the Bank Secrecy Act, and CFPB rules.",
        "eyebrow": "Real Estate · FinCEN · AML · CFPB · Bank Secrecy Act",
        "headline": "Every Closing Is a Place Money Can Hide. Govern the Agents That Touch It.",
        "lead": "Real estate transactions are a focus of anti-money-laundering enforcement, and agents now handle origination, underwriting, title, and closing. Under FinCEN's expanding reporting rules, the Bank Secrecy Act, and CFPB consumer protections, an agent that clears a suspicious transaction or mishandles borrower data is an AML failure or a fair-lending violation. CoreIdentity makes every agent action authorized, attributed, and auditable.",
        "reality": [
            ("FinCEN & BSA", "Expanding residential real estate reporting and beneficial-ownership rules require documented diligence and attribution. An ungoverned agent clearing a transaction is an AML control gap."),
            ("Anti-Money-Laundering", "Suspicious-activity obligations demand defensible, attributable decisions. An action no one can trace to authorized policy undermines the entire AML program."),
            ("CFPB Consumer Protection", "Fair lending, UDAAP, and borrower-data rules govern automated decisions. An agent that acts on borrower data outside authority creates direct consumer-protection liability."),
        ],
        "addresses": [
            ("Transaction-Aware Boundaries", "Sentinel enforces scoped authorization over origination, underwriting, and closing actions so no agent clears or alters a transaction outside policy."),
            ("Cryptographic Audit Trails", "Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident evidence for FinCEN, examiners, and counsel."),
            ("Fail-Closed on Ambiguity", "When an action falls outside authorized policy, Sentinel halts and escalates to a human. The agent does not clear a transaction it cannot justify. It stops."),
            ("Audit-Ready Evidence", "CIAG Phase 0 maps your agents to FinCEN, BSA, and CFPB obligations with a prioritized enforcement roadmap your compliance team can act on."),
        ],
        "hub_blurb": "Govern origination, title, and closing agents against money-laundering and consumer-protection risk — to FinCEN, BSA, and CFPB standards.",
    },
    {
        "slug": "retail", "comp": "RetailGovernancePage", "file": "RetailGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_RETAIL_v1", "hub_name": "RetailOps",
        "title": "Retail AI Governance | CoreIdentity",
        "desc": "CoreIdentity governs pricing, payments, and personalization agents across millions of consumers — enforcing PCI-DSS, CCPA/CPRA, and consumer-protection law.",
        "eyebrow": "Retail & Consumer · PCI-DSS · CCPA · CPRA · Consumer Protection",
        "headline": "Personalization at Scale Is Regulated Data at Scale.",
        "lead": "Retail agents now drive pricing, recommendations, payments, and service across millions of consumers. Every interaction touches payment data under PCI-DSS and personal data under CCPA and CPRA, and every automated decision is subject to consumer-protection scrutiny. An agent that mishandles a card, ignores an opt-out, or makes a deceptive automated decision is a breach or an enforcement action. CoreIdentity makes every agent action on consumer data authorized, attributed, and auditable.",
        "reality": [
            ("PCI-DSS", "Payment data carries strict access and transmission controls. An agent that touches cardholder data outside an authorized scope is an immediate compliance and contractual liability."),
            ("CCPA & CPRA", "Consumers hold rights to know, delete, and opt out. An autonomous agent that processes personal data against a consumer's election is a direct privacy violation."),
            ("Consumer Protection", "Automated pricing and decisions are subject to unfair-and-deceptive-practices and fairness scrutiny. An action no one can attribute to authorized policy is indefensible before a regulator."),
        ],
        "addresses": [
            ("Consent-Aware Boundaries", "Sentinel enforces data classification and consumer elections at the agent layer. No agent processes consumer data outside its authorized purpose and the consumer's choices."),
            ("Cryptographic Audit Trails", "Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident evidence for a regulator or card brand."),
            ("Fail-Closed on Ambiguity", "When an action falls outside authorized policy, Sentinel halts and escalates. The agent does not act against an opt-out. It stops."),
            ("Compliance-Ready Evidence", "CIAG Phase 0 maps your agents to PCI-DSS, CCPA/CPRA, and consumer-protection obligations with a prioritized enforcement roadmap."),
        ],
        "hub_blurb": "Govern pricing, payments, and personalization agents across millions of consumers — to PCI-DSS, CCPA/CPRA, and consumer-protection law.",
    },
    {
        "slug": "sovereign", "comp": "SovereignGovernancePage", "file": "SovereignGovernancePage.tsx",
        "marker": "CIDG_VERTICAL_SOVEREIGN_v2", "hub_name": "SovereignOps",
        "title": "Sovereign & Government AI Governance | CoreIdentity",
        "desc": "CoreIdentity enforces accreditation-grade agent governance for government and sovereign missions — authorization, attribution, and audit aligned to FedRAMP, FISMA, IL4/IL5, the UAE AI Act, and Singapore IMDA.",
        "eyebrow": "Sovereign & Government · FedRAMP · FISMA · IL4 / IL5 · UAE AI Act · Singapore IMDA",
        "headline": "Autonomy With Public Authority Demands Public-Grade Accountability.",
        "lead": "When government delegates consequential authority to autonomous agents — in benefits, security, services, or classified missions — the standard is not commercial. It is accreditation. An agent acting with public authority must be attributable to a verified identity, operating inside its authorized scope, with an audit trail an authorizing official will accept. CoreIdentity is built to that standard, by operators who have worked inside these institutions.",
        "reality": [
            ("FedRAMP & FISMA", "Federal systems require continuous, demonstrable control over who and what accesses them. An autonomous agent without an authorization chain blocks an Authorization to Operate."),
            ("Impact Levels IL4 / IL5", "Controlled and mission data carry impact-level controls. An agent accessing IL4/IL5 data outside authority is an accreditation and security failure, not a convenience."),
            ("UAE AI Act & Singapore IMDA", "The first binding national and agentic-AI governance regimes require provable governance of autonomous systems. Sovereign deployments must demonstrate it, not assert it."),
        ],
        "addresses": [
            ("Authority-Aware Access Boundaries", "Sentinel enforces classification- and clearance-aware authorization at the agent layer. No agent accesses controlled data or acts outside an active, scoped authorization."),
            ("Post-Quantum Audit Trails", "Every governed action produces a proof artifact signed by the Semantic Authorization Layer with ML-DSA-65 (FIPS 204) — tamper-evident, attributable, and hardened against future cryptographic threats."),
            ("Fail-Closed on Ambiguity", "When an agent meets a scenario outside its authorized scope, Sentinel stops and escalates to a cleared official. It does not infer authority it was not granted. It stops."),
            ("ATO-Ready Evidence", "CIAG Phase 0 maps your agents to FedRAMP, FISMA, and impact-level control families with a prioritized roadmap your ISSM and authorizing official can act on."),
        ],
        "hub_blurb": "",  # sovereign is its own group; not listed on the regulated hub
    },
]

REGULATED_ORDER = ["bfsi", "education", "finance", "healthcare", "hospitality", "legal",
                   "logistics", "manufacturing", "private-capital", "real-estate", "retail"]

BY_SLUG = {v["slug"]: v for v in VERTICALS}

# ── Page template (placeholder substitution; avoids brace escaping) ─────────
PAGE_TEMPLATE = '''// @@MARKER@@
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function @@COMP@@() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>@@TITLE@@</title>
        <meta name="description" content="@@DESC@@" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"@@JSONLD_NAME@@","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","description":"@@DESC@@","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          @@EYEBROW@@
        </p>
        <h1 className="font-serif text-display-xl md:text-display-2xl tracking-tight leading-tight text-ink">
          @@HEADLINE@@
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-secondary">
          @@LEAD@@
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
          >
            Request Governance Architecture Review
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-xl border border-line px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/40"
          >
            Explore Platform Architecture
          </Link>
        </div>
      </div>

      {/* ── The Regulatory Reality ──────────────────────────────────────── */}
      <section>
        <h2 className="mb-6 font-serif text-display-md md:text-display-lg tracking-tight text-ink">
          The Regulatory Reality
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
@@REALITY@@
        </div>
      </section>

      {/* ── How CoreIdentity Governs It ─────────────────────────────────── */}
      <section>
        <h2 className="mb-6 font-serif text-display-md md:text-display-lg tracking-tight text-ink">
          How CoreIdentity Governs It
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
@@ADDRESSES@@
        </div>
      </section>

      {/* ── Post-Quantum Posture ────────────────────────────────────────── */}
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
        <div className="mb-3 flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent" aria-hidden="true">
            <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">Post-Quantum Cryptographic Infrastructure</span>
        </div>
        <p className="text-sm leading-relaxed text-ink-secondary">
          @@PQC@@
        </p>
        <Link to="/layer-d" className="mt-3 inline-flex items-center gap-1 text-sm text-accent/80 transition hover:text-accent">
          View full quantum hardening posture →
        </Link>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center md:p-10">
        <h2 className="font-serif text-display-md text-ink">Bring This in Front of Your Evaluators</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink-secondary">
          CoreIdentity is institutional trust infrastructure for autonomous systems — governance proven at the execution layer, not asserted in a policy document. Bring your security, legal, and compliance reviewers; we will walk the full enforcement architecture.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
          >
            Request Governance Architecture Review
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/40"
          >
            Explore Platform Architecture
          </Link>
        </div>
      </section>
    </div>
  );
}

export default @@COMP@@;
'''


def reality_cards(items):
    out = []
    for label, body in items:
        out.append(
            '          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">\n'
            f'            <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">{label}</div>\n'
            '            <p className="text-sm leading-relaxed text-ink-secondary">\n'
            f'              {body}\n'
            '            </p>\n'
            '          </div>'
        )
    return "\n".join(out)


def address_cards(items):
    out = []
    for label, body in items:
        out.append(
            '          <div className="cidg-card rounded-2xl border border-line bg-carbon-panel p-6">\n'
            f'            <div className="mb-2 text-lg font-semibold text-ink">{label}</div>\n'
            '            <p className="text-sm leading-relaxed text-ink-secondary">\n'
            f'              {body}\n'
            '            </p>\n'
            '          </div>'
        )
    return "\n".join(out)


def render_page(v):
    out = PAGE_TEMPLATE
    repl = {
        "@@MARKER@@": v["marker"],
        "@@COMP@@": v["comp"],
        "@@TITLE@@": v["title"],
        "@@DESC@@": v["desc"],
        "@@JSONLD_NAME@@": "CoreIdentity " + v["hub_name"] + " AI Governance",
        "@@EYEBROW@@": v["eyebrow"],
        "@@HEADLINE@@": v["headline"],
        "@@LEAD@@": v["lead"],
        "@@REALITY@@": reality_cards(v["reality"]),
        "@@ADDRESSES@@": address_cards(v["addresses"]),
        "@@PQC@@": PQC,
    }
    for k, val in repl.items():
        out = out.replace(k, val)
    return out


# ── Hub page ────────────────────────────────────────────────────────────────
HUB_DESC = ("CoreIdentity enforces autonomous-agent governance across eleven regulated industries — "
            "authorization, attribution, and audit mapped to the obligations each regulator enforces, "
            "from SEC and HIPAA to CMMC and FinCEN.")


def render_hub():
    cards = []
    for slug in REGULATED_ORDER:
        v = BY_SLUG[slug]
        cards.append(
            '          <Link\n'
            f'            key="/governance/{slug}"\n'
            f'            to="/governance/{slug}"\n'
            '            className="cidg-card flex h-full flex-col rounded-2xl border border-line bg-carbon-panel p-6 transition hover:border-accent/40"\n'
            '          >\n'
            f'            <h2 className="font-serif text-xl text-ink">{v["hub_name"]}</h2>\n'
            f'            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">{v["hub_blurb"]}</p>\n'
            '            <span className="mt-4 text-sm font-medium text-accent">Explore →</span>\n'
            '          </Link>'
        )
    cards_str = "\n".join(cards)
    tmpl = '''// CIDG_HUB_REGULATED_v1
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function RegulatedIndustriesPage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Regulated Industries AI Governance | CoreIdentity</title>
        <meta name="description" content="@@HUB_DESC@@" />
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Governance · Regulated Industries
        </p>
        <h1 className="font-serif text-display-xl md:text-display-2xl tracking-tight leading-tight text-ink">
          Institutional governance, mapped to your regulator.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-secondary">
          Every regulated industry delegates consequential authority to autonomous agents under a
          different rulebook — but the requirement is the same: prove each agent acted within authority.
          CoreIdentity enforces authorization, attribution, and audit at the execution layer, mapped to
          the obligations your regulator actually enforces.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
          >
            Request Governance Architecture Review
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-xl border border-line px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/40"
          >
            Explore Platform Architecture
          </Link>
        </div>
      </div>

      {/* ── Verticals ───────────────────────────────────────────────────── */}
      <section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
@@CARDS@@
        </div>
      </section>

      {/* ── Sovereign pointer ───────────────────────────────────────────── */}
      <section className="rounded-2xl border border-line bg-carbon-panel p-6">
        <div className="text-xs font-medium uppercase tracking-widest text-accent">Sovereign & Government</div>
        <h2 className="mt-2 font-serif text-xl text-ink">Operating with public authority?</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-secondary">
          Government and sovereign missions are held to accreditation, not commercial, standards. See how
          CoreIdentity governs autonomous agents to FedRAMP, FISMA, IL4/IL5, the UAE AI Act, and Singapore IMDA.
        </p>
        <Link to="/governance/sovereign" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition hover:text-accent-strong">
          Sovereign & Government governance →
        </Link>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center md:p-10">
        <h2 className="font-serif text-display-md text-ink">Bring This in Front of Your Evaluators</h2>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink-secondary">
          CoreIdentity is institutional trust infrastructure for autonomous systems — governance proven at the execution layer, not asserted in a policy document. Bring your security, legal, and compliance reviewers; we will walk the full enforcement architecture.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-carbon transition hover:bg-accent-strong"
          >
            Request Governance Architecture Review
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/40"
          >
            Explore Platform Architecture
          </Link>
        </div>
      </section>
    </div>
  );
}

export default RegulatedIndustriesPage;
'''
    return tmpl.replace("@@HUB_DESC@@", HUB_DESC).replace("@@CARDS@@", cards_str)


# ── Guarded edit helper ─────────────────────────────────────────────────────
def edit_file(path, guard, find, replace, label):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    if guard in content:
        print(f"[SKIP] {path} — {label} already applied.")
        return True
    if find not in content:
        print(f"[ERROR] {path} — {label}: anchor not found and guard absent.")
        return False
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.replace(find, replace, 1))
    print(f"[OK] {path} — {label} applied.")
    return True


# ── Router wiring ───────────────────────────────────────────────────────────
ROUTER = "src/router.tsx"

ROUTER_IMPORT_FIND = '''import { HealthcareGovernancePage } from "./pages/HealthcareGovernancePage";
import { BFSIGovernancePage } from "./pages/BFSIGovernancePage";
import { SovereignGovernancePage } from "./pages/SovereignGovernancePage";
import { LegalGovernancePage } from "./pages/LegalGovernancePage";
import { CriticalInfrastructureGovernancePage } from "./pages/CriticalInfrastructureGovernancePage";
import { DefenseGovernancePage } from "./pages/DefenseGovernancePage";'''

ROUTER_IMPORT_REPLACE = '''import { RegulatedIndustriesPage } from "./pages/RegulatedIndustriesPage";
import { HealthcareGovernancePage } from "./pages/HealthcareGovernancePage";
import { BFSIGovernancePage } from "./pages/BFSIGovernancePage";
import { SovereignGovernancePage } from "./pages/SovereignGovernancePage";
import { LegalGovernancePage } from "./pages/LegalGovernancePage";
import { EducationGovernancePage } from "./pages/EducationGovernancePage";
import { FinanceGovernancePage } from "./pages/FinanceGovernancePage";
import { HospitalityGovernancePage } from "./pages/HospitalityGovernancePage";
import { LogisticsGovernancePage } from "./pages/LogisticsGovernancePage";
import { ManufacturingGovernancePage } from "./pages/ManufacturingGovernancePage";
import { PrivateCapitalGovernancePage } from "./pages/PrivateCapitalGovernancePage";
import { RealEstateGovernancePage } from "./pages/RealEstateGovernancePage";
import { RetailGovernancePage } from "./pages/RetailGovernancePage";'''

ROUTER_DEFS_FIND = '''// ── Governance verticals ────────────────────────────────────────────────
const healthcareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/healthcare",
  component: HealthcareGovernancePage,
});

const bfsiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/bfsi",
  component: BFSIGovernancePage,
});

const sovereignRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/sovereign",
  component: SovereignGovernancePage,
});

const legalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/legal",
  component: LegalGovernancePage,
});

const criticalInfrastructureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/critical-infrastructure",
  component: CriticalInfrastructureGovernancePage,
});

const defenseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/governance/defense",
  component: DefenseGovernancePage,
});'''


def route_def(const, path, comp):
    return (f"const {const} = createRoute({{\n"
            f"  getParentRoute: () => rootRoute,\n"
            f'  path: "{path}",\n'
            f"  component: {comp},\n"
            f"}});")


ROUTER_DEFS_REPLACE = "// ── Governance verticals ────────────────────────────────────────────────\n" + "\n\n".join([
    route_def("regulatedRoute", "/governance/regulated", "RegulatedIndustriesPage"),
    route_def("healthcareRoute", "/governance/healthcare", "HealthcareGovernancePage"),
    route_def("bfsiRoute", "/governance/bfsi", "BFSIGovernancePage"),
    route_def("sovereignRoute", "/governance/sovereign", "SovereignGovernancePage"),
    route_def("legalRoute", "/governance/legal", "LegalGovernancePage"),
    route_def("educationRoute", "/governance/education", "EducationGovernancePage"),
    route_def("financeRoute", "/governance/finance", "FinanceGovernancePage"),
    route_def("hospitalityRoute", "/governance/hospitality", "HospitalityGovernancePage"),
    route_def("logisticsRoute", "/governance/logistics", "LogisticsGovernancePage"),
    route_def("manufacturingRoute", "/governance/manufacturing", "ManufacturingGovernancePage"),
    route_def("privateCapitalRoute", "/governance/private-capital", "PrivateCapitalGovernancePage"),
    route_def("realEstateRoute", "/governance/real-estate", "RealEstateGovernancePage"),
    route_def("retailRoute", "/governance/retail", "RetailGovernancePage"),
])

ROUTER_TREE_FIND = '''  // Governance verticals
  healthcareRoute,
  bfsiRoute,
  sovereignRoute,
  legalRoute,
  criticalInfrastructureRoute,
  defenseRoute,
]);'''

ROUTER_TREE_REPLACE = '''  // Governance verticals
  regulatedRoute,
  healthcareRoute,
  bfsiRoute,
  sovereignRoute,
  legalRoute,
  educationRoute,
  financeRoute,
  hospitalityRoute,
  logisticsRoute,
  manufacturingRoute,
  privateCapitalRoute,
  realEstateRoute,
  retailRoute,
]);'''

# ── Sitemap wiring ──────────────────────────────────────────────────────────
SITEMAP = "public/sitemap.xml"
SITEMAP_FIND = '''  <url><loc>https://coreidentitygroup.com/governance/healthcare</loc><lastmod>2026-05-24</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/bfsi</loc><lastmod>2026-05-24</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/sovereign</loc><lastmod>2026-05-24</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>'''


def sitemap_line(slug, priority="0.8"):
    return (f'  <url><loc>https://coreidentitygroup.com/governance/{slug}</loc>'
            f'<lastmod>2026-05-24</lastmod><changefreq>monthly</changefreq><priority>{priority}</priority></url>')


SITEMAP_REPLACE = "\n".join(
    [sitemap_line("regulated", "0.9")] + [sitemap_line(v["slug"]) for v in VERTICALS]
)

# ── Middleware wiring ───────────────────────────────────────────────────────
MIDDLEWARE = "functions/_middleware.js"
MW_FIND = '''  "/governance/legal": {
    title: "Legal & Professional Services AI Governance | CoreIdentity",
    desc: "CoreIdentity enforces privilege-aware agent governance across legal and professional services — so an autonomous agent never waives privilege, breaches an ethical wall, or leaves a matter without a defensible record."
  },
  "/governance/critical-infrastructure": {
    title: "Critical Infrastructure AI Governance | CoreIdentity",
    desc: "CoreIdentity enforces actuation-level agent governance across energy, water, transportation, and industrial control systems — so an autonomous agent can never issue an operational command outside its authorized, auditable bounds."
  },
  "/governance/defense": {
    title: "Defense & Intelligence AI Governance | CoreIdentity",
    desc: "CoreIdentity enforces need-to-know agent governance for defense and intelligence missions — so every autonomous action on controlled information is attributable, authorized, and auditable to the standard accreditation authorities enforce."
  }
};'''


def mw_entry(path, title, desc):
    return (f'  "{path}": {{\n'
            f'    title: "{title}",\n'
            f'    desc: "{desc}"\n'
            f'  }}')


def build_mw_replace():
    entries = [mw_entry("/governance/regulated", "Regulated Industries AI Governance | CoreIdentity", HUB_DESC)]
    entries += [mw_entry("/governance/" + v["slug"], v["title"], v["desc"]) for v in VERTICALS]
    return ",\n".join(entries) + "\n};"


MW_REPLACE = build_mw_replace()

OLD_FILES = ["src/pages/CriticalInfrastructureGovernancePage.tsx", "src/pages/DefenseGovernancePage.tsx"]


def main():
    ok = True

    # 1) write all 12 vertical pages
    for v in VERTICALS:
        path = os.path.join("src/pages", v["file"])
        with open(path, "w", encoding="utf-8") as f:
            f.write(render_page(v))
        print(f"[OK] {path} — written.")

    # 2) write hub page
    with open("src/pages/RegulatedIndustriesPage.tsx", "w", encoding="utf-8") as f:
        f.write(render_hub())
    print("[OK] src/pages/RegulatedIndustriesPage.tsx — written.")

    # 3) router wiring
    ok = edit_file(ROUTER, "RegulatedIndustriesPage", ROUTER_IMPORT_FIND, ROUTER_IMPORT_REPLACE, "router imports") and ok
    ok = edit_file(ROUTER, "regulatedRoute = createRoute(", ROUTER_DEFS_FIND, ROUTER_DEFS_REPLACE, "router defs") and ok
    ok = edit_file(ROUTER, "  regulatedRoute,\n  healthcareRoute,", ROUTER_TREE_FIND, ROUTER_TREE_REPLACE, "router tree") and ok

    # 4) sitemap wiring
    ok = edit_file(SITEMAP, "/governance/regulated", SITEMAP_FIND, SITEMAP_REPLACE, "sitemap") and ok

    # 5) middleware wiring
    ok = edit_file(MIDDLEWARE, "/governance/regulated", MW_FIND, MW_REPLACE, "middleware cards") and ok

    # 6) retire superseded pages
    for path in OLD_FILES:
        if os.path.exists(path):
            os.remove(path)
            print(f"[OK] {path} — removed (superseded).")
        else:
            print(f"[SKIP] {path} — already removed.")

    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
