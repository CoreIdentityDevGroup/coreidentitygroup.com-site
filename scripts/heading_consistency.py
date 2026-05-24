#!/usr/bin/env python3
"""
fix: heading consistency sitewide.

Enforces the heading standard at the shared primitives so every page that uses
them inherits it (About, Contact, Portfolio, CIAG, FAQ, Leadership, Founders,
Resources, Privacy, Terms, etc.):

  * Eyebrow     -> text-accent (gold), uppercase, tracking-widest, text-xs, font-medium
  * PageTitle   (h1) -> font-serif, text-ink, display-xl / display-2xl
  * SectionTitle(h2) -> font-serif, text-ink, display-md / display-lg

Plus removes the duplicate "COREIDENTITY DEVELOPMENT GROUP" header in
LeadershipPage.tsx (a manual div sitting directly above the <Eyebrow>).

Idempotent: each edit guarded on its post-change marker.
"""
import sys

EDITS = [
    # ui.tsx Eyebrow -> gold accent standard
    (
        "src/components/ui.tsx",
        "uppercase tracking-widest text-accent mb-4",  # guard
        '<div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-4">',
        '<div className="text-xs font-medium uppercase tracking-widest text-accent mb-4">',
        "Eyebrow -> accent gold",
    ),
    # ui.tsx PageTitle (h1) -> serif display + ink
    (
        "src/components/ui.tsx",
        'font-serif text-display-xl md:text-display-2xl tracking-tight text-ink',  # guard
        '<h1 className="text-4xl md:text-6xl font-semibold tracking-tight">',
        '<h1 className="font-serif text-display-xl md:text-display-2xl tracking-tight text-ink">',
        "PageTitle -> serif display",
    ),
    # ui.tsx SectionTitle (h2) -> serif display + ink
    (
        "src/components/ui.tsx",
        'font-serif text-display-md md:text-display-lg tracking-tight text-ink',  # guard
        '<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">',
        '<h2 className="font-serif text-display-md md:text-display-lg tracking-tight text-ink">',
        "SectionTitle -> serif display",
    ),
    # LeadershipPage: remove duplicate company-name header (keep the <Eyebrow>)
    (
        "src/pages/LeadershipPage.tsx",
        "ABSENT::" + '<div className="text-xs font-medium tracking-[0.22em] text-white/40">',  # sentinel: guard = absence
        '''      <div className="space-y-4">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40">
          COREIDENTITY DEVELOPMENT GROUP
        </div>
        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>''',
        '''      <div className="space-y-4">
        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>''',
        "remove duplicate company header",
    ),
]


def main():
    ok = True
    for path, guard, find, replace, label in EDITS:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        # Guard semantics: a normal guard means "present => already done".
        # An "ABSENT::" guard means "the legacy marker is gone => already done".
        if guard.startswith("ABSENT::"):
            marker = guard[len("ABSENT::"):]
            already = marker not in content
        else:
            already = guard in content
        if already:
            print(f"[SKIP] {path} — {label} already applied.")
            continue
        if find not in content:
            print(f"[ERROR] {path} — {label}: anchor not found and guard absent.")
            ok = False
            continue
        with open(path, "w", encoding="utf-8") as f:
            f.write(content.replace(find, replace, 1))
        print(f"[OK] {path} — {label} applied.")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
