import React from "react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="mx-auto container-max px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="text-sm font-semibold tracking-[0.22em] uppercase">CORE HOLDING CORPORATION</div>
            <div className="text-sm text-white/70">Governance-first. Fail-closed. Evidence-driven.</div>
            <div className="text-sm text-white/65">Core Holding Corporation is the parent organization behind CoreIdentity Technologies, delivering governance-first infrastructure for agentic digital labor through Sentinel OS, Nexus OS, and SmartNation AI.</div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold tracking-wide">Navigation</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/coreidentity-technologies" className="hover:text-white">CoreIdentity Technologies</Link></li>
              <li><Link to="/sentinel-os" className="hover:text-white">Sentinel OS</Link></li>
              <li><Link to="/nexus-os" className="hover:text-white">Nexus OS</Link></li>
              <li><Link to="/smartnation-ai" className="hover:text-white">SmartNation AI</Link></li>
              <li><Link to="/coreidentity-advisory-group" className="hover:text-white">CoreIdentity Advisory Group</Link></li>
              <li><Link to="/agentidentity-systems" className="hover:text-white">AgentIdentity Systems</Link></li>
              <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold tracking-wide">Contact</div>
            <div className="text-sm">
              <a className="text-white/80 hover:text-white" href="mailto:info@coreholdingcorp.com">info@coreholdingcorp.com</a>
            </div>
            <div className="text-sm text-white/70">Place of Business: Madison County, Virginia</div>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/50">
          © 2026 Core Holding Corporation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
