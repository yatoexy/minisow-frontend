// src/pages/OtherPrograms.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/otherPrograms.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OtherPrograms() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="programs-wrapper">
      <Navbar />

      {/* Background */}
      <div className="programs-bg" />

      <main className="programs-main">

        {/* TITLE */}
        <h1 className="programs-title" data-aos="fade-up">
          OUR PROGRAMS
        </h1>

        {/* PROGRAM GRID */}
        <section className="programs-grid">

          <div className="program-box" data-aos="zoom-in">
            <img 
              src="https://images.unsplash.com/photo-1506784365847-bbad939e9335"
              alt="LF Time"
              className="prog-img"
            />
            <p>LF Time</p>
          </div>

          <div className="program-box" data-aos="zoom-in">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
              alt="LF Calculation"
              className="prog-img"
            />
            <p>LF Calculation</p>
          </div>

          <div className="program-box" data-aos="zoom-in">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              alt="LF Customer Follow-up"
              className="prog-img"
            />
            <p>LF Customer Follow-up</p>
          </div>

          <div className="program-box" data-aos="zoom-in">
            <img 
              src="https://images.unsplash.com/photo-1581093448798-5d2a532a1ee5"
              alt="LF Warehouse Inventory"
              className="prog-img"
            />
            <p>LF Warehouse Inventory</p>
          </div>

          <div className="program-box" data-aos="zoom-in">
            <img 
              src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5"
              alt="LF Member Invoicing"
              className="prog-img"
            />
            <p>LF Member Invoicing</p>
          </div>

          <div className="program-box" data-aos="zoom-in">
            <img 
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
              alt="LF Quote"
              className="prog-img"
            />
            <p>LF Quote</p>
          </div>

        </section>

        {/* INVOICE SECTION */}
        <section className="invoice-section">
          <div className="invoice-left" data-aos="fade-right">
            <img
              src="/invoice1.png"
              className="invoice-img"
              alt="Invoice Example"
            />
          </div>

          <div className="invoice-right" data-aos="fade-left">
            <h2 className="invoice-title">Easy Invoicing</h2>
            <p className="invoice-text">
              Create beautiful invoices quickly with our powerful invoicing module.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
