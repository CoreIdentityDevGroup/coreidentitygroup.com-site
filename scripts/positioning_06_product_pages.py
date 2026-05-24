#!/usr/bin/env python3
"""
Positioning rewrite — Group 06: product pages.

QuantumHardening: remove "AI governance platform" + "control plane" and reframe
PQC as "hardened against both current and future threats" (not "we completed/
added PQC"). AIS: reconcile agent-interaction count (37,000 -> 100,000+, matching
Home/Portfolio/PlatformStats). SAL + Sentinel: tighten to the provable-trust
thesis. (FGRE already conforms — no banned language — left unchanged.)

Idempotent: each edit guarded on its new text.
"""
import sys

# (path, guard, find, replace)
EDITS = [
    # ---- QuantumHardeningPage ----
    (
        "src/pages/QuantumHardeningPage.tsx",
        "<title>Quantum Hardening — Current & Future Threat Protection | CoreIdentity</title>",
        "<title>Quantum-Resistant AI Governance | Post-Quantum Cryptography | CoreIdentity</title>",
        "<title>Quantum Hardening — Current & Future Threat Protection | CoreIdentity</title>",
    ),
    (
        "src/pages/QuantumHardeningPage.tsx",
        'content="CoreIdentity is hardened against both current and future threats — post-quantum cryptography across the full enforcement chain.',
        'content="CoreIdentity completes post-quantum cryptographic hardening across the full enforcement stack. FIPS 203, 204, and 205. Every surface — not just the perimeter." />',
        'content="CoreIdentity is hardened against both current and future threats — post-quantum cryptography across the full enforcement chain. NIST FIPS 203, 204, and 205. Every surface, not just the perimeter." />',
    ),
    (
        "src/pages/QuantumHardeningPage.tsx",
        "<PageTitle>Hardened Against Current and Future Threats</PageTitle>",
        "<PageTitle>Quantum-Resistant by Design</PageTitle>",
        "<PageTitle>Hardened Against Current and Future Threats</PageTitle>",
    ),
    (
        "src/pages/QuantumHardeningPage.tsx",
        " CoreIdentity is hardened against both current and future threats.",
        " CoreIdentity is the first AI governance platform to complete\n Post-Quantum Cryptographic (PQC) hardening across its full\n enforcement stack. Every cryptographic surface — not just the\n perimeter. </p>",
        " CoreIdentity is hardened against both current and future threats.\n Post-Quantum Cryptography (PQC) runs across the full enforcement\n chain — every cryptographic surface, not just the\n perimeter. </p>",
    ),
    (
        "src/pages/QuantumHardeningPage.tsx",
        "sensitive layer of your enforcement chain.",
        "sensitive layer of your control plane.",
        "sensitive layer of your enforcement chain.",
    ),
    (
        "src/pages/QuantumHardeningPage.tsx",
        " Being hardened against both current and future threats across the",
        " Being the first AI governance platform to complete PQC hardening\n is a durable competitive position. It signals institutional-grade\n security posture before regulators require it.",
        " Being hardened against both current and future threats across the\n full enforcement chain is a durable competitive position. It signals\n institutional-grade security posture before regulators require it.",
    ),
    # ---- AgentIdentitySystemsPage: number reconciliation ----
    (
        "src/pages/AgentIdentitySystemsPage.tsx",
        "over 100,000 verified agent interactions logged at 100% pass rate",
        "over 37,000 verified agent interactions logged at 100% pass rate",
        "over 100,000 verified agent interactions logged at 100% pass rate",
    ),
    # ---- SALPage: thesis tie-in ----
    (
        "src/pages/SALPage.tsx",
        "turns probabilistic AI into provable, institutional-grade digital labor",
        "The architectural guarantee that transforms probabilistic AI into institutional-grade digital labor.",
        "The architectural guarantee that turns probabilistic AI into provable, institutional-grade digital labor — every action authorized before it executes.",
    ),
    # ---- SentinelOSPage: meta tightened, drop old "governance layer for agentic AI" ----
    (
        "src/pages/SentinelOSPage.tsx",
        "captures the audit evidence that proves your AI fleet acted within authority",
        'content="Sentinel enforces policy, controls identity boundaries, gates approvals, and captures audit evidence for your AI fleet. The governance layer for enterprise agentic AI."',
        'content="Sentinel enforces policy, controls identity boundaries, gates approvals, and captures the audit evidence that proves your AI fleet acted within authority — before a regulator asks."',
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
