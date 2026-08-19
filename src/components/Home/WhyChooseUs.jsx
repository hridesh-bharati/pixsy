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
      // Running Color Animation for Heading (Matching Services style)
      if (headingRef.current) {
        gsap.to(headingRef.current, {
          backgroundPosition: '200% 50%',
          duration: 4,
          repeat: -1,
          ease: 'sine.inOut',
        });
      }

      // Cards animation
      const cards = sectionRef.current.querySelectorAll('.why-card');
      cards.forEach((card, index) => {
        const isEven = index % 2 === 0;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: isEven ? -150 : 150,
            rotate: isEven ? -360 : 360,
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
            opacity: 1,
            x: 0,
            rotate: 0,
            duration: 1,
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
            className="badge px-3 py-1 rounded-pill fw-bold text-white mb-3 shadow-sm d-inline-block"
            style={{ background: brandGradient, fontSize: '11px', letterSpacing: '1.5px' }}
          >
            <Sparkles size={12} className="me-1" />
            WHY CHOOSE US
          </span>
          <h2 className="fw-bold text-dark mb-3" style={{ fontSize: '2.2rem', lineHeight: '1.3' }}>
            Why <span ref={headingRef} className="process-gradient-text">Pixsy Media</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '0.95rem', lineHeight: '1.6' }}>
            We combine creativity, technology, and strategy to deliver exceptional results
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="why-card"
                style={{ "--card-color": feature.color }}
              >
                {/* Corner Gradient Flare */}
                <div className="why-card-flare"></div>

                <div className="why-card-inner">
                  <div className="why-icon-wrapper">
                    <Icon size={26} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <div className="why-card-line"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;