import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Search, Heart, X } from "lucide-react";

import LanguageSwitcher from "../common/LanguageSwitcher";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/adhyay", label: "Adhyayas" },
    { to: "/search", label: "Search" },
    { to: "/bookmarks", label: "Bookmarks" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-saffron-100 bg-spiritual-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-saffron-500 text-2xl font-bold leading-none text-white shadow-md">
            <span lang="sa">📖</span>
          </div>

          <div>
            <div className="sanskrit text-lg font-bold text-spiritual-brown">
              भगवद्गीता
            </div>
            <div className="text-xs text-saffron-700">Bhagavad Gita</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-saffron-600"
                    : "text-spiritual-brown hover:text-saffron-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/search" className="rounded-full p-2 hover:bg-saffron-100">
            <Search size={20} />
          </Link>

          <LanguageSwitcher />

          <Link
            to="/login"
            className="rounded-full bg-spiritual-brown px-5 py-2.5 text-sm font-semibold text-white hover:bg-stone-800"
          >
            Login
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-lg p-2 hover:bg-saffron-100 lg:hidden"
        >
          <Menu size={25} />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-spiritual-cream lg:hidden">
          <div className="flex items-center justify-between border-b border-saffron-100 p-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="sanskrit text-xl font-bold"
            >
              भगवद्गीता
            </Link>

            <button onClick={() => setMobileOpen(false)}>
              <X size={26} />
            </button>
          </div>

          <div className="space-y-2 p-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-4 text-lg font-medium hover:bg-saffron-100"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-5">
              <LanguageSwitcher />
            </div>

            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-4 block rounded-xl bg-spiritual-brown px-5 py-3 text-center font-semibold text-white"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
