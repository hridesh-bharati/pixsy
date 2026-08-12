import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle,
  Award,
  Users,
  Globe,
  Clock,
  Code,
  Palette,
  TrendingUp,
  ShieldCheck,
  Rocket
} from 'lucide-react';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.about-hero-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Stats Animation
      gsap.from('.about-stat-item', {
        scrollTrigger: {
          trigger: '.about-stats',
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });

      // Features Animation
      gsap.from('.about-feature-item', {
        scrollTrigger: {
          trigger: '.about-features-grid',
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Values Animation
      gsap.from('.about-value-card', {
        scrollTrigger: {
          trigger: '.about-values',
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Mission Animation
      gsap.from('.about-mission-content', {
        scrollTrigger: {
          trigger: '.about-mission',
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: 'power3.out',
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Award, number: '500+', label: 'Projects Completed' },
    { icon: Users, number: '50+', label: 'Expert Team' },
    { icon: Globe, number: '30+', label: 'Countries Served' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
  ];

  const features = [
    { icon: Code, title: 'Web Development', desc: 'Modern, fast & secure websites built with cutting-edge technology.' },
    { icon: Palette, title: 'Creative Design', desc: 'Stunning designs that captivate and convert your audience.' },
    { icon: TrendingUp, title: 'Digital Marketing', desc: 'Data-driven strategies that drive traffic and growth.' },
    { icon: ShieldCheck, title: 'Security Solutions', desc: 'Enterprise-grade security to protect your digital assets.' },
  ];

  const values = [
    { title: 'Innovation', desc: 'We embrace new technologies to deliver cutting-edge solutions.' },
    { title: 'Quality', desc: 'We never compromise on quality in anything we deliver.' },
    { title: 'Transparency', desc: 'We believe in honest communication and clear processes.' },
    { title: 'Results', desc: 'We are driven by measurable outcomes and client success.' },
  ];

  return (
    <section ref={sectionRef} className="about-page">
      <div className="container">

        {/* ===== ABOUT HERO ===== */}
        <div className="about-hero">
          <div className="about-hero-content">
            <span className="about-badge">
              <Sparkles size={14} />
              About Pixsy Media
            </span>
            <h1>
              We Build Brands That <br />
              <span className="gradient-text">Inspire & Perform</span>
            </h1>
            <p>
              Pixsy Media is a premier digital marketing and software development agency.
              We help organizations improve business performance & enhance their competitiveness
              through powerful digital strategies & creative solutions.
            </p>
            <div className="about-hero-buttons">
              <button className="btn-primary-about">
                Let's Grow Together <ArrowRight size={18} />
              </button>
              <button className="btn-secondary-about">
                <Play size={18} />
                Watch Our Story
              </button>
            </div>
          </div>
          <div className="about-hero-image">
            <div className="hero-image-wrapper">
              <div className="hero-image-placeholder">
                <Rocket size={60} style={{ color: '#ff8a00' }} />
                <span>PIXSY MEDIA</span>
              </div>
              <div className="hero-image-glow"></div>
            </div>
          </div>
        </div>

        {/* ===== STATS ===== */}
        <div className="about-stats">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="about-stat-item">
                <div className="stat-icon-wrapper">
                  <Icon size={28} style={{ color: '#ff8a00' }} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* ===== STRATEGY, CREATIVITY, RESULTS ===== */}
        <div className="about-tagline">
          <div className="tagline-item">
            <span style={{ color: '#ff8a00' }}>✦</span>
            <h3>STRATEGY.</h3>
          </div>
          <div className="tagline-item">
            <span style={{ color: '#ff315c' }}>✦</span>
            <h3>CREATIVITY.</h3>
          </div>
          <div className="tagline-item">
            <span style={{ color: '#d21cff' }}>✦</span>
            <h3>RESULTS.</h3>
          </div>
        </div>

        {/* ===== FEATURES ===== */}
        <div className="about-features">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2>We Help Businesses <span className="gradient-text">Grow</span></h2>
            <p>Full-cycle development and marketing services that deliver real results</p>
          </div>
          <div className="about-features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="about-feature-item">
                  <div className="feature-icon" style={{ background: `rgba(255, 138, 0, 0.08)`, color: '#ff8a00' }}>
                    <Icon size={24} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== VALUES / WHY CHOOSE US ===== */}
        <div className="about-values">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Why <span className="gradient-text">Pixsy Media</span></h2>
            <p>We combine creativity, technology, and strategy to deliver exceptional results</p>
          </div>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-value-card">
                <div className="value-check">
                  <CheckCircle size={24} style={{ color: '#ff8a00' }} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== MISSION ===== */}
        <div className="about-mission">
          <div className="about-mission-content">
            <span className="section-tag">Our Mission</span>
            <h2>We're Partner of <span className="gradient-text">Your Growth</span></h2>
            <p>
              We empower businesses to achieve more through innovative technology,
              creative design, and results-driven marketing. Our mission is to be
              your trusted partner in digital transformation.
            </p>
            <div className="mission-points">
              <div className="mission-point">
                <CheckCircle size={18} style={{ color: '#ff8a00' }} />
                <span>Innovation-driven solutions</span>
              </div>
              <div className="mission-point">
                <CheckCircle size={18} style={{ color: '#ff315c' }} />
                <span>Client-first approach</span>
              </div>
              <div className="mission-point">
                <CheckCircle size={18} style={{ color: '#d21cff' }} />
                <span>Measurable results</span>
              </div>
            </div>
            <button className="btn-primary-about">
              Learn More <ArrowRight size={18} />
            </button>
          </div>
          <div className="about-mission-image">
            <div className="mission-image-wrapper">
              <div className="mission-image-placeholder">
                <span>WE BUILD BRANDS</span>
                <small>THAT INSPIRE & PERFORM</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;