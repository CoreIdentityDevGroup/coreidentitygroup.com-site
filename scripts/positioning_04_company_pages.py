#!/usr/bin/env python3
"""
Positioning rewrite — Group 04: company pages.

About, Leadership, Founders, Contact, Portfolio:
  * add per-page <Helmet> meta (these 5 had none, inheriting stale global meta)
  * swap "control plane" / "AI governance platform" / "Autonomous Execution
    Governance" / "AEG" for the new "institutional trust infrastructure for
    autonomous systems" category
  * reconcile vertical count (eight -> twelve) and PQC framing

Idempotent: Helmet import skipped if react-helmet-async already imported;
Helmet block skipped if the page <title> is already present; copy edits
guarded on their new text.
"""
import sys

HELMET_IMPORT = '\nimport { Helmet } from "react-helmet-async";'

PAGES = [
    {
        "path": "src/pages/AboutPage.tsx",
        "import_anchor": 'import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";',
        "title": "About | CoreIdentity",
        "block_find": '    <div className="space-y-10">\n\n      {/* Header */}',
        "block_replace": (
            '    <div className="space-y-10">\n'
            '      <Helmet>\n'
            '        <title>About | CoreIdentity</title>\n'
            '        <meta name="description" content="CoreIdentity Development Group builds institutional trust infrastructure for autonomous systems — making every AI decision provable for regulated enterprises and sovereign institutions." />\n'
            '      </Helmet>\n\n'
            '      {/* Header */}'
        ),
        "edits": [
            (
                "CoreIdentity Development Group Inc. builds institutional trust infrastructure for",
                "CoreIdentity Development Group Inc. is the governance infrastructure company\n          for the agentic AI era — building the control plane that enterprises need to\n          deploy autonomous AI at scale without losing compliance, accountability, or control.",
                "CoreIdentity Development Group Inc. builds institutional trust infrastructure for\n          autonomous systems — the infrastructure organizations need to prove their AI agents\n          acted correctly: authorized, attributed, and auditable, without losing compliance or control.",
            ),
            (
                "to establish institutional trust infrastructure for",
                "— not for acquisition, but to establish Autonomous Execution Governance as\n                  permanent infrastructure for the agentic AI era.",
                "— not for acquisition, but to establish institutional trust infrastructure for\n                  autonomous systems as a permanent layer of the agentic era.",
            ),
        ],
    },
    {
        "path": "src/pages/LeadershipPage.tsx",
        "import_anchor": 'import { getTeamMembers, isSanityConfigured, type SanityTeamMember } from "../lib/queries";',
        "title": "Leadership | CoreIdentity",
        "block_find": '    <div className="space-y-12">\n      <div className="space-y-4">\n        <div className="text-xs font-medium tracking-[0.22em] text-white/40">',
        "block_replace": (
            '    <div className="space-y-12">\n'
            '      <Helmet>\n'
            '        <title>Leadership | CoreIdentity</title>\n'
            '        <meta name="description" content="CoreIdentity is led by operators who have built and governed mission-critical systems in the most demanding institutional environments — where trust is proven, not asserted." />\n'
            '      </Helmet>\n'
            '      <div className="space-y-4">\n        <div className="text-xs font-medium tracking-[0.22em] text-white/40">'
        ),
        "edits": [
            (
                "the absence of purpose-built institutional trust infrastructure for autonomous AI execution",
                "the absence of a purpose-built control plane for autonomous AI execution",
                "the absence of purpose-built institutional trust infrastructure for autonomous AI execution",
            ),
        ],
    },
    {
        "path": "src/pages/FoundersPage.tsx",
        "import_anchor": 'import { Card, PageTitle, Eyebrow } from "../components/ui";',
        "title": "Founder's Brief | CoreIdentity",
        "block_find": '    <div className="space-y-12">\n      <div className="space-y-4">\n        <Eyebrow>INTERNAL — NOT INDEXED</Eyebrow>',
        "block_replace": (
            '    <div className="space-y-12">\n'
            '      <Helmet>\n'
            "        <title>Founder's Brief | CoreIdentity</title>\n"
            '        <meta name="robots" content="noindex, nofollow" />\n'
            '      </Helmet>\n'
            '      <div className="space-y-4">\n        <Eyebrow>INTERNAL — NOT INDEXED</Eyebrow>'
        ),
        "edits": [
            (
                "CoreIdentity Development Group Inc. — institutional trust infrastructure for autonomous systems.",
                "CoreIdentity Development Group Inc. — the control plane for autonomous enterprise AI.",
                "CoreIdentity Development Group Inc. — institutional trust infrastructure for autonomous systems.",
            ),
        ],
    },
    {
        "path": "src/pages/ContactPage.tsx",
        "import_anchor": 'import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";',
        "title": "Contact | CoreIdentity",
        "block_find": '    <div className="space-y-10">\n\n      <div className="space-y-3">',
        "block_replace": (
            '    <div className="space-y-10">\n'
            '      <Helmet>\n'
            '        <title>Contact | CoreIdentity</title>\n'
            '        <meta name="description" content="Engage CoreIdentity on institutional trust infrastructure for autonomous systems — advisory intake, developer and API access, and direct contact." />\n'
            '      </Helmet>\n\n'
            '      <div className="space-y-3">'
        ),
        "edits": [
            (
                "technology partners evaluating institutional trust infrastructure for autonomous AI deployment.",
                "technology partners evaluating governance infrastructure for agentic AI deployment.",
                "technology partners evaluating institutional trust infrastructure for autonomous AI deployment.",
            ),
        ],
    },
    {
        "path": "src/pages/PortfolioPage.tsx",
        "import_anchor": 'import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";',
        "title": "Governance Infrastructure | CoreIdentity",
        "block_find": '    <div className="space-y-12">\n      <div className="space-y-4">\n        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>',
        "block_replace": (
            '    <div className="space-y-12">\n'
            '      <Helmet>\n'
            '        <title>Governance Infrastructure | CoreIdentity</title>\n'
            '        <meta name="description" content="The CoreIdentity enforcement chain — SAL, Sentinel, Nexus, Agent Identity Systems, FGRE, and quantum hardening — that makes every autonomous AI decision provable." />\n'
            '      </Helmet>\n'
            '      <div className="space-y-4">\n        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>'
        ),
        "edits": [
            (
                "CoreIdentity Development Group Inc. builds and operates institutional trust infrastructure for autonomous systems",
                "CoreIdentity Development Group Inc. builds and operates the governance infrastructure of systems and operating capabilities built to enable safe, auditable agentic execution.",
                "CoreIdentity Development Group Inc. builds and operates institutional trust infrastructure for autonomous systems — the systems and operating capabilities that make agentic execution safe, authorized, and auditable.",
            ),
            (
                "Hardened against both current and future threats. Post-quantum cryptography",
                "CoreIdentity is the first AI governance platform to complete post-quantum cryptographic hardening across its full enforcement stack. ML-KEM-768, ML-DSA-65, and SLH-DSA-128s deployed across SAL, Sentinel, Agent Identity Systems, and Nexus. 100,000 soak cycles. Zero failures.",
                "Hardened against both current and future threats. Post-quantum cryptography — ML-KEM-768, ML-DSA-65, and SLH-DSA-128s — runs across SAL, Sentinel, Agent Identity Systems, and Nexus. 100,000 soak cycles. Zero failures.",
            ),
            (
                "10,000 agents across twelve verticals under full CoreIdentity enforcement.",
                "10,000 agents across eight verticals under full AEG enforcement.",
                "10,000 agents across twelve verticals under full CoreIdentity enforcement.",
            ),
        ],
    },
]


def read(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def write(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


def add_import(path):
    content = read(path)
    if "react-helmet-async" in content:
        print(f"[SKIP] {path} — Helmet already imported.")
        return True
    return False  # handled inline below


def apply_edit(path, guard, find, replace):
    content = read(path)
    if guard in content:
        print(f"[SKIP] {path} — already updated: {guard[:48]!r}")
        return True
    if find not in content:
        print(f"[ERROR] {path} — anchor not found and guard absent.")
        print(f"        Expected anchor: {find[:120]!r}")
        return False
    write(path, content.replace(find, replace, 1))
    print(f"[OK] {path} — applied: {guard[:48]!r}")
    return True


def main():
    ok = True
    for page in PAGES:
        path = page["path"]
        # 1) Helmet import
        content = read(path)
        if "react-helmet-async" in content:
            print(f"[SKIP] {path} — Helmet already imported.")
        elif page["import_anchor"] in content:
            write(path, content.replace(page["import_anchor"], page["import_anchor"] + HELMET_IMPORT, 1))
            print(f"[OK] {path} — Helmet import added.")
        else:
            print(f"[ERROR] {path} — import anchor not found.")
            ok = False
        # 2) Helmet block
        ok = apply_edit(path, f"<title>{page['title']}</title>", page["block_find"], page["block_replace"]) and ok
        # 3) copy edits
        for guard, find, replace in page["edits"]:
            ok = apply_edit(path, guard, find, replace) and ok
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
