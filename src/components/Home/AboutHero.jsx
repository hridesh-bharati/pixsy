// src/components/AboutHero.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CodeXml, Megaphone, Check, Sparkles, MonitorSmartphone, Globe } from "lucide-react";
import "./AboutHero.css";

export default function AboutHero() {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  const fullText = "Pixsy Media is a premier digital marketing and software development agency. We help organizations and companies improve business performance & enhance their competitiveness.";

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(40);

  const features = [
    { icon: CodeXml, title: "App Development", desc: "Modern solutions", gradient: "linear-gradient(135deg, #ff6b00, #ff2770)" },
    { icon: MonitorSmartphone, title: "UI/UX Design", desc: "Creative experiences", gradient: "linear-gradient(135deg, #ff2770, #873cff)" },
    { icon: Globe, title: "Web Solutions", desc: "High performance", gradient: "linear-gradient(135deg, #873cff, #2865ff)" },
    { icon: Megaphone, title: "Digital Marketing", desc: "Grow your reach", gradient: "linear-gradient(135deg, #2865ff, #ff6b00)" },
  ];

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
    <section ref={sectionRef} className="py-5 bg-white overflow-hidden">
      <div className="container py-lg-4">

        {/* Badge */}
        <div className="badge px-3 py-2 rounded-pill fw-bold text-white mb-3 d-inline-flex align-items-center gap-2 shadow-sm" style={{ background: 'linear-gradient(135deg, #ff6b00, #ff2770)' }} data-aos="fade-down">
          <Sparkles size={14} />
          <span style={{ fontSize: '11px', letterSpacing: '1px' }}>ABOUT PIXSY MEDIA</span>
        </div>

        {/* Main Heading - Inline */}
        <h2 className="fw-bolder display-5 text-dark mb-3 text-nowrap overflow-x-auto pb-2" data-aos="fade-up">
          We're Partner of Your <span ref={headingRef} className="app-gradient-text">Innovations</span>
        </h2>

        {/* Typewriter Text */}
        <p className="text-secondary fs-6 mb-4 lh-base" style={{ maxWidth: '800px', minHeight: '55px' }} data-aos="fade-up" data-aos-delay="100">
          {displayedText}
          <span className="app-cursor">|</span>
        </p>

        {/* Feature Grid using Bootstrap */}
        <div className="row g-3 mb-4" data-aos="fade-up" data-aos-delay="200">
          {features.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div key={index} className="col-sm-6 col-lg-3">
                <div className="p-3 bg-light rounded-4 d-flex align-items-center gap-3 h-100 border border-light shadow-sm transition-hover">
                  <div className="text-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '46px', height: '46px', background: item.gradient }}>
                    <IconComp size={22} />
                  </div>
                  <div>
                    <h5 className="fw-bold fs-6 text-dark mb-1">{item.title}</h5>
                    <p className="text-muted small mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Showcase */}
        <div className="rounded-4 overflow-hidden bg-light p-2 mb-4 shadow-sm" data-aos="fade-up" data-aos-delay="300">
          <div className="row g-2">
            <div className="col-lg-8 position-relative">
              <img src="/images/card3.webp" alt="Team collaborating" className="w-100 rounded-3 object-fit-contain bg-white" style={{ height: '320px' }} />
            </div>
            <div className="col-lg-4 d-flex flex-column gap-2">
              <img src="/images/card1.webp" alt="Team meeting" className="w-100 rounded-3 object-fit-contain bg-white flex-grow-1" style={{ height: '156px' }} />
              <img src="/images/card2.webp" alt="Team session" className="w-100 rounded-3 object-fit-contain bg-white flex-grow-1" style={{ height: '156px' }} />
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="row g-3" data-aos="fade-up" data-aos-delay="350">
          {checklistItems.map((text, index) => (
            <div key={index} className="col-md-4">
              <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3 h-100 border border-light">
                <span className="rounded-circle p-1 d-flex align-items-center justify-content-center flex-shrink-0 text-white" style={{ width: '24px', height: '24px', background: 'linear-gradient(135deg, #ff6b00, #ff2770)' }}>
                  <Check size={14} strokeWidth={3} />
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