import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ForgotEmail from "./pages/forgot/ForgotEmail";
import ForgotPostal from "./pages/forgot/ForgotPostal";
import ForgotSuccess from "./pages/forgot/ForgotSuccess";
import ForgotError from "./pages/forgot/ForgotError";

// LOGIN PAGE
import LoginPage from "./pages/login/LoginDesktop";

// REGISTER PAGE
import Register from "./pages/Register";

// PRICELIST PAGE
import PriceList from "./pages/PriceList";

// STATIC PAGES
import Home from "./pages/Home";
import Order from "./pages/order";    // ✔ lowercase file support
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

        <Route path="/" element={<LoginPage setLoggedIn={setLoggedIn} />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/pricelist"
          element={loggedIn ? <PriceList /> : <LoginPage setLoggedIn={setLoggedIn} />}
        />

        <Route path="/forgot" element={<ForgotEmail />} />
        <Route path="/forgot-postal" element={<ForgotPostal />} />
        <Route path="/forgot-success" element={<ForgotSuccess />} />
        <Route path="/forgot-error" element={<ForgotError />} />

        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Order />} />   {/* ✔ fixed */}
        <Route path="/customers" element={<OurCustomers />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/programs" element={<OtherPrograms />} />
        <Route path="/more" element={<More />} />

      </Routes>
    </Router>
  );
}
