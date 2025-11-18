// src/pages/OurCustomers.jsx
import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { LanguageContext } from "../utils/LanguageContext";
import { loadGoogleTranslate } from "../utils/useGoogleTranslate";
import CustomerSlider from "../components/CustomerSlider/CustomerSlider";
import "../styles/ourCustomers.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function OurCustomers() {
  const { translations } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    loadGoogleTranslate();
  }, []);

  return (
    <div className="customers-wrapper">
      <Navbar />

      {/* same fixed wallpaper as Home */}
      <div className="customers-bg" />

      <main className="customers-main">
        {/* HERO */}
        <section className="customers-hero" data-aos="fade-up">
          <h1 className="customers-hero-title">
            {translations["OUR CUSTOMERS"] || "OUR CUSTOMERS"}
          </h1>
          <p className="customers-hero-sub">
            {translations["are everywhere where there are people."] ||
              "are everywhere where there are people."}
          </p>
        </section>

        {/* FIRST WHITE CARD */}
        <section className="customers-intro-section" data-aos="zoom-in">
          <div className="customers-card">
            <p>
              <strong className="accent">WE</strong> currently have over{" "}
              <strong>43,000</strong> companies as customers.
            </p>

            <p className="muted">
              Our programs are used in everything from Scandinavia's largest
              companies to small 1- and 2-man businesses.
            </p>

            <p className="muted">
              Among our larger customers are: ABB, ISS, Adidas, Electrolux and
              many, many more. Yes, almost every large company in Scandinavia
              has one or more subdivisions that use programs from us in addition
              to their main program.
            </p>

            <p className="muted">
              We are equally happy to have customers in almost every community
              from north to south.
            </p>
          </div>
        </section>

        {/* SECOND WHITE CARD */}
        <section
          className="customers-intro-section small-gap"
          data-aos="zoom-in"
        >
          <div className="customers-card">
            <p>
              <strong className="accent">EITHER IT IS</strong> the legal industry,
              where we have <strong>654</strong> customers.
            </p>

            <p className="muted">
              Or the accounting industry, where we have <strong>143</strong>{" "}
              accountants as customers. We have <strong>518</strong> accountants,
              <strong>64</strong> municipalities, over <strong>2,400</strong>{" "}
              builders and thousands of other craftsmen.
            </p>

            <p className="muted">
              A number of stores from the Ica and Coop chains. A number of gas
              stations from Circle K, Shell and others. Hotels in many cities
              and <strong>521</strong> restaurants.
            </p>

            <p className="muted">
              We are proud to be used by both large organisations and small
              local businesses.
            </p>
          </div>
        </section>

        {/* INDUSTRIES GRID */}
        <section className="industries-section">
          <h2 className="industries-title" data-aos="fade-up">
            Of our customers are
          </h2>

          <div className="industries-grid">
            {/* COL 1 */}
            <div className="col" data-aos="fade-right">
              <div className="pill"><strong>654</strong> Lawyers</div>
              <div className="pill"><strong>1464</strong> Transport companies</div>
              <div className="pill"><strong>665</strong> Real estate companies</div>
              <div className="pill"><strong>406</strong> Industries</div>
              <div className="pill"><strong>252</strong> Associations</div>
              <div className="pill"><strong>238</strong> Investment companies</div>
              <div className="pill"><strong>209</strong> Engineers</div>
              <div className="pill"><strong>184</strong> Bricklayer</div>
              <div className="pill"><strong>167</strong> Sports companies</div>
              <div className="pill"><strong>154</strong> Mech. Workshops</div>
              <div className="pill"><strong>130</strong> Wooden products</div>
              <div className="pill"><strong>115</strong> Driving schools</div>
              <div className="pill"><strong>106</strong> Floor layer</div>
              <div className="pill"><strong>98</strong> Inspectors</div>
              <div className="pill"><strong>91</strong> Plastics industries</div>
              <div className="pill"><strong>76</strong> Course & Training</div>
              <div className="pill"><strong>71</strong> Kitchen</div>
              <div className="pill"><strong>61</strong> Graphic Companies</div>
              <div className="pill"><strong>55</strong> Taxis</div>
              <div className="pill"><strong>48</strong> Dentist</div>
              <div className="pill"><strong>41</strong> Dive Companies</div>
              <div className="pill"><strong>33</strong> Pet stores</div>
              <div className="pill"><strong>27</strong> Brokers</div>
              <div className="pill"><strong>23</strong> Veterinarians</div>
              <div className="pill"><strong>15</strong> Sports teams</div>
              <div className="pill"><strong>11</strong> Radio stations</div>
              <div className="pill"><strong>9</strong> Waterworks</div>
              <div className="pill"><strong>6</strong> Government agencies</div>
              <div className="pill"><strong>3</strong> Sausage maker</div>
            </div>

            {/* COL 2 */}
            <div className="col" data-aos="fade-up">
              <div className="pill"><strong>143</strong> Auditors</div>
              <div className="pill"><strong>1223</strong> Consulting services</div>
              <div className="pill"><strong>521</strong> Restaurants</div>
              <div className="pill"><strong>328</strong> Workshops</div>
              <div className="pill"><strong>249</strong> Design companies</div>
              <div className="pill"><strong>232</strong> Boat & Marine Companies</div>
              <div className="pill"><strong>205</strong> Interior companies</div>
              <div className="pill"><strong>182</strong> Office services</div>
              <div className="pill"><strong>166</strong> Glazier</div>
              <div className="pill"><strong>151</strong> Construction services</div>
              <div className="pill"><strong>124</strong> Music Companies</div>
              <div className="pill"><strong>109</strong> Plumbing</div>
              <div className="pill"><strong>102</strong> Printing houses</div>
              <div className="pill"><strong>97</strong> Churches</div>
              <div className="pill"><strong>89</strong> Fish farming</div>
              <div className="pill"><strong>75</strong> Culture Center</div>
              <div className="pill"><strong>71</strong> Sheet metal worker</div>
              <div className="pill"><strong>60</strong> Bathroom stores</div>
              <div className="pill"><strong>52</strong> Refrigeration service</div>
              <div className="pill"><strong>46</strong> Security company</div>
              <div className="pill"><strong>41</strong> House companies</div>
              <div className="pill"><strong>31</strong> Publishers</div>
              <div className="pill"><strong>26</strong> Steel industries</div>
              <div className="pill"><strong>22</strong> Shipping companies</div>
              <div className="pill"><strong>14</strong> Prisons</div>
              <div className="pill"><strong>10</strong> Dairies</div>
              <div className="pill"><strong>8</strong> Ambulances</div>
              <div className="pill"><strong>6</strong> Sports associations</div>
              <div className="pill"><strong>2</strong> Ferry connections</div>
            </div>

            {/* COL 3 */}
            <div className="col" data-aos="fade-left">
              <div className="pill"><strong>518</strong> Accountant</div>
              <div className="pill"><strong>742</strong> Machinery companies</div>
              <div className="pill"><strong>439</strong> Electrician</div>
              <div className="pill"><strong>312</strong> Painter</div>
              <div className="pill"><strong>244</strong> Gardener</div>
              <div className="pill"><strong>226</strong> Contractors</div>
              <div className="pill"><strong>197</strong> Car Dealers</div>
              <div className="pill"><strong>170</strong> Florists</div>
              <div className="pill"><strong>165</strong> Importers</div>
              <div className="pill"><strong>148</strong> Welding companies</div>
              <div className="pill"><strong>122</strong> Schools</div>
              <div className="pill"><strong>109</strong> Tile</div>
              <div className="pill"><strong>102</strong> Concrete Industries</div>
              <div className="pill"><strong>96</strong> Installers</div>
              <div className="pill"><strong>89</strong> Doctors</div>
              <div className="pill"><strong>72</strong> Caretaker</div>
              <div className="pill"><strong>70</strong> Clothing & Shoe Stores</div>
              <div className="pill"><strong>59</strong> Travel agencies</div>
              <div className="pill"><strong>51</strong> Bakeries</div>
              <div className="pill"><strong>46</strong> Agricultural services</div>
              <div className="pill"><strong>39</strong> Gyms</div>
              <div className="pill"><strong>29</strong> Banks</div>
              <div className="pill"><strong>26</strong> Business services</div>
              <div className="pill"><strong>21</strong> Football clubs</div>
              <div className="pill"><strong>14</strong> Ski slopes</div>
              <div className="pill"><strong>10</strong> Sports halls</div>
              <div className="pill"><strong>8</strong> Trade unions</div>
            </div>

            {/* COL 4 */}
            <div className="col" data-aos="fade-left">
              <div className="pill"><strong>2412</strong> Construction companies</div>
              <div className="pill"><strong>64</strong> Municipalities</div>
              <div className="pill"><strong>432</strong> Cleaning companies</div>
              <div className="pill"><strong>290</strong> Hotels</div>
              <div className="pill"><strong>236</strong> Car repair shops</div>
              <div className="pill"><strong>212</strong> Computer companies</div>
              <div className="pill"><strong>184</strong> Photographers</div>
              <div className="pill"><strong>168</strong> Architects</div>
              <div className="pill"><strong>159</strong> Renovation</div>
              <div className="pill"><strong>139</strong> Advertising agencies</div>
              <div className="pill"><strong>118</strong> Gas stations</div>
              <div className="pill"><strong>107</strong> Campsites</div>
              <div className="pill"><strong>98</strong> Roofing</div>
              <div className="pill"><strong>93</strong> Tire companies</div>
              <div className="pill"><strong>83</strong> Installers</div>
              <div className="pill"><strong>71</strong> Textile & Sewing</div>
              <div className="pill"><strong>65</strong> Ventilation companies</div>
              <div className="pill"><strong>59</strong> Sports clubs</div>
              <div className="pill"><strong>49</strong> Kindergarten</div>
              <div className="pill"><strong>46</strong> Bus companies</div>
              <div className="pill"><strong>33</strong> Car rental</div>
              <div className="pill"><strong>28</strong> Hairdressers</div>
              <div className="pill"><strong>23</strong> Newspapers</div>
              <div className="pill"><strong>16</strong> National Associations</div>
              <div className="pill"><strong>12</strong> Power plants</div>
              <div className="pill"><strong>9</strong> Museums</div>
              <div className="pill"><strong>7</strong> Hospitals</div>
              <div className="pill"><strong>3</strong> Universities</div>
              <div className="pill"><strong>22054</strong> Industry not known</div>
            </div>
          </div>
        </section>

        {/* BLUE TESTIMONIAL SLIDER */}
        <section
          id="customer-slider-section"
          className="slider-wrapper-section"
          data-aos="fade-up"
        >
          <CustomerSlider />
        </section>
      </main>
    </div>
  );
}
