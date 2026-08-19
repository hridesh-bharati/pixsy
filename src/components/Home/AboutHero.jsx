import React from "react";
import { CodeXml, Megaphone, Check, ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">

          {/* Left Column: Image Collage */}
          <div className="col-lg-6">
            <div className="position-relative d-flex flex-column gap-3 pe-lg-3">

              {/* Image 1 */}
              <div className="w-75">
                <img
                  src="/images/card3.webp"
                  alt="Team collaborating"
                  className="img-fluid rounded-4 shadow-lg w-100 object-fit-cover"
                />
              </div>

              {/* Image 2 (Overlapping) */}
              <div className="w-75 align-self-end  position-relative" style={{ zIndex: 2 }}>
                <img
                  src="/images/card2.webp"
                  alt="Team meeting"
                  className="img-fluid rounded-4 shadow-lg w-100 object-fit-cover"
                />
              </div>

              {/* Floating Satisfied Clients Badge */}
              <div className="position-absolute bottom-0 start-0 m-3 p-3 text-white rounded-4 shadow-lg bg-primary" style={{ zIndex: 5, background: "linear-gradient(135deg, #a62dff, #315cff)" }}>
                <h3 className="fw-bolder mb-0 fs-3 lh-1">6800+</h3>
                <small className="opacity-75 fw-bold fs-7">Satisfied Clients</small>
              </div>

            </div>
          </div>

          {/* Right Column: Content & Bullet Points */}
          <div className="col-lg-6">
            <div className="ps-lg-3">

              <div className="text-uppercase fw-bold text-primary tracking-wide mb-3 small" style={{ letterSpacing: "3px" }}>
                — About Pixsy Media
              </div>

              <h2 className="fw-bolder display-6 text-dark mb-3 lh-sm">
                We're Partner of Your <span className="text-primary">Innovations</span>
              </h2>

              <p className="text-secondary fs-6 mb-4 lh-base">
                Pixsy Media is a premier digital marketing and software development agency.
                We help organizations and companies improve business performance & enhance their competitiveness.
              </p>

              {/* Service Features Grid */}
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="p-3 bg-light border border-light-subtle rounded-3 d-flex align-items-center gap-3 border-start border-4 border-warning shadow-sm">
                    <div className="bg-warning text-white p-2 rounded-2 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                      <CodeXml size={20} />
                    </div>
                    <h5 className="fw-bold fs-6 text-dark mb-0">Website Development</h5>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 bg-light border border-light-subtle rounded-3 d-flex align-items-center gap-3 border-start border-4 border-primary shadow-sm">
                    <div className="bg-primary text-white p-2 rounded-2 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                      <Megaphone size={20} />
                    </div>
                    <h5 className="fw-bold fs-6 text-dark mb-0">Digital Marketing</h5>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
                <li className="d-flex align-items-center gap-2 fw-semibold text-secondary">
                  <span className="badge bg-primary-subtle text-primary rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: "22px", height: "22px" }}>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  Bringing new digital solutions to the market
                </li>
                <li className="d-flex align-items-center gap-2 fw-semibold text-secondary">
                  <span className="badge bg-primary-subtle text-primary rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: "22px", height: "22px" }}>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  Included among the leading creative technology agencies
                </li>
                <li className="d-flex align-items-center gap-2 fw-semibold text-secondary">
                  <span className="badge bg-primary-subtle text-primary rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: "22px", height: "22px" }}>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  Backed by over 300 senior digital professionals
                </li>
              </ul>

              {/* Action Button */}
              <div>
                <a href="/contact" className="btn btn-primary rounded-pill px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 shadow-sm">
                  Learn More <ArrowRight size={18} />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}