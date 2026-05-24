#!/usr/bin/env python3
"""
Positioning rewrite — Group 02: index.html global meta, JSON-LD, and noscript.

Rewrites the global fallback <title>/description/keywords, OpenGraph + Twitter
cards, the Organization JSON-LD description, and the <noscript> crawler block
to the new category: "Institutional trust infrastructure for autonomous
systems." Drops "Sentinel OS"/"Nexus OS" -> "Sentinel"/"Nexus" and removes the
banned "AI governance platform" / "control plane" framing.

Idempotent: each edit is keyed on full-tag anchors (unique) with a guard.
"""
import sys

PATH = "index.html"

NEW_TITLE = "CoreIdentity | Institutional Trust Infrastructure for Autonomous Systems"
NEW_DESC = (
    "When organizations delegate consequential authority to AI, they need "
    "institutional-grade proof that agents acted correctly. CoreIdentity makes "
    "every AI decision provable — authorized, attributed, and auditable — and "
    "hardened against both current and future threats."
)
NEW_KEYWORDS = (
    "provable AI decision governance, institutional trust infrastructure, "
    "AI agent identity, autonomous AI accountability, AI audit trail, "
    "EU AI Act compliance, NIST AI RMF, SAL Enforcement Kernel, Sentinel, Nexus, "
    "agent identity protocol, AIP"
)
NEW_JSONLD_DESC = (
    "CoreIdentity is institutional trust infrastructure for autonomous systems — "
    "making every AI decision provable: authorized before execution, attributed to "
    "a verified identity, and recorded in a tamper-evident audit trail. Hardened "
    "against both current and future threats with NIST FIPS post-quantum "
    "cryptography (ML-DSA-65 / FIPS 204)."
)

OLD_TITLE_TXT = "CoreIdentity Development Group | Agentic AI Governance Infrastructure"
OLD_DESC_TXT = (
    "The only quantum-hardened agentic AI governance infrastructure. Cryptographic "
    "agent identity, real-time policy enforcement, immutable audit trails. Built for "
    "regulated enterprises and sovereign nations."
)
OLD_TW_DESC_TXT = (
    "The only quantum-hardened agentic AI governance infrastructure. Cryptographic "
    "agent identity, real-time policy enforcement, immutable audit trails. Built for "
    "regulated enterprises."
)
OLD_JSONLD_DESC_TXT = (
    "The only quantum-hardened agentic AI governance infrastructure. ML-DSA-65 (FIPS "
    "204) post-quantum cryptography, cryptographic agent identity, real-time policy "
    "enforcement, and immutable audit trails for regulated enterprises and sovereign "
    "nations."
)

# (guard, find, replace) — applied in order, first occurrence each.
EDITS = [
    # <title>
    (
        f"<title>{NEW_TITLE}</title>",
        f"<title>{OLD_TITLE_TXT}</title>",
        f"<title>{NEW_TITLE}</title>",
    ),
    # description meta
    (
        f'<meta name="description" content="{NEW_DESC}" />',
        f'<meta name="description" content="{OLD_DESC_TXT}" />',
        f'<meta name="description" content="{NEW_DESC}" />',
    ),
    # keywords meta
    (
        f'<meta name="keywords" content="{NEW_KEYWORDS}" />',
        '<meta name="keywords" content="agentic AI governance, AI agent identity, autonomous AI compliance, EU AI Act compliance, NIST AI RMF, SAL Kernel, Sentinel OS, agent identity protocol, AIP, AI governance platform, enterprise AI governance" />',
        f'<meta name="keywords" content="{NEW_KEYWORDS}" />',
    ),
    # og:title
    (
        f'<meta property="og:title" content="{NEW_TITLE}" />',
        f'<meta property="og:title" content="{OLD_TITLE_TXT}" />',
        f'<meta property="og:title" content="{NEW_TITLE}" />',
    ),
    # og:description
    (
        f'<meta property="og:description" content="{NEW_DESC}" />',
        f'<meta property="og:description" content="{OLD_DESC_TXT}" />',
        f'<meta property="og:description" content="{NEW_DESC}" />',
    ),
    # twitter:title
    (
        f'<meta name="twitter:title" content="{NEW_TITLE}" />',
        f'<meta name="twitter:title" content="{OLD_TITLE_TXT}" />',
        f'<meta name="twitter:title" content="{NEW_TITLE}" />',
    ),
    # twitter:description
    (
        f'<meta name="twitter:description" content="{NEW_DESC}" />',
        f'<meta name="twitter:description" content="{OLD_TW_DESC_TXT}" />',
        f'<meta name="twitter:description" content="{NEW_DESC}" />',
    ),
    # JSON-LD description
    (
        f'"description": "{NEW_JSONLD_DESC}",',
        f'"description": "{OLD_JSONLD_DESC_TXT}",',
        f'"description": "{NEW_JSONLD_DESC}",',
    ),
    # --- noscript crawler block ---
    (
        "<p><strong>Institutional Trust Infrastructure for Autonomous Systems</strong></p>",
        "<p><strong>Agentic AI Governance Ecosystem</strong></p>",
        "<p><strong>Institutional Trust Infrastructure for Autonomous Systems</strong></p>",
    ),
    (
        "The market does not have an AI problem. It has a trust deficit problem.",
        "<p>CoreIdentity Development Group is the complete Agentic AI Governance Ecosystem — the infrastructure layer governing how autonomous AI agents are deployed, operated, audited, and controlled at enterprise scale. Our six-platform ecosystem delivers enterprise-grade AI governance, compliance observability, and autonomous agent orchestration for organizations navigating the evolving AI regulatory landscape.</p>",
        "<p>The market does not have an AI problem. It has a trust deficit problem. Organizations are delegating consequential authority to autonomous AI systems faster than they can prove those systems acted correctly. CoreIdentity is the institutional trust infrastructure that closes that gap — making every AI decision provable: authorized before it executes, attributed to a verified identity, bounded by codified policy, and recorded in a tamper-evident audit trail. Hardened against both current and future threats.</p>",
    ),
    # platform list items
    (
        "<li><strong>CoreIdentity Provable AI Decision Governance</strong>",
        "<li><strong>CoreIdentity Governance Platform</strong> — Flagship enterprise platform for AI agent identity management, governance dashboards, compliance workflows, and real-time observability.</li>",
        "<li><strong>CoreIdentity Provable AI Decision Governance</strong> — The institutional trust layer that makes every autonomous agent decision authorized, attributed, and auditable before it executes.</li>",
    ),
    (
        "<li><strong>Sentinel</strong> — Policy enforcement, identity boundaries",
        "<li><strong>Sentinel OS</strong> — AI security and governance operating system with threat detection, policy enforcement, and audit trail generation.</li>",
        "<li><strong>Sentinel</strong> — Policy enforcement, identity boundaries, approval gates, and tamper-evident evidence capture for autonomous agents.</li>",
    ),
    (
        "<li><strong>Nexus</strong> — Controlled multi-agent orchestration",
        "<li><strong>Nexus OS</strong> — Agent orchestration and workflow automation with full governance guardrails.</li>",
        "<li><strong>Nexus</strong> — Controlled multi-agent orchestration that coordinates workflows inside defined governance constraints.</li>",
    ),
    (
        "Pre-built, compliance-ready digital labor deployed under full enforcement",
        "<li><strong>SmartNation AI</strong> — Civic and enterprise intelligence platform for AI-powered analytics and decision-support.</li>",
        "<li><strong>SmartNation AI</strong> — Pre-built, compliance-ready digital labor deployed under full enforcement from day one.</li>",
    ),
    (
        "<li><strong>AGO — Autonomous Governance Orchestrator</strong>",
        "<li><strong>AGO — AI Growth Operator</strong> — Autonomous agent product delivering measurable operational ROI while embedding CoreIdentity governance infrastructure into client environments.</li>",
        "<li><strong>AGO — Autonomous Governance Orchestrator</strong> — The operating agent running under full enforcement, and the validated pilot pattern for every enterprise deployment that follows.</li>",
    ),
    (
        "<li><strong>CIAG — CoreIdentity Advisory Group</strong>",
        "<li><strong>CIAG — Core Intelligence Advisory Group</strong> — Strategic advisory practice for AI governance frameworks, regulatory compliance roadmaps, and enterprise implementation.</li>",
        "<li><strong>CIAG — CoreIdentity Advisory Group</strong> — Advisory practice that closes AI governance gaps and architects the audit infrastructure that turns AI liability into AI accountability.</li>",
    ),
]


def apply(path, guard, find, replace):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    if guard in content:
        print(f"[SKIP] {path} — already updated: {guard[:52]!r}")
        return True
    if find not in content:
        print(f"[ERROR] {path} — anchor not found and guard absent.")
        print(f"        Expected anchor: {find[:120]!r}")
        return False
    content = content.replace(find, replace, 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"[OK] {path} — applied: {guard[:52]!r}")
    return True


def main():
    ok = True
    for guard, find, replace in EDITS:
        ok = apply(PATH, guard, find, replace) and ok
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
