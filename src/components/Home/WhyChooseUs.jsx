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
      if (headingRef.current) {
        gsap.to(headingRef.current, {
          backgroundPosition: '200% 50%',
          duration: 4,
          repeat: -1,
          ease: 'sine.inOut',
        });
      }

      const cards = sectionRef.current.querySelectorAll('.why-modern-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Rocket,
      title: 'Fast Delivery',
      desc: 'We deliver projects on time with agile methodology and rapid deployment cycles.',
      accent: '#ff6b00',
      accentEnd: '#ff9933'
    },
    {
      icon: Users,
      title: 'Expert Team',
      desc: 'Our team of skilled professionals ensures top-quality results every single time.',
      accent: '#ff2770',
      accentEnd: '#ff5c8d'
    },
    {
      icon: Shield,
      title: 'Secure Solutions',
      desc: 'Enterprise-grade security standards with rigorous compliance audits.',
      accent: '#a52aff',
      accentEnd: '#c766ff'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      desc: 'Round-the-clock dedicated assistance and maintenance for your business.',
      accent: '#315cff',
      accentEnd: '#5c82ff'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      desc: 'Lightning-fast architectures optimized for high speed and conversion.',
      accent: '#06b6d4',
      accentEnd: '#22d3ee'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      desc: '100% satisfaction assurance backed by rigorous multi-stage testing.',
      accent: '#10b981',
      accentEnd: '#34d399'
    }
  ];

  return (
    <section ref={sectionRef} className="py-5 bg-light position-relative overflow-hidden why-section">
      <div className="container py-lg-5 position-relative z-2">

        {/* Header Section */}
        <div className="text-center mx-auto mb-5 pb-2" style={{ maxWidth: '650px' }}>
          <span
            className="badge px-3 py-2 rounded-pill fw-bold text-white mb-3 shadow-sm d-inline-flex align-items-center gap-1"
            style={{ background: brandGradient, fontSize: '11px', letterSpacing: '1.5px' }}
          >
            <Sparkles size={12} />
            WHY CHOOSE US
          </span>
          <h2 className="fw-bold display-6 text-dark mb-3">
            Why <span ref={headingRef} className="process-gradient-text">Pixsy Media</span>
          </h2>
          <p className="text-muted fs-6 mb-0">
            We blend creative design with advanced technology to build digital solutions that scale.
          </p>
        </div>

        {/* Colorful Modern Cards Grid */}
        <div className="row g-4">
          {features.map(({ icon: Icon, title, desc, accent, accentEnd }, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="why-modern-card h-100 p-4 rounded-4 position-relative"
                style={{
                  "--accent": accent,
                  "--accent-end": accentEnd
                }}
              >
                <div className="card-inner d-flex flex-column h-100 position-relative z-2">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="why-icon-box rounded-3 d-flex align-items-center justify-content-center shadow-sm">
                      <Icon size={24} strokeWidth={2.2} />
                    </div>
                    <span className="why-index fw-bold fs-4">0{index + 1}</span>
                  </div>

                  <h3 className="fw-bold fs-5 text-dark mb-2">{title}</h3>
                  <p className="text-muted small mb-4 lh-base flex-grow-1">{desc}</p>

                  <div className="why-card-line rounded-pill"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;