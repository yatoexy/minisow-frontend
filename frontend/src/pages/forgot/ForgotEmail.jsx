import React, { useState } from "react";
import "../../styles/forgot.css";
import { useNavigate } from "react-router-dom";

export default function ForgotEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleNext = () => {
    navigate(`/forgot-postal?email=${email}`);
  };

  return (
    <div className="forgot-wrapper">
      <div className="forgot-box">
        <h1 className="forgot-title">Forgot your password?</h1>

        <p>Please enter your email</p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button className="forgot-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
