#!/usr/bin/env python3
"""
fix: sticky header on mobile.

The <header> is already `sticky top-0 z-50` (positioning rewrite), but:
  1) its background is translucent (bg-carbon/70), so page content shows
     through the bar on scroll, and
  2) the mobile dropdown panel (#mobile-menu) has no background at all, so an
     open menu lets the page bleed through behind it on mobile.

This transform gives both a solid `bg-carbon` background. Idempotent: each edit
is guarded on its post-change className.
"""
import sys

HEADER = "src/components/Header.tsx"

EDITS = [
    # Solid background on the sticky header bar.
    (
        'bg-carbon backdrop-blur">',  # guard (only present after change)
        '<header className="sticky top-0 z-50 border-b border-line bg-carbon/70 backdrop-blur">',
        '<header className="sticky top-0 z-50 border-b border-line bg-carbon backdrop-blur">',
    ),
    # Solid background on the mobile dropdown panel.
    (
        'border-t border-line bg-carbon lg:hidden',  # guard
        '<div id="mobile-menu" className={["border-t border-line lg:hidden", open ? "block" : "hidden"].join(" ")}>',
        '<div id="mobile-menu" className={["border-t border-line bg-carbon lg:hidden", open ? "block" : "hidden"].join(" ")}>',
    ),
]


def main():
    ok = True
    with open(HEADER, "r", encoding="utf-8") as f:
        content = f.read()
    for guard, find, replace in EDITS:
        if guard in content:
            print(f"[SKIP] {HEADER} — already applied: {guard!r}")
            continue
        if find not in content:
            print(f"[ERROR] {HEADER} — anchor not found and guard absent: {find[:60]!r}")
            ok = False
            continue
        content = content.replace(find, replace, 1)
        print(f"[OK] {HEADER} — applied: {guard!r}")
    with open(HEADER, "w", encoding="utf-8") as f:
        f.write(content)
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
