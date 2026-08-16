import React, { useEffect, useState } from "react";
import Cards from "./CardFeatures/Cards";
import AboutHero from "./AboutHero";
import ProfessionalServices from "./ProfessionalServices";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import Testimonials from "./Testimonials";
import PixsyServices from "./Services/PixsyServices";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    // Check session storage so it only shows once per page session / reload
    const hasSeenModal = sessionStorage.getItem("hasSeenWebsiteModal");

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem("hasSeenWebsiteModal", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello, I want a website!%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/917267995307?text=${text}`, "_blank");
    setShowModal(false);
  };

  return (
    <main>
      {/* Bootstrap Carousel with a 2-second delay and navigation buttons removed */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/slider0.png" className="d-block w-100 carousel-img" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="/images/slider1.png" className="d-block w-100 carousel-img" alt="Slide 2" />
          </div>
        </div>
      </div>

      <div><Cards /></div>
      <div><AboutHero /></div>
      <div><ProfessionalServices /></div>
      <div><WhyChooseUs /></div>
      <div><PixsyServices /></div>
      <div><Process /></div>
      <div><Testimonials /></div>

      {/* Bootstrap Auto-popup Modal with Smooth Slide Down from Top */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(3px)"
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
                <h5 className="modal-title fw-bold">Do you need a custom website??</h5>
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

          {/* Inline CSS Keyframes for smooth top drop-down animation */}
          <style>{`
            @keyframes slideDownModal {
              0% {
                transform: translateY(-100px);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </main>
  );
}