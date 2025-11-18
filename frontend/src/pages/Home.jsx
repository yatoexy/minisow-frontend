import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar/Navbar";
import { loadGoogleTranslate } from "../utils/useGoogleTranslate";

export default function Home() {
  const [slide, setSlide] = useState(0);

  const slides = ["/invoice1.png", "/invoice2.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    loadGoogleTranslate();
  }, []);

  return (
    <div className="home-wrapper">
      <Navbar />

      <div className="home-bg"></div>

      {/* HERO */}
      <div className="home-content">
        <div className="home-left">
          <h1 className="home-title">
            MARKET LEADER IN SIMPLE <br />
            INVOICING SOFTWARE FOR <br />
            OVER 25 YEARS
          </h1>

          <p className="home-sub">
            Do like over 43,000 other companies.
            <br />
            Discover Sweden's Easiest Invoice Program.
          </p>
        </div>

        <div className="home-right">
          <img
            src={slides[slide]}
            className="home-slide-img fade-transition"
            alt="Invoice"
          />
        </div>
      </div>

      {/* FREE TRIAL */}
      <div className="free-trial-section">
        <h2 className="trial-title">Use and Try for Free</h2>

        <div className="trial-form-box">
          <input type="text" placeholder="Company name" />
          <input type="text" placeholder="Contact person" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Postal number" />
          <input type="text" placeholder="City" />
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Mobile" />

          <p className="trial-text">
            You can use and try LättFaktura completely free for 14 days...
          </p>

          <p className="trial-text">
            LättFaktura is so easy and self-explanatory...
          </p>

          <button className="trial-button">Invoice Now</button>
        </div>
      </div>
    </div>
  );
}
