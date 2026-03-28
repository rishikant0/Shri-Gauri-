import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="main-navbar">
      <Link to="/" className="navbar__logo">
        <div className="navbar__logo-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18" />
            <path d="M5 21V7l8-4v18" />
            <path d="M13 7l8 4v10" />
            <path d="M9 9h0" />
            <path d="M9 13h0" />
            <path d="M9 17h0" />
          </svg>
        </div>
        Shri Gauri Hospitality
      </Link>

      <div className={`navbar__links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`navbar__link ${
              location.pathname === link.path ? "active" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div
        className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        id="mobile-menu-toggle"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;