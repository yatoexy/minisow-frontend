import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/order.css";
import { loadGoogleTranslate } from "../utils/useGoogleTranslate";

export default function Order() {

  useEffect(() => {
    loadGoogleTranslate();
  }, []);

  return (
    <div className="order-wrapper">
      <Navbar />

      {/* Background Image */}
      <div className="order-bg"></div>

      {/* Title */}
      <div className="order-top">
        <h1 className="order-heading">ORDER EASY INVOICE</h1>
        <p className="order-subtitle">and experience simpler invoicing</p>
      </div>

      {/* White Box */}
      <div className="order-box">
        <h2 className="order-title">Order</h2>

        <input type="text" placeholder="Company name" />
        <input type="text" placeholder="Contact person" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Postal number" />
        <input type="text" placeholder="City" />
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Mobile" />

        <button className="order-btn">Submit Order</button>
      </div>
    </div>
  );
}
