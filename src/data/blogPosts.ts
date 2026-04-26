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
