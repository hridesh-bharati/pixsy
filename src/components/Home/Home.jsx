// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import Cards from "./CardFeatures/Cards";
import AboutHero from "./AboutHero";
import ProfessionalServices from "./ProfessionalServices";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import Testimonials from "./Testimonials";
import PixsyServices from "./Services/PixsyServices";

// Multiple images for the infinite loop shatter slider
const sliderImages = [
  "/images/home-page-slider-1.webp",
  "/images/home-page-slider-2.webp",
  "/images/home-page-slider-1.webp"
];

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Infinite Loop & Delay Trigger for Smooth Shatter Animation
  useEffect(() => {
    setIsAnimating(true);

    const interval = setInterval(() => {
      setIsAnimating(false); // Scatter / Fade out pieces
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        setIsAnimating(true); // Re-assemble pieces for the next image
      }, 300);
    }, 3500); // 3.5 seconds interval per image

    return () => clearInterval(interval);
  }, []);

  // Modal popup timer - Ab page refresh par har baar trigger hoga
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1200);

    return () => clearTimeout(timer);
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

  // Clean columns and rows configuration
  const cols = 12;
  const rows = 5;
  const totalPieces = cols * rows;
  const piecesArray = Array.from({ length: totalPieces });

  return (
    <main className="overflow-hidden">
      {/* Full-Screen Hero Banner with Blurred Background Layer */}
      <div className="w-100 mb-0 bg-white position-relative hero-banner-container" data-aos="fade-in">

        {/* Base Layer with Blur and subtle overlay */}
        <div
          className="position-absolute inset-0 w-100 h-100"
          style={{
            backgroundImage: `url('${sliderImages[currentImageIndex]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
            opacity: 0.9,
            zIndex: 1
          }}
        />

        {/* Shatter Animation Grid Layer */}
        <div
          className="shatter-image-grid position-relative w-100 h-100 overflow-hidden m-0 p-0"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gap: '0px',
            border: 'none',
            zIndex: 2
          }}
        >
          {piecesArray.map((_, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);

            const randomX = (index % 2 === 0 ? 1 : -1) * (250 + (index * 6));
            const randomY = (index % 3 === 0 ? -1 : 1) * (200 + (index * 5));
            const delay = (index % 12) * 0.015;

            return (
              <div
                key={index}
                className={`shatter-piece ${isAnimating ? 'assembled' : ''}`}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url('${sliderImages[currentImageIndex]}')`,
                  backgroundSize: `${cols * 100}% ${rows * 100}%`,
                  backgroundPosition: `${(col / (cols - 1)) * 100}% ${(row / (rows - 1)) * 100}%`,
                  backgroundRepeat: 'no-repeat',
                  margin: '0',
                  padding: '0',
                  border: 'none',
                  outline: 'none',
                  '-webkit-backface-visibility': 'hidden',
                  backfaceVisibility: 'hidden',
                  '--rand-x': `${randomX}px`,
                  '--rand-y': `${randomY}px`,
                  transitionDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      <div data-aos="fade-up"><Cards /></div>
      <div data-aos="fade-up"><AboutHero /></div>
      <div data-aos="fade-up"><ProfessionalServices /></div>
      <div data-aos="fade-up"><WhyChooseUs /></div>
      <div data-aos="fade-up"><PixsyServices /></div>
      <div data-aos="fade-up"><Process /></div>
      <div data-aos="fade-up"><Testimonials /></div>

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

      {/* CSS Styles */}
      <style>{`
        .hero-banner-container {
          width: 100%;
          height: 520px;
        }

        @media (max-width: 992px) {
          .hero-banner-container {
            height: 420px;
          }
        }

        @media (max-width: 768px) {
          .hero-banner-container {
            height: 300px;
          }
        }

        .shatter-image-grid {
          transform: translateZ(0);
        }

        .shatter-piece {
          opacity: 0;
          transform: translate(var(--rand-x), var(--rand-y)) rotate(360deg) scale(0.2);
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.8s ease;
          will-change: transform, opacity;
          box-shadow: none !important;
        }

        .shatter-piece.assembled {
          opacity: 1;
          transform: translate(0, 0) rotate(0deg) scale(1);
        }

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
    </main>
  );
}