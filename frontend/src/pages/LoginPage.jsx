import React, { useContext } from "react";
import LoginDesktop from "./LoginDesktop";
import MobileLogin from "../mobile/MobileLogin";
import { LanguageContext } from "../utils/LanguageContext";

export default function LoginPage({ setLoggedIn }) {   // ✅ receive setLoggedIn

  const { translations } = useContext(LanguageContext);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div style={{ marginTop: "85px" }}>
      {/* Pass setLoggedIn to BOTH versions */}
      {isMobile ? 
        <MobileLogin setLoggedIn={setLoggedIn} /> : 
        <LoginDesktop setLoggedIn={setLoggedIn} />
      }
    </div>
  );
}
