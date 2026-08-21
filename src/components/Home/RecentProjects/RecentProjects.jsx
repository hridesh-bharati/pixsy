// src/components/Home/RecentProjects/RecentProjects.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import "./RecentProjects.css";

export default function RecentProjects() {
  const projects = [
    {
      title: "Tarang Goa",
      category: "Website Development",
      image: "/images/tarang-goa.jpg",
      link: "#",
      accentColor: "#ff6b00",
      bgColor: "#fff5ed"
    },
    {
      title: "Digicom Training Academy",
      category: "Website Development",
      image: "/images/digicom.jpg",
      link: "#",
      accentColor: "#ff2770",
      bgColor: "#fff1f5"
    },
    {
      title: "CJ Group",
      category: "Website Development",
      image: "/images/cj-group.jpg",
      link: "#",
      accentColor: "#873cff",
      bgColor: "#f7f2ff"
    },
    {
      title: "Artghar",
      category: "UI/UX Design",
      image: "/images/artghar.jpg",
      link: "#",
      accentColor: "#06b6d4",
      bgColor: "#eef8ff"
    },
    {
      title: "Virnda Cards",
      category: "Website Development",
      image: "/images/virnda.jpg",
      link: "#",
      accentColor: "#10b981",
      bgColor: "#ecfdf5"
    }
  ];

  return (
    <section className="py-5 recent-projects-section overflow-hidden bg-white text-dark">
      <div className="container-fluid px-3 px-lg-4 py-3">
        {/* Top Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-5 px-lg-3 gap-3">
          <div>
            <div className="text-uppercase fw-bold text-muted mb-1" style={{ letterSpacing: "1.5px", fontSize: "11px" }}>
              OUR WORK
            </div>
            <h2 className="fw-bold display-6 mb-0 text-dark" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              Some Of Our Recent <span className="process-gradient-text">Projects</span>
            </h2>
          </div>
          <div>
            <Link
              to="/our-work"
              className="btn rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 fw-semibold shadow-sm project-all-btn"
              style={{ fontSize: "14px", border: "2px solid #ff2770", color: "#ff2770" }}
            >
              <span>View All Projects</span>
              <span className="rounded-circle d-inline-flex align-items-center justify-content-center text-white" style={{ width: "22px", height: "22px", background: "linear-gradient(135deg, #ff6b00, #ff2770)" }}>
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>

        {/* Projects Grid Container */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-col-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card h-100 p-3 rounded-4 position-relative project-glass-card bg-white"
                style={{
                  "--accent-color": project.accentColor,
                  "--card-bg": project.bgColor
                }}
              >
                {/* Project Image Preview Container */}
                <div
                  className="rounded-3 overflow-hidden mb-3 position-relative project-img-box"
                  style={{ height: "180px", background: project.bgColor, border: `1px solid ${project.accentColor}33` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-100 h-100 object-fit-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="position-absolute inset-0 d-flex align-items-center justify-content-center small fw-semibold" style={{ color: project.accentColor, opacity: 0.7, zIndex: -1 }}>
                    {project.title} Preview
                  </div>
                </div>

                {/* Card Body Details */}
                <div className="card-body p-0 d-flex justify-content-between align-items-end">
                  <div>
                    <h5 className="fw-bold mb-1 project-title-text" style={{ fontSize: "1.05rem", color: "#1e293b" }}>
                      {project.title}
                    </h5>
                    <p className="mb-0 fw-medium" style={{ fontSize: "0.82srem", color: project.accentColor }}>
                      {project.category}
                    </p>
                  </div>
                  <div>
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center external-icon-box"
                      style={{
                        width: "38px",
                        height: "38px",
                        backgroundColor: project.bgColor,
                        color: project.accentColor,
                        border: `1.5px solid ${project.accentColor}55`,
                        transition: "all 0.3s ease"
                      }}
                    >
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}