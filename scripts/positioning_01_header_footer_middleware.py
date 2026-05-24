#!/usr/bin/env python3
"""
Positioning rewrite — Group 01: Header, Footer, and bot pre-render middleware taglines.

Replaces the old category language ("control layer" / "control plane" /
"Agentic Execution Governance") with the new positioning:
"Institutional trust infrastructure for autonomous systems."

Idempotent: each edit skips if its GUARD (the new text) is already present,
and errors loudly if the FIND anchor is missing (file drifted) and the new
text is not yet present.
"""
import sys

# (path, guard_substring, find, replace)
EDITS = [
    # --- Header sub-tagline under the brand name ---
    (
        "src/components/Header.tsx",
        "Institutional Trust Infrastructure for Autonomous Systems",
        "The Control Layer for Governed AI",
        "Institutional Trust Infrastructure for Autonomous Systems",
    ),
    # --- Footer eyebrow (uppercase category line) ---
    (
        "src/components/Footer.tsx",
        '">Institutional Trust Infrastructure</div>',
        '">Agentic Execution Governance</div>',
        '">Institutional Trust Infrastructure</div>',
    ),
    # --- Footer tagline line ---
    (
        "src/components/Footer.tsx",
        "Provable proof that autonomous systems acted within authority.",
        "The control plane for autonomous enterprise AI.",
        "Provable proof that autonomous systems acted within authority.",
    ),
    # --- Middleware homepage bot/social card: title ---
    (
        "functions/_middleware.js",
        "CoreIdentity — Institutional Trust Infrastructure for Autonomous Systems",
        "'CoreIdentity - Governance Infrastructure for Agentic AI',",
        "'CoreIdentity — Institutional Trust Infrastructure for Autonomous Systems',",
    ),
    # --- Middleware homepage bot/social card: description ---
    (
        "functions/_middleware.js",
        "you need institutional-grade proof your agents acted correctly",
        "'The control plane for autonomous enterprise AI. Identity enforcement, policy authorization, and immutable audit.',",
        "'When you delegate consequential authority to AI, you need institutional-grade proof your agents acted correctly. CoreIdentity makes every AI decision provable — authorized, attributed, and auditable.',",
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
        print(f"        Expected anchor: {find!r}")
        return False

    content = content.replace(find, replace, 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"[OK] {path} — applied: {guard[:48]!r}")
    return True


def main():
    ok = True
    for path, guard, find, replace in EDITS:
        ok = apply(path, guard, find, replace) and ok
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
