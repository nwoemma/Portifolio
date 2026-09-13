import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md py-4 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          EN
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`relative px-4 py-2 font-medium text-white transition-colors after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:bg-blue-500 after:transition-all ${
                activeLink === link.href ? "after:w-4/5" : "after:w-0 hover:after:w-4/5"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="ml-2 px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            Hire Me
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-6 pt-4 pb-2 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-white font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
