// src/components/ProfessionalServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Monitor, ShoppingCart, PenTool, BarChart3, Megaphone, Palette, ArrowRight } from "lucide-react";

export default function ProfessionalServices() {
  const services = [
    {
      icon: <Monitor size={28} className="text-primary" />,
      title: "Website Development",
      description: "Fast, responsive & SEO friendly websites that convert."
    },
    {
      icon: <ShoppingCart size={28} className="text-danger" />,
      title: "E-Commerce Solutions",
      description: "Powerful online stores that sell & scale your business."
    },
    {
      icon: <PenTool size={28} className="text-warning" />,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly designs that create lasting impressions."
    },
    {
      icon: <BarChart3 size={28} className="text-purple" />,
      title: "SEO & Digital Marketing",
      description: "Rank higher, get found & grow with result-driven strategies."
    },
    {
      icon: <Megaphone size={28} className="text-info" />,
      title: "Social Media Management",
      description: "Engage your audience & grow your brand across platforms."
    },
    {
      icon: <Palette size={28} className="text-success" />,
      title: "Branding & Identity",
      description: "Unique branding that builds trust & makes you unforgettable."
    }
  ];

  return (
    <section className="py-5 bg-white text-dark">
      <div className="container py-4">
        {/* Top Header Layout matching screenshot */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-5 gap-3">
          <div>
            <div className="text-uppercase fw-bold text-muted small mb-1" style={{ letterSpacing: "1px", fontSize: "11px" }}>
              WHAT WE DO
            </div>
            <h2 className="fw-bold display-6 mb-0">
              Solutions That Drive <span className="process-gradient-text">Real Results</span>
            </h2>
          </div>
          <div>
            <Link
              to="/our-services"
              className="btn btn-outline-dark rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 fw-semibold"
              style={{ borderColor: "#e2e8f0", fontSize: "14px" }}
            >
              <span>View All Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 3 Columns Grid (2 Rows x 3 Columns) */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div
                className="card h-100 p-4 rounded-4 position-relative service-card bg-white"
                style={{
                  border: "1px solid #f1f3f5",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                  transition: "all 0.3s ease"
                }}
              >
                <div className="card-body d-flex flex-column justify-content-between p-0">
                  <div>
                    {/* Icon */}
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    {/* Title */}
                    <h4 className="fw-bold fs-5 mb-2 text-dark">{service.title}</h4>
                    {/* Description */}
                    <p className="text-muted small mb-5" style={{ lineHeight: "1.6" }}>{service.description}</p>
                  </div>

                  {/* Bottom Arrow Icon */}
                  <div className="mt-auto">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center arrow-icon-box"
                      style={{
                        width: "35px",
                        height: "35px",
                        border: "1px solid #e2e8f0",
                        backgroundColor: "#fff",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <ArrowRight size={15} className="text-secondary" />
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
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08) !important;
          border-color: transparent !important;
        }
        .service-card:hover .arrow-icon-box {
          background: #6366f1 !important;
          border-color: #6366f1 !important;
        }
        .service-card:hover .arrow-icon-box svg {
          color: #fff !important;
        }
      `}</style>
    </section>
  );
}