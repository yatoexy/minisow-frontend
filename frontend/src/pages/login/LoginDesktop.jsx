import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../../styles/new-login/desktop.css";
import { LanguageContext } from "../../utils/LanguageContext";
import { Link, useNavigate } from "react-router-dom";

export default function LoginDesktop({ setLoggedIn }) {
  const { translations } = useContext(LanguageContext);

  // ⭐ NEW state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // ⭐ UPDATED LOGIN FUNCTION
  const handleLogin = async () => {
    const res = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.status !== 200) {
      alert("Invalid login");
      return;
    }

    // ⭐ STORE USER INFO
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.contact_person);
    localStorage.setItem("company", data.business_name);

    setLoggedIn(true);

    navigate("/pricelist");
  };

  return (
    <>
      <Navbar />

      <div className="login-wrapper">
        <div className="login-box">
          
          <h1 className="login-title">{translations.login}</h1>

          {/* EMAIL */}
          <div className="input-group">
            <label>{translations.email}</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={translations.email}
            />
          </div>

          {/* PASSWORD */}
          <div className="input-group">
            <label>{translations.password}</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder={translations.password}
            />
          </div>

          {/* LOGIN BUTTON */}
          <button className="btn-login" onClick={handleLogin}>
            {translations.login}
          </button>

          {/* LINKS */}
          <div className="login-links">
            <Link to="/register">{translations.register}</Link>
            <Link to="/forgot">{translations.forgot}</Link>

          </div>

        </div>
      </div>
    </>
  );
}
