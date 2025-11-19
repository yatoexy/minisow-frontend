import React, { useState } from "react";
import "../../styles/forgot.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function ForgotPostal() {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const email = query.get("email");

  const [postal, setPostal] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:4000/api/auth/forgot-step2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, postal })
    });

    const data = await res.json();

    if (data.success) {
      navigate("/forgot-success");
    } else {
      navigate("/forgot-error");
    }
  };

  return (
    <div className="forgot-wrapper">
      <div className="forgot-box">
        <h1 className="forgot-title">Forgot your password?</h1>

        <p>Please enter your Postal code</p>

        <input
          type="text"
          placeholder="Postal code"
          value={postal}
          onChange={e => setPostal(e.target.value)}
        />

        <button className="forgot-btn" onClick={handleSubmit}>
          Send password
        </button>
      </div>
    </div>
  );
}
