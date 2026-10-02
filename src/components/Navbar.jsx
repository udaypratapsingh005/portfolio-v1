import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo">
          UDAY PRATAP SINGH<span>.</span>DEV
        </a>

        <nav className={`navbar-nav ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/resume/resume.pdf"
            className="navbar-resume"
            target="_blank"
            rel="noreferrer"
            onClick={handleNavClick}
          >
            Resume ↗
          </a>
        </nav>

        <button
          type="button"
          className={`navbar-menu ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;