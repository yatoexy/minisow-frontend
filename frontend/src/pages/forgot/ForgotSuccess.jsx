import React from "react";
import "../../styles/forgot.css";

export default function ForgotSuccess() {
  return (
    <div className="forgot-wrapper">
      <div className="forgot-box">
        <h1 className="success-title">Password sent!</h1>

        <p>Please check your email inbox.</p>

        <button
          className="forgot-btn"
          onClick={() => (window.location.href = "/")}
        >
          Back to login
        </button>
      </div>
    </div>
  );
}
