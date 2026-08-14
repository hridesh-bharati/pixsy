import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  Globe,
  MessageCircle,
  Share2,
  Rocket,
} from "lucide-react";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  const stats = [
    { number: "6800+", label: "Satisfied Clients", icon: <Users size={28} />, color: "#ff8a00" },
    { number: "50+", label: "Expert Team", icon: <Users size={28} />, color: "#ff315c" },
    { number: "99.9%", label: "Success Rate", icon: <Star size={28} />, color: "#d21cff" },
    { number: "24/7", label: "Support Available", icon: <Headphones size={28} />, color: "#3b4cff" },
  ];

  const values = [
    { icon: <Lightbulb size={24} />, title: "Innovation First", desc: "We embrace cutting-edge technologies to deliver modern solutions.", color: "#ff8a00" },
    { icon: <Heart size={24} />, title: "Client-Centric", desc: "Your success is our success. We put your needs at the forefront.", color: "#ff315c" },
    { icon: <Shield size={24} />, title: "Quality Assurance", desc: "We maintain rigorous standards to ensure flawless delivery.", color: "#d21cff" },
    { icon: <Users size={24} />, title: "Collaborative Team", desc: "Our diverse team works together to bring your vision to life.", color: "#3b4cff" },
  ];

  const expertise = [
    { icon: <Code2 size={24} />, title: "Web Development", desc: "Custom, fast, and responsive websites built for high conversion.", color: "#ff8a00" },
    { icon: <PenTool size={24} />, title: "UI/UX Design", desc: "Creative interfaces and user experiences that captivate audiences.", color: "#ff315c" },
    { icon: <TrendingUp size={24} />, title: "Digital Marketing", desc: "Strategic optimization to rank higher and drive organic growth.", color: "#d21cff" },
    { icon: <Smartphone size={24} />, title: "App Development", desc: "Scalable mobile applications tailored for modern businesses.", color: "#3b4cff" },
    { icon: <Shield size={24} />, title: "Security Systems", desc: "Best smart security systems to protect your enterprise infrastructure.", color: "#1267ff" },
    { icon: <Database size={24} />, title: "Data Analysis", desc: "Gain flexible analytical insights out of complex enterprise data.", color: "#ff8a00" },
  ];

  const teamMembers = [
    { name: "Sarah Johnson", role: "CEO & Founder", avatar: "https://i.pravatar.cc/400?img=1", color: "#ff8a00" },
    { name: "Michael Chen", role: "Lead Developer", avatar: "https://i.pravatar.cc/400?img=2", color: "#ff315c" },
    { name: "Emily Rodriguez", role: "Creative Director", avatar: "https://i.pravatar.cc/400?img=3", color: "#d21cff" },
    { name: "David Thompson", role: "SEO Specialist", avatar: "https://i.pravatar.cc/400?img=4", color: "#3b4cff" },
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "CEO, TechStart Inc.", text: "Pixsy Media transformed our online presence completely. Traffic increased by 200%.", avatar: "SJ", rating: 5 },
    { name: "Michael Chen", role: "Marketing Director, GrowthHub", text: "The team at Pixsy Media is exceptional. They understood our vision perfectly.", avatar: "MC", rating: 5 },
    { name: "Emily Rodriguez", role: "Founder, CreativeSpace", text: "Working with Pixsy Media was a game-changer for our business.", avatar: "ER", rating: 5 },
  ];

  return (
    <div className="about-main">
      {/* HERO SECTION WITH IMAGE & BACKGROUND GLOW */}
      <section className="about-hero py-5 position-relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
        <div className="hero-bg-glow"></div>
        <div className="container py-5 position-relative z-1">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-lg-start text-center">
              <span className="about-badge mb-3 d-inline-flex align-items-center gap-2" data-aos="fade-up" data-aos-delay="100">
                <Sparkles size={16} /> About Pixsy Media
              </span>
              <h1 className="display-4 fw-bold mb-3" data-aos="fade-up" data-aos-delay="200">
                We're Partner of Your <span className="gradient-text">Innovations</span>
              </h1>
              <p className="lead text-muted mb-4" data-aos="fade-up" data-aos-delay="300">
                Pixsy Media is a premier digital marketing and software development agency.
                We help organizations and companies improve business performance & enhance their competitiveness.
              </p>
              <div className="about-hero-actions d-flex justify-content-center justify-content-lg-start gap-3" data-aos="fade-up" data-aos-delay="400">
                <a href="#contact" className="about-btn-primary">
                  Get Started <ArrowRight size={18} />
                </a>
                <a href="#team" className="about-btn-secondary">
                  Meet Our Team
                </a>
              </div>
            </div>

            {/* HERO IMAGE / ROCKET ILLUSTRATION PLACEHOLDER */}
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="hero-image-wrapper">
                <div className="hero-image-placeholder shadow-lg">
                  <Rocket size={70} className="text-warning mb-2 animate-bounce" />
                  <span className="fw-bold fs-4 text-dark">PIXSY MEDIA</span>
                  <small className="text-muted">Digital Agency & Software Solutions</small>
                </div>
                <div className="hero-image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        {/* STATS SECTION */}
        <section className="about-stats py-4">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="about-stat-card h-100 p-4 text-center bg-white shadow-sm rounded-4 border">
                  <div className="about-stat-icon mb-2" style={{ color: stat.color }}>{stat.icon}</div>
                  <div className="about-stat-number fs-2 fw-bold" style={{ color: stat.color }}>{stat.number}</div>
                  <div className="about-stat-label text-muted">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="about-values py-5">
          <div className="text-center mb-5">
            <span className="about-section-tag" data-aos="fade-up">Our Values</span>
            <h2 className="fw-bold display-6" data-aos="fade-up" data-aos-delay="100">What Drives <span className="gradient-text">Us</span></h2>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">Our core values define who we are and how we work</p>
          </div>
          <div className="row g-4">
            {values.map((val, idx) => (
              <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="about-value-card p-4 h-100 bg-white shadow-sm rounded-4 border">
                  <div className="about-value-icon mb-3" style={{ background: `${val.color}15`, color: val.color }}>{val.icon}</div>
                  <h5 className="fw-bold mb-2">{val.title}</h5>
                  <p className="text-muted small mb-0">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERTISE SECTION */}
        <section className="about-expertise py-5">
          <div className="text-center mb-5">
            <span className="about-section-tag" data-aos="fade-up">Our Expertise</span>
            <h2 className="fw-bold display-6" data-aos="fade-up" data-aos-delay="100">What We <span className="gradient-text">Do Best</span></h2>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">We offer full-cycle software development services and digital solutions</p>
          </div>
          <div className="row g-4">
            {expertise.map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="about-expertise-card p-4 h-100 bg-white shadow-sm rounded-4 border-start border-4" style={{ borderColor: `${item.color} !important` }}>
                  <div className="about-expertise-icon mb-3" style={{ background: `${item.color}15`, color: item.color }}>{item.icon}</div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="about-team py-5" id="team">
          <div className="text-center mb-5">
            <span className="about-section-tag" data-aos="fade-up">Our Team</span>
            <h2 className="fw-bold display-6" data-aos="fade-up" data-aos-delay="100">Meet Our <span className="gradient-text">Leaders</span></h2>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">Passionate professionals dedicated to your success</p>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="about-team-card p-4 text-center bg-white shadow-sm rounded-4 border">
                  <div className="about-team-avatar mb-3 mx-auto" style={{ borderColor: member.color, width: '80px', height: '80px', borderRadius: '50%', border: '3px solid' }}>
                    <img src={member.avatar} alt={member.name} className="w-100 h-100 rounded-circle object-fit-cover" />
                  </div>
                  <h5 className="fw-bold mb-1" style={{ color: member.color }}>{member.name}</h5>
                  <p className="text-muted small mb-3">{member.role}</p>
                  <div className="about-team-social d-flex justify-content-center gap-2">
                    <a href="#" className="about-team-social-link"><Globe size={16} /></a>
                    <a href="#" className="about-team-social-link"><MessageCircle size={16} /></a>
                    <a href="#" className="about-team-social-link"><Share2 size={16} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="about-testimonials py-5">
          <div className="text-center mb-5">
            <span className="about-section-tag" data-aos="fade-up">Testimonials</span>
            <h2 className="fw-bold display-6" data-aos="fade-up" data-aos-delay="100">What Our <span className="gradient-text">Clients Say</span></h2>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="200">Real feedback from real clients who trusted us</p>
          </div>
          <div className="row g-4">
            {testimonials.map((t, idx) => (
              <div key={idx} className="col-md-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="about-testimonial-card p-4 h-100 bg-white shadow-sm rounded-4 border position-relative">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="about-testimonial-avatar rounded-circle bg-gradient text-white fw-bold d-flex align-items-center justify-content-center" style={{ width: 45, height: 45, background: '#ff8a00' }}>
                      {t.avatar}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                    <div className="ms-auto text-warning">{"★".repeat(t.rating)}</div>
                  </div>
                  <p className="text-muted small mb-0">"{t.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="about-cta text-center p-5 my-5 rounded-5 shadow-sm border bg-light" data-aos="zoom-in">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="fw-bold mb-3">Ready to <span>Transform</span> Your Business?</h3>
              <p className="text-muted mb-4">Let's discuss how our professional IT services can help you achieve your goals.</p>
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