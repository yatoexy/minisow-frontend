import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Sidebar() {
  const menuItems = [
    "Pricelist",
    "Products",
    "Categories",
    "Customers",
    "Invoices",
    "Reports",
    "Stock",
    "Suppliers",
    "Settings",
    "Analytics",
    "Notifications",
    "Users",
    "Billing",
    "Payments",
    "Backup",
    "Integrations",
    "Discounts",
    "Shipping",
    "Help Center",
    "Support"
  ];

  // Detect mobile/tablet
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`sidebar ${isMobile ? "sidebar-mobile" : ""} ${
        open ? "open" : ""
      }`}
    >

      {/* HAMBURGER BUTTON (Mobile/Tablet) */}
      {isMobile && (
        <FaBars
          className="sidebar-hamburger"
          onClick={() => setOpen(!open)}
        />
      )}

      {/* SIDEBAR MENU LIST */}
      {(!isMobile || open) && (
        <ul className="sidebar-list">
          <h2 className="sidebar-title">Menu</h2>

          {menuItems.map((item, index) => (
            <li
              key={index}
              className="sidebar-item"
              onClick={() => isMobile && setOpen(false)} // close menu on click (mobile)
            >
              {item === "Pricelist" ? (
                <Link className="active-link" to="/pricelist">
                  {item}
                </Link>
              ) : (
                <span className="disabled-link">{item}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
