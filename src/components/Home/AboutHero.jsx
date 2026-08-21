// src/components/AboutHero.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CodeXml, Megaphone, Check, ArrowRight, Sparkles } from "lucide-react";
import "./AboutHero.css";

export default function AboutHero() {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  const brandGradient = 'linear-gradient(135deg, #ff6b00, #ff2468, #a52aff, #315cff)';
  const fullText = "Pixsy Media is a premier digital marketing and software development agency. We help organizations and companies improve business performance & enhance their competitiveness.";

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(40);

  useEffect(() => {
    const handleTyping = () => {
      const fullStr = fullText;

      if (isDeleting) {
        setDisplayedText(fullStr.substring(0, displayedText.length - 1));
        setTypingSpeed(25);
      } else {
        setDisplayedText(fullStr.substring(0, displayedText.length + 1));
        setTypingSpeed(40);
      }

      if (!isDeleting && displayedText === fullStr) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

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
      <div className="container py-lg-4">
        <div className="row align-items-center g-4 g-lg-5">

          {/* Right Column: Content - Mobile pe TOP (order-1) */}
          <div className="col-lg-6 order-1 order-lg-2 pixsy-about-content" data-aos="fade-left">
            <div className="text-center text-lg-start">
              <span
                className="badge px-3 py-2 rounded-pill fw-bold text-white mb-3 shadow-sm d-inline-flex align-items-center gap-1"
                style={{ background: brandGradient, fontSize: '11px', letterSpacing: '1.5px' }}
              >
                <Sparkles size={12} />
                ABOUT PIXSY MEDIA
              </span>

              <h2 className="fw-bolder display-6 text-dark mb-3 lh-sm pixsy-main-heading">
                We're Partner of Your <br className="d-none d-sm-inline" />
                <span ref={headingRef} className="process-gradient-text">Innovations</span>
              </h2>

              {/* Typewriter Paragraph Container */}
              <p className="text-secondary fs-6 mb-4 lh-base lead-text min-height-typed">
                {displayedText}
                <span className="typewriter-cursor">|</span>
              </p>

              {/* Service Features Grid */}
              <div className="row g-3 mb-4">
                <div className="col-sm-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3 shadow-sm pixsy-feature-box">
                    <div className="text-white p-2 rounded-2 d-flex align-items-center justify-content-center feature-icon-wrapper feature-orange">
                      <CodeXml size={20} />
                    </div>
                    <h5 className="fw-bold fs-6 text-dark mb-0 text-start">Website Development</h5>
                  </div>
                </div>

                <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3 shadow-sm pixsy-feature-box">
                    <div className="text-white p-2 rounded-2 d-flex align-items-center justify-content-center feature-icon-wrapper feature-blue">
                      <Megaphone size={20} />
                    </div>
                    <h5 className="fw-bold fs-6 text-dark mb-0 text-start">Digital Marketing</h5>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <ul className="list-unstyled d-flex flex-column gap-2.5 mb-4 pixsy-checklist text-start">
                <li className="d-flex align-items-center gap-2 fw-semibold text-secondary" data-aos="fade-up" data-aos-delay="150">
                  <span className="badge bg-primary-subtle text-primary rounded-circle p-1 d-flex align-items-center justify-content-center flex-shrink-0 check-icon" style={{ width: "22px", height: "22px" }}>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  Bringing new digital solutions to the market
                </li>
                <li className="d-flex align-items-center gap-2 fw-semibold text-secondary" data-aos="fade-up" data-aos-delay="250">
                  <span className="badge bg-primary-subtle text-primary rounded-circle p-1 d-flex align-items-center justify-content-center flex-shrink-0 check-icon" style={{ width: "22px", height: "22px" }}>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  Included among the leading creative technology agencies
                </li>
                <li className="d-flex align-items-center gap-2 fw-semibold text-secondary" data-aos="fade-up" data-aos-delay="350">
                  <span className="badge bg-primary-subtle text-primary rounded-circle p-1 d-flex align-items-center justify-content-center flex-shrink-0 check-icon" style={{ width: "22px", height: "22px" }}>
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
            <div className="pixsy-about-images-wrapper">
              <div className="pixsy-img-box img-box-top">
                <img
                  src="/images/card3.webp"
                  alt="Team collaborating"
                  className="img-fluid rounded-4 shadow-lg w-100 object-fit-cover"
                />
              </div>
              <div className="pixsy-img-box img-box-bottom">
                <img
                  src="/images/card2.webp"
                  alt="Team meeting"
                  className="img-fluid rounded-4 shadow-lg w-100 object-fit-cover"
                />
              </div>

              {/* Floating Badge */}
              <div
                className="pixsy-floating-badge p-3 text-white rounded-4 shadow-lg"
                style={{ background: "linear-gradient(135deg, #a62dff, #315cff)" }}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <strong className="d-block fs-4">6800+</strong>
                <span className="opacity-75 fw-bold small">Satisfied Clients</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}