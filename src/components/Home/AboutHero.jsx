// src/components/AboutHero.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CodeXml, Megaphone, Check, ArrowRight, Sparkles, MonitorSmartphone, Globe } from "lucide-react";
import "./AboutHero.css";

export default function AboutHero() {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  const brandGradient = 'linear-gradient(135deg, #6C63FF, #4A3FF5)';

  const fullText = "Pixsy Media is a premier digital marketing and software development agency. We help organizations and companies improve business performance & enhance their competitiveness.";

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(40);

  // Features data
  const features = [
    {
      icon: CodeXml,
      title: "App Development",
      description: "Innovative solutions for modern businesses",
      gradient: "linear-gradient(135deg, #6C63FF, #4A3FF5)"
    },
    {
      icon: MonitorSmartphone,
      title: "UI/UX Design",
      description: "Innovative solutions for modern businesses",
      gradient: "linear-gradient(135deg, #FF6B6B, #FF8E53)"
    },
    {
      icon: Globe,
      title: "Web Solutions",
      description: "Innovative solutions for modern businesses",
      gradient: "linear-gradient(135deg, #00D2FF, #0099FF)"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Innovative solutions for modern businesses",
      gradient: "linear-gradient(135deg, #FFB74D, #FF9800)"
    },
  ];

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
    <section ref={sectionRef} className="pixsy-app-about">
      <div className="app-container">

        {/* Header Badge */}
        <div className="app-badge" data-aos="fade-down">
          <Sparkles size={14} />
          <span>About Pixsy Media</span>
        </div>

        {/* Main Heading */}
        <h2 className="app-heading" data-aos="fade-up">
          We're Partner of Your
          <br />
          <span ref={headingRef} className="app-gradient-text">Innovations</span>
        </h2>

        {/* Typewriter Text */}
        <div className="app-typed-wrapper" data-aos="fade-up" data-aos-delay="100">
          <p className="app-typed-text">
            {displayedText}
            <span className="app-cursor">|</span>
          </p>
        </div>

        {/* Feature Grid - Fluid Layout */}
        <div className="app-features-grid" data-aos="fade-up" data-aos-delay="200">
          {features.map((feature, index) => (
            <div key={index} className="app-feature-card">
              <div
                className="app-feature-icon"
                style={{ background: feature.gradient }}
              >
                <feature.icon size={24} />
              </div>
              <div className="app-feature-info">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Showcase - Fluid */}
        <div className="app-image-showcase" data-aos="fade-up" data-aos-delay="300">
          <div className="app-image-grid">
            <div className="app-image-main">
              <img
                src="/images/card3.webp"
                alt="Team collaborating"
                className="app-img"
              />
              <div className="app-image-overlay">
                <span className="app-overlay-badge">Live Project</span>
              </div>
            </div>
            <div className="app-image-side">
              <div className="app-image-small">
                <img
                  src="/images/card2.webp"
                  alt="Team meeting"
                  className="app-img"
                />
              </div>
              <div className="app-image-small">
                <img
                  src="/images/card2.webp"
                  alt="Team meeting"
                  className="app-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Checklist - Fluid */}
        <div className="app-checklist" data-aos="fade-up" data-aos-delay="350">
          <div className="app-checklist-item">
            <span className="app-check-icon">
              <Check size={16} />
            </span>
            <p>Bringing new digital solutions to the market</p>
          </div>
          <div className="app-checklist-item">
            <span className="app-check-icon">
              <Check size={16} />
            </span>
            <p>Leading creative technology agency</p>
          </div>
          <div className="app-checklist-item">
            <span className="app-check-icon">
              <Check size={16} />
            </span>
            <p>Backed by 300+ senior digital professionals</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="app-cta" data-aos="fade-up" data-aos-delay="400">
          <a href="/contact" className="app-btn-primary">
            Learn More
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}