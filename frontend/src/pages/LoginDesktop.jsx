import React from "react";
import Navbar from "../components/Navbar/Navbar";

// IMPORTANT — FIX THIS LINE
import "../styles/login/desktop-login.css";

export default function LoginDesktop() {
  return (
    <div className="login-wrapper">
      <Navbar />

     

      <div className="login-box">
        <h1 className="login-title">Log in</h1>

        <div className="input-group">
          <label>Enter your email address</label>
          <input type="email" placeholder="Email address" />
        </div>

        <div className="input-group">
          <label>Enter your password</label>
          <input type="password" placeholder="Password" />
        </div>

        <button className="btn-login">Log in</button>

        <div className="login-links">
          <a href="#">Register</a>
          <a href="#">Forgotten password?</a>
        </div>
      </div>
    </div>
  );
}
