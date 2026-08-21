// src/components/AboutHero.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Check, Sparkles } from "lucide-react";
import "./AboutHero.css";

export default function AboutHero() {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  const fullText = "Pixsy Media is a premier digital marketing and software development agency. We help organizations and companies improve business performance & enhance their competitiveness.";

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(40);

  const checklistItems = [
    "Bringing new digital solutions to the market",
    "Leading creative technology agency",
    "Backed by 300+ senior digital professionals"
  ];

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(25);
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(40);
      }

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed]);

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
    <section ref={sectionRef} className="about-hero-section py-4 py-md-5 bg-white overflow-hidden">
      <div className="container px-3 px-md-4">

        {/* Badge */}
        <div className="badge px-3 py-2 rounded-pill fw-bold text-white mb-2 mb-md-3 d-inline-flex align-items-center gap-2 shadow-sm" style={{ background: 'linear-gradient(135deg, #ff6b00, #ff2770)' }} data-aos="fade-down">
          <Sparkles size={14} />
          <span style={{ fontSize: '11px', letterSpacing: '1px' }}>ABOUT PIXSY MEDIA</span>
        </div>

        {/* Main Heading */}
        <h2 className="fw-bolder fs-2 fs-md-1 text-dark mb-2 mb-md-3 lh-sm" data-aos="fade-up">
          We're Partner of Your <span ref={headingRef} className="app-gradient-text">Innovations</span>
        </h2>

        {/* Typewriter Text */}
        <p className="text-secondary fs-6 mb-3 mb-md-4 lh-base" style={{ maxWidth: '800px', minHeight: '55px' }} data-aos="fade-up" data-aos-delay="100">
          {displayedText}
          <span className="app-cursor">|</span>
        </p>

        {/* Image Showcase (Fixed for both PC and Mobile) */}
        <div className="rounded-4 overflow-hidden bg-light p-2 p-md-3 mb-3 mb-md-4 shadow-sm" data-aos="fade-up" data-aos-delay="300">
          <div className="row g-2 g-md-3">
            <div className="col-lg-8">
              <div className="hero-main-img-wrap w-100 h-100">
                <img
                  src="/images/card3.webp"
                  alt="Team collaborating"
                  className="w-100 h-100 rounded-3 object-fit-cover bg-white"
                />
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-row flex-lg-column gap-2 gap-md-3">
              <div className="hero-sub-img-wrap w-50 w-lg-100 flex-grow-1">
                <img
                  src="/images/card1.webp"
                  alt="Team meeting"
                  className="w-100 h-100 rounded-3 object-fit-cover bg-white"
                />
              </div>
              <div className="hero-sub-img-wrap w-50 w-lg-100 flex-grow-1">
                <img
                  src="/images/card2.webp"
                  alt="Team session"
                  className="w-100 h-100 rounded-3 object-fit-cover bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="row g-2 g-md-3" data-aos="fade-up" data-aos-delay="350">
          {checklistItems.map((text, index) => (
            <div key={index} className="col-md-4">
              <div className="p-2 p-md-3 bg-light rounded-3 d-flex align-items-center gap-2 gap-md-3 h-100 border border-light">
                <span className="rounded-circle p-1 d-flex align-items-center justify-content-center flex-shrink-0 text-white" style={{ width: '22px', height: '22px', background: 'linear-gradient(135deg, #ff6b00, #ff2770)' }}>
                  <Check size={12} strokeWidth={3} />
                </span>
                <p className="fw-semibold text-secondary small mb-0">{text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}