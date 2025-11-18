// src/pages/More.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/more.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function More() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="more-wrapper">
      <Navbar />

      {/* SAME WALLPAPER AS HOME */}
      <div className="more-bg" />

      <main className="more-main">

        <section className="more-card" data-aos="zoom-in">
          <h2 className="more-title">
            CLICK HERE TO ADD YOURSELF OR REMOVE YOURSELF FROM OUR EMAIL OR FAX LIST.
          </h2>

          <div className="more-buttons">
            <button className="more-btn">Email list</button>
            <button className="more-btn">Fax list</button>
          </div>
        </section>

      </main>
    </div>
  );
}
