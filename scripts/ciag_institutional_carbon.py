#!/usr/bin/env python3
"""
feat: apply Institutional Carbon to the CIAG advisory intake page.

CoreIdentityAdvisoryGroupPage.tsx still carried the legacy blue/slate palette
(blue-gradient CTA, blue PHASE labels, white/xx body text). This transform
swaps those for the Institutional Carbon tokens (carbon / accent-gold / ink)
so the page matches the visual language of the new Layer pages.

Edits, in order:
  1. Eyebrow      -> accent-gold institutional eyebrow.
  2. CTA block    -> carbon/accent panel + gold button (matches InstitutionalCTA).
  3. body text    -> text-white/70  -> text-ink-secondary  (all occurrences).
  4. phase labels -> text-blue-400  -> text-accent          (all occurrences).

Idempotent: specific edits are guarded on their post-change markup; the two
sweeps are no-ops once the legacy token is gone.
"""
import sys

PAGE = "src/pages/CoreIdentityAdvisoryGroupPage.tsx"

EYEBROW_FIND = '<p className="text-xs uppercase tracking-wide text-white/60 mb-3">'
EYEBROW_REPLACE = '<p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-3">'
EYEBROW_GUARD = 'tracking-[0.22em] text-accent mb-3">'

CTA_FIND = '''        <div className="rounded-2xl bg-gradient-to-br from-blue-950 via-blue-900/60 to-slate-900 border border-blue-800/40 p-8 md:p-12 text-center">
          <p className="text-xs font-bold tracking-widest text-blue-400 mb-3 uppercase">
            Advisory Intake — August 2026
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Request a Discovery Session
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
            CoreIdentity is currently scheduling Phase 0 discovery sessions beginning August 2026. Complete the advisory intake to reserve your place and receive a recommended engagement path based on your organization's AI landscape and regulatory environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://advisory.coreidentitygroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
            >'''

CTA_REPLACE = '''        <div className="rounded-3xl border border-accent/20 bg-accent/5 p-8 md:p-12 text-center">
          <p className="text-xs font-bold tracking-widest text-accent mb-3 uppercase">
            Advisory Intake — August 2026
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
            Request a Discovery Session
          </h2>
          <p className="text-ink-secondary max-w-xl mx-auto mb-8 leading-relaxed">
            CoreIdentity is currently scheduling Phase 0 discovery sessions beginning August 2026. Complete the advisory intake to reserve your place and receive a recommended engagement path based on your organization's AI landscape and regulatory environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://advisory.coreidentitygroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-strong text-carbon font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            >'''

CTA_GUARD = 'rounded-3xl border border-accent/20 bg-accent/5 p-8 md:p-12 text-center'


def main():
    ok = True
    with open(PAGE, "r", encoding="utf-8") as f:
        content = f.read()

    # 1) eyebrow
    if EYEBROW_GUARD in content:
        print(f"[SKIP] {PAGE} — eyebrow already on accent.")
    elif EYEBROW_FIND in content:
        content = content.replace(EYEBROW_FIND, EYEBROW_REPLACE, 1)
        print(f"[OK] {PAGE} — eyebrow -> accent.")
    else:
        print(f"[ERROR] {PAGE} — eyebrow anchor not found.")
        ok = False

    # 2) CTA block
    if CTA_GUARD in content:
        print(f"[SKIP] {PAGE} — CTA already carbon/accent.")
    elif CTA_FIND in content:
        content = content.replace(CTA_FIND, CTA_REPLACE, 1)
        print(f"[OK] {PAGE} — CTA -> carbon/accent.")
    else:
        print(f"[ERROR] {PAGE} — CTA anchor not found.")
        ok = False

    # 3) body text sweep
    if "text-white/70" in content:
        n = content.count("text-white/70")
        content = content.replace("text-white/70", "text-ink-secondary")
        print(f"[OK] {PAGE} — text-white/70 -> text-ink-secondary ({n}x).")
    else:
        print(f"[SKIP] {PAGE} — no text-white/70 remaining.")

    # 4) phase label sweep
    if "text-blue-400" in content:
        n = content.count("text-blue-400")
        content = content.replace("text-blue-400", "text-accent")
        print(f"[OK] {PAGE} — text-blue-400 -> text-accent ({n}x).")
    else:
        print(f"[SKIP] {PAGE} — no text-blue-400 remaining.")

    with open(PAGE, "w", encoding="utf-8") as f:
        f.write(content)
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
