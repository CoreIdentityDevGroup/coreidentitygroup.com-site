import React from "react";
import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">
          Core Holding Corporation
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link to="/portfolio" className="hover:underline">
            Portfolio
          </Link>

          <Link to="/coreidentitytechnologies" className="hover:underline">
            CoreIdentity Technologies
          </Link>

          <Link to="/sentinelos" className="hover:underline">
            Sentinel OS
          </Link>

          <Link to="/nexusos" className="hover:underline">
            Nexus OS
          </Link>

          <Link to="/smartnationai" className="hover:underline">
            SmartNation AI
          </Link>

          <Link to="/coreidentityaiadvisorygroup" className="hover:underline">
            Advisory Group
          </Link>

          <Link to="/agentidentitysystems" className="hover:underline">
            AgentIdentity Systems
          </Link>

          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
