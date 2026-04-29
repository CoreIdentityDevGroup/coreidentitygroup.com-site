export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-agents-out-of-control-2026",
    title: "77% of IT Managers Say AI Agents Are Out of Control. Here's What That Means.",
    date: "2026-04-28",
    author: "Todd Morgan, Founder & CEO, CoreIdentity Development Group",
    excerpt:
      "New data from the Cloud Security Alliance, Monte Carlo, Deloitte, and Grant Thornton paints a clear picture: enterprises are deploying AI agents faster than they can govern them. Here is what the numbers mean — and what happens when the first enforcement action arrives.",
    content: `
<p>
  Seventy-seven percent. That is the share of IT managers who now say AI agents in their organizations
  are out of control. Not "difficult to manage." Not "a work in progress." Out of control.
</p>
<p>
  That number, surfaced in a ZDNet industry survey, is the headline. But the supporting data makes it
  worse. According to the Cloud Security Alliance, surveying 418 enterprise respondents in January 2026,
  82% of enterprises have unknown AI agents running in their IT infrastructure right now. Not agents they
  haven't gotten around to auditing. Unknown agents. Operating without sanction, without policy, without
  any accountability chain.
</p>
<p>
  Sixty-five percent of those same enterprises have already experienced an AI agent-related incident in
  the past year: data exposure in 61% of cases, operational disruption in 43%, direct financial cost in
  35%. These are not theoretical future risks. They are current operational realities being reported by
  enterprises that have already absorbed the impact.
</p>

<h2>The Setup: Deployment Without Governance</h2>
<p>
  How did we get here? The Monte Carlo survey of 260 enterprise leaders puts it plainly: 64% deployed AI
  agents before feeling fully prepared. That is not a technology failure. It is a governance failure
  created by the gap between deployment velocity and the infrastructure required to govern what gets
  deployed.
</p>
<p>
  The same survey found that only 47% of builders say their systems are easily traceable end-to-end
  when something goes wrong. More than half of the people building the systems that enterprises depend
  on cannot follow the decision trail when an agent makes a mistake. That is not an edge case. That is
  the default state of enterprise AI today.
</p>
<p>
  Deloitte's AI Institute 2026 survey adds the strategic dimension: 74% of companies plan to deploy
  agentic AI within two years. Yet only 21% have a mature model for AI governance. The deployment
  wave is accelerating. The governance infrastructure is not keeping pace.
</p>

<h2>What "Out of Control" Actually Means</h2>
<p>
  "Out of control" is not hyperbole. It is a technically precise description of the default state of
  enterprise AI agent deployments. An agent that is "out of control" has four specific deficits:
</p>
<p>
  <strong>No cryptographic identity.</strong> The agent has no verified, attestable identity. You cannot
  prove which agent took which action, because there is no signature on the action. You have logs, maybe.
  You have records, probably. But you do not have cryptographic proof — the kind that survives legal
  discovery, regulatory examination, or a forensic investigation after something goes wrong.
</p>
<p>
  <strong>No policy enforcement at execution time.</strong> Policies exist in documents. Governance
  frameworks exist in slide decks. But when the agent calls the API — when it executes the action — there
  is no enforcement mechanism operating between model intent and execution. The agent acts, and the
  audit happens afterward, if at all.
</p>
<p>
  <strong>No immutable audit trail.</strong> Logs are not audit trails. Logs can be deleted,
  manipulated, or simply not generated. An immutable audit trail is a cryptographically signed,
  tamper-evident record of every agent action, created at execution time, anchored in a structure that
  cannot be retroactively modified. Most enterprises do not have this for their AI agents.
</p>
<p>
  <strong>No incident response capability.</strong> Grant Thornton surveyed 950 business leaders between
  February and March 2026 and found that just 20% have a tested AI incident response plan for when
  agents fail. When something goes wrong — and the data says it will — four out of five enterprises have
  no rehearsed response. They will improvise, under pressure, with incomplete information, while
  regulators and counsel are waiting.
</p>

<h2>The Regulatory Consequence</h2>
<p>
  Every regulated industry is now one incident away from an enforcement action.
</p>
<p>
  Healthcare organizations deploying clinical AI agents are operating under HIPAA and emerging FDA
  clinical AI guidance. Financial institutions deploying AI agents for trading, fraud detection, or
  customer decisions are operating under FINRA, SEC, and FinCEN frameworks. Industrial operators
  deploying AI agents in critical infrastructure are operating under IEC 62443 and NERC CIP.
  Government agencies are operating under NSM-10 and CNSA 2.0 post-quantum mandates.
</p>
<p>
  None of those frameworks were written for autonomous AI agents. But they apply to the decisions
  those agents make. And when an enforcement action comes — when a patient is harmed by an unaudited
  clinical AI action, when a financial institution cannot reconstruct an autonomous trading decision,
  when a critical infrastructure operator cannot prove what their AI did during an incident — the
  absence of governance infrastructure is not a mitigating factor. It is the liability.
</p>
<p>
  The agentic AI security incident at 90+ organizations — where autonomous agents gained write access
  to firewalls and IAM policies — is the preview of what uncontrolled AI agent access looks like at
  enterprise scale. Not theoretical. Reported.
</p>

<h2>The Infrastructure That Was Missing</h2>
<p>
  CoreIdentity was built for exactly this moment. Not for the moment when AI governance becomes a
  regulatory requirement. For the moment before that — when the governance infrastructure that prevents
  enforcement actions can still be put in place.
</p>
<p>
  We are not a framework. We are not a checklist. We are not an advisory practice that produces a
  roadmap for what you should eventually implement. We are the enforcement infrastructure — operating
  at execution time, before the API call, before the action, before the record that cannot be changed.
</p>
<p>
  Every agent that runs through CoreIdentity has a cryptographic identity. Every action it takes is
  evaluated against policy before execution. Every decision is recorded in an immutable audit trail,
  signed with ML-DSA-65 (FIPS 204) — the NIST post-quantum standard that ensures those records remain
  verifiable even as classical cryptography becomes vulnerable. We are the only governance
  infrastructure platform implementing all three NIST FIPS post-quantum standards (FIPS 203, 204, 205)
  simultaneously in production.
</p>
<p>
  The 77% of enterprises whose IT managers say their agents are out of control are not failing at AI.
  They are operating without the infrastructure layer that makes AI controllable. That infrastructure
  layer now exists.
</p>

<h2>If Your Agents Are in That 77%</h2>
<p>
  The data is not ambiguous. The governance gap is not closing on its own. Every week that autonomous
  agents operate without cryptographic identity, without policy enforcement at execution time, and
  without immutable audit trails is a week of accumulated liability.
</p>
<p>
  If your organization is in the 77%, or the 82%, or the 80% without a tested incident response plan
  — let's talk. Not about a framework. About the infrastructure.
</p>
<p>
  <a href="https://coreidentitygroup.com/contact">Request a briefing →</a>
</p>
`,
  },
  {
    slug: "quantum-vulnerability-closed-24-hours",
    title: "We Found Our Own Quantum Vulnerability — Here's How We Closed It in 24 Hours",
    date: "2026-04-26",
    author: "Todd Morgan, Founder & CEO, CoreIdentity Development Group",
    excerpt:
      "On April 26, 2026 at 13:01 UTC, CoreIdentity completed the retirement of ECDSA P-256 from its active signing path and replaced it with three NIST-standardized post-quantum algorithms. Here is the full account of what we found, why it mattered, and what we did about it.",
    content: `
<h2>The Vulnerability</h2>
<p>
  On April 26, 2026 at <code>13:01:11.481Z</code>, CoreIdentity formally retired ECDSA P-256 from
  every active signing path across the enforcement stack. The retirement fingerprint —
  <code>2260493039681046ef9b5069928039e8765c275157c6be693fdf2126dcde5b3d</code> — is now anchored
  in our immutable audit log.
</p>
<p>
  What triggered this was not an external disclosure. We found it ourselves. During an internal
  cryptographic posture audit, we identified that ECDSA P-256 remained in our active agent-action
  signing path — the mechanism responsible for attributing and authenticating every autonomous agent
  decision recorded by the platform.
</p>
<p>
  This was not a configuration error. P-256 had been the correct choice at the time it was
  implemented. It was standards-compliant, widely supported, and operationally robust. The problem is
  that it is a classical elliptic-curve algorithm, and classical asymmetric cryptography does not
  survive Shor's algorithm running on a sufficiently powerful quantum processor.
</p>
<p>
  For most systems, this is a theoretical future risk. For CoreIdentity, it was a present
  architectural liability — because the system we are building is designed to be trusted by sovereign
  clients with audit requirements that extend decades forward. A platform that creates immutable
  records of autonomous AI decisions must be cryptographically durable over the lifetime of those
  records, not just the lifetime of current hardware.
</p>

<h2>Why It Mattered</h2>
<p>
  Cryptographic accountability is not a feature. It is the foundation. The entire governance value
  proposition of CoreIdentity rests on the assertion that agent actions are verifiably attributable,
  unmodifiable after the fact, and auditable by any authorized party — including regulators —
  regardless of when that audit occurs.
</p>
<p>
  If the signatures on those records are produced by a classical algorithm, that guarantee has a
  shelf life. Not an infinite one. The question is not whether a quantum adversary will eventually
  be able to forge classical signatures — the answer is yes. The question is: how long do the
  records need to remain trustworthy?
</p>
<p>
  For enterprise AI governance, the answer is: longer than classical cryptography can guarantee.
  For sovereign clients — government agencies, regulated financial institutions, national
  infrastructure operators — that gap is unacceptable. A signed record that an autonomous agent
  authorized a high-consequence decision must remain verifiable even if the signing algorithm is
  broken in 2040.
</p>
<p>
  We identified this gap. We closed it.
</p>

<h2>What We Did</h2>
<p>
  Over 24 hours, we replaced every classical asymmetric primitive in the active enforcement stack
  with three NIST-standardized post-quantum algorithms:
</p>
<ul>
  <li>
    <strong>ML-DSA-65 (FIPS 204)</strong> — Module-Lattice-Based Digital Signature Algorithm.
    Replaces ECDSA P-256 in all active agent-action signing paths. Every governance record,
    policy decision, and audit entry is now signed with ML-DSA-65.
  </li>
  <li>
    <strong>ML-KEM-768 (FIPS 203)</strong> — Module-Lattice-Based Key Encapsulation Mechanism.
    Replaces classical key exchange across all inter-service and agent-to-platform communication
    channels. No classical asymmetric key transport remains.
  </li>
  <li>
    <strong>SLH-DSA-128s (FIPS 205)</strong> — Stateless Hash-Based Digital Signature Algorithm.
    Added as the offline signing layer for our highest-durability records — those requiring
    cryptographic integrity beyond the assumed operational lifetime of lattice-based algorithms.
  </li>
</ul>
<p>
  The migration was executed under full SAL enforcement — every step authorized, every transition
  recorded, every rollback point validated before the next step was permitted. No classical
  asymmetric primitives remain in any active path.
</p>

<h2>What This Means for the Platform</h2>
<p>
  CoreIdentity is now the only AI governance infrastructure platform to have completed post-quantum
  cryptographic hardening across the full enforcement stack. This is not a perimeter hardening. It
  is not a single-algorithm swap. It is a complete retirement of classical asymmetric cryptography
  from every surface that matters:
</p>
<ul>
  <li>Agent action signing (ML-DSA-65)</li>
  <li>Policy record signing (ML-DSA-65)</li>
  <li>Inter-service key exchange (ML-KEM-768)</li>
  <li>Long-duration archive signing (SLH-DSA-128s)</li>
</ul>
<p>
  The timing is not coincidental. NIST finalized FIPS 203, 204, and 205 in 2024. The window
  between finalization and widespread enterprise adoption is exactly the window in which a platform
  can establish a durable cryptographic posture before quantum risk becomes acute. We chose to move
  immediately.
</p>

<h2>Why This Matters for Sovereign Clients</h2>
<p>
  Government agencies and national infrastructure operators live under a different threat model than
  commercial enterprises. The adversaries they consider are better-resourced, more patient, and
  more likely to pursue "harvest now, decrypt later" strategies against records created today.
</p>
<p>
  An AI governance platform that produces audit records signed with classical algorithms is creating
  a time-limited liability for sovereign clients — one that grows more acute as quantum computing
  matures. CoreIdentity eliminated that liability on April 26, 2026.
</p>
<p>
  For clients evaluating AI governance infrastructure, this is a selection criterion, not a
  differentiator. If the platform cannot guarantee the cryptographic durability of its governance
  records, the governance framework it enforces cannot be fully trusted.
</p>

<h2>The Operational Record</h2>
<p>
  The retirement of ECDSA P-256 from our active signing path is itself recorded in our immutable
  audit log. The fingerprint <code>2260493039681046ef9b5069928039e8765c275157c6be693fdf2126dcde5b3d</code>
  represents the final P-256-signed record in the governance chain. Everything after
  <code>2026-04-26T13:01:11.481Z</code> is ML-DSA-65.
</p>
<p>
  This is what cryptographic accountability looks like in practice: not a press release, but a
  verifiable, timestamped, auditable transition in the governance record.
</p>

<h2>What We Haven't Finished Yet</h2>
<p>
  ML-KEM-768 key encapsulation is live as a software layer — the algorithm is quantum-resistant
  but the underlying key material is protected by classical AWS KMS at rest, pending native PQC
  support from AWS KMS (targeted Q3 2026). ML-DSA-65 signing across all audit and identity
  surfaces is fully hardened. We name this gap because precision is the standard — and because
  closing it on a documented timeline is more defensible than pretending it doesn't exist.
</p>

<h2>Next Steps</h2>
<p>
  If you are evaluating AI governance infrastructure and cryptographic posture is a requirement —
  for compliance, for sovereign deployment, or for long-duration auditability — we want to speak
  with you.
</p>
<p>
  The <a href="/coreidentity-ai-advisory-group">CoreIdentity AI Advisory Group</a> works directly
  with organizations navigating post-quantum transition requirements alongside autonomous AI
  governance deployments. Both problems are architectural. Both need to be solved at the same time.
</p>
<p>
  <a href="/contact">Request a briefing →</a>
</p>
    `.trim(),
  },
];
