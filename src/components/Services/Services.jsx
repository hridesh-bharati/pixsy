import React, { useEffect } from 'react';
import {
  Code,
  Globe,
  Palette,
  TrendingUp,
  Smartphone,
  Shield,
  BarChart3,
  Zap,
  Users,
  MessageCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';
import PixsyServices from "../Home/Services/PixsyServices";
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  // DRY: Hero Badges Data
  const heroBadges = [
    { icon: <Globe size={18} />, text: 'Global Reach' },
    { icon: <Zap size={18} />, text: 'Fast Delivery' },
    { icon: <Shield size={18} />, text: 'Secure' },
    { icon: <Users size={18} />, text: '50+ Team' },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section position-relative min-vh-90 d-flex align-items-center py-5 overflow-hidden">
        <div className="hero-bg-image position-absolute inset-0 w-100 h-100">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
            alt="Technology background"
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <div className="hero-overlay position-absolute inset-0 w-100 h-100"></div>

        <div className="container position-relative z-2">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-white">
              <h1
                className="hero-title display-4 fw-bold lh-1 mb-3"
                data-aos="fade-up"
              >
                <span className="highlight">Pixsy Media</span><br />
                Dealing in all<br />
                Professional IT Services
              </h1>
              <p
                className="hero-subtitle lead text-light opacity-85 mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We offer full-cycle software development services — from IT strategy consulting to end-to-end development of scalable solutions.
              </p>

              {/* Action Buttons */}
              <div
                className="d-flex flex-wrap gap-3 mb-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Link to="/contact-us">
                  <button className="btn btn-primary btn-custom-gradient rounded-pill px-4 py-3 fw-bold d-inline-flex align-items-center gap-2">
                    Get Started <ArrowRight size={20} />
                  </button>
                </Link>
                <Link to="/about-us">
                  <button className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold">
                    Learn More
                  </button>
                </Link>
              </div>

              {/* DRY: Badges Map */}
              <div
                className="d-flex flex-wrap gap-3"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {heroBadges.map((badge, index) => (
                  <span
                    key={index}
                    className="hero-tag badge bg-white bg-opacity-10 border border-light border-opacity-25 px-3 py-2 rounded-pill text-light d-flex align-items-center gap-2"
                  >
                    {badge.icon} {badge.text}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="col-lg-6 text-center"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                alt="Team collaboration"
                className="img-fluid rounded-4 shadow-lg border border-white border-opacity-25"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PixsyServices Component */}
      <div data-aos="fade-up">
        <PixsyServices />
      </div>
    </div>
  );
};

export default Services;