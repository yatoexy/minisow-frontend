import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { LanguageContext } from "../../utils/LanguageContext";

export default function Navbar() {
  const hideOnLogin = window.location.pathname === "/login";
  if (hideOnLogin) return null;

  const { translations } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LEFT LOGO */}
        <div className="navbar-left">
          <img
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            className="navbar-logo"
            alt="logo"
          />
        </div>

        {/* RIGHT MENU */}
        <div className="navbar-right">
          <Link to="/home">{translations.home}</Link>
          <Link to="/order">{translations.order}</Link>
          <Link to="/customers">{translations.customers}</Link>
          <Link to="/about">{translations.about}</Link>
          <Link to="/contact">{translations.contact}</Link>
          <Link to="/programs">{translations.programs}</Link>
          <Link to="/more">{translations.more}</Link>

          {/* FLAG LANGUAGE SWITCH */}
          <div className="lang-dropdown">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
