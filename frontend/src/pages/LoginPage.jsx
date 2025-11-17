import React from "react";
import LoginDesktop from "./LoginDesktop";
import MobileLogin from "../mobile/MobileLogin";

export default function LoginPage() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div style={{ marginTop: "85px" }}>
      {isMobile ? <MobileLogin /> : <LoginDesktop />}
    </div>
  );
}
