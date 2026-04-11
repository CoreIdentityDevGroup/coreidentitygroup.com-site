import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 px-6 py-10 text-sm text-white/60">
      <div className="cidg-separator mb-10" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2 max-w-xs">
          <div className="text-white/80 font-medium tracking-wide">CoreIdentity Development Group</div>
          <div className="text-white/40 text-xs tracking-[0.12em] uppercase">Agentic Execution Governance</div>
          <div className="cidg-separator mt-4" />
          <div className="text-white/35 text-xs leading-relaxed pt-2">
            The control plane for autonomous enterprise AI.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="space-y-3">
            <div className="text-white/60 font-medium text-xs tracking-widest uppercase">Company</div>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white/80 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white/80 transition">About Us</Link></li>
              <li><Link to="/leadership" className="hover:text-white/80 transition">Leadership</Link></li>
              <li><Link to="/portfolio" className="hover:text-white/80 transition">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white/80 transition">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-white/60 font-medium text-xs tracking-widest uppercase">Platform</div>
            <ul className="space-y-2">
              <li><Link to="/sal" className="hover:text-white/80 transition">SAL Kernel</Link></li>
              <li><Link to="/sentinel-os" className="hover:text-white/80 transition">Sentinel OS</Link></li>
              <li><Link to="/nexus-os" className="hover:text-white/80 transition">Nexus OS</Link></li>
              <li><Link to="/smartnation-ai" className="hover:text-white/80 transition">SmartNation AI</Link></li>
              <li><Link to="/agentidentity-systems" className="hover:text-white/80 transition">Agent Identity</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-white/60 font-medium text-xs tracking-widest uppercase">Resources</div>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-white/80 transition">FAQ</Link></li>
              <li><Link to="/resources" className="hover:text-white/80 transition">Reference Library</Link></li>
              <li><Link to="/quantum-hardening" className="hover:text-white/80 transition">Quantum Hardening</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-white/60 font-medium text-xs tracking-widest uppercase">Get in Touch</div>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-white/80 transition">Contact Us</Link></li>
              <li><Link to="/coreidentity-ai-advisory-group" className="hover:text-white/80 transition">Advisory Group</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl flex items-center justify-between">
        <div className="text-xs text-white/25">
          © {new Date().getFullYear()} CoreIdentity Development Group. All rights reserved.
        </div>
        <div className="text-xs text-white/20 tracking-widest uppercase">
          Agentic Execution Governance
        </div>
      </div>
    </footer>
  );
}
