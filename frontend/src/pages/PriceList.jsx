// src/pages/PriceList.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";   // ✅ BLUE TOP BAR
import "../styles/pricelist.css";                    // ✅ CORRECT CSS PATH

export default function PriceList() {
  const [products, setProducts] = useState([]);

  // ------------------------------
  // LOAD PRODUCTS FROM BACKEND
  // ------------------------------
  const loadProducts = async () => {
    const res = await fetch("http://localhost:4000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  // ------------------------------
  // UPDATE FIELD IN DB
  // ------------------------------
  const updateField = async (id, field, value) => {
    await fetch(`http://localhost:4000/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Header /> {/* 🔵 Blue header at top */}
      
      <div className="price-main">
        
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* RIGHT CONTENT AREA */}
        <div className="price-content">

          {/* ------------------------------
              HEADER BAR (SEARCH + BUTTONS)
          ------------------------------ */}
          <div className="price-header">
            <div className="search-group">
              <input placeholder="Search Article No..." />
              <input placeholder="Search Product..." />
            </div>

            <div className="header-buttons">
              <button className="btn new">New Product</button>
              <button className="btn print">Print List</button>
              <button className="btn mode">Advanced mode</button>
            </div>
          </div>

          {/* ------------------------------
                TABLE SCROLL CONTAINER
          ------------------------------ */}
          <div className="price-table-wrapper">
            <table className="price-table">
              <thead>
                <tr>
                  <th>Article No.</th>
                  <th>Product/Service</th>
                  <th>In Price</th>
                  <th>Price</th>
                  <th>Unit</th>
                  <th>In Stock</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>

                    <td>
                      <input
                        defaultValue={p.name}
                        onBlur={(e) => updateField(p.id, "name", e.target.value)}
                      />
                    </td>

                    <td>
                      <input
                        defaultValue={p.in_price}
                        onBlur={(e) => updateField(p.id, "in_price", e.target.value)}
                      />
                    </td>

                    <td>
                      <input
                        defaultValue={p.price}
                        onBlur={(e) => updateField(p.id, "price", e.target.value)}
                      />
                    </td>

                    <td>
                      <input
                        defaultValue={p.unit}
                        onBlur={(e) => updateField(p.id, "unit", e.target.value)}
                      />
                    </td>

                    <td>
                      <input
                        defaultValue={p.stock || ""}
                        onBlur={(e) => updateField(p.id, "stock", e.target.value)}
                      />
                    </td>

                    <td>
                      <input
                        defaultValue={p.description || ""}
                        onBlur={(e) => updateField(p.id, "description", e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </>
  );
}
