// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Order from "./pages/Order";
import OurCustomers from "./pages/OurCustomers";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OtherPrograms from "./pages/OtherPrograms";
import More from "./pages/More";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>

        {/* DEFAULT → LOGIN PAGE */}
        <Route
          path="/"
          element={<LoginPage setLoggedIn={setLoggedIn} />}
        />

        {/* HOME PAGE */}
        <Route path="/home" element={<Home />} />

        {/* ORDER PAGE */}
        <Route path="/order" element={<Order />} />

        {/* OUR CUSTOMERS PAGE */}
        <Route path="/customers" element={<OurCustomers />} />

        {/* ABOUT US PAGE */}
        <Route path="/about" element={<AboutUs />} />

        {/* CONTACT US PAGE */}
        <Route path="/contact" element={<ContactUs />} />

        {/* OTHER PROGRAMS PAGE */}
        <Route path="/programs" element={<OtherPrograms />} />

        {/* MORE PAGE */}
        <Route path="/more" element={<More />} />

      </Routes>
    </Router>
  );
}
