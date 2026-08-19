import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  Code,
  Palette,
  Rocket,
  TrendingUp,
  ClipboardList,
  Briefcase
} from 'lucide-react';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Gradient Animation
      const headingChars = headingRef.current?.querySelectorAll('.process-gradient-text');
      if (headingChars) {
        gsap.to(headingChars, {
          backgroundPosition: '200% 50%',
          duration: 4,
          repeat: -1,
          ease: 'sine.inOut',
        });
      }

      // Premium Client-Impressive GSAP Floating Background Elements
      gsap.to('.process-floating-shape-1', {
        x: 80,
        y: -60,
        rotation: 360,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.process-floating-shape-2', {
        x: -90,
        y: 70,
        rotation: -360,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.process-floating-shape-3', {
        x: 50,
        y: 60,
        scale: 1.3,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Scroll-based Colorful Line Fill Animation
      gsap.fromTo(
        '.process-timeline-line-fill',
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: ClipboardList,
      title: 'Discovery & Strategy',
      subtitle: 'Research & Planning',
      company: 'Pixsy Media',
      period: 'Phase 01',
      desc: 'We understand your business goals, target audience, and project requirements to create a winning strategy.',
      color: '#ff8a00',
      date: 'Week 1-2'
    },
    {
      icon: Palette,
      title: 'Design & Prototype',
      subtitle: 'UI/UX & Branding',
      company: 'Pixsy Media',
      period: 'Phase 02',
      desc: 'Our designers create stunning UI/UX designs that captivate users and reflect your brand identity.',
      color: '#ff315c',
      date: 'Week 3-4'
    },
    {
      icon: Code,
      title: 'Development & Testing',
      subtitle: 'Coding & Quality',
      company: 'Pixsy Media',
      period: 'Phase 03',
      desc: 'We build robust, scalable solutions using modern technologies with rigorous testing at every stage.',
      color: '#d21cff',
      date: 'Week 5-8'
    },
    {
      icon: Rocket,
      title: 'Launch & Deployment',
      subtitle: 'Go Live',
      company: 'Pixsy Media',
      period: 'Phase 04',
      desc: 'Deploy your project with minimal downtime, complete testing, and a smooth transition to production.',
      color: '#3b4cff',
      date: 'Week 9-10'
    },
    {
      icon: TrendingUp,
      title: 'Growth & Optimization',
      subtitle: 'Support & Scaling',
      company: 'Pixsy Media',
      period: 'Phase 05',
      desc: 'Continuous optimization, analytics, and growth strategies to ensure long-term success.',
      color: '#1267ff',
      date: 'Ongoing'
    }
  ];

  return (
    <section ref={sectionRef} className="process-section">
      {/* Client-Impression Pro GSAP Animated Background Shapes */}
      <div className="process-floating-shape process-floating-shape-1"></div>
      <div className="process-floating-shape process-floating-shape-2"></div>
      <div className="process-floating-shape process-floating-shape-3"></div>
      <div className="process-grid-pattern"></div>

      <div className="container position-relative z-2">
        {/* Header */}
        <div className="section-header">
          <span className="process-badge" data-aos="zoom-in">
            <Briefcase size={14} />
            What We Do
          </span>
          <h2 ref={headingRef} data-aos="fade-up">
            Our <span className="process-gradient-text">Services</span>
          </h2>
          <p className="process-subtitle" data-aos="fade-up" data-aos-delay="100">
            We offer full-cycle software development services and digital solutions
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="process-timeline-wrapper">
          <div className="process-timeline-line">
            <div className="process-timeline-line-fill"></div>
          </div>

          <div className="process-timeline-list">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0; // Even = Left, Odd = Right

              return (
                <div
                  key={index}
                  className={`process-timeline-item ${isEven ? 'left-card' : 'right-card'}`}
                  style={{ '--card-color': step.color }}
                  data-aos={isEven ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 100}
                >
                  {/* Content Card with Smooth Slide Color Fill on Hover */}
                  <div className="timeline-content">
                    <div className="timeline-card-flare"></div>
                    <div className="timeline-header">
                      <div className="timeline-icon">
                        <Icon size={22} />
                      </div>
                      <div className="timeline-meta">
                        <h3 className="timeline-title-color">{step.title}</h3>
                        <span className="timeline-subtitle">{step.subtitle}</span>
                      </div>
                    </div>
                    <p>{step.desc}</p>
                  </div>

                  {/* Center Node & Larger Animated Icon */}
                  <div className="timeline-center-node" data-aos="zoom-in" data-aos-delay={index * 100 + 150}>
                    <div className="timeline-dot" style={{ borderColor: step.color }}>
                      <div className="timeline-dot-inner" style={{ background: step.color + '20', color: step.color }}>
                        <Icon size={18} />
                      </div>
                    </div>
                    <div className="timeline-date-badge">
                      {step.date}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;