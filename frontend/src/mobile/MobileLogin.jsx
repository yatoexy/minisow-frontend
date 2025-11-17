import React from "react";
import "../styles/login/mobile-login.css";

export default function MobileLogin() {
  return (
    <div className="mobile-login-wrapper">

      <h1 className="mobile-login-title">Log in</h1>

      <div className="mobile-input-group">
        <label>Email</label>
        <input type="email" placeholder="Email address" />
      </div>

      <div className="mobile-input-group">
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </div>

      <button className="mobile-btn-login">Log in</button>

      <div className="mobile-login-links">
        <a href="#">Register</a>
        <a href="#">Forgot password?</a>
      </div>
    </div>
  );
}
