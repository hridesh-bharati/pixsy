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
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/blog" element={<Blog />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;