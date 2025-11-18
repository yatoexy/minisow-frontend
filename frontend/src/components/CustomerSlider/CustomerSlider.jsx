import React, { useState } from "react";
import "./CustomerSlider.css";

const slides = [
  {
    text: `A very good invoice program! Our company has used your invoice program since its inception in 2005 and is very satisfied. The program is easy to use and covers all our wishes.`,
    name: "Knut Arntzen",
  },
  {
    text: `After reviewing LättFaktura, I see that this system is as ingenious as it is simple. I am very satisfied and will order more programs.`,
    name: "Tor Bärland",
  },
  {
    text: `There is no other company I have dealt with that cares about their customers like you.`,
    name: "Tony Olofsson",
  },
];

export default function CustomerSlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 300);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
      setFade(true);
    }, 300);
  };

  return (
    <div className="slider-section">
      {/* Left arrow */}
      <button className="arrow left" onClick={prevSlide}>❮</button>

      {/* Slide content */}
      <div className={`slider-card ${fade ? "fade-in" : "fade-out"}`}>
        <div className="stars">★★★★★</div>
        <h2 className="slider-title">OUR CUSTOMERS about LättFaktura</h2>
        <p className="slider-text">{slides[index].text}</p>
        <h3 className="slider-author">{slides[index].name}</h3>

        {/* REAL SOCIAL ICONS WITH LINKS */}
        <div className="social-row">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f social-icon"></i>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram social-icon"></i>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in social-icon"></i>
          </a>

          <a href="https://pinterest.com" target="_blank" rel="noreferrer">
            <i className="fab fa-pinterest-p social-icon"></i>
          </a>
        </div>
      </div>

      {/* Right arrow */}
      <button className="arrow right" onClick={nextSlide}>❯</button>
    </div>
  );
}
