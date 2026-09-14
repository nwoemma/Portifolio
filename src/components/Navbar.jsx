import { NavLink } from "react-router-dom";
import { NAV_LINKS, HERO } from "../data/portfolioData";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F2F0E8]/95 backdrop-blur border-b border-[#D5D1C6]">
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg bg-[#D94A3A] text-white font-bold text-sm flex items-center justify-center">
            EN
          </span>

          <span className="font-semibold text-[#171717]">
            {HERO.name}
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm rounded-md transition-colors ${
                  isActive
                    ? "text-[#D94A3A] font-semibold"
                    : "text-[#68665F] hover:text-[#171717]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 text-sm text-[#68665F]">
          <span className="w-2 h-2 rounded-full bg-[#D94A3A]" />
          Available for work
        </div>

        <div className="md:hidden flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `text-sm whitespace-nowrap ${
                  isActive
                    ? "text-[#D94A3A] font-semibold"
                    : "text-[#68665F]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}