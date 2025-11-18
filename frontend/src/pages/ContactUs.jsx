import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { loadGoogleTranslate } from "../utils/useGoogleTranslate";
import "../styles/contactUs.css";

export default function ContactUs() {
  useEffect(() => {
    loadGoogleTranslate();
  }, []);

  return (
    <div className="contact-wrapper">
      <Navbar />
      <div className="contact-bg"></div>

      <div className="contact-card">
        <h1 className="contact-title">I'M GLAD YOU WANT TO CONTACT US.</h1>

        <p className="contact-text">Click here to send an email.</p>

        <a
          href="mailto:info@FakturaProgram.se"
          className="contact-email-btn"
        >
          info@FakturaProgram.se
        </a>

        <p className="contact-text">
          If you prefer to send by regular mail – send to:
          <br />
          <strong>LättFaktura</strong>
          <br />
          Box 2826, 187 28 Täby
          <br />Telephone: 08-555 00 500
          <br />Fax: 08-555 00 501
        </p>
      </div>

      {/* FOOTER SOCIAL ICONS */}
      <div className="contact-socials">
        <a href="https://facebook.com" target="_blank" className="icon facebook">
          <i className="fab fa-facebook-f"></i>
        </a>

        <a href="https://instagram.com" target="_blank" className="icon instagram">
          <i className="fab fa-instagram"></i>
        </a>

        <a href="https://linkedin.com" target="_blank" className="icon linkedin">
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a href="https://pinterest.com" target="_blank" className="icon pinterest">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>
    </div>
  );
}
