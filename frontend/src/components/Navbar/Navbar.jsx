import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { LanguageContext } from "../../utils/LanguageContext";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const { translations } = useContext(LanguageContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LEFT: Hamburger + Logo */}
        <div className="navbar-left">

          {isMobile && (
            <FaBars
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}

          <img
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            className="navbar-logo"
            alt="logo"
          />
        </div>

        {/* RIGHT: Desktop Menu */}
        {!isMobile && (
          <div className="navbar-right">
            <Link to="/home">{translations.home}</Link>
            <Link to="/order">{translations.order}</Link>
            <Link to="/customers">{translations.customers}</Link>
            <Link to="/about">{translations.about}</Link>
            <Link to="/contact">{translations.contact}</Link>
            <Link to="/programs">{translations.programs}</Link>
            <Link to="/more">{translations.more}</Link>

            <div className="lang-dropdown">
              <LanguageSelector />
            </div>
          </div>
        )}
      </div>

      {/* MOBILE LEFT-SIDE MENU */}
      {isMobile && (
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link to="/home" onClick={() => setMenuOpen(false)}>{translations.home}</Link>
          <Link to="/order" onClick={() => setMenuOpen(false)}>{translations.order}</Link>
          <Link to="/customers" onClick={() => setMenuOpen(false)}>{translations.customers}</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>{translations.about}</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>{translations.contact}</Link>
          <Link to="/programs" onClick={() => setMenuOpen(false)}>{translations.programs}</Link>
          <Link to="/more" onClick={() => setMenuOpen(false)}>{translations.more}</Link>

          <div className="lang-dropdown mobile-lang">
            <LanguageSelector />
          </div>
        </div>
      )}
    </nav>
  );
}
