import React from "react";
import { Code, Layout, TrendingUp, Smartphone } from "lucide-react";
import "./WebServicesStats.css";

export default function WebServicesStats() {
  const services = [
    {
      title: "Web Development",
      icon: <Code className="pixsy-lucide-icon" />,
      description: "Custom, fast, and responsive websites built for high conversion.",
      cardClass: "card-gradient-1",
      headingClass: "text-gradient-primary",
      aosDelay: "600", // 4th
    },
    {
      title: "UI/UX Design",
      icon: <Layout className="pixsy-lucide-icon" />,
      description: "Creative interfaces and user experiences that captivate audiences.",
      cardClass: "card-gradient-2",
      headingClass: "text-gradient-danger",
      aosDelay: "400", // 3rd
    },
    {
      title: "SEO & Marketing",
      icon: <TrendingUp className="pixsy-lucide-icon" />,
      description: "Strategic optimization to rank higher and drive organic growth.",
      cardClass: "card-gradient-3",
      headingClass: "text-gradient-info",
      aosDelay: "200", // 2nd
    },
    {
      title: "App Development",
      icon: <Smartphone className="pixsy-lucide-icon" />,
      description: "Scalable mobile applications tailored for modern businesses.",
      cardClass: "card-gradient-4",
      headingClass: "text-gradient-success",
      aosDelay: "0",   // 1st (Leftmost comes first)
    },
  ];

  return (
    <section className="pixsy-stats-section">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={index}
              data-aos="fade-left"
              data-aos-delay={service.aosDelay}
            >
              <div className={`pixsy-stat-card ${service.cardClass}`}>
                {/* Static Colorful Border Wrapper */}
                <div className="static-border-wrap">
                  <div className="circle-container">
                    <div className="circle-ring">
                      <div className="service-icon-box">{service.icon}</div>
                    </div>
                  </div>
                </div>

                {/* Colorful Heading & Accent Line */}
                <h4 className={service.headingClass}>{service.title}</h4>
                <div className="pixsy-line"></div>

                {/* Description */}
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}