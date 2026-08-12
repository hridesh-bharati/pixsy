import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  Briefcase,
  MapPin,
  Star,
  ArrowRight
} from 'lucide-react';
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.team-header-modern', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Individual Elements Animation inside each card
      const cards = gsap.utils.toArray('.team-card-modern');
      cards.forEach((card) => {
        const avatar = card.querySelector('.team-avatar-modern');
        const info = card.querySelector('.team-info-modern');
        const stats = card.querySelector('.team-stats');
        const actions = card.querySelector('.team-actions');

        gsap.from([avatar, info, stats, actions], {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      title: 'CEO & Founder',
      handle: 'sarahj',
      avatar: 'https://i.pravatar.cc/400?img=1',
      color: '#ff8a00',
      bgColor: 'rgba(255, 138, 0, 0.06)',
      borderColor: 'rgba(255, 138, 0, 0.2)',
      experience: '12+ Years',
      projects: '200+',
      location: 'New York'
    },
    {
      name: 'Michael Chen',
      title: 'Lead Developer',
      handle: 'michaelc',
      avatar: 'https://i.pravatar.cc/400?img=2',
      color: '#ff315c',
      bgColor: 'rgba(255, 49, 92, 0.06)',
      borderColor: 'rgba(255, 49, 92, 0.2)',
      experience: '8+ Years',
      projects: '150+',
      location: 'San Francisco'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Creative Director',
      handle: 'emilyr',
      avatar: 'https://i.pravatar.cc/400?img=3',
      color: '#d21cff',
      bgColor: 'rgba(210, 28, 255, 0.06)',
      borderColor: 'rgba(210, 28, 255, 0.2)',
      experience: '10+ Years',
      projects: '180+',
      location: 'London'
    },
    {
      name: 'David Thompson',
      title: 'SEO Specialist',
      handle: 'davidt',
      avatar: 'https://i.pravatar.cc/400?img=4',
      color: '#3b4cff',
      bgColor: 'rgba(59, 76, 255, 0.06)',
      borderColor: 'rgba(59, 76, 255, 0.2)',
      experience: '6+ Years',
      projects: '120+',
      location: 'Toronto'
    }
  ];

  const socialLinks = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="team-section-modern">
      <div className="container">
        <div className="team-header-modern">
          <span className="team-badge-modern">
            <Sparkles size={14} />
            Our Team
          </span>
          <h2>Meet Our <span className="gradient-text-modern">Experts</span></h2>
          <p>Passionate professionals dedicated to your success</p>
        </div>

        <div className="team-grid-modern">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card-modern" style={{
              '--card-color': member.color,
              '--card-bg': member.bgColor,
              '--card-border': member.borderColor
            }}>
              {/* Avatar */}
              <div className="team-avatar-modern">
                <div className="avatar-ring" style={{ borderColor: member.color }}>
                  <img src={member.avatar} alt={member.name} />
                </div>
                <div className="avatar-glow" style={{ background: `radial-gradient(circle, ${member.color}40, transparent)` }}></div>
              </div>

              {/* Info */}
              <div className="team-info-modern">
                <h3 style={{ color: member.color }}>{member.name}</h3>
                <p className="team-title">{member.title}</p>
                <p className="team-handle">@{member.handle}</p>
              </div>

              {/* Stats */}
              <div className="team-stats">
                <div className="stat-item">
                  <Briefcase size={13} style={{ color: member.color }} />
                  <span>{member.experience}</span>
                </div>
                <div className="stat-item">
                  <Star size={13} style={{ color: member.color }} />
                  <span>{member.projects}</span>
                </div>
                <div className="stat-item">
                  <MapPin size={13} style={{ color: member.color }} />
                  <span>{member.location}</span>
                </div>
              </div>

              {/* Social & Connect */}
              <div className="team-actions">
                <div className="team-social">
                  {socialLinks.map((social, sIndex) => (
                    <a key={sIndex} href="#" className="social-link" style={{ '--social-color': member.color }}>
                      {social.icon}
                    </a>
                  ))}
                </div>
                <button className="connect-btn" style={{ background: member.color }}>
                  Connect <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;