import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 px-6 py-10 text-sm text-white/60">
      <div className="mx-auto max-w-6xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-white">
            Core Holding Corporation
          </div>
          <div className="mt-1">
            Governance-first AI infrastructure
          </div>
        </div>

        <nav className="flex gap-6">
          <Link
            to="/portfolio"
            className="hover:text-white transition"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="hover:text-white transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
