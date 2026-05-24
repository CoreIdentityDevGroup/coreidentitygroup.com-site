#!/usr/bin/env python3
"""
feat: pre-render social/bot cards for the three new /governance/* routes.

Adds entries to the PAGES map in functions/_middleware.js for:
  /governance/legal
  /governance/critical-infrastructure
  /governance/defense

title + desc mirror each page's <Helmet> meta exactly (the middleware card
must match page meta). Follows the existing PAGES entry pattern (same shape as
/platform and the /layer-* surfaces).

Idempotent: guarded on the presence of the "/governance/legal" key; inserts
the three entries immediately after the /layer-d entry.
"""
import sys

MW = "functions/_middleware.js"

FIND = '''  "/layer-d": {
    title: "Cryptographic Hardening — Layer D | CoreIdentity",
    desc: "Post-quantum protection across every cryptographic surface — the first commercial platform in production with all three NIST FIPS standards (203/204/205)."
  }
};'''

REPLACE = '''  "/layer-d": {
    title: "Cryptographic Hardening — Layer D | CoreIdentity",
    desc: "Post-quantum protection across every cryptographic surface — the first commercial platform in production with all three NIST FIPS standards (203/204/205)."
  },
  "/governance/legal": {
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

GUARD = '"/governance/legal":'


def main():
    with open(MW, "r", encoding="utf-8") as f:
        content = f.read()
    if GUARD in content:
        print(f"[SKIP] {MW} — governance cards already present.")
        sys.exit(0)
    if FIND not in content:
        print(f"[ERROR] {MW} — anchor not found and guard absent.")
        sys.exit(1)
    with open(MW, "w", encoding="utf-8") as f:
        f.write(content.replace(FIND, REPLACE, 1))
    print(f"[OK] {MW} — added cards for legal / critical-infrastructure / defense.")
    sys.exit(0)


if __name__ == "__main__":
    main()
