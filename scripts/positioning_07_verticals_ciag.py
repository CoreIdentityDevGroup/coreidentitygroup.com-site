#!/usr/bin/env python3
"""
Positioning rewrite — Group 07: vertical governance pages + CIAG.

Healthcare: "Sentinel OS" -> "Sentinel"; drop "first AI governance platform" and
reframe the PQC card as "hardened against both current and future threats".
Sovereign: drop "only AI governance platform" and reframe PQC the same way.
CIAG: retitle to the "Provable AI Decision Governance" wedge.
(BFSI already matches the target voice — pain-first, regulator-mapped — unchanged.)

Idempotent: each edit guarded on its new text.
"""
import sys

EDITS = [
    # ---- HealthcareGovernancePage ----
    (
        "src/pages/HealthcareGovernancePage.tsx",
        "Sentinel enforces data classification at the agent level.",
        "Sentinel OS enforces data classification at the agent level.",
        "Sentinel enforces data classification at the agent level.",
    ),
    (
        "src/pages/HealthcareGovernancePage.tsx",
        "Sentinel stops the action and escalates to a human operator.",
        "Sentinel OS stops the action and escalates to a human operator.",
        "Sentinel stops the action and escalates to a human operator.",
    ),
    (
        "src/pages/HealthcareGovernancePage.tsx",
        "CoreIdentity is hardened against both current and future threats — implementing all three",
        "          CoreIdentity is the first AI governance platform to implement all three NIST FIPS\n          post-quantum standards — ML-DSA-65 (FIPS 204), ML-KEM-768 (FIPS 203), and\n          SLH-DSA-128s (FIPS 205) — in production. Healthcare organizations planning\n          5-year infrastructure commitments can deploy CoreIdentity with confidence that\n          the cryptographic surface is already quantum-hardened.",
        "          CoreIdentity is hardened against both current and future threats — implementing all three\n          NIST FIPS post-quantum standards in production: ML-DSA-65 (FIPS 204), ML-KEM-768 (FIPS 203),\n          and SLH-DSA-128s (FIPS 205). Healthcare organizations planning 5-year infrastructure\n          commitments can deploy CoreIdentity with confidence that the cryptographic surface is\n          already hardened.",
    ),
    # ---- SovereignGovernancePage ----
    (
        "src/pages/SovereignGovernancePage.tsx",
        "the only enforcement chain that has implemented all three",
        "          Sovereign AI infrastructure has a 10-20 year deployment horizon. Classical\n          cryptography will not survive that window. CoreIdentity is the only AI governance\n          platform that has implemented all three NIST FIPS post-quantum standards in\n          production simultaneously:",
        "          Sovereign AI infrastructure has a 10-20 year deployment horizon. Classical\n          cryptography will not survive that window. CoreIdentity is hardened against both\n          current and future threats — the only enforcement chain that has implemented all three\n          NIST FIPS post-quantum standards in production simultaneously:",
    ),
    # ---- CoreIdentityAdvisoryGroupPage (CIAG) ----
    (
        "src/pages/CoreIdentityAdvisoryGroupPage.tsx",
        "<title>CIAG — Provable AI Decision Governance Advisory | CoreIdentity</title>",
        "<title>CIAG — AI Governance Advisory | CoreIdentity</title>",
        "<title>CIAG — Provable AI Decision Governance Advisory | CoreIdentity</title>",
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
