import React, { useContext } from "react";                     
import Navbar from "../components/Navbar/Navbar";
import "../styles/login/desktop-login.css";

import { LanguageContext } from "../utils/LanguageContext";
import { useNavigate } from "react-router-dom";                // ✅ NEW: navigation

export default function LoginDesktop({ setLoggedIn }) {        // ✅ NEW: receive setLoggedIn

  const { translations } = useContext(LanguageContext);

  const navigate = useNavigate();                              // ✅ NEW

  // ✅ NEW — handle login click
  const handleLogin = () => {
    setLoggedIn(true);                                         
    navigate("/pricelist");                                    // redirect after login
  };

  return (
    <div className="login-wrapper">
      <Navbar />

      {/* Wallpaper */}
      <img
        src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg"
        className="login-bg"
        alt=""
      />

      <div className="login-box">
        
        {/* 🔴 Updated — translated title */}
        <h1 className="login-title">{translations.login}</h1>

        <div className="input-group">
          <label>{translations.email}</label>
          <input type="email" placeholder={translations.email} />
        </div>

        <div className="input-group">
          <label>{translations.password}</label>
          <input type="password" placeholder={translations.password} />
        </div>

        {/* 🟢 UPDATED — working login button */}
        <button className="btn-login" onClick={handleLogin}>
          {translations.login}
        </button>

        <div className="login-links">
          <a href="#">{translations.register}</a>
          <a href="#">{translations.forgot}</a>
        </div>
      </div>
    </div>
  );
}
