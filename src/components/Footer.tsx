import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 px-6 py-10 text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">

        {/* Brand */}
        <div className="space-y-2 max-w-xs">
          <div className="text-white/80 font-medium tracking-wide">CoreIdentity Development Group</div>
          <div className="text-white/40 text-xs tracking-[0.12em] uppercase">Agentic Execution Governance</div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-3" />
          <div className="text-white/35 text-xs leading-relaxed pt-1">
            The control plane for autonomous enterprise AI.
          </div>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 gap-10">

          {/* Company */}
          <div className="space-y-3">
            <div className="text-white/60 font-medium text-xs tracking-widest uppercase">Company</div>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white/80 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white/80 transition">About Us</Link></li>
              <li><Link to="/leadership" className="hover:text-white/80 transition">Leadership</Link></li>
              <li><Link to="/portfolio" className="hover:text-white/80 transition">Portfolio</Link></li>
              <li><Link to="/coreidentity-ai-advisory-group" className="hover:text-white/80 transition">Advisory Group</Link></li>
              <li><Link to="/coreidentity-technologies" className="hover:text-white/80 transition">CoreIdentity Technologies</Link></li>
              <li><Link to="/contact" className="hover:text-white/80 transition">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white/80 transition">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-white/80 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div className="space-y-3">
            <div className="text-white/60 font-medium text-xs tracking-widest uppercase">Platform</div>
            <ul className="space-y-2">
              <li><Link to="/sal" className="hover:text-white/80 transition">SAL Kernel</Link></li>
              <li><Link to="/sentinel-os" className="hover:text-white/80 transition">Sentinel</Link></li>
              <li><Link to="/nexus-os" className="hover:text-white/80 transition">Nexus</Link></li>
              <li><Link to="/smartnation-ai" className="hover:text-white/80 transition">SmartNation AI</Link></li>
              <li><Link to="/agentidentity-systems" className="hover:text-white/80 transition">Agent Identity Systems</Link></li>
              <li><Link to="/mcp" className="hover:text-white/80 transition">MCP Protocol</Link></li>
              <li><Link to="/ago-1" className="hover:text-white/80 transition">AGO-1</Link></li>
              <li><Link to="/quantum-hardening" className="hover:text-white/80 transition">Quantum Hardening</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 flex items-center justify-between flex-wrap gap-4">
        <div className="text-xs text-white/25">
          © {new Date().getFullYear()} CoreIdentity Development Group. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="/privacy" className="text-xs text-white/25 hover:text-white/50 transition">Privacy Policy</a>
          <a href="/terms" className="text-xs text-white/25 hover:text-white/50 transition">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
