import React from "react";

const year = new Date().getFullYear();

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-white/60 hover:text-white/90 transition-colors">
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-sm tracking-[0.35em] text-white/80">CORE HOLDING CORPORATION</div>
            <div className="text-white/60 leading-relaxed">
              Governance-first infrastructure for safe, auditable agentic execution.
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-white/90">Portfolio</div>
            <div className="grid gap-2">
              <FooterLink href="/sentinel-os">Sentinel OS</FooterLink>
              <FooterLink href="/nexus-os">Nexus OS</FooterLink>
              <FooterLink href="/smartnation-ai">SmartNation AI</FooterLink>
              <FooterLink href="/ago-1">AGO‑1</FooterLink>
              <FooterLink href="/coreidentity-technologies">CoreIdentity Technologies</FooterLink>
              <FooterLink href="/coreidentity-ai-advisory-group">CoreIdentity AI Advisory Group</FooterLink>
              <FooterLink href="/agentidentity-systems">AgentIdentity Systems</FooterLink>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-white/90">Contact</div>
            <div className="grid gap-2 text-white/60">
              <div>
                <span className="text-white/60">Email: </span>
                <a className="text-white/80 hover:text-white" href="mailto:info@coreholdingcorp.com">
                  info@coreholdingcorp.com
                </a>
              </div>
              <div>Place of Business: Madison County, Virginia</div>
              <FooterLink href="/resources">Resources</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/contact">Contact Page</FooterLink>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© {year} Core Holding Corporation. All rights reserved.</div>
          <div className="flex gap-4">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/portfolio">Portfolio</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
