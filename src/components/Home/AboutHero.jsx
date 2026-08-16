import React from "react";
import { CodeXml, Megaphone, Check, ArrowRight } from "lucide-react";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section className="pixsy-about-hero">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Column: Image Collage & Floating Badge */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="pixsy-about-images">
              <div className="img-box-1" data-aos="zoom-in" data-aos-delay="200">
                <img src="/images/slider1.png" alt="Team collaborating" />
              </div>
              <div className="img-box-2" data-aos="zoom-in" data-aos-delay="400">
                <img src="/images/slider2.png" alt="Team meeting" />
              </div>

              {/* Floating Satisfied Clients Badge */}
              <div className="pixsy-floating-badge" data-aos="fade-up" data-aos-delay="600">
                <strong>6800+</strong>
                <span>Satisfied Clients</span>
              </div>

              {/* Rotating Trust Stamp */}
              <div className="pixsy-rotating-stamp" data-aos="zoom-in" data-aos-delay="300">
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <path
                    id="curve"
                    fill="transparent"
                    d="M 15, 50 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                  <text>
                    <textPath href="#curve" startOffset="0%">
                      PIXSY MEDIA · DIGITAL AGENCY ·
                    </textPath>
                  </text>
                </svg>
                <div className="stamp-inner-icon">P</div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Bullet Points */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="pixsy-about-content">
              <div className="pixsy-small-title">— About Pixsy Media</div>

              <h2>
                We're Partner of Your <span>Innovations</span>
              </h2>

              <p className="lead-text">
                Pixsy Media is a premier digital marketing and software development agency.
                We help organizations and companies improve business performance & enhance their competitiveness.
              </p>

              {/* Service Features Grid (Permanently Colorful Icons) */}
              <div className="row g-3 mb-4">
                <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="pixsy-feature-box">
                    <div className="feature-icon-wrapper feature-orange">
                      <CodeXml size={22} />
                    </div>
                    <h5>Website Development</h5>
                  </div>
                </div>
                <div className="col-sm-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="pixsy-feature-box">
                    <div className="feature-icon-wrapper feature-blue">
                      <Megaphone size={22} />
                    </div>
                    <h5>Digital Marketing</h5>
                  </div>
                </div>
              </div>

              {/* Checklist */}
              <ul className="pixsy-checklist">
                <li data-aos="fade-up" data-aos-delay="300">
                  <span className="check-icon"><Check size={14} strokeWidth={3} /></span> Bringing new digital solutions to the market
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  <span className="check-icon"><Check size={14} strokeWidth={3} /></span> Included among the leading creative technology agencies
                </li>
                <li data-aos="fade-up" data-aos-delay="500">
                  <span className="check-icon"><Check size={14} strokeWidth={3} /></span> Backed by over 300 senior digital professionals
                </li>
              </ul>

              {/* Action Button */}
              <div className="mt-4" data-aos="fade-up" data-aos-delay="600">
                <a href="/contact" className="pixsy-main-btn">
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