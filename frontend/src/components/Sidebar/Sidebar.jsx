import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

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

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>

      <ul className="sidebar-list">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            {item === "Pricelist" ? (
              <Link className="active-link" to="/pricelist">{item}</Link>
            ) : (
              <span className="disabled-link">{item}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
