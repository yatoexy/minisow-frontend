import React, { useState } from "react";
import "./LanguageSelector.css";

export default function LanguageSelector() {
  const [lang, setLang] = useState("se");

  return (
    <div className="lang-container">
      
      {/* Swedish Flag */}
      <img
        src="https://flagcdn.com/w40/se.png"
        className={`lang-flag ${lang === "se" ? "active" : ""}`}
        onClick={() => setLang("se")}
        alt="Swedish"
      />

      {/* UK Flag */}
      <img
        src="https://flagcdn.com/w40/gb.png"
        className={`lang-flag ${lang === "uk" ? "active" : ""}`}
        onClick={() => setLang("uk")}
        alt="English"
      />

    </div>
  );
}
