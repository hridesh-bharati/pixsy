// src/components/Home/CtaBanner/CtaBanner.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-3 bg-white overflow-hidden">
      <div className="container-fluid px-1 px-lg-4">
        <div
          className="w-100 p-4 p-lg-5 rounded-4 position-relative cta-banner-box overflow-hidden shadow-lg d-flex align-items-center"
          style={{
            background: "linear-gradient(135deg, #090919 0%, #0d0620 100%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            minHeight: "180px"
          }}
        >
          {/* Background decorative glowing shapes/elements */}
          <div className="position-absolute start-0 top-50 translate-middle-y opacity-25 ms-4 d-none d-md-block" style={{ filter: "drop-shadow(0 0 20px #873cff)" }}>
            <Send size={120} className="text-purple transform-rotate-n45" style={{ color: "#a855f7" }} />
          </div>

          <div className="row align-items-center justify-content-between w-100 mx-0 position-relative z-index-2">
            {/* Left Content */}
            <div className="col-12 col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
              <p className="text-light opacity-75 mb-1 fw-medium" style={{ fontSize: "0.95rem" }}>
                Have a project in mind?
              </p>
              <h2 className="fw-bold text-white mb-0 display-6" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)" }}>
                Let's create something <span className="cta-fire-text fst-italic">amazing</span> together!
              </h2>
            </div>

            {/* Right Button */}
            <div className="col-12 col-lg-4 text-center text-lg-end">
              <Link
                to="/contact-us"
                className="btn rounded-pill px-4 py-3 d-inline-flex align-items-center justify-content-center gap-2 text-white fw-semibold shadow-lg cta-touch-btn"
                style={{
                  background: "linear-gradient(135deg, #ff6b00, #ff2770)",
                  fontSize: "1rem",
                  border: "none",
                  minWidth: "180px"
                }}
              >
                <span>Get In Touch</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Fire / Multi-color gradient effect for 'amazing' text */
        .cta-fire-text {
          font-family: 'Georgia', serif;
          background: linear-gradient(270deg, #ffffee, #ffb703, #ff6b00, #ff2770, #873cff);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fireTextGlow 4s linear infinite;
          display: inline-block;
          font-weight: 500;
        }

        @keyframes fireTextGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .cta-touch-btn {
          transition: all 0.3s ease;
        }

        .cta-touch-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 39, 112, 0.4) !important;
        }
      `}</style>
    </section>
  );
}