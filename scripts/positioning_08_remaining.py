#!/usr/bin/env python3
"""
Positioning rewrite — Group 08: remaining content surfaces.

SmartNation: SAL = "Semantic Authorization Layer" (kill "Arbitration").
BlogIndex: meta + subhead off "control plane"/"agentic AI governance".
FAQ: redefine the category (AEG -> institutional trust infrastructure /
Provable AI Decision Governance), drop "control plane"/"first AI governance
platform", reconcile verticals (eight -> twelve), reframe PQC.
Terms: move the proprietary-category IP claim to the new category.
blogPosts data: drop "AI governance platform".

(Nexus, AGO, MCP, Resources already conform and are unchanged.)
Idempotent: every edit guarded on its new text.
"""
import sys

EDITS = [
    # ---- SmartNationAIPage ----
    (
        "src/pages/SmartNationAIPage.tsx",
        "evaluated by the Semantic Authorization Layer (SAL) across five dimensions",
        "evaluated by the Semantic Arbitration Layer (SAL) across five dimensions",
        "evaluated by the Semantic Authorization Layer (SAL) across five dimensions",
    ),
    # ---- BlogIndexPage ----
    (
        "src/pages/BlogIndexPage.tsx",
        'content="Insights on provable AI decision governance, post-quantum cryptography',
        'content="Insights on agentic AI governance, post-quantum cryptography, and enterprise AI operations from CoreIdentity Development Group."',
        'content="Insights on provable AI decision governance, post-quantum cryptography, and enterprise AI operations from CoreIdentity Development Group."',
    ),
    (
        "src/pages/BlogIndexPage.tsx",
        "the team building\n        institutional trust infrastructure for autonomous systems.",
        "the team building\n        the control plane for autonomous enterprise AI.",
        "the team building\n        institutional trust infrastructure for autonomous systems.",
    ),
    # ---- FAQPage: intro ----
    (
        "src/pages/FAQPage.tsx",
        "Practical answers about CoreIdentity, provable AI decision governance,",
        "          Practical answers about CoreIdentity, Agentic Execution Governance,\n          and how governed execution differs from autonomy-first AI deployment.",
        "          Practical answers about CoreIdentity, provable AI decision governance,\n          and how governed execution differs from autonomy-first AI deployment.",
    ),
    # ---- FAQPage: category-defining card (full rewrite) ----
    (
        "src/pages/FAQPage.tsx",
        '<FAQCard q="What is institutional trust infrastructure for autonomous systems?">',
        '        <FAQCard q="What is Agentic Execution Governance?">\n'
        '          <p>\n'
        '            Agentic Execution Governance (AEG) is the infrastructure discipline\n'
        '            that governs autonomous AI at the execution layer — not through\n'
        '            dashboards or after-the-fact monitoring, but through deterministic\n'
        '            enforcement embedded in the execution chain itself. Under AEG,\n'
        '            every agent action is authorized before it executes, attributed\n'
        '            to a verified identity, bounded by codified policy, and recorded\n'
        '            in an immutable audit trail. CoreIdentity builds and operates the\n'
        '            AEG stack.\n'
        '          </p>\n'
        '        </FAQCard>',
        '        <FAQCard q="What is institutional trust infrastructure for autonomous systems?">\n'
        '          <p>\n'
        '            The market does not have an AI problem — it has a trust deficit\n'
        '            problem. Institutional trust infrastructure is what closes that gap:\n'
        '            it makes every autonomous AI decision provable. Every agent action\n'
        '            is authorized before it executes, attributed to a verified identity,\n'
        '            bounded by codified policy, and recorded in an immutable audit trail.\n'
        '            CoreIdentity builds and operates that infrastructure — and its\n'
        '            near-term wedge is Provable AI Decision Governance.\n'
        '          </p>\n'
        '        </FAQCard>',
    ),
    # ---- FAQPage: "control plane" line ----
    (
        "src/pages/FAQPage.tsx",
        "appears. We build the institutional trust infrastructure that makes autonomous AI",
        "appears. We build the control plane that makes autonomous AI\n            governable at enterprise scale.",
        "appears. We build the institutional trust infrastructure that makes autonomous AI\n            governable at enterprise scale.",
    ),
    # ---- FAQPage: SmartNation verticals count + AEG ----
    (
        "src/pages/FAQPage.tsx",
        "twelve verticals, deployed under full CoreIdentity enforcement.",
        "eight verticals, deployed under full AEG enforcement.",
        "twelve verticals, deployed under full CoreIdentity enforcement.",
    ),
    # ---- FAQPage: quantum answer ----
    (
        "src/pages/FAQPage.tsx",
        "CoreIdentity is hardened against both current and future threats — post-quantum cryptographic (PQC)",
        "              CoreIdentity is the first AI governance platform to complete post-quantum cryptographic (PQC)\n              hardening across its full enforcement stack — SAL Kernel, Sentinel, Agent Identity Systems,\n              and Nexus. Every cryptographic surface has been migrated to NIST-finalized post-quantum\n              algorithms (FIPS 203, 204, and 205). This matters now for two reasons:",
        "              CoreIdentity is hardened against both current and future threats — post-quantum cryptographic (PQC)\n              hardening runs across its full enforcement chain: SAL Kernel, Sentinel, Agent Identity Systems,\n              and Nexus. Every cryptographic surface uses NIST-finalized post-quantum\n              algorithms (FIPS 203, 204, and 205). This matters now for two reasons:",
    ),
    # ---- FAQPage: AEG constraints ----
    (
        "src/pages/FAQPage.tsx",
        "If a workflow cannot be governed safely under CoreIdentity enforcement constraints,",
        "If a workflow cannot be governed safely under AEG constraints,",
        "If a workflow cannot be governed safely under CoreIdentity enforcement constraints,",
    ),
    # ---- TermsPage: proprietary-category IP claim ----
    (
        "src/pages/TermsPage.tsx",
        "are proprietary categories defined by CoreIdentity.",
        "Agentic Execution Governance (AEG) is a proprietary category defined by CoreIdentity.",
        "Provable AI Decision Governance and CoreIdentity's institutional trust infrastructure for autonomous systems are proprietary categories defined by CoreIdentity.",
    ),
    # ---- blogPosts data ----
    (
        "src/data/blogPosts.ts",
        "Trust infrastructure that produces audit records signed with classical algorithms is creating",
        "An AI governance platform that produces audit records signed with classical algorithms is creating",
        "Trust infrastructure that produces audit records signed with classical algorithms is creating",
    ),
]


def apply(path, guard, find, replace):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    if guard in content:
        print(f"[SKIP] {path} — already updated: {guard[:48]!r}")
        return True
    if find not in content:
        print(f"[ERROR] {path} — anchor not found and guard absent.")
        print(f"        Expected anchor: {find[:120]!r}")
        return False
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.replace(find, replace, 1))
    print(f"[OK] {path} — applied: {guard[:48]!r}")
    return True


def main():
    ok = True
    for path, guard, find, replace in EDITS:
        ok = apply(path, guard, find, replace) and ok
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
