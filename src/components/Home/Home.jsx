// src/components/Home.jsx
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Cards from "./CardFeatures/Cards";
import AboutHero from "./AboutHero";
import ProfessionalServices from "./ProfessionalServices";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import Testimonials from "./Testimonials";
import "./Home.css";
import RecentProjects from "./RecentProjects/RecentProjects";
import StatsBanner from "./StatsBanner";
import CtaBanner from "./CtaBanner";
import { Link } from "react-router-dom";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const heroHeadingRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (heroHeadingRef.current) {
      gsap.to(heroHeadingRef.current, {
        backgroundPosition: '200% 50%',
        duration: 4,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }

    if (leftBtnRef.current && rightBtnRef.current) {
      gsap.fromTo(
        leftBtnRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );
      gsap.fromTo(
        rightBtnRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello, I want a website!%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/916200514381?text=${text}`, "_blank");
    setShowModal(false);
  };

  return (
    <main className="home-container overflow-hidden">
      {/* Background Section */}
      <div className="hero-background-wrapper">
        <div className="container hero-content-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-7 text-start">
              <h4
                className="fw-bold hero-subtitle mb-2"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Creative. Innovative. Result Driven.
              </h4>

              <h1
                className="fw-bold text-white mb-3 hero-main-title"
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                We Create Digital Experiences That <span ref={heroHeadingRef} className="process-gradient-text">Grow Brands</span>
              </h1>

              <p
                className="text-light mb-4 hero-description"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                Pixsy Media is a creative digital agency delivering <br /> websites, branding and digital marketing solutions that  <br /> help businesses stand out and grow faster.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <button
                  ref={leftBtnRef}
                  onClick={() => setShowModal(true)}
                  className="btn btn-lg rounded-pill px-4 text-white fw-semibold shadow-sm"
                  style={{ background: "linear-gradient(135deg, #ff6b00, #ff2770)", fontSize: "0.95rem" }}
                >
                  Explore Our Work &rarr;
                </button>
                <Link to={"/our-services"}>
                  <button
                    ref={rightBtnRef}
                    className="btn btn-light btn-lg rounded-pill px-4 fw-semibold"
                    style={{ fontSize: "0.95rem" }}
                  >
                    Our Services &rarr;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up"><Cards /></div>
      <div data-aos="fade-up"><AboutHero /></div>
      <div data-aos="fade-up"><ProfessionalServices /></div>
      <div data-aos="fade-up"><RecentProjects /></div>
      <div data-aos="fade-up"><StatsBanner /></div>
      <div data-aos="fade-up"><WhyChooseUs /></div>
      <div data-aos="fade-up"><Process /></div>
      <div data-aos="fade-up"><Testimonials /></div>
      <div data-aos="fade-up"><CtaBanner /></div>

      {/* Bootstrap Auto-popup Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(3px)",
            zIndex: 1050
          }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{
              animation: "slideDownModal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards"
            }}
          >
            <div className="modal-content border-0 shadow-lg overflow-hidden">
              <div
                className="modal-header text-white border-0"
                style={{ background: "linear-gradient(135deg, #ff6b00, #ff2770, #873cff, #2865ff)" }}
              >
                <h5 className="modal-title fw-bold">Do you need a custom website?</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Project Details / Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="3"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn text-white w-100 py-2 fw-bold border-0 shadow-sm"
                    style={{ background: "linear-gradient(135deg, #ff6b00, #ff2770, #873cff, #2865ff)" }}
                  >
                    Send on WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}