import socialLinks from "../data/socialLinks";

const footerLinks = [
  {
    label: "GitHub",
    href: socialLinks.github,
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#home" className="footer-logo">
            UDAY PRATAP <span>SINGH</span>
          </a>

          <p className="footer-tagline">
            Building, learning, and improving.
          </p>

          <div className="footer-links">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Uday Pratap Singh</span>

          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;