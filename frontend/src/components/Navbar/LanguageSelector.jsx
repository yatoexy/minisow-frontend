import { useContext, useState } from "react";
import { LanguageContext } from "../../utils/LanguageContext";
import "./LanguageSelector.css";

export default function LanguageSelector() {
  const { lang, changeLanguage } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  const flags = {
    en: "https://flagcdn.com/w40/gb.png",
    sv: "https://flagcdn.com/w40/se.png",
  };

  return (
    <div className="lang-dropdown">

      {/* CURRENT FLAG */}
      <img
        src={flags[lang]}
        className="lang-current"
        onClick={() => setOpen(!open)}
        alt="current language"
      />

      {/* DROPDOWN OPTIONS */}
      {open && (
        <div className="lang-options">
          <div
            className="lang-option"
            onClick={() => {
              changeLanguage("en");
              setOpen(false);
            }}
          >
            <img src={flags.en} /> English
          </div>

          <div
            className="lang-option"
            onClick={() => {
              changeLanguage("sv");
              setOpen(false);
            }}
          >
            <img src={flags.sv} /> Swedish
          </div>
        </div>
      )}
    </div>
  );
}
