import React from "react";
import "./Navbar.css";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT: Diamond Logo */}
      <div className="navbar-left">
        <img
          src="https://storage.123fakturera.se/public/icons/diamond.png"
          className="navbar-logo"
          alt="logo"
        />
      </div>

      {/* RIGHT: Menu + Language */}
      <div className="navbar-right">
        <a href="#">Home</a>
        <a href="#">Order</a>
        <a href="#">Our Customers</a>
        <a href="#">About us</a>
        <a href="#">Contact Us</a>

        {/* FLAG SELECTOR */}
        <LanguageSelector />
      </div>

    </nav>
  );
}
