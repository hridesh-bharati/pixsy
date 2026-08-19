// src/components/Team/Team.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Sparkles, Briefcase, MapPin, Star, CheckCircle2 } from 'lucide-react';
import './Team.css';

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  const founder = {
    name: 'abhilasha singh',
    title: 'Founder & CEO',
    handle: 'pixsymedia',
    bio: 'Visionary leader and digital strategist dedicated to transforming brands through innovative media, creative direction, and tech solutions at PixsyMedia.',
    experience: '3+ Years Exp',
    projects: '50+ Projects',
    location: 'India',
    image: '/images/founder-images/founder.jpg',
  };

  // Brand gradient string
  const brandGradient = 'linear-gradient(135deg, #ff6b00, #ff2770, #873cff, #2865ff)';

  return (
    <section className="py-5 bg-light position-relative overflow-hidden">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div data-aos="fade-down" data-aos-delay="100">
            <span
              className="badge rounded-pill px-3 py-2 mb-3 fw-bold d-inline-flex align-items-center gap-2 shadow-sm text-white"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '1.5px',
                background: brandGradient
              }}
            >
              <Sparkles size={14} /> MEET THE FOUNDER
            </span>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="fw-bold display-5 text-dark mb-2">
              The Mind Behind <span style={{ background: brandGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>PixsyMedia</span>
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="text-muted fs-6">Passionate leadership dedicated to your ultimate success</p>
          </div>
        </div>

        {/* Founder Layout: Left Full Image, Right Info */}
        <div className="row align-items-center g-5 justify-content-center">
          {/* Left Column: Full-body Image */}
          <div className="col-lg-5 col-md-8" data-aos="fade-right" data-aos-delay="400">
            <div className="position-relative text-center">
              <div
                className="position-absolute rounded-4 w-100 h-100 top-0 start-0"
                style={{
                  background: brandGradient,
                  filter: 'blur(20px)',
                  opacity: 0.25,
                  zIndex: 0
                }}
              ></div>
              <div
                className="card border-0 shadow-lg rounded-4 overflow-hidden position-relative"
                style={{ zIndex: 1, backgroundColor: '#ffffff' }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-100 object-fit-cover"
                  style={{ maxHeight: '520px', objectPosition: 'top center' }}
                />
                <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-75 text-white text-start">
                  <span className="badge px-2 py-1 mb-1 text-white" style={{ background: brandGradient }}>Leadership</span>
                  <h6 className="mb-0 fw-bold">{founder.name} — {founder.title}</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Info & Details */}
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="500">
            <div className="p-4 p-lg-5 bg-white rounded-4 shadow-sm border border-light position-relative">
              <div className="position-absolute top-0 start-0 end-0 rounded-top" style={{ height: '4px', background: brandGradient }}></div>

              <div data-aos="fade-up" data-aos-delay="600">
                <h3 className="fw-bold text-dark mb-1">{founder.name}</h3>
                <p className="fw-semibold mb-2" style={{ background: brandGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
                  {founder.title} @{founder.handle}
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="700">
                <p className="text-muted mb-4">{founder.bio}</p>
              </div>

              {/* Stats Grid */}
              <div className="row g-3 mb-4" data-aos="fade-up" data-aos-delay="800">
                <div className="col-4">
                  <div className="p-3 border rounded-3 text-center bg-light bg-opacity-50">
                    <Briefcase size={20} className="mb-1 text-danger" />
                    <div className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>{founder.experience}</div>
                    <div className="text-muted" style={{ fontSize: '0.7rem' }}>Experience</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-3 border rounded-3 text-center bg-light bg-opacity-50">
                    <Star size={20} className="mb-1 text-warning" />
                    <div className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>{founder.projects}</div>
                    <div className="text-muted" style={{ fontSize: '0.7rem' }}>Completed</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-3 border rounded-3 text-center bg-light bg-opacity-50">
                    <MapPin size={20} className="mb-1 text-primary" />
                    <div className="fw-bold text-dark" style={{ fontSize: '0.85rem' }}>{founder.location}</div>
                    <div className="text-muted" style={{ fontSize: '0.7rem' }}>Location</div>
                  </div>
                </div>
              </div>

              {/* Core Expertise / Highlights */}
              <div className="mb-4" data-aos="fade-up" data-aos-delay="900">
                <h6 className="fw-bold text-dark mb-3">Core Expertise</h6>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <CheckCircle2 size={16} className="text-success" />
                    <span>Strategic Brand Positioning & Digital Growth</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <CheckCircle2 size={16} className="text-success" />
                    <span>Creative Direction & Media Production</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted small">
                    <CheckCircle2 size={16} className="text-success" />
                    <span>Client Relationship Management & Scaling</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="d-flex gap-3" data-aos="fade-up" data-aos-delay="1000">
                <a
                  href="https://pixsymedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-white px-4 py-2 rounded-3 fw-semibold shadow-sm border-0"
                  style={{ background: brandGradient }}
                >
                  Visit PixsyMedia
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;