import React from "react";
import { Code, TrendingUp, ShieldCheck, Layout, Database } from "lucide-react";
import "./ProfessionalServices.css";

export default function ProfessionalServices() {
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
      description: "Providing the best IT solutions for non IT businesses.",
      aosDelay: "0",
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="pixsy-service-icon" />,
      description: "We are a creative & full service digital marketing agency.",
      aosDelay: "150",
    },
    {
      title: "Security System",
      icon: <ShieldCheck className="pixsy-service-icon" />,
      description: "Pixsy has the best smart security systems in the world.",
      aosDelay: "300",
    },
    {
      title: "UI/UX Designing",
      icon: <Layout className="pixsy-service-icon" />,
      description: "We create vibrant, intuitive and minimalist web designs.",
      aosDelay: "450",
    },
    {
      title: "Data Analysis",
      icon: <Database className="pixsy-service-icon" />,
      description: "Help to gain flexible analytical insights out of their data.",
      aosDelay: "600",
    },
  ];

  return (
    <section className="pixsy-prof-services-section">
      {/* Background Mesh Grid Pattern Overlay */}
      <div className="pixsy-mesh-overlay"></div>

      <div className="container position-relative z-2">

        {/* Top 3 Image Cards Section */}
        <div className="row g-4 mb-5 pb-4 justify-content-center" data-aos="fade-up">
          {topCards.map((card, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="pixsy-top-card">
                <div className="top-card-img">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="top-card-banner">
                  <div className="banner-icon-box">{card.icon}</div>
                  <h5>{card.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="row align-items-center mb-5 pt-3" data-aos="fade-up">
          <div className="col-lg-6">
            <div className="pixsy-small-title">— What We're Offering</div>
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

        {/* Bottom 5 Hover Cards Grid */}
        <div className="row g-2 justify-content-center my-4">
          {services.map((service, index) => (
            <div
              className="col-12 col-sm-6 col-lg-2 pixsy-grid-5"
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
            >
              <div className="pixsy-hover-card">
                {/* Floating Top Icon Tab */}
                <div className="pixsy-icon-tab">
                  {service.icon}
                </div>

                {/* Card Content */}
                <div className="pixsy-card-body">
                  <h4>{service.title}</h4>
                  <div className="pixsy-card-line"></div>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}