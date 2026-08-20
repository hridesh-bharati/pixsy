// src/components/ProfessionalServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  ShoppingCart,
  PenTool,
  BarChart3,
  Megaphone,
  Palette,
  ArrowRight,
} from "lucide-react";

export default function ProfessionalServices() {
  const services = [
    {
      icon: <Monitor size={28} strokeWidth={2.5} />,
      title: "Website Development",
      description: "Fast, responsive & SEO friendly websites that convert.",
      gradient: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)",
      shadowColor: "rgba(79, 70, 229, 0.25)",
    },
    {
      icon: <ShoppingCart size={28} strokeWidth={2.5} />,
      title: "E-Commerce Solutions",
      description: "Powerful online stores that sell & scale your business.",
      gradient: "linear-gradient(135deg, #dc2626 0%, #f43f5e 100%)",
      shadowColor: "rgba(220, 38, 38, 0.25)",
    },
    {
      icon: <PenTool size={28} strokeWidth={2.5} />,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs that create lasting impressions.",
      gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
      shadowColor: "rgba(245, 158, 11, 0.25)",
    },
    {
      icon: <BarChart3 size={28} strokeWidth={2.5} />,
      title: "SEO & Digital Marketing",
      description: "Rank higher, get found & grow with result-driven strategies.",
      gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
      shadowColor: "rgba(124, 58, 237, 0.25)",
    },
    {
      icon: <Megaphone size={28} strokeWidth={2.5} />,
      title: "Social Media Management",
      description: "Engage your audience & grow your brand across platforms.",
      gradient: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
      shadowColor: "rgba(6, 182, 212, 0.25)",
    },
    {
      icon: <Palette size={28} strokeWidth={2.5} />,
      title: "Branding & Identity",
      description: "Unique branding that builds trust & makes you unforgettable.",
      gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      shadowColor: "rgba(16, 185, 129, 0.25)",
    },
  ];

  return (
    <section className="py-5 bg-white text-dark overflow-hidden">
      <div className="container-fluid px-3 px-lg-4 py-4">
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-5 px-lg-3 gap-2">
          <div>
            <div
              className="text-uppercase fw-bold text-muted mb-1"
              style={{ letterSpacing: "1.5px", fontSize: "11px" }}
            >
              WHAT WE DO
            </div>
            <h2 className="fw-bold display-6 mb-0" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
              Solutions That Drive <span className="process-gradient-text">Real Results</span>
            </h2>
          </div>
          <div>
            <Link
              to="/our-services"
              className="btn btn-outline-dark rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 fw-semibold shadow-sm"
              style={{
                borderColor: "#e2e8f0",
                fontSize: "13px",
                background: "linear-gradient(to right, #fff, #fff)",
              }}
            >
              <span>View All Services</span>
              <span
                className="rounded-circle bg-warning d-inline-flex align-items-center justify-content-center text-white"
                style={{ width: "22px", height: "22px" }}
              >
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-col-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card h-100 p-3 rounded-4 position-relative service-card text-white d-flex flex-column"
                style={{
                  background: service.gradient,
                  boxShadow: `0 8px 25px ${service.shadowColor}`,
                  transition: "all 0.3s ease",
                  minHeight: "210px",
                  border: "none",
                }}
              >
                <div className="card-body d-flex flex-column p-0 justify-content-between">
                  <div>
                    {/* Icon container */}
                    <div
                      className="mb-2 d-inline-flex justify-content-center align-items-center rounded-3 bg-white bg-opacity-25 text-white"
                      style={{
                        width: "48px",
                        height: "48px",
                      }}
                    >
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h6
                      className="fw-bold mb-1 text-white"
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1.2",
                        fontWeight: 700,
                      }}
                    >
                      {service.title}
                    </h6>
                  </div>

                  {/* Description */}
                  <p
                    className="text-white text-opacity-85 mb-0"
                    style={{
                      lineHeight: "1.3",
                      fontSize: "0.75rem",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-gradient-text {
          background: linear-gradient(135deg, #ff6b00, #ff2770, #873cff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.25rem;
          padding: 0.5rem 0.25rem;
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 576px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }

        .service-card {
          overflow: hidden;
          width: 100%;
        }

        .service-card:hover {
          transform: translateY(-6px);
          filter: brightness(1.05);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2) !important;
        }
      `}</style>
    </section>
  );
}