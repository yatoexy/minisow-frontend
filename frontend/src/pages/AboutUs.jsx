import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomerSlider from "../components/CustomerSlider/CustomerSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/aboutus.css";
import { loadGoogleTranslate } from "../utils/useGoogleTranslate";

export default function AboutUs() {
  useEffect(() => {
    // Init AOS animation
    AOS.init({ duration: 1200, once: true });

    // Load Google Translate
    loadGoogleTranslate();
  }, []);

  return (
    <div className="aboutus-wrapper">
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="aboutus-section">
        <h1 data-aos="fade-up">WE STARTED SMALL</h1>

        <h2 data-aos="fade-up" className="aboutus-sub">
          without money but with an idea
        </h2>

        <p data-aos="fade-up" className="aboutus-text">
          Today, we are the market leader in simple invoicing software with
          <strong> 43,000+ customers </strong> all around the world.
        </p>

        <img
          data-aos="zoom-in"
          className="aboutus-img-large"
          alt="Wallpaper"
          src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg"
        />
      </section>

      {/* SECTION 2 — LEFT IMAGE, RIGHT TEXT */}
      <section className="aboutus-row">
        <img
          data-aos="fade-right"
          className="aboutus-img"
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="scenery"
        />

        <div className="aboutus-textbox" data-aos="fade-left">
          <h2>
            CUSTOMER <span>in focus</span>
          </h2>
          <p>
            Our customers should always be satisfied. We offer remote support
            and solve problems quickly.
          </p>
        </div>
      </section>

      {/* SECTION 3 — RIGHT IMAGE, LEFT TEXT */}
      <section className="aboutus-row reverse">
        <div className="aboutus-textbox" data-aos="fade-right">
          <h2>
            IN THE EVENINGS <span>AND WEEKENDS</span>
          </h2>
          <p>
            Many invoice after work hours. That's why we provide support during
            evenings and weekends.
          </p>
        </div>

        <img
          data-aos="fade-left"
          className="aboutus-img"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="scenery"
        />
      </section>

      {/* SECTION 4 — TEAM MEMBERS */}
      <section className="aboutus-staff">
        <div className="aboutus-person" data-aos="zoom-in">
          <img
            className="aboutus-person-img"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            alt="staff"
          />
          <h3 data-aos="fade-up">WE are ordinary people like you</h3>
          <p data-aos="fade-up">We started small and worked hard to grow.</p>
        </div>

        <div className="aboutus-person" data-aos="zoom-in">
          <img
            className="aboutus-person-img"
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            alt="staff"
          />
          <h3 data-aos="fade-up">Soon more staff were needed</h3>
          <p data-aos="fade-up">
            As customer numbers exploded, we expanded our team.
          </p>
        </div>
      </section>

      {/* SECTION 5 — FINAL MESSAGE */}
      <section className="aboutus-final">
        <h2 data-aos="fade-up">THE COMPANIES NOW</h2>

        <h3 data-aos="fade-up">
          have a combined turnover of many millions.
        </h3>

        <p data-aos="fade-up">
          We welcome you to try LättFaktura and get the same experience as our
          43,000+ customers.
        </p>

        <button data-aos="zoom-in" className="aboutus-download">
          Download Now
        </button>
      </section>

      {/* SECTION 6 — TESTIMONIAL SLIDER */}
      <CustomerSlider />

      {/* SOCIAL ICONS BELOW SLIDER */}
      <div className="aboutus-social-icons" data-aos="fade-up">
        <a href="https://facebook.com" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>

        <a href="https://instagram.com" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>

        <a href="https://linkedin.com" target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a href="https://pinterest.com" target="_blank">
          <i className="fab fa-pinterest-p"></i>
        </a>
      </div>
    </div>
  );
}
