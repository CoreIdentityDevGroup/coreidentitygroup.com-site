import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-sm font-semibold tracking-wide text-white">
          CORE HOLDING CORPORATION
        </Link>

        <nav className="flex items-center gap-6 text-sm text-white/70">
          <Link to="/portfolio" className="hover:text-white">
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
