import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  TrendingUp,
  ShieldCheck,
  Layout,
  Database,
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react";
import "./ProfessionalServices.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProfessionalServices() {
  const sectionRef = useRef(null);
  const topCardsRef = useRef(null);
  const headerRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top Cards Animation
      gsap.from(".pixsy-top-card", {
        scrollTrigger: {
          trigger: topCardsRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
        immediateRender: false,
      });

      // Header Animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power2.out",
        immediateRender: false,
      });

      // Services Cards Animation
      gsap.from(".pixsy-service-card-modern", {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
        immediateRender: false,
      });

      // Parallax effect on mesh overlay
      gsap.to(".pixsy-mesh-overlay", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -30,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const topCards = [
    {
      title: "Perfect solutions that business demands",
      image: "/images/slider1.png",
      icon: <Code className="pixsy-top-icon" />,
    },
    {
      title: "Providing excellent technology solutions",
      image: "/images/slider2.png",
      icon: <TrendingUp className="pixsy-top-icon" />,
    },
    {
      title: "We eagerly put in use new IT innovations",
      image: "/images/slider3.png",
      icon: <ShieldCheck className="pixsy-top-icon" />,
    },
  ];

  const services = [
    {
      title: "Product Development",
      icon: <Code className="pixsy-service-icon" />,
      description: "Providing the best IT solutions for non IT businesses with robust architecture.",
      primary: "#ff8a00",
      bgGradient: "linear-gradient(135deg, #fff9f2 0%, #ffffff 100%)",
      accentColor: "#d97500",
      descColor: "#7a5e45",
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="pixsy-service-icon" />,
      description: "We are a creative & full service digital marketing agency growing your brand.",
      primary: "#ff315c",
      bgGradient: "linear-gradient(135deg, #fff4f6 0%, #ffffff 100%)",
      accentColor: "#e01b45",
      descColor: "#7a4852",
    },
    {
      title: "Security System",
      icon: <ShieldCheck className="pixsy-service-icon" />,
      description: "Pixsy has the best smart security systems to protect your enterprise infrastructure.",
      primary: "#d21cff",
      bgGradient: "linear-gradient(135deg, #fbf4ff 0%, #ffffff 100%)",
      accentColor: "#b00fd9",
      descColor: "#6e4c7a",
    },
    {
      title: "UI/UX Designing",
      icon: <Layout className="pixsy-service-icon" />,
      description: "We create vibrant, intuitive, and minimalist user-centered web designs.",
      primary: "#3b4cff",
      bgGradient: "linear-gradient(135deg, #f4f5ff 0%, #ffffff 100%)",
      accentColor: "#2837d4",
      descColor: "#4d527a",
    },
    {
      title: "Data Analysis",
      icon: <Database className="pixsy-service-icon" />,
      description: "Help you gain flexible analytical insights out of complex enterprise data.",
      primary: "#1267ff",
      bgGradient: "linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)",
      accentColor: "#004fd9",
      descColor: "#455d7a",
    },
  ];

  return (
    <section ref={sectionRef} className="pixsy-prof-services-section">
      <div className="pixsy-mesh-overlay"></div>

      <div className="container position-relative z-2">
        {/* Top 3 Image Cards Section */}
        <div ref={topCardsRef} className="row g-4 mb-5 pb-4 justify-content-center">
          {topCards.map((card, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="pixsy-top-card">
                <div className="top-card-img-wrapper">
                  <img src={card.image} alt={card.title} />
                  <div className="top-card-overlay-gradient"></div>
                  <div className="top-card-badge">
                    <Zap size={14} />
                  </div>
                </div>
                <div className="top-card-banner">
                  <div className="banner-icon-box">{card.icon}</div>
                  <h5>{card.title}</h5>
                  <ArrowRight className="banner-arrow" size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div ref={headerRef} className="row align-items-center mb-5 pt-3">
          <div className="col-lg-6">
            <div className="pixsy-small-title">
              <Sparkles sizelet={14} />
              What We're Offering
            </div>
            <h2 className="pixsy-main-heading">
              Dealing in all Professional <span>IT Services</span>
            </h2>
          </div>
          <div className="col-lg-6">
            <p className="pixsy-header-desc">
              We offer full-cycle software development services that meet varied business
              requirements from IT strategy consulting to the end-to-end development of scalable solutions.
            </p>
          </div>
        </div>

        {/* 5 Cards in 1 Row */}
        <div ref={servicesRef} className="row g-2 justify-content-center my-4">
          {services.map((service, index) => (
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-2"
              key={index}
              style={{
                "--card-primary": service.primary,
                "--card-bg": service.bgGradient,
                "--card-accent": service.accentColor,
                "--card-desc": service.descColor,
              }}
            >
              <div className="pixsy-service-card-modern">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <span className="service-number">0{index + 1}</span>
                </div>

                <div className="service-card-content">
                  <h4>{service.title}</h4>
                  <div className="pixsy-card-line"></div>
                  <p>{service.description}</p>
                </div>

                <div className="service-card-footer">
                  <button className="service-btn">
                    <span>Explore Service</span>
                    <ArrowRight size={16} className="btn-arrow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}