import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [translations, setTranslations] = useState({});

  // fetch translations whenever lang changes
  const loadTranslations = async (selectedLang) => {
    try {
      const res = await fetch(`http://localhost:4000/api/translations?lang=${selectedLang}`);
      const data = await res.json();
      setTranslations(data);
    } catch (err) {
      console.error("Translation fetch error:", err);
    }
  };

  // update language
  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    loadTranslations(lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
