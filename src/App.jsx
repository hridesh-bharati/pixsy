import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./components/Home/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Team from "./components/Team/Team";
import ContactForm from "./components/ContactForm/ContactForm";
import About from "./components/About/About";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Animation sirf ek baar chale scroll karne par
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/our_team" element={<Team />} />
        <Route path="/contact_us" element={<ContactForm />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;