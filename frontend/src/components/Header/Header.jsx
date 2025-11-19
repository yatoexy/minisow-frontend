import React from "react";
import "./Header.css";

export default function Header() {
  // ⭐ READ SAVED USER INFO
  const username = localStorage.getItem("username") || "User";
  const company = localStorage.getItem("company") || "Company";

  return (
    <div className="top-header">
      {/* LEFT SIDE */}
      <div className="header-left">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="profile-pic"
        />

        <div className="user-info">
          <h3 className="user-name">{username}</h3>
          <p className="company-name">{company}</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="header-right">
        <span>English</span>
        <img src="https://flagcdn.com/w40/gb.png" className="flag-icon" />
      </div>
    </div>
  );
}
