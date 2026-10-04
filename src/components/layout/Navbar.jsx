import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "../../data/siteData";

export default function Navbar({ dark, onThemeToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Tulas International School home" onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt="Tulas International School" />
        </a>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>Admissions</a>
        </div>

        <div className="nav-actions">
          <button className="icon-button theme-toggle" onClick={onThemeToggle} aria-label="Toggle colour theme" data-cursor="hover">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="nav-cta" href="#contact" data-cursor="hover">Enquire <span>↗</span></a>
          <button className="icon-button menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
