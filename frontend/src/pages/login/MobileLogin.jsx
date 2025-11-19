import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import "../../styles/new-login/mobile.css";

export default function MobileLogin() {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="mobile-login-wrapper">

      {/* TITLE */}
      <h1 className="mobile-login-title">{translations.login}</h1>

      {/* EMAIL */}
      <div className="mobile-input-group">
        <label>{translations.email}</label>
        <input
          type="email"
          placeholder={translations.email}
        />
      </div>

      {/* PASSWORD */}
      <div className="mobile-input-group">
        <label>{translations.password}</label>
        <input
          type="password"
          placeholder={translations.password}
        />
      </div>

      {/* BUTTON */}
      <button className="mobile-btn-login">
        {translations.login}
      </button>

      {/* LINKS */}
      <div className="mobile-login-links">
        <a href="#">{translations.register}</a>
        <a href="#">{translations.forgot}</a>
      </div>
    </div>
  );
}
