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

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  // All three cards now use the brand gradient text and have arrows removed
  const topCards = [
    {
      title: "Perfect solutions that business demands",
      image: "/images/card1.webp",
      icon: <Code className="pixsy-top-icon" />,
    },
    {
      title: "Providing excellent technology solutions",
      image: "/images/card2.webp",
      icon: <TrendingUp className="pixsy-top-icon" />,
    },
    {
      title: "We eagerly put in use new IT innovations",
      image: "/images/card5.webp",
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

      <div className="container-fluid position-relative z-2">
        {/* Top 3 Image Cards */}
        <div className="row g-4 mb-5 pb-4 justify-content-center">
          {topCards.map(({ title, image, icon }, index) => (
            <div className="col-12 col-md-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="pixsy-top-card">
                <div className="top-card-img-wrapper">
                  <img src={image} alt={title} />
                  <div className="top-card-overlay-gradient"></div>
                  <div className="top-card-badge">
                    <Zap size={14} />
                  </div>
                </div>
                <div className="top-card-banner">
                  <div className="banner-icon-box">{icon}</div>
                  <h5 className="pixsy-gradient-text">{title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="container m-auto row align-items-center mb-5 pt-3" data-aos="fade-up">
          <div className="col-lg-6">
            <div className="pixsy-small-title">
              <Sparkles size={14} />
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

        {/* Services Cards */}
        <div className="row g-2 justify-content-center my-4">
          {services.map((service, index) => (
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-2"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              style={{
                "--card-primary": service.primary,
                "--card-bg": service.bgGradient,
                "--card-accent": service.accentColor,
                "--card-desc": service.descColor,
              }}
            >
              <div className="pixsy-service-card-modern">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">{service.icon}</div>
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