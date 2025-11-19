import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/register/register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    business_name: "",
    contact_person: "",
    address: "",
    postal_number: "",
    city: "",
    email: "",
    phone_number: "",
    password: "",
    language: "en",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // remove error while typing
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.business_name) newErrors.business_name = "Business name is required";
    if (!form.contact_person) newErrors.contact_person = "Contact person is required";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.postal_number) newErrors.postal_number = "Postal number is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone_number) newErrors.phone_number = "Phone number is required";
    if (!form.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // if no errors → valid
  };

  const handleRegister = async () => {
    if (!validateForm()) {
      const firstError = document.querySelector(".input-error");
      if (firstError) firstError.scrollIntoView({ behavior: "smooth" });
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Registration failed");
        return;
      }

      alert("Registration successful!");
      navigate("/"); // redirect to login

    } catch (err) {
      alert("Error registering");
    }
  };

  return (
    <>
      <Navbar />

      <div className="register-wrapper">
        <div className="register-box">
          <h1 className="register-title">Register</h1>

          {/* BUSINESS NAME */}
          <input
            className={errors.business_name ? "input-error" : ""}
            name="business_name"
            placeholder="Business Name"
            onChange={handleChange}
          />
          {errors.business_name && <p className="error-text">{errors.business_name}</p>}

          {/* CONTACT PERSON */}
          <input
            className={errors.contact_person ? "input-error" : ""}
            name="contact_person"
            placeholder="Contact Person"
            onChange={handleChange}
          />
          {errors.contact_person && <p className="error-text">{errors.contact_person}</p>}

          {/* ADDRESS */}
          <input
            className={errors.address ? "input-error" : ""}
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />
          {errors.address && <p className="error-text">{errors.address}</p>}

          {/* POSTAL NUMBER */}
          <input
            className={errors.postal_number ? "input-error" : ""}
            name="postal_number"
            placeholder="Postal Number"
            onChange={handleChange}
          />
          {errors.postal_number && <p className="error-text">{errors.postal_number}</p>}

          {/* CITY */}
          <input
            className={errors.city ? "input-error" : ""}
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
          {errors.city && <p className="error-text">{errors.city}</p>}

          {/* EMAIL */}
          <input
            className={errors.email ? "input-error" : ""}
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          {/* PHONE */}
          <input
            className={errors.phone_number ? "input-error" : ""}
            name="phone_number"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          {errors.phone_number && <p className="error-text">{errors.phone_number}</p>}

          {/* PASSWORD */}
          <input
            className={errors.password ? "input-error" : ""}
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}

          {/* BUTTON */}
          <button className="btn-register" onClick={handleRegister}>
            Invoice Now
          </button>
        </div>
      </div>
    </>
  );
}
