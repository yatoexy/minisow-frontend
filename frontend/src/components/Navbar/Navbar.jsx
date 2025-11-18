import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { LanguageContext } from "../../utils/LanguageContext";
import { loadGoogleTranslate } from "../../utils/useGoogleTranslate";

export default function Navbar() {
  const { translations } = useContext(LanguageContext);

  const openGoogleTranslate = () => {
    loadGoogleTranslate();

    setTimeout(() => {
      const frame = document.querySelector(".goog-te-menu-frame");
      if (frame) {
        try {
          frame.contentWindow.document.body.click();
        } catch (e) {}
      }
    }, 1200);
  };

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
          <Link to="/home">Home</Link>
          <Link to="/order">Order</Link>
          <Link to="/customers">Our Customers</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/programs">Other Programs</Link>
          <Link to="/more">More</Link>

          {/* FLAG CLICK triggers Google Translate */}
          <div onClick={openGoogleTranslate} className="lang-dropdown">
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Google Translate element */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </nav>
  );
}
