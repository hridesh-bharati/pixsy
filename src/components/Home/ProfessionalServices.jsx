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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const topCards = [
    {
      title: "Perfect solutions that business demands",
      image: "/images/slider1.png",
      icon: <Code size={22} className="text-primary" />,
    },
    {
      title: "Providing excellent technology solutions",
      image: "/images/slider2.png",
      icon: <TrendingUp size={22} className="text-danger" />,
    },
    {
      title: "We eagerly put in use new IT innovations",
      image: "/images/slider3.png",
      icon: <ShieldCheck size={22} className="text-purple" />,
    },
  ];

  const services = [
    {
      title: "Product Development",
      icon: <Code size={20} className="text-white" />,
      description: "Providing the best IT solutions for non IT businesses with robust architecture.",
      primary: "#ff8a00",
      bgGradient: "linear-gradient(135deg, #fff9f2 0%, #ffffff 100%)",
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp size={20} className="text-white" />,
      description: "We are a creative & full service digital marketing agency growing your brand.",
      primary: "#ff315c",
      bgGradient: "linear-gradient(135deg, #fff4f6 0%, #ffffff 100%)",
    },
    {
      title: "Security System",
      icon: <ShieldCheck size={20} className="text-white" />,
      description: "Pixsy has the best smart security systems to protect your enterprise infrastructure.",
      primary: "#d21cff",
      bgGradient: "linear-gradient(135deg, #fbf4ff 0%, #ffffff 100%)",
    },
    {
      title: "UI/UX Designing",
      icon: <Layout size={20} className="text-white" />,
      description: "We create vibrant, intuitive, and minimalist user-centered web designs.",
      primary: "#3b4cff",
      bgGradient: "linear-gradient(135deg, #f4f5ff 0%, #ffffff 100%)",
    },
    {
      title: "Data Analysis",
      icon: <Database size={20} className="text-white" />,
      description: "Help you gain flexible analytical insights out of complex enterprise data.",
      primary: "#1267ff",
      bgGradient: "linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%)",
    },
  ];

  return (
    <section ref={sectionRef} className="py-5 bg-light position-relative overflow-hidden">
      <div className="pixsy-mesh-overlay"></div>

      <div className="container-fluid position-relative z-2 px-4 px-lg-5">

        {/* Top 3 Image Cards Section */}
        <div ref={topCardsRef} className="row g-4 mb-5 justify-content-center">
          {topCards.map((card, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="pixsy-top-card bg-white rounded-4 overflow-hidden border shadow-sm h-100">
                <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                  <img src={card.image} alt={card.title} className="w-100 h-100 object-fit-cover transition-transform" />
                  <span className="position-absolute top-0 end-0 m-3 bg-white bg-opacity-75 backdrop-blur p-2 rounded-3 text-warning shadow-sm">
                    <Zap size={14} />
                  </span>
                </div>
                <div className="p-3 d-flex align-items-center gap-3 bg-white border-top">
                  <div className="p-2 bg-light rounded-3 d-flex align-items-center justify-content-center flex-shrink-0">
                    {card.icon}
                  </div>
                  <h5 className="fs-6 fw-bold text-dark mb-0">{card.title}</h5>
                  <ArrowRight className="ms-auto text-primary flex-shrink-0" size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Header (Fixed Alignment: Heading upar/neche aur paragraph niche proper flow me) */}
        <div ref={headerRef} className="row mb-5 pt-3">
          <div className="col-lg-8">
            <span className="pixsy-small-title d-inline-flex align-items-center gap-2 mb-2">
              <Sparkles size={14} /> What We're Offering
            </span>
            <h2 className="display-6 fw-bolder text-dark mb-3">
              Dealing in all Professional <span className="pixsy-gradient-text">IT Services</span>
            </h2>
            <p className="text-muted fs-6 mb-0">
              We offer full-cycle software development services that meet varied business
              requirements from IT strategy consulting to the end-to-end development of scalable solutions.
            </p>
          </div>
        </div>

        {/* 5 Cards in 1 Row with Colorful Texts */}
        <div ref={servicesRef} className="row g-3 justify-content-center">
          {services.map((service, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg"
              key={index}
              style={{
                "--card-primary": service.primary,
                "--card-bg": service.bgGradient,
              }}
            >
              <div className="pixsy-service-card-modern p-3 rounded-4 h-100 d-flex flex-column justify-content-between border shadow-sm">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="p-2 rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ background: service.primary }}>
                      {service.icon}
                    </div>
                    <span className="fw-bold fs-6" style={{ color: service.primary, opacity: 0.7 }}>
                      0{index + 1}
                    </span>
                  </div>

                  {/* Colorful Card Title */}
                  <h4 className="fw-bold fs-6 mb-2" style={{ color: service.primary }}>{service.title}</h4>
                  <div className="mb-2 rounded-pill" style={{ width: "25px", height: "3px", background: service.primary }}></div>

                  {/* Colorful Card Description */}
                  <p className="small mb-3 fw-medium" style={{ color: service.primary, opacity: 0.85 }}>{service.description}</p>
                </div>

                <div className="border-top pt-2">
                  <button className="btn btn-sm w-100 fw-bold text-white py-2 rounded-3 d-flex align-items-center justify-content-center gap-2" style={{ background: service.primary }}>
                    <span>Explore</span>
                    <ArrowRight size={14} />
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