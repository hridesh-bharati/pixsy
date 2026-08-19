// src/components/AboutHero.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CodeXml, Megaphone, Check, ArrowRight, Sparkles } from "lucide-react";

export default function AboutHero() {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  const brandGradient = 'linear-gradient(135deg, #ff6b00, #ff2468, #a52aff, #315cff)';

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.to(headingRef.current, {
          backgroundPosition: '200% 50%',
          duration: 4,
          repeat: -1,
          ease: 'sine.inOut',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-5 bg-white overflow-hidden pixsy-about-hero">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">

          {/* Right Column: Content - Mobile pe TOP (order-1) */}
          <div className="col-lg-6 order-1 order-lg-2 pixsy-about-content" data-aos="fade-left">
            <div className="ps-lg-3 text-center text-lg-start">
              <span
                className="badge px-3 py-1 rounded-pill fw-bold text-white mb-3 shadow-sm d-inline-block"
                style={{ background: brandGradient, fontSize: '11px', letterSpacing: '1.5px' }}
              >
                <Sparkles size={12} className="me-1" />
                ABOUT PIXSY MEDIA
              </span>

              <h2 className="fw-bolder display-6 text-dark mb-3 lh-sm">
                We're Partner of Your <br />
                <span ref={headingRef} className="process-gradient-text">Innovations</span>
              </h2>

              <p className="text-secondary fs-6 mb-4 lh-base lead-text">
                Pixsy Media is a premier digital marketing and software development agency.
                We help organizations and companies improve business performance & enhance their competitiveness.
              </p>

              {/* Service Features Grid */}
              <div className="row g-3 mb-4">
                <div className="col-sm-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3 shadow-sm pixsy-feature-box">
                    <div className="text-white p-2 rounded-2 d-flex align-items-center justify-content-center feature-icon-wrapper feature-orange" style={{ width: "40px", height: "40px" }}>
                      <CodeXml size={20} />
                    </div>
                    <h5 className="fw-bold fs-6 text-dark mb-0">Website Development</h5>
                  </div>
                </div>

                <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3 shadow-sm pixsy-feature-box">
                    <div className="text-white p-2 rounded-2 d-flex align-items-center justify-content-center feature-icon-wrapper feature-blue" style={{ width: "40px", height: "40px" }}>
                      <Megaphone size={20} />
                    </div>
                    <h5 className="fw-bold fs-6 text-dark mb-0">Digital Marketing</h5>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <ul className="list-unstyled d-flex flex-column gap-3 mb-4 pixsy-checklist text-start">
                <li className="d-flex align-items-center gap-2 fw-semibold text-secondary" data-aos="fade-up" data-aos-delay="150">
                  <span className="badge bg-primary-subtle text-primary rounded-circle p-1 d-flex align-items-center justify-content-center check-icon" style={{ width: "22px", height: "22px" }}>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  Bringing new digital solutions to the market
                </li>
                <li className="d-flex align-items-center gap-2 fw-semibold text-secondary" data-aos="fade-up" data-aos-delay="250">
                  <span className="badge bg-primary-subtle text-primary rounded-circle p-1 d-flex align-items-center justify-content-center check-icon" style={{ width: "22px", height: "22px" }}>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  Included among the leading creative technology agencies
                </li>
                <li className="d-flex align-items-center gap-2 fw-semibold text-secondary" data-aos="fade-up" data-aos-delay="350">
                  <span className="badge bg-primary-subtle text-primary rounded-circle p-1 d-flex align-items-center justify-content-center check-icon" style={{ width: "22px", height: "22px" }}>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  Backed by over 300 senior digital professionals
                </li>
              </ul>

              {/* Action Button */}
              <div data-aos="fade-up" data-aos-delay="400">
                <a href="/contact" className="btn btn-primary rounded-pill px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 shadow-sm pixsy-main-btn" style={{ background: brandGradient }}>
                  Learn More <ArrowRight size={18} />
                </a>
              </div>

            </div>
          </div>

          {/* Left Column: Image Collage - Mobile pe BOTTOM (order-2) */}
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
            <div className="position-relative d-flex flex-column gap-3 pe-lg-3 pixsy-about-images" style={{ marginTop: '-20px' }}>
              {/* First Image - zIndex 1 (niche) */}
              <div className="w-75 img-box-1" style={{ position: 'relative', zIndex: 1 }}>
                <img
                  src="/images/card3.webp"
                  alt="Team collaborating"
                  className="img-fluid rounded-4 shadow-lg w-100 object-fit-cover"
                  style={{ height: '200px' }}
                />
              </div>

              {/* Second Image - zIndex 2 (upar) */}
              <div className="w-75 align-self-end position-relative img-box-2" style={{ zIndex: 2, marginTop: '-40px' }}>
                <img
                  src="/images/card2.webp"
                  alt="Team meeting"
                  className="img-fluid rounded-4 shadow-lg w-100 object-fit-cover"
                  style={{ height: '200px' }}
                />
              </div>

              {/* Floating Badge */}
              <div
                className="position-absolute bottom-0 start-0 m-3 p-3 text-white rounded-4 shadow-lg pixsy-floating-badge"
                style={{ zIndex: 5, background: "linear-gradient(135deg, #a62dff, #315cff)" }}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <strong>6800+</strong>
                <span className="opacity-75 fw-bold fs-7">Satisfied Clients</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .process-gradient-text {
          background: linear-gradient(135deg, #ff6b00, #ff2468, #a52aff, #315cff, #ff6b00);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .pixsy-feature-box {
          background: #f8fafc;
          border: none !important;
          border-left: 5px solid transparent !important;
          border-image: linear-gradient(135deg, #ff6b00, #ff2468, #a52aff, #315cff) 1 !important;
          padding: 14px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: all 0.3s ease;
        }

        .pixsy-feature-box:hover {
          background: #ffffff;
          box-shadow: 0 10px 25px rgba(49, 92, 255, 0.08);
          transform: translateY(-3px);
        }

        .feature-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ffffff;
        }

        .feature-orange {
          background: linear-gradient(135deg, #ff8a00, #ff315c);
          box-shadow: 0 4px 12px rgba(255, 138, 0, 0.25);
        }

        .feature-blue {
          background: linear-gradient(135deg, #3b4cff, #d21cff);
          box-shadow: 0 4px 12px rgba(59, 76, 255, 0.25);
        }

        .pixsy-about-images img {
          border-radius: 20px;
        }

        @media (max-width: 991px) {
          .pixsy-about-images {
            margin-top: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}