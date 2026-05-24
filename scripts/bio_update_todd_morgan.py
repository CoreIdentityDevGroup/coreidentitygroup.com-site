#!/usr/bin/env python3
"""
Content transform — update Todd Morgan bio on About Us + Leadership pages.

Replaces the existing Todd Morgan biography copy with the new approved text:
  * AboutPage.tsx     -> the "About Us" version (5 paragraphs, JSX <p> blocks)
  * LeadershipPage.tsx -> the "Leadership" version (6 paragraphs, TODD_FALLBACK_BIO array)

Idempotent: each edit is guarded on a distinctive phrase from the new copy.
If the guard is already present the edit is skipped; if the guard is absent and
the anchor cannot be found the script fails loudly (so drift is visible).
"""
import sys

ABOUT = "src/pages/AboutPage.tsx"
LEADERSHIP = "src/pages/LeadershipPage.tsx"

# ── AboutPage: replace the three-paragraph bio inside the Leadership card ────
ABOUT_FIND = '''              <div className="mt-4 space-y-3 text-white/72 leading-relaxed">
                <p>
                  Todd founded CoreIdentity Development Group Inc. to close the governance gap
                  in agentic AI deployment — ensuring autonomous systems operate inside policy,
                  identity, and accountability boundaries at enterprise scale.
                </p>
                <p>
                  He brings over 20 years of leadership experience managing a $65M+ federal
                  contract portfolio spanning national intelligence and DoD sectors. His
                  background in mission-critical operational environments — FBI, TSA, FEMA,
                  and DoD — directly informs CoreIdentity's infrastructure-grade,
                  compliance-first architecture.
                </p>
                <p>
                  Todd is building CoreIdentity as a category-defining, generational company
                  — not for acquisition, but to establish institutional trust infrastructure for
                  autonomous systems as a permanent layer of the agentic era.
                </p>
              </div>'''

ABOUT_REPLACE = '''              <div className="mt-4 space-y-3 text-white/72 leading-relaxed">
                <p>
                  CoreIdentity Development Group Inc. was founded to solve a problem most
                  organizations don't yet know they have — and that no existing platform is
                  built to address.
                </p>
                <p>
                  Founder and CEO Todd Morgan brings a career spanning more than 30 years,
                  including extensive support to the National Intelligence Community and the
                  Department of Defense across a variety of roles — including the management of
                  a multi-million dollar portfolio of federal contracts. That experience
                  produced a direct understanding of what institutional accountability actually
                  requires in environments where governance is not optional.
                </p>
                <p>
                  CoreIdentity reflects that understanding. It was built from the inside out —
                  by someone who has operated within the institutions that need this
                  infrastructure, to meet the standards those institutions actually enforce.
                </p>
                <p>
                  The gaps CoreIdentity addresses are not theoretical. They are gaps Todd
                  encountered firsthand — in environments where the absence of proper governance
                  infrastructure carries real consequences.
                </p>
                <p>
                  The company is building for the long term — establishing institutional trust
                  infrastructure for autonomous systems as a permanent and essential layer of
                  the agentic era.
                </p>
              </div>'''

ABOUT_GUARD = "was founded to solve a problem most"

# ── LeadershipPage: replace the TODD_FALLBACK_BIO paragraph array ────────────
LEAD_FIND = '''const TODD_FALLBACK_BIO = [
  `Todd Morgan founded CoreIdentity Development Group Inc. to address what he identified as the defining infrastructure gap of the agentic era: the absence of purpose-built institutional trust infrastructure for autonomous AI execution. CoreIdentity is his answer to that gap — a vertically integrated enforcement stack built to institutional standards, from first principles, without compromise.`,
  `Todd brings an extensive background in National Intelligence and Department of Defense sectors, where he led complex, multi-entity operational programs requiring the highest standards of accountability, auditability, and governance under adversarial conditions. That experience forms the foundational design philosophy of every system CoreIdentity builds: enforcement first, evidence always, no exceptions for operational convenience.`,
  `Prior to CoreIdentity, Todd operated at the intersection of federal contracting, multi-entity organizational leadership, and technology deployment — managing portfolios and programs where failure was not an acceptable outcome. He applies that same operational standard to the infrastructure his company builds for enterprise and sovereign clients.`,
  `Todd built CoreIdentity through a period of profound personal adversity — a circumstance that sharpened rather than diminished his conviction that the right infrastructure, built correctly, can change outcomes at institutional scale. CoreIdentity is not a pivot or a pivot story. It is the deliberate construction of something that should exist and did not.`,
];'''

LEAD_REPLACE = '''const TODD_FALLBACK_BIO = [
  `Todd Morgan is the Founder and CEO of CoreIdentity Development Group Inc.`,
  `His career spans more than 30 years and includes extensive support to the National Intelligence Community and the Department of Defense across a variety of roles — including the management of a multi-million dollar portfolio of federal contracts in operational environments where accountability, auditability, and governance are not aspirational standards but absolute requirements.`,
  `That experience shaped a conviction that became CoreIdentity: the governance frameworks institutions rely on were built for humans making decisions at human speed. They will systematically fail when autonomous AI systems begin acting with institutional authority. No configuration change, policy update, or vendor upgrade addresses that failure. It requires different infrastructure entirely.`,
  `The problem CoreIdentity solves is one Todd encountered directly — in environments where governance gaps are not abstract risks but operational realities with lasting consequences. That experience is the architecture.`,
  `CoreIdentity is what Todd built in response — architecture grounded in the operational realities of environments where governance failures have consequences. Compliance-first. Institutional-grade. Designed to meet the bar that regulators, auditors, and institutional accountability frameworks actually set.`,
  `He is building CoreIdentity as a category-defining, generational company — not for acquisition, but to establish institutional trust infrastructure for autonomous systems as a permanent layer of the agentic era.`,
];'''

LEAD_GUARD = "Todd Morgan is the Founder and CEO of CoreIdentity Development Group Inc.`"

EDITS = [
    (ABOUT, ABOUT_GUARD, ABOUT_FIND, ABOUT_REPLACE),
    (LEADERSHIP, LEAD_GUARD, LEAD_FIND, LEAD_REPLACE),
]


def main():
    ok = True
    for path, guard, find, replace in EDITS:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        if guard in content:
            print(f"[SKIP] {path} — bio already updated.")
            continue
        if find not in content:
            print(f"[ERROR] {path} — anchor not found and guard absent.")
            ok = False
            continue
        with open(path, "w", encoding="utf-8") as f:
            f.write(content.replace(find, replace, 1))
        print(f"[OK] {path} — bio updated.")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
