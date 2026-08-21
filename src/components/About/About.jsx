// src/components/About.jsx
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import {
  Code2,
  TrendingUp,
  Shield,
  Users,
  Headphones,
  ArrowRight,
  Star,
  Smartphone,
  Sparkles,
  Database,
  PenTool,
  Lightbulb,
  Heart,
  Award,
  CheckCircle2,
  Briefcase,
  Quote
} from "lucide-react";
import "./About.css";

const About = () => {
  // Refs for GSAP running gradient headings
  const headingRefs = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });

    // GSAP Running Color Animation for all headings
    headingRefs.current.forEach((el) => {
      if (el) {
        gsap.to(el, {
          backgroundPosition: "200% 50%",
          duration: 4,
          repeat: -1,
          ease: "sine.inOut",
        });
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  const stats = [
    { number: "6800+", label: "Happy Clients", icon: <Users size={26} />, color: "#ff6b00", bg: "linear-gradient(135deg, #fff7ed, #ffedd5)" },
    { number: "10+", label: "Years Experience", icon: <Award size={26} />, color: "#ff2770", bg: "linear-gradient(135deg, #fff1f2, #ffe4e6)" },
    { number: "99.9%", label: "Project Success Rate", icon: <Star size={26} />, color: "#873cff", bg: "linear-gradient(135deg, #faf5ff, #f3e8ff)" },
    { number: "24/7", label: "Dedicated Support", icon: <Headphones size={26} />, color: "#2865ff", bg: "linear-gradient(135deg, #eff6ff, #dbeafe)" },
  ];

  const coreValues = [
    { icon: <Lightbulb size={24} />, title: "Innovation & Agility", desc: "We constantly adapt to cutting-edge tech stacks to build future-proof digital solutions.", color: "#ff6b00", bg: "linear-gradient(135deg, #fffaf5, #ffeedd)" },
    { icon: <Heart size={24} />, title: "Client-Centric Focus", desc: "Your vision is our blueprint. We work hand-in-hand with you to turn ideas into reality.", color: "#ff2770", bg: "linear-gradient(135deg, #fff5f6, #ffe6e9)" },
    { icon: <Shield size={24} />, title: "Uncompromised Quality", desc: "From secure backend architecture to pixel-perfect UI, excellence is embedded in our code.", color: "#873cff", bg: "linear-gradient(135deg, #fbf7ff, #f3d9fa)" },
    { icon: <Users size={24} />, title: "Collaborative Growth", desc: "We believe in long-term partnerships, helping startups and enterprises scale sustainably.", color: "#2865ff", bg: "linear-gradient(135deg, #f4f8ff, #dce7ff)" },
  ];

  const coreExpertise = [
    { icon: <Code2 size={24} />, title: "Full-Stack Development", desc: "Robust web applications built using React, Next.js, PHP, and modern databases.", color: "#ff6b00", bg: "linear-gradient(135deg, #fffaf5, #ffeedd)" },
    { icon: <PenTool size={24} />, title: "UI/UX & Branding", desc: "Immersive digital interfaces and visual brand identities designed to captivate users.", color: "#ff2770", bg: "linear-gradient(135deg, #fff5f6, #ffe6e9)" },
    { icon: <TrendingUp size={24} />, title: "Digital Growth & SEO", desc: "Data-driven marketing strategies and search engine optimization for maximum reach.", color: "#873cff", bg: "linear-gradient(135deg, #fbf7ff, #f3d9fa)" },
    { icon: <Smartphone size={24} />, title: "Mobile Solutions", desc: "High-performance cross-platform mobile apps tailored for Android and iOS.", color: "#2865ff", bg: "linear-gradient(135deg, #f4f8ff, #dce7ff)" },
    { icon: <Shield size={24} />, title: "Enterprise Security", desc: "Advanced security protocols and system vulnerability analysis to protect assets.", color: "#0d9488", bg: "linear-gradient(135deg, #f0fdf4, #dcfce7)" },
    { icon: <Database size={24} />, title: "Data Analytics & Cloud", desc: "Scalable cloud deployments and deep analytical insights for smart decisions.", color: "#ea580c", bg: "linear-gradient(135deg, #fff7ed, #ffedd5)" },
  ];

  const milestones = [
    { year: "2016", title: "Inception & Foundation", desc: "Pixsy Media was founded with a vision to revolutionize digital software services.", bg: "linear-gradient(135deg, #fffaf5, #ffeedd)", color: "#ff6b00" },
    { year: "2019", title: "Expansion to Enterprise", desc: "Scaled operations, delivering over 500+ custom web and mobile solutions globally.", bg: "linear-gradient(135deg, #fff5f6, #ffe6e9)", color: "#ff2770" },
    { year: "2023", title: "AI & Next-Gen Tech Integration", desc: "Adopted advanced full-stack architectures, cloud automation, and high-end UI frameworks.", bg: "linear-gradient(135deg, #fbf7ff, #f3d9fa)", color: "#873cff" },
    { year: "2026", title: "Industry Leader", desc: "Proudly empowering 6800+ satisfied clients with robust digital transformation.", bg: "linear-gradient(135deg, #f4f8ff, #dce7ff)", color: "#2865ff" },
  ];

  return (
    <div className="about-main">
      {/* ================= HERO SECTION ================= */}
      <section className="about-hero py-5 position-relative overflow-hidden" data-aos="fade-up">
        <div className="hero-bg-glow"></div>
        <div className="container py-5 position-relative z-1">
          <div className="row align-items-center g-5">
            <div className="col-lg-7 text-lg-start text-center">
              <span className="about-badge mb-3 d-inline-flex align-items-center gap-2">
                <Sparkles size={16} /> Welcome to Pixsy Media
              </span>
              <h1 className="display-4 fw-bold mb-3">
                Empowering Businesses Through <span ref={addToRefs} className="running-gradient-text">Digital Excellence</span>
              </h1>
              <p className="  text-muted mb-4">
                Pixsy Media is a premier full-cycle software development and digital solutions agency.
                We bridge the gap between complex technology and business growth, helping brands thrive in a digital-first world.
              </p>
              <div className="about-hero-actions d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
                <a href="#expertise" className="about-btn-primary">
                  Explore Our Expertise <ArrowRight size={18} />
                </a>
                <a href="#milestones" className="about-btn-secondary">
                  Our Journey
                </a>
              </div>
            </div>

            <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
              <div className="about-hero-card p-4 rounded-4 shadow-sm border bg-white">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="about-card-icon-box bg-warning bg-opacity-10 text-warning p-3 rounded-3">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 text-dark">Pixsy Media Agency</h5>
                    <span className="text-muted small">Global IT & Software Partner</span>
                  </div>
                </div>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                  <li className="d-flex align-items-center gap-2 text-secondary small">
                    <CheckCircle2 size={18} className="text-success flex-shrink-0" /> Custom Web & Mobile Architecture
                  </li>
                  <li className="d-flex align-items-center gap-2 text-secondary small">
                    <CheckCircle2 size={18} className="text-success flex-shrink-0" /> Scalable Cloud & Security Solutions
                  </li>
                  <li className="d-flex align-items-center gap-2 text-secondary small">
                    <CheckCircle2 size={18} className="text-success flex-shrink-0" /> Result-Driven Digital Growth Strategies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        {/* ================= STATS SECTION ================= */}
        <section className="about-stats py-4">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="about-stat-card h-100 p-4 text-center rounded-4 shadow-sm border" style={{ background: stat.bg }}>
                  <div className="about-stat-icon mb-2 p-2 rounded-3 d-inline-flex bg-white shadow-sm" style={{ color: stat.color }}>{stat.icon}</div>
                  <div className="about-stat-number fs-2 fw-bold" style={{ color: stat.color }}>{stat.number}</div>
                  <div className="about-stat-label text-muted fw-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FOUNDER QUOTE SECTION ================= */}
        <section className="about-founder-quote py-5" data-aos="fade-up">
          <div className="p-4 p-md-5 rounded-5 shadow-sm border bg-white position-relative overflow-hidden about-founder-box" style={{ background: 'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)' }}>
            <div className="position-absolute top-0 end-0 opacity-10 p-4 text-purple">
              <Quote size={100} opacity={0.1} />
            </div>
            <div className="row align-items-center g-4 position-relative z-1">
              <div className="col-md-4 text-center">
                <img
                  src="/images/founder-images/founder-about-pic.jpg"
                  alt="abhilasha singh - Founder"
                  className="rounded-circle shadow border border-3 border-white object-fit-cover"
                  style={{ width: '150px', height: '150px' }}
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=Abhilash&background=f1f5f9&color=64748b&size=150";
                  }}
                />
              </div>
              <div className="col-md-8 text-center text-md-start">
                <span className="badge bg-white text-dark border mb-2 px-3 py-1 fw-bold rounded-pill shadow-sm">Founder's Note</span>
                <h4 className="fw-semibold mb-3 text-dark fst-italic" style={{ fontSize: '1.15rem', lineHeight: '1.6' }}>"Technology is not just about writing clean code; it's about empowering human potential and scaling dreams into reality."</h4>
                <h5 className="fw-bold mb-0 text-dark">Abhilasha Singh</h5>
                <span className="text-muted small">Founder & Director, Pixsy Media</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OUR MISSION & VISION ================= */}
        <section className="about-mission py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="about-section-tag">Who We Are</span>
              <h2 className="fw-bold display-6 mb-3">Building the Digital Future, <span ref={addToRefs} className="running-gradient-text">One Project at a Time</span></h2>
              <p className="text-muted mb-4">
                At Pixsy Media, we aren't just developers or designers—we are strategic technology partners.
                Our team combines creative design thinking with rigorous engineering to build platforms that scale effortlessly and perform brilliantly.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 shadow-sm border" style={{ background: '#fff7ed' }}>
                    <h6 className="fw-bold text-dark mb-1">🎯 Our Mission</h6>
                    <p className="text-muted small mb-0">To deliver innovative software that accelerates business success.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 rounded-3 shadow-sm border" style={{ background: '#eff6ff' }}>
                    <h6 className="fw-bold text-dark mb-1">🚀 Our Vision</h6>
                    <p className="text-muted small mb-0">To be a globally recognized benchmark for IT engineering.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="about-vision-box p-5 rounded-5 text-white position-relative overflow-hidden shadow" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)' }}>
                <div className="position-relative z-1">
                  <span className="badge bg-warning text-dark mb-3 px-3 py-2 fw-bold rounded-pill">Why Choose Us</span>
                  <h3 className="fw-bold mb-3 text-white">Excellence Driven By Passion & Precision</h3>
                  <p className="text-light opacity-75 mb-4 small">
                    We maintain transparent communication, timely deployments, and clean maintainable codebases so your business never misses a beat.
                  </p>
                  <a href="/contact" className="btn btn-warning fw-bold px-4 py-2 rounded-pill">Let's Build Together</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CORE VALUES SECTION ================= */}
        <section className="about-values py-5">
          <div className="text-center mb-5">
            <span className="about-section-tag" data-aos="fade-up">Core Values</span>
            <h2 className="fw-bold display-6" data-aos="fade-up" data-aos-delay="100">What Drives <span ref={addToRefs} className="running-gradient-text">Us</span></h2>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">The foundational principles that guide every line of code we write</p>
          </div>
          <div className="row g-4">
            {coreValues.map((val, idx) => (
              <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="about-value-card p-4 h-100 rounded-4 shadow-sm border" style={{ background: val.bg }}>
                  <div className="about-value-icon mb-3 p-3 rounded-3 d-inline-flex bg-white shadow-sm" style={{ color: val.color }}>{val.icon}</div>
                  <h5 className="fw-bold mb-2 text-dark">{val.title}</h5>
                  <p className="text-muted small mb-0">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= EXPERTISE SECTION ================= */}
        <section className="about-expertise py-5" id="expertise">
          <div className="text-center mb-5">
            <span className="about-section-tag" data-aos="fade-up">Our Capabilities</span>
            <h2 className="fw-bold display-6" data-aos="fade-up" data-aos-delay="100">Comprehensive <span ref={addToRefs} className="running-gradient-text">IT Solutions</span></h2>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">End-to-end services tailored for modern business ecosystems</p>
          </div>
          <div className="row g-4">
            {coreExpertise.map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="about-expertise-card p-4 h-100 rounded-4 shadow-sm border" style={{ background: item.bg }}>
                  <div className="about-expertise-icon mb-3 p-3 rounded-3 d-inline-flex bg-white shadow-sm" style={{ color: item.color }}>{item.icon}</div>
                  <h5 className="fw-bold mb-2 text-dark">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= MILESTONES / TIMELINE SECTION ================= */}
        <section className="about-milestones py-5" id="milestones">
          <div className="text-center mb-5">
            <span className="about-section-tag" data-aos="fade-up">Our Growth</span>
            <h2 className="fw-bold display-6" data-aos="fade-up" data-aos-delay="100">Milestones That <span ref={addToRefs} className="running-gradient-text">Define Us</span></h2>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">A look back at our journey of continuous innovation</p>
          </div>
          <div className="row g-4 justify-content-center">
            {milestones.map((m, idx) => (
              <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="p-4 rounded-4 shadow-sm border h-100 position-relative" style={{ background: m.bg }}>
                  <span className="badge bg-white text-dark border mb-3 px-3 py-1 fw-bold rounded-pill shadow-sm" style={{ color: m.color }}>{m.year}</span>
                  <h5 className="fw-bold mb-2 text-dark">{m.title}</h5>
                  <p className="text-muted small mb-0">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="about-cta text-center p-5 my-5 rounded-5 shadow-sm border bg-light" data-aos="zoom-in">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="fw-bold mb-3 text-dark">Ready to <span ref={addToRefs} className="running-gradient-text">Transform</span> Your Business?</h3>
              <p className="text-muted mb-4">Let's discuss how our professional IT services and development team can help you achieve your goals.</p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/contact" className="about-btn-primary">Get Started <ArrowRight size={18} /></a>
                <a href="/services" className="about-btn-secondary">Explore Services</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;