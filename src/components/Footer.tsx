import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 px-6 py-10 text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <div className="text-white/80 font-medium">CoreIdentity Development Group</div>
          <div className="text-white/50">The control layer for governed AI</div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div className="space-y-3">
            <div className="text-white/80 font-medium">Company</div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white/80 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white/80 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white/80 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-white/80 font-medium">Resources</div>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="hover:text-white/80 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-white/80 font-medium">Get in touch</div>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:text-white/80 transition">
                  Use the contact form
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl text-xs text-white/35">
        © {new Date().getFullYear()} CoreIdentity Development Group. All rights reserved.
      </div>
    </footer>
  );
}
