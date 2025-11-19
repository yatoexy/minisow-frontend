import React from "react";
import "../../styles/forgot.css";

export default function ForgotError() {
  return (
    <div className="forgot-wrapper">
      <div className="forgot-box">
        <h1 className="error-title">Could not send password</h1>

        <p>
          Make sure you enter Postal number in correct Swedish format  
          like <b>123 45</b>.
        </p>

        <button
          className="forgot-btn"
          onClick={() => (window.location.href = "/forgot")}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
