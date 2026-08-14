import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
  Code2,
  TrendingUp,
  Shield,
  Palette,
  BarChart3,
  Rocket,
  Users,
  Headphones,
  ArrowRight,
  Star,
  Globe,
  Smartphone,
  Sparkles,
  Database,
  Eye,
  Target,
  PenTool,
} from "lucide-react";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Services = () => {
  const mainRef = useRef(null);
  const sectionRefs = useRef([]);
  const headingRefs = useRef([]);
  const heroRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // ============================================
  // DATA
  // ============================================
  const heroFeatures = [
    { icon: <Globe size={18} />, text: "Global Reach" },
    { icon: <Rocket size={18} />, text: "Fast Delivery" },
    { icon: <Shield size={18} />, text: "Secure" },
    { icon: <Users size={18} />, text: "50+ Team" },
  ];

  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Web Development",
      desc: "Custom, fast, and responsive websites built for high conversion.",
      color: "#ff8a00",
      tag: "Popular",
    },
    {
      icon: <PenTool size={28} />,
      title: "UI/UX Design",
      desc: "Creative interfaces and user experiences that captivate audiences.",
      color: "#ff315c",
      tag: "Creative",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Digital Marketing",
      desc: "Strategic optimization to rank higher and drive organic growth.",
      color: "#d21cff",
      tag: "Growth",
    },
    {
      icon: <Smartphone size={28} />,
      title: "App Development",
      desc: "Scalable mobile applications tailored for modern businesses.",
      color: "#3b4cff",
      tag: "Mobile",
    },
    {
      icon: <Shield size={28} />,
      title: "Security Systems",
      desc: "Best smart security systems to protect your enterprise infrastructure.",
      color: "#1267ff",
      tag: "Secure",
    },
    {
      icon: <Database size={28} />,
      title: "Data Analysis",
      desc: "Gain flexible analytical insights out of complex enterprise data.",
      color: "#ff8a00",
      tag: "Analytics",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      desc: "We understand your business goals, target audience, and project requirements.",
      icon: <Target size={20} />,
    },
    {
      step: "02",
      title: "Design",
      desc: "Our designers create stunning UI/UX designs that captivate users.",
      icon: <Eye size={20} />,
    },
    {
      step: "03",
      title: "Development",
      desc: "We build robust, scalable solutions using modern technologies.",
      icon: <Code2 size={20} />,
    },
    {
      step: "04",
      title: "Deploy",
      desc: "Deploy your project with minimal downtime and complete testing.",
      icon: <Rocket size={20} />,
    },
    {
      step: "05",
      title: "Optimize",
      desc: "Continuous optimization and growth strategies for long-term success.",
      icon: <TrendingUp size={20} />,
    },
  ];

  const stats = [
    { number: "6800+", label: "Satisfied Clients", icon: <Users size={24} />, color: "#ff8a00" },
    { number: "50+", label: "Expert Team", icon: <Users size={24} />, color: "#ff315c" },
    { number: "99.9%", label: "Success Rate", icon: <Star size={24} />, color: "#d21cff" },
    { number: "24/7", label: "Support Available", icon: <Headphones size={24} />, color: "#3b4cff" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      text: "Pixsy Media transformed our online presence completely. Traffic increased by 200%.",
      avatar: "SJ",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthHub",
      text: "The team at Pixsy Media is exceptional. They understood our vision perfectly.",
      avatar: "MC",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, CreativeSpace",
      text: "Working with Pixsy Media was a game-changer for our business.",
      avatar: "ER",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "CTO, InnovateLab",
      text: "Pixsy Media delivered a robust, scalable solution for our complex requirements.",
      avatar: "DK",
      rating: 5,
    },
  ];

  // ============================================
  // GSAP ANIMATIONS
  // ============================================
  useEffect(() => {
    const ctx = gsap.context(() => {
      // HERO TEXT SPLIT
      const heroHeading = headingRefs.current[0];
      if (heroHeading) {
        const split = new SplitText(heroHeading, {
          type: "chars,words",
          charsClass: "hero-char",
          wordsClass: "hero-word",
        });

        gsap.from(split.chars, {
          y: 150,
          rotationX: 90,
          opacity: 0,
          duration: 1.2,
          stagger: 0.03,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Floating elements
      const floats = document.querySelectorAll(".float-element");
      floats.forEach((el, i) => {
        gsap.to(el, {
          y: 15,
          x: i % 2 === 0 ? 8 : -8,
          duration: 2 + i * 0.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // Service Cards
      const serviceCards = document.querySelectorAll(".service-card-3d");
      serviceCards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: sectionRefs.current[1],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          x: i % 2 === 0 ? -150 : 150,
          opacity: 0,
          rotationY: i % 2 === 0 ? -20 : 20,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        });
      });

      // Timeline
      const timelineItems = document.querySelectorAll(".timeline-item");
      timelineItems.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: sectionRefs.current[2],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          x: i % 2 === 0 ? -80 : 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      });

      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: sectionRefs.current[2],
          start: "top 80%",
          end: "bottom 90%",
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: "top center",
      });

      // Stats
      const statCards = document.querySelectorAll(".stat-card-circle");
      statCards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: sectionRefs.current[3],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          scale: 0,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(1.7)",
        });

        const number = card.querySelector(".stat-number-circle");
        if (number) {
          const target = parseInt(number.getAttribute("data-target"));
          gsap.from(number, {
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            textContent: 0,
            duration: 2.5,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function () {
              number.textContent = Math.round(this.targets()[0].textContent);
            },
          });
        }

        const circle = card.querySelector(".progress-circle");
        if (circle) {
          const radius = circle.getAttribute("r");
          const circumference = 2 * Math.PI * radius;
          const value = parseInt(circle.getAttribute("data-value"));
          const offset = circumference - (value / 100) * circumference;
          gsap.to(circle, {
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            strokeDashoffset: offset,
            duration: 2,
            ease: "power2.out",
          });
        }
      });

      // Testimonials
      const testimonialCards = document.querySelectorAll(".testimonial-card-slide");
      testimonialCards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: sectionRefs.current[4],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        });
      });

      // CTA
      gsap.from(".cta-parallax", {
        scrollTrigger: {
          trigger: ".cta-parallax",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Navigation Dots
      const dots = document.querySelectorAll(".nav-dot");
      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          sectionRefs.current[i]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      });

      sectionRefs.current.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            setActiveIndex(i);
            dots.forEach((d, j) => {
              d.classList.toggle("active", j === i);
            });
          },
        });
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="services-main">
      {/* Navigation Dots */}
      <div className="nav-dots">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            className={`nav-dot ${activeIndex === i ? "active" : ""}`}
            onClick={() => {
              sectionRefs.current[i]?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          />
        ))}
      </div>

      {/* ========================================== */}
      {/* SECTION 1: HERO */}
      {/* ========================================== */}
      <section
        ref={(el) => {
          sectionRefs.current[0] = el;
          heroRef.current = el;
        }}
        className="section-hero"
        style={{ minHeight: "100vh", padding: "80px 20px", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}
      >
        <div className="hero-bg">
          <div className="hero-gradient-1" />
          <div className="hero-gradient-2" />
          <div className="hero-gradient-3" />
        </div>

        <div className="hero-content" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "900px" }}>
          <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 20px", borderRadius: "50px", background: "rgba(255,138,0,0.08)", border: "1px solid rgba(255,138,0,0.15)", color: "#ff8a00", fontSize: "14px", fontWeight: "500", marginBottom: "30px" }}>
            <Sparkles size={16} />
            <span>Pixsy Media</span>
          </div>

          <h1 ref={(el) => (headingRefs.current[0] = el)} className="hero-title" style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", fontWeight: "800", color: "#1a1a2e", lineHeight: "1.1", marginBottom: "24px" }}>
            <span className="hero-line" style={{ display: "block" }}>Dealing in all</span>
            <span className="hero-gradient-text" style={{ display: "block", background: "linear-gradient(135deg, #ff8a00, #ff315c, #d21cff, #3b4cff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundSize: "300% 300%" }}>Professional IT Services</span>
          </h1>

          <p className="hero-desc" style={{ fontSize: "clamp(1rem, 1.3vw, 1.25rem)", color: "#6b7280", maxWidth: "650px", margin: "0 auto 40px", lineHeight: "1.8" }}>
            We offer full-cycle software development services — from IT strategy consulting to end-to-end development of scalable solutions.
          </p>

          <div className="hero-actions" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "50px" }}>
            <a href="#services" className="hero-btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 36px", borderRadius: "50px", background: "linear-gradient(135deg, #ff8a00, #ff315c)", color: "#ffffff", textDecoration: "none", fontWeight: "600", fontSize: "1rem", boxShadow: "0 4px 20px rgba(255,138,0,0.25)" }}>
              Explore Services <ArrowRight size={18} />
            </a>
            <a href="#contact" className="hero-btn-secondary" style={{ display: "inline-flex", alignItems: "center", padding: "14px 36px", borderRadius: "50px", border: "2px solid #e5e7eb", color: "#1a1a2e", textDecoration: "none", fontWeight: "600", fontSize: "1rem", background: "transparent" }}>
              Get in Touch
            </a>
          </div>

          <div className="hero-features" style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap" }}>
            {heroFeatures.map((feature, i) => (
              <div key={i} className="hero-feature float-element" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#6b7280", fontSize: "14px", fontWeight: "500" }}>
                {feature.icon}
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-scroll-indicator" style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", color: "#9ca3af", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase" }}>
          <span>Scroll</span>
          <div className="scroll-line" style={{ width: "1px", height: "40px", background: "#e5e7eb", position: "relative", overflow: "hidden" }}>
            <div className="scroll-ball" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ff8a00", position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }} />
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: SERVICES */}
      {/* ========================================== */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="section-services"
        id="services"
        style={{ minHeight: "100vh", padding: "100px 20px", background: "#f8f9fa" }}
      >
        <div className="section-header" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-tag" style={{ display: "inline-block", padding: "6px 20px", borderRadius: "50px", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase", background: "rgba(255,138,0,0.1)", color: "#ff8a00", marginBottom: "16px", border: "1px solid rgba(255,138,0,0.2)" }}>What We Offer</span>
          <h2 ref={(el) => (headingRefs.current[1] = el)} style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "800", color: "#1a1a2e", marginBottom: "16px", lineHeight: "1.1" }}>
            Full-Cycle <span className="gradient-text" style={{ background: "linear-gradient(135deg, #ff8a00, #ff315c, #d21cff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Development</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>We deliver end-to-end solutions that drive real business growth</p>
        </div>

        <div className="services-grid-3d" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto", perspective: "1200px" }}>
          {services.map((service, i) => (
            <div key={i} className="service-card-3d" style={{ perspective: "800px", cursor: "pointer", transformStyle: "preserve-3d" }}>
              <div className="service-card-inner" style={{ background: "#ffffff", padding: "35px 28px", borderRadius: "24px", border: `1px solid ${service.color}20`, transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", position: "relative", overflow: "hidden", transformStyle: "preserve-3d", height: "100%", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                <div className="service-icon-3d" style={{ width: "56px", height: "56px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: "#ffffff", background: service.color, transition: "all 0.3s ease" }}>
                  {service.icon}
                </div>
                <div className="service-badge" style={{ position: "absolute", top: "16px", right: "16px", padding: "4px 12px", borderRadius: "50px", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#ffffff", background: service.color }}>
                  {service.tag}
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#1a1a2e", marginBottom: "10px" }}>{service.title}</h3>
                <p style={{ color: "#6b7280", lineHeight: "1.6", fontSize: "0.95rem", marginBottom: "16px" }}>{service.desc}</p>
                <div className="service-arrow" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #e5e7eb", color: "#9ca3af", transition: "all 0.3s ease" }}>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: TIMELINE */}
      {/* ========================================== */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="section-timeline"
        style={{ minHeight: "100vh", padding: "100px 20px", background: "#ffffff" }}
      >
        <div className="section-header" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-tag" style={{ display: "inline-block", padding: "6px 20px", borderRadius: "50px", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase", background: "rgba(255,138,0,0.1)", color: "#ff8a00", marginBottom: "16px", border: "1px solid rgba(255,138,0,0.2)" }}>OUR PROCESS</span>
          <h2 ref={(el) => (headingRefs.current[2] = el)} style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "800", color: "#1a1a2e", marginBottom: "16px", lineHeight: "1.1" }}>
            How We <span className="gradient-text" style={{ background: "linear-gradient(135deg, #ff8a00, #ff315c, #d21cff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Work</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>A proven methodology that ensures success at every step</p>
        </div>

        <div className="timeline-container" style={{ maxWidth: "900px", margin: "0 auto", position: "relative", padding: "20px 0" }}>
          <div className="timeline-line" style={{ position: "absolute", left: "28px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, #ff8a00, #ff315c, #d21cff)", transformOrigin: "top center" }} />

          {processSteps.map((step, i) => (
            <div key={i} className="timeline-item" style={{ display: "flex", gap: "30px", marginBottom: "50px", position: "relative", opacity: 0 }}>
              <div className="timeline-dot" style={{ flexShrink: 0, width: "56px", height: "56px", borderRadius: "50%", background: "#ffffff", border: "2px solid rgba(255,138,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1, boxShadow: "0 4px 20px rgba(255,138,0,0.08)" }}>
                <div className="timeline-dot-inner" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #ff8a00, #ff315c)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff" }}>
                  {step.icon}
                </div>
              </div>
              <div className="timeline-content" style={{ flex: 1, paddingTop: "4px" }}>
                <div className="timeline-step" style={{ fontSize: "13px", fontWeight: "700", color: "#ff8a00", letterSpacing: "2px", marginBottom: "6px" }}>{step.step}</div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#1a1a2e", marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ color: "#6b7280", lineHeight: "1.7", fontSize: "0.95rem" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4: STATS */}
      {/* ========================================== */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="section-stats"
        style={{ minHeight: "100vh", padding: "100px 20px", background: "#f8f9fa" }}
      >
        <div className="section-header" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-tag" style={{ display: "inline-block", padding: "6px 20px", borderRadius: "50px", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase", background: "rgba(255,138,0,0.1)", color: "#ff8a00", marginBottom: "16px", border: "1px solid rgba(255,138,0,0.2)" }}>Our Impact</span>
          <h2 ref={(el) => (headingRefs.current[3] = el)} style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "800", color: "#1a1a2e", marginBottom: "16px", lineHeight: "1.1" }}>
            Numbers That <span className="gradient-text" style={{ background: "linear-gradient(135deg, #ff8a00, #ff315c, #d21cff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Speak</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>Real results that demonstrate our commitment to excellence</p>
        </div>

        <div className="stats-grid-circle" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", maxWidth: "1000px", margin: "0 auto" }}>
          {stats.map((stat, i) => (
            <div key={i} className="stat-card-circle" style={{ position: "relative", textAlign: "center", padding: "30px 20px", background: "#ffffff", borderRadius: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
              <svg className="progress-ring" viewBox="0 0 120 120" style={{ width: "120px", height: "120px", transform: "rotate(-90deg)", margin: "0 auto 20px" }}>
                <circle className="progress-ring-bg" cx="60" cy="60" r="50" stroke="#f0f0f0" strokeWidth="8" fill="none" />
                <circle className="progress-circle" cx="60" cy="60" r="50" stroke={stat.color} strokeWidth="8" fill="none" strokeDasharray="314.16" strokeDashoffset="314.16" data-value={Math.min(parseInt(stat.number) / 100, 100) || 85} />
              </svg>
              <div className="stat-icon-circle" style={{ position: "absolute", top: "45px", left: "50%", transform: "translateX(-50%)", color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-number-circle" data-target={parseInt(stat.number) || 0} style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1a1a2e", marginTop: "12px" }}>
                0
              </div>
              <div className="stat-label-circle" style={{ color: "#6b7280", fontSize: "0.9rem", fontWeight: "500" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5: TESTIMONIALS */}
      {/* ========================================== */}
      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className="section-testimonials"
        style={{ minHeight: "100vh", padding: "100px 20px", background: "#ffffff" }}
      >
        <div className="section-header" style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-tag" style={{ display: "inline-block", padding: "6px 20px", borderRadius: "50px", fontSize: "13px", fontWeight: "600", letterSpacing: "2px", textTransform: "uppercase", background: "rgba(255,138,0,0.1)", color: "#ff8a00", marginBottom: "16px", border: "1px solid rgba(255,138,0,0.2)" }}>CLIENT VOICES</span>
          <h2 ref={(el) => (headingRefs.current[4] = el)} style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "800", color: "#1a1a2e", marginBottom: "16px", lineHeight: "1.1" }}>
            What Our <span className="gradient-text" style={{ background: "linear-gradient(135deg, #ff8a00, #ff315c, #d21cff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Clients Say</span>
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>Real feedback from real clients who trusted us with their projects</p>
        </div>

        <div className="testimonials-slide" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", maxWidth: "1200px", margin: "0 auto" }}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="testimonial-card-slide" style={{ background: "#f8f9fa", padding: "30px 28px", borderRadius: "24px", transition: "all 0.3s ease", position: "relative", overflow: "hidden", opacity: 0 }}>
              <div className="testimonial-header" style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div className="testimonial-avatar" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, #ff8a00, #ff315c)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontWeight: "700", fontSize: "16px", flexShrink: 0 }}>
                  {testimonial.avatar}
                </div>
                <div className="testimonial-info" style={{ flex: 1 }}>
                  <h4 style={{ color: "#1a1a2e", fontWeight: "600", fontSize: "1rem", margin: 0 }}>{testimonial.name}</h4>
                  <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>{testimonial.role}</span>
                </div>
                <div className="testimonial-rating" style={{ color: "#ff8a00", fontSize: "14px", letterSpacing: "2px" }}>
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
              <p className="testimonial-text-slide" style={{ color: "#374151", lineHeight: "1.7", fontSize: "0.95rem", marginBottom: "16px" }}>"{testimonial.text}"</p>
              <div className="testimonial-quote-icon" style={{ position: "absolute", bottom: "16px", right: "20px", fontSize: "4rem", color: "rgba(255,138,0,0.06)", fontFamily: "Georgia, serif" }}>
                <span>"</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 6: CTA */}
      {/* ========================================== */}
      <section
        ref={(el) => (sectionRefs.current[5] = el)}
        className="section-cta"
        style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 20px", background: "#f8f9fa" }}
      >
        <div className="cta-parallax" style={{ maxWidth: "900px", width: "100%", padding: "60px 50px", borderRadius: "40px", background: "linear-gradient(135deg, #fff5f0, #fdf0ff)", border: "1px solid rgba(255,138,0,0.1)", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div className="cta-bg-pattern" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,138,0,0.03), transparent 50%), radial-gradient(circle at 80% 50%, rgba(211,28,255,0.03), transparent 50%)" }} />
          <div className="cta-content" style={{ position: "relative", zIndex: 1 }}>
            <div className="cta-badge" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 18px", borderRadius: "50px", background: "rgba(255,138,0,0.1)", color: "#ff8a00", fontSize: "13px", fontWeight: "600", marginBottom: "20px" }}>
              <Sparkles size={16} />
              <span>Let's Talk</span>
            </div>
            <h3 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "800", color: "#1a1a2e", marginBottom: "16px" }}>
              Ready to <span style={{ background: "linear-gradient(135deg, #ff8a00, #ff315c, #d21cff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Transform</span> Your Business?
            </h3>
            <p style={{ color: "#6b7280", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto 30px" }}>
              Let's discuss how our professional IT services can help you achieve your goals.
            </p>
            <div className="cta-buttons" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
              <a href="/contact" className="cta-btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 36px", borderRadius: "50px", background: "linear-gradient(135deg, #ff8a00, #ff315c)", color: "#ffffff", textDecoration: "none", fontWeight: "600", boxShadow: "0 4px 20px rgba(255,138,0,0.25)" }}>
                Get Started <ArrowRight size={18} />
              </a>
              <a href="/about" className="cta-btn-secondary" style={{ display: "inline-flex", alignItems: "center", padding: "14px 36px", borderRadius: "50px", border: "2px solid #e5e7eb", color: "#1a1a2e", textDecoration: "none", fontWeight: "600", background: "transparent" }}>
                Learn More
              </a>
            </div>
            <div className="cta-stats" style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap", paddingTop: "30px", borderTop: "1px solid #f0f0f0" }}>
              <div className="cta-stat" style={{ textAlign: "center" }}>
                <span className="cta-stat-number" style={{ display: "block", fontSize: "1.5rem", fontWeight: "800", color: "#1a1a2e" }}>6800+</span>
                <span className="cta-stat-label" style={{ fontSize: "0.85rem", color: "#9ca3af" }}>Clients</span>
              </div>
              <div className="cta-stat-divider" style={{ width: "1px", background: "#f0f0f0" }} />
              <div className="cta-stat" style={{ textAlign: "center" }}>
                <span className="cta-stat-number" style={{ display: "block", fontSize: "1.5rem", fontWeight: "800", color: "#1a1a2e" }}>99.9%</span>
                <span className="cta-stat-label" style={{ fontSize: "0.85rem", color: "#9ca3af" }}>Success Rate</span>
              </div>
              <div className="cta-stat-divider" style={{ width: "1px", background: "#f0f0f0" }} />
              <div className="cta-stat" style={{ textAlign: "center" }}>
                <span className="cta-stat-number" style={{ display: "block", fontSize: "1.5rem", fontWeight: "800", color: "#1a1a2e" }}>24/7</span>
                <span className="cta-stat-label" style={{ fontSize: "0.85rem", color: "#9ca3af" }}>Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;