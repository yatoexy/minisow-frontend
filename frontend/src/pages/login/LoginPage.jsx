import React, { useState, useEffect } from "react";
import LoginDesktop from "./LoginDesktop";
import MobileLogin from "./MobileLogin";

export default function LoginPage({ setLoggedIn }) {   // ⭐ setLoggedIn received
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <>
      {/* ⭐ Pass setLoggedIn into both components */}
      {isMobile ? (
        <MobileLogin setLoggedIn={setLoggedIn} />
      ) : (
        <LoginDesktop setLoggedIn={setLoggedIn} />
      )}
    </>
  );
}
