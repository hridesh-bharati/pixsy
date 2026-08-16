import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  TrendingUp,
  Shield,
  Palette,
  Rocket,
  Users,
  Headphones,
  ArrowRight,
  Star,
  Globe,
  Smartphone,
  Sparkles,
  Database,
  Eye,
  Target,
  PenTool,
} from "lucide-react";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const mainRef = useRef(null);
  const sectionRefs = useRef([]);
  const headingRefs = useRef([]);
  const heroRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // ============================================
  // DATA
  // ============================================
  const heroFeatures = [
    { icon: <Globe size={18} />, text: "Global Reach" },
    { icon: <Rocket size={18} />, text: "Fast Delivery" },
    { icon: <Shield size={18} />, text: "Secure" },
    { icon: <Users size={18} />, text: "50+ Team" },
  ];

  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Web Development",
      desc: "Custom, fast, and responsive websites built for high conversion.",
      color: "#ff8a00",
      tag: "Popular",
    },
    {
      icon: <PenTool size={28} />,
      title: "UI/UX Design",
      desc: "Creative interfaces and user experiences that captivate audiences.",
      color: "#ff315c",
      tag: "Creative",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Digital Marketing",
      desc: "Strategic optimization to rank higher and drive organic growth.",
      color: "#d21cff",
      tag: "Growth",
    },
    {
      icon: <Smartphone size={28} />,
      title: "App Development",
      desc: "Scalable mobile applications tailored for modern businesses.",
      color: "#3b4cff",
      tag: "Mobile",
    },
    {
      icon: <Shield size={28} />,
      title: "Security Systems",
      desc: "Best smart security systems to protect your enterprise infrastructure.",
      color: "#1267ff",
      tag: "Secure",
    },
    {
      icon: <Database size={28} />,
      title: "Data Analysis",
      desc: "Gain flexible analytical insights out of complex enterprise data.",
      color: "#ff8a00",
      tag: "Analytics",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      desc: "We understand your business goals, target audience, and project requirements.",
      icon: <Target size={20} />,
    },
    {
      step: "02",
      title: "Design",
      desc: "Our designers create stunning UI/UX designs that captivate users.",
      icon: <Eye size={20} />,
    },
    {
      step: "03",
      title: "Development",
      desc: "We build robust, scalable solutions using modern technologies.",
      icon: <Code2 size={20} />,
    },
    {
      step: "04",
      title: "Deploy",
      desc: "Deploy your project with minimal downtime and complete testing.",
      icon: <Rocket size={20} />,
    },
    {
      step: "05",
      title: "Optimize",
      desc: "Continuous optimization and growth strategies for long-term success.",
      icon: <TrendingUp size={20} />,
    },
  ];

  const stats = [
    { number: "6800", label: "Satisfied Clients", icon: <Users size={24} />, color: "#ff8a00" },
    { number: "50", label: "Expert Team", icon: <Users size={24} />, color: "#ff315c" },
    { number: "99", label: "Success Rate", icon: <Star size={24} />, color: "#d21cff" },
    { number: "24", label: "Support Available", icon: <Headphones size={24} />, color: "#3b4cff" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      text: "Pixsy Media transformed our online presence completely. Traffic increased by 200%.",
      avatar: "SJ",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthHub",
      text: "The team at Pixsy Media is exceptional. They understood our vision perfectly.",
      avatar: "MC",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, CreativeSpace",
      text: "Working with Pixsy Media was a game-changer for our business.",
      avatar: "ER",
      rating: 5,
    }
  ];

  // ============================================
  // GSAP ANIMATIONS
  // ============================================
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Title Animation
      const heroHeading = headingRefs.current[0];
      if (heroHeading) {
        gsap.from(heroHeading.children, {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Floating elements
      const floats = document.querySelectorAll(".float-element");
      floats.forEach((el, i) => {
        gsap.to(el, {
          y: 15,
          x: i % 2 === 0 ? 8 : -8,
          duration: 2 + i * 0.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // Service Cards Animation
      const serviceCards = document.querySelectorAll(".service-card-3d");
      serviceCards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: (i % 3) * 0.15,
          ease: "power3.out",
        });
      });

      // Timeline Animation
      const timelineItems = document.querySelectorAll(".timeline-item");
      timelineItems.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: sectionRefs.current[2],
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
        scaleY: 0,
        transformOrigin: "top center",
      });

      // Stats Animation
      const statCards = document.querySelectorAll(".stat-card-circle");
      statCards.forEach((card) => {
        const number = card.querySelector(".stat-number-circle");
        if (number) {
          const target = parseInt(number.getAttribute("data-target")) || 0;
          gsap.fromTo(
            number,
            { innerText: 0 },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
              innerText: target,
              duration: 2,
              snap: { innerText: 1 },
              ease: "power2.out",
            }
          );
        }
      });

      // Testimonials Animation
      const testimonialCards = document.querySelectorAll(".testimonial-card-slide");
      testimonialCards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });

      // CTA Animation
      gsap.from(".cta-parallax", {
        scrollTrigger: {
          trigger: ".cta-parallax",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Section Navigation Observer
      sectionRefs.current.forEach((section, i) => {
        if (!section) return;
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="services-main">
      {/* Navigation Dots */}
      <div className="nav-dots">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <button
            key={i}
            className={`nav-dot ${activeIndex === i ? "active" : ""}`}
            onClick={() => {
              sectionRefs.current[i]?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          />
        ))}
      </div>

      {/* SECTION 1: HERO */}
      <section
        ref={(el) => {
          sectionRefs.current[0] = el;
          heroRef.current = el;
        }}
        className="section-hero"
      >
        <div className="hero-bg">
          <div className="hero-gradient-1" />
          <div className="hero-gradient-2" />
          <div className="hero-gradient-3" />
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Pixsy Media</span>
          </div>

          <h1 ref={(el) => (headingRefs.current[0] = el)} className="hero-title">
            <span className="hero-line">Dealing in all</span>
            <span className="hero-gradient-text">Professional IT Services</span>
          </h1>

          <p className="hero-desc">
            We offer full-cycle software development services — from IT strategy consulting to end-to-end development of scalable solutions.
          </p>

          <div className="hero-actions">
            <a href="#services" className="hero-btn-primary">
              Explore Services <ArrowRight size={18} />
            </a>
            <a href="#contact" className="hero-btn-secondary">
              Get in Touch
            </a>
          </div>

          <div className="hero-features">
            {heroFeatures.map((feature, i) => (
              <div key={i} className="hero-feature float-element">
                {feature.icon}
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line">
            <div className="scroll-ball" />
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="section-services"
        id="services"
      >
        <div className="section-header">
          <span className="section-tag">What We Offer</span>
          <h2>
            Full-Cycle <span className="gradient-text">Development</span>
          </h2>
          <p>We deliver end-to-end solutions that drive real business growth</p>
        </div>

        <div className="services-grid-3d">
          {services.map((service, i) => (
            <div key={i} className="service-card-3d">
              <div className="service-card-inner">
                <div className="service-icon-3d" style={{ background: service.color }}>
                  {service.icon}
                </div>
                <div className="service-badge" style={{ background: service.color }}>
                  {service.tag}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-arrow">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: TIMELINE */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="section-timeline"
      >
        <div className="section-header">
          <span className="section-tag">OUR PROCESS</span>
          <h2>
            How We <span className="gradient-text">Work</span>
          </h2>
          <p>A proven methodology that ensures success at every step</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />
          {processSteps.map((step, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot">
                <div className="timeline-dot-inner">{step.icon}</div>
              </div>
              <div className="timeline-content">
                <div className="timeline-step">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: STATS */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="section-stats"
      >
        <div className="section-header">
          <span className="section-tag">Our Impact</span>
          <h2>
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
          <p>Real results that demonstrate our commitment to excellence</p>
        </div>

        <div className="stats-grid-circle">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card-circle">
              <div className="stat-icon-circle" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-number-circle" data-target={stat.number}>
                0
              </div>
              <div className="stat-label-circle">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className="section-testimonials"
      >
        <div className="section-header">
          <span className="section-tag">CLIENT VOICES</span>
          <h2>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p>Real feedback from real clients who trusted us with their projects</p>
        </div>

        <div className="testimonials-slide">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="testimonial-card-slide">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
              <p className="testimonial-text-slide">"{testimonial.text}"</p>
              <div className="testimonial-quote-icon">
                <span>"</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section
        ref={(el) => (sectionRefs.current[5] = el)}
        className="section-cta"
      >
        <div className="cta-parallax">
          <div className="cta-bg-pattern" />
          <div className="cta-content">
            <div className="cta-badge">
              <Sparkles size={16} />
              <span>Let's Talk</span>
            </div>
            <h3>
              Ready to <span>Transform</span> Your Business?
            </h3>
            <p>
              Let's discuss how our professional IT services can help you achieve your goals.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn-primary">
                Get Started <ArrowRight size={18} />
              </a>
              <a href="/about" className="cta-btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;