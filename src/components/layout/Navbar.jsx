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
    <>
      {/* DESKTOP / MAIN NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-saffron-100 bg-[#fffaf0]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-saffron-500 text-2xl font-bold leading-none text-white shadow-md">
              <span lang="sa">📖</span>
            </div>

            <div>
              <div className="sanskrit text-lg font-bold text-spiritual-brown">
                श्रीमद्भगवद्गीता
              </div>

              <div className="text-xs text-saffron-700">Bhagavad Gita</div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
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

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/search"
              className="rounded-full p-2 text-spiritual-brown hover:bg-saffron-100"
              aria-label="Search"
            >
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

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg bg-saffron-50 p-2 text-spiritual-brown hover:bg-saffron-100 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={25} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[9999] block min-h-screen w-full bg-[#fffaf0] opacity-100 lg:hidden"
          style={{
            backgroundColor: "#fffaf0",
            opacity: 1,
          }}
        >
          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between border-b border-saffron-200 bg-[#fffaf0] px-4 py-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-saffron-500 text-xl shadow-sm">
                📖
              </div>

              <div>
                <div className="sanskrit text-lg font-bold text-spiritual-brown">
                  भगवद्गीता
                </div>

                <div className="text-xs text-saffron-700">Bhagavad Gita</div>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-spiritual-brown shadow-sm hover:bg-saffron-100"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          {/* MOBILE LINKS */}
          <div className="min-h-[calc(100vh-73px)] overflow-y-auto bg-[#fffaf0] px-5 py-6">
            <nav className="space-y-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl border px-4 py-4 text-lg font-semibold transition ${
                      isActive
                        ? "border-saffron-200 bg-saffron-100 text-saffron-700"
                        : "border-transparent bg-white text-spiritual-brown hover:bg-saffron-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* LANGUAGE */}
            <div className="mt-6 rounded-xl border border-saffron-200 bg-white p-4">
              <p className="mb-3 text-sm font-semibold text-gray-600">
                Language
              </p>

              <LanguageSwitcher />
            </div>

            {/* LOGIN */}
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-5 block rounded-xl bg-spiritual-brown px-5 py-4 text-center font-bold text-white shadow-sm hover:bg-stone-800"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
