// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ForgotEmail from "./pages/forgot/ForgotEmail";
import ForgotPostal from "./pages/forgot/ForgotPostal";
import ForgotSuccess from "./pages/forgot/ForgotSuccess";
import ForgotError from "./pages/forgot/ForgotError";

// LOGIN PAGE (renamed)
import LoginPage from "./pages/login/LoginDesktop";

// REGISTER PAGE
import Register from "./pages/Register";

// PRICELIST PAGE (after login)
import PriceList from "./pages/PriceList";

// STATIC PAGES
import Home from "./pages/Home";
import Order from "./pages/order";
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

        {/* LOGIN (DEFAULT PAGE) */}
        <Route 
          path="/" 
          element={<LoginPage setLoggedIn={setLoggedIn} />} 
        />

        {/* REGISTER PAGE */}
        <Route path="/register" element={<Register />} />

        {/* PRICELIST PAGE */}
        <Route
          path="/pricelist"
          element={
            loggedIn ? <PriceList /> : <LoginPage setLoggedIn={setLoggedIn} />
          }
        />

        {/* FORGOT PAGES */}
        <Route path="/forgot" element={<ForgotEmail />} />
        <Route path="/forgot-postal" element={<ForgotPostal />} />
        <Route path="/forgot-success" element={<ForgotSuccess />} />
        <Route path="/forgot-error" element={<ForgotError />} />

        {/* STATIC WEBSITE PAGES */}
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/customers" element={<OurCustomers />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/programs" element={<OtherPrograms />} />
        <Route path="/more" element={<More />} />

      </Routes>
    </Router>
  );
}
