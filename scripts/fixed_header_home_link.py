#!/usr/bin/env python3
"""
fix: fixed header all pages + home link.

1. Header.tsx <header>: sticky -> fixed top-0 left-0 right-0 z-50 (solid bg-carbon).
2. Layout.tsx <main>: add top padding to clear the now-fixed header (h-16 = 4rem
   header + the original 2.5rem gap = pt-[calc(4rem+2.5rem)]).
3. Verify the company name/logo is wrapped in <Link to="/"> (already true).
4. Verify solid bg-carbon on header bar + mobile menu panel (already true).

Idempotent: each edit guarded on its post-change marker.
"""
import sys

EDITS = [
    # 1) header: sticky -> fixed, full-bleed
    (
        "src/components/Header.tsx",
        "fixed top-0 left-0 right-0 z-50",  # guard
        '<header className="sticky top-0 z-50 border-b border-line bg-carbon backdrop-blur">',
        '<header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-carbon backdrop-blur">',
        "fixed header",
    ),
    # 2) layout main: compensate for fixed header height
    (
        "src/components/Layout.tsx",
        "pt-[calc(4rem+2.5rem)]",  # guard
        '<main className="mx-auto container-max px-4 py-10">',
        '<main className="mx-auto container-max px-4 pb-10 pt-[calc(4rem+2.5rem)]">',
        "main top padding",
    ),
]

# Verifications only (must already be present; report status, never fail-create).
VERIFY = [
    ("src/components/Header.tsx", '<Link to="/" className="min-w-0 no-underline text-inherit">', "company name wrapped in <Link to=\"/\">"),
    ("src/components/Header.tsx", 'border-t border-line bg-carbon lg:hidden', "solid bg-carbon on mobile menu panel"),
    ("src/components/Header.tsx", 'bg-carbon backdrop-blur">', "solid bg-carbon on header bar"),
]


def main():
    ok = True
    for path, guard, find, replace, label in EDITS:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        if guard in content:
            print(f"[SKIP] {path} — {label} already applied.")
            continue
        if find not in content:
            print(f"[ERROR] {path} — {label}: anchor not found and guard absent.")
            ok = False
            continue
        with open(path, "w", encoding="utf-8") as f:
            f.write(content.replace(find, replace, 1))
        print(f"[OK] {path} — {label} applied.")

    for path, marker, label in VERIFY:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        if marker in content:
            print(f"[VERIFIED] {path} — {label}.")
        else:
            print(f"[ERROR] {path} — {label}: expected marker missing.")
            ok = False

    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
