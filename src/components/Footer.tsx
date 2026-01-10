export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-xs font-medium tracking-[0.22em] text-white/60">
              CORE HOLDING CORPORATION
            </div>

            {/* Updated footer tagline (non-duplicate) */}
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Governance infrastructure that defines authority, enforces
              constraints, and preserves auditability across agentic execution.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/80">Portfolio</div>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a className="hover:text-white/80 transition" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="hover:text-white/80 transition" href="/sentinel-os">
                  Sentinel OS
                </a>
              </li>
              <li>
                <a className="hover:text-white/80 transition" href="/nexus-os">
                  Nexus OS
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white/80 transition"
                  href="/smartnation-ai"
                >
                  SmartNation AI
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/80">Company</div>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>
                <a
                  className="hover:text-white/80 transition"
                  href="/coreidentity-technologies"
                >
                  CoreIdentity Technologies
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white/80 transition"
                  href="/coreidentity-ai-advisory-group"
                >
                  CoreIdentity AI Advisory Group
                </a>
              </li>
              <li>
                <a className="hover:text-white/80 transition" href="/resources">
                  Resources
                </a>
              </li>
              <li>
                <a className="hover:text-white/80 transition" href="/faq">
                  FAQ
                </a>
              </li>
              <li>
                <a className="hover:text-white/80 transition" href="/contact">
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white/80 transition"
                  href="/contact">
Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-xs text-white/40">
          © {new Date().getFullYear()} Core Holding Corporation. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
