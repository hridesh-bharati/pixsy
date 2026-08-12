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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Gradient Animation
      const headingChars = headingRef.current?.querySelectorAll('.gradient-text');
      if (headingChars) {
        gsap.to(headingChars, {
          backgroundPosition: '200% 50%',
          duration: 4,
          repeat: -1,
          ease: 'sine.inOut',
        });
      }

      // Pro Background Floating Orbs GSAP Animation
      gsap.to('.why-bg-circle-1', {
        x: 60,
        y: -40,
        scale: 1.1,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.why-bg-circle-2', {
        x: -70,
        y: 50,
        scale: 1.2,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Cards Stagger Animation
      gsap.from('.why-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Rocket,
      title: 'Fast Delivery',
      desc: 'We deliver projects on time with agile methodology and rapid development cycles.',
      color: '#ff8a00'
    },
    {
      icon: Users,
      title: 'Expert Team',
      desc: 'Our team of 50+ experienced professionals ensures top-quality results every time.',
      color: '#ff315c'
    },
    {
      icon: Shield,
      title: 'Secure Solutions',
      desc: 'Enterprise-grade security with regular audits and compliance standards.',
      color: '#d21cff'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      desc: 'Round-the-clock support with dedicated account managers for your business.',
      color: '#3b4cff'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      desc: 'Optimized solutions that deliver speed, efficiency, and measurable results.',
      color: '#1267ff'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      desc: '100% satisfaction guarantee with rigorous testing and quality assurance.',
      color: '#ff8a00'
    }
  ];

  return (
    <section ref={sectionRef} className="why-choose-us">
      {/* Pro Animated Circular Gradient Background Orbs */}
      <div className="why-bg-circle why-bg-circle-1"></div>
      <div className="why-bg-circle why-bg-circle-2"></div>
      <div className="why-grid-pattern"></div>

      <div className="container position-relative z-2">
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            Why Choose Us
          </span>
          <h2 ref={headingRef}>Why <span className="gradient-text">Pixsy Media</span></h2>
          <p>We combine creativity, technology, and strategy to deliver exceptional results</p>
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