import React, { useContext } from "react";                   // 🔵 UPDATED — added useContext
import "../styles/login/mobile-login.css";

import { LanguageContext } from "../utils/LanguageContext";  // 🔵 UPDATED — import context

export default function MobileLogin() {

  const { translations } = useContext(LanguageContext);      // 🔵 UPDATED — load translated text

  return (
    <div className="mobile-login-wrapper">

      {/* 🔵 UPDATED — translated login title */}
      <h1 className="mobile-login-title">{translations.login}</h1>

      <div className="mobile-input-group">
        {/* 🔵 UPDATED */}
        <label>{translations.email}</label>
        <input type="email" placeholder={translations.email} />
      </div>

      <div className="mobile-input-group">
        {/* 🔵 UPDATED */}
        <label>{translations.password}</label>
        <input type="password" placeholder={translations.password} />
      </div>

      {/* 🔵 UPDATED */}
      <button className="mobile-btn-login">{translations.login}</button>

      <div className="mobile-login-links">
        {/* 🔵 UPDATED */}
        <a href="#">{translations.register}</a>
        <a href="#">{translations.forgot}</a>
      </div>
    </div>
  );
}
