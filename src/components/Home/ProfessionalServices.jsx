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
      icon: <Monitor size={32} strokeWidth={2.5} />,
      title: "Website Development",
      description: "Fast, responsive & SEO friendly websites that convert.",
      bgColor: "#EEF2FF",
      iconColor: "#4F46E5",
      hoverColor: "#4F46E5",
      shadowColor: "rgba(79, 70, 229, 0.08)",
      hoverShadowColor: "rgba(79, 70, 229, 0.25)",
    },
    {
      icon: <ShoppingCart size={32} strokeWidth={2.5} />,
      title: "E-Commerce Solutions",
      description: "Powerful online stores that sell & scale your business.",
      bgColor: "#FEF2F2",
      iconColor: "#DC2626",
      hoverColor: "#DC2626",
      shadowColor: "rgba(220, 38, 38, 0.08)",
      hoverShadowColor: "rgba(220, 38, 38, 0.25)",
    },
    {
      icon: <PenTool size={32} strokeWidth={2.5} />,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs that create lasting impressions.",
      bgColor: "#FFFBEB",
      iconColor: "#F59E0B",
      hoverColor: "#F59E0B",
      shadowColor: "rgba(245, 158, 11, 0.08)",
      hoverShadowColor: "rgba(245, 158, 11, 0.25)",
    },
    {
      icon: <BarChart3 size={32} strokeWidth={2.5} />,
      title: "SEO & Digital Marketing",
      description: "Rank higher, get found & grow with result-driven strategies.",
      bgColor: "#F5F3FF",
      iconColor: "#7C3AED",
      hoverColor: "#7C3AED",
      shadowColor: "rgba(124, 58, 237, 0.08)",
      hoverShadowColor: "rgba(124, 58, 237, 0.25)",
    },
    {
      icon: <Megaphone size={32} strokeWidth={2.5} />,
      title: "Social Media Management",
      description: "Engage your audience & grow your brand across platforms.",
      bgColor: "#ECFEFF",
      iconColor: "#06B6D4",
      hoverColor: "#06B6D4",
      shadowColor: "rgba(6, 182, 212, 0.08)",
      hoverShadowColor: "rgba(6, 182, 212, 0.25)",
    },
    {
      icon: <Palette size={32} strokeWidth={2.5} />,
      title: "Branding & Identity",
      description: "Unique branding that builds trust & makes you unforgettable.",
      bgColor: "#ECFDF5",
      iconColor: "#10B981",
      hoverColor: "#10B981",
      shadowColor: "rgba(16, 185, 129, 0.08)",
      hoverShadowColor: "rgba(16, 185, 129, 0.25)",
    },
  ];

  return (
    <section className="py-5 bg-white text-dark overflow-hidden">
      <div className="container-fluid px-3 px-lg-4 py-3">
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 px-lg-3 gap-2">
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

        {/* Services Row - No Scrollbar */}
        <div className="services-row-container d-flex flex-nowrap gap-3 px-lg-2">
          {services.map((service, index) => (
            <div
              className="service-col-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card h-100 p-3 rounded-4 position-relative service-card bg-white d-flex flex-column"
                style={{
                  border: "1px solid #f1f3f5",
                  boxShadow: `0 4px 20px ${service.shadowColor}`,
                  transition: "all 0.3s ease",
                  minWidth: "220px",
                  maxWidth: "270px",
                }}
              >
                <div className="card-body d-flex flex-column p-0">
                  {/* Icon with colorful background */}
                  <div
                    className="mb-3 d-flex justify-content-center align-items-center mx-auto"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      backgroundColor: service.bgColor,
                      color: service.iconColor,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {React.cloneElement(service.icon, {
                      style: {
                        color: service.iconColor,
                        strokeWidth: 2.5,
                      }
                    })}
                  </div>

                  {/* Title */}
                  <h6
                    className="fw-bold mb-2 text-dark text-center"
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.3",
                      fontWeight: 700,
                    }}
                  >
                    {service.title}
                  </h6>

                  {/* Description */}
                  <p
                    className="text-muted mb-3 text-center"
                    style={{
                      lineHeight: "1.4",
                      fontSize: "0.75rem",
                      flex: 1,
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Bottom Arrow with color */}
                  <div className="mt-auto d-flex justify-content-center">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center arrow-icon-box"
                      style={{
                        width: "34px",
                        height: "34px",
                        border: "1.5px solid #e2e8f0",
                        backgroundColor: "#fff",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <ArrowRight size={15} className="text-secondary" strokeWidth={2.5} />
                    </div>
                  </div>
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

        /* No scrollbar */
        .services-row-container {
          scroll-behavior: smooth;
          overflow-x: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .services-row-container::-webkit-scrollbar {
          display: none;
        }

        /* Updated wider card sizing */
        .service-col-item {
          flex: 0 0 240px;
          min-width: 220px;
          max-width: 270px;
        }

        @media (max-width: 1200px) {
          .service-col-item {
            flex: 0 0 230px;
          }
        }

        @media (max-width: 992px) {
          .service-col-item {
            flex: 0 0 220px;
          }
        }

        @media (max-width: 768px) {
          .service-col-item {
            flex: 0 0 210px;
          }
        }

        /* Card hover effects - Shadow maintained */
        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #7C3AED33 !important;
        }

        .service-card:hover .arrow-icon-box {
          background: #6366f1 !important;
          border-color: #6366f1 !important;
        }

        .service-card:hover .arrow-icon-box svg {
          color: #fff !important;
        }

        /* Each card gets its own hover color with matching shadow */
        ${services.map((service, i) => `
          .service-col-item:nth-child(${i + 1}) .service-card:hover {
            border-color: ${service.hoverColor}40 !important;
            box-shadow: 0 20px 40px ${service.hoverShadowColor} !important;
          }
          .service-col-item:nth-child(${i + 1}) .service-card:hover .arrow-icon-box {
            background: ${service.hoverColor} !important;
            border-color: ${service.hoverColor} !important;
          }
          .service-col-item:nth-child(${i + 1}) .service-card:hover .icon-wrapper {
            background: ${service.hoverColor} !important;
            color: #fff !important;
          }
        `).join('')}
      `}</style>
    </section>
  );
}