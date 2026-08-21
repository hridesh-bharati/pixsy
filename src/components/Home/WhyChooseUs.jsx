// src/components/Home/WhyChooseUs/WhyChooseUs.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Rocket,
  Users,
  Shield,
  Clock,
  Zap,
  Award,
  Sparkles
} from 'lucide-react';
import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const brandGradient = 'linear-gradient(135deg, #ff6b00, #ff2468, #a52aff, #315cff)';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Running Color Animation for Heading
      if (headingRef.current) {
        gsap.to(headingRef.current, {
          backgroundPosition: '200% 50%',
          duration: 4,
          repeat: -1,
          ease: 'sine.inOut',
        });
      }

      // Cards staggered animation (optimized for mobile & desktop)
      const cards = sectionRef.current.querySelectorAll('.why-card');
      cards.forEach((card, index) => {
        const isEven = index % 2 === 0;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: window.innerWidth > 768 ? (isEven ? -60 : 60) : 0,
            y: 40,
          },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Rocket,
      title: 'Fast Delivery',
      desc: 'We deliver projects on time with agile methodology and rapid development cycles.',
      color: '#ff6b00'
    },
    {
      icon: Users,
      title: 'Expert Team',
      desc: 'Our team of 50+ experienced professionals ensures top-quality results every time.',
      color: '#ff2468'
    },
    {
      icon: Shield,
      title: 'Secure Solutions',
      desc: 'Enterprise-grade security with regular audits and compliance standards.',
      color: '#a52aff'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      desc: 'Round-the-clock support with dedicated account managers for your business.',
      color: '#315cff'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      desc: 'Optimized solutions that deliver speed, efficiency, and measurable results.',
      color: '#ff8c00'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      desc: '100% satisfaction guarantee with rigorous testing and quality assurance.',
      color: '#e040a0'
    }
  ];

  return (
    <section ref={sectionRef} className="why-choose-us">
      <div className="why-grid-pattern"></div>

      <div className="container position-relative z-2">
        <div className="section-header">
          <span
            className="badge px-3 py-2 rounded-pill fw-bold text-white mb-3 shadow-sm d-inline-flex align-items-center gap-1"
            style={{ background: brandGradient, fontSize: '11px', letterSpacing: '1.5px' }}
          >
            <Sparkles size={12} />
            WHY CHOOSE US
          </span>
          <h2 className="fw-bold text-dark mb-3 why-main-title">
            Why <span ref={headingRef} className="process-gradient-text">Pixsy Media</span>
          </h2>
          <p className="text-muted mx-auto why-subtitle">
            We combine creativity, technology, and strategy to deliver exceptional results
          </p>
        </div>

        <div className="why-grid">
          {features.map(({ icon: Icon, title, desc, color }, index) => (
            <div
              key={index}
              className="why-card"
              style={{ "--card-color": color }}
            >
              <div className="why-card-flare"></div>

              <div className="why-card-inner">
                <div className="why-icon-wrapper">
                  <Icon size={24} />
                </div>
                <h3 className="why-card-title">{title}</h3>
                <p className="why-card-desc">{desc}</p>
                <div className="why-card-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;