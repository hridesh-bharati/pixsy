// src/components/Home/CardFeatures/Cards.jsx
import React from 'react';
import {
  LayoutGrid,
  Palette,
  CodeXml,
  Megaphone,
  SearchCheck,
  BrainCircuit,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import './Cards.css';

export default function Cards() {
  const services = [
    { title: 'Web Development', icon: CodeXml, desc: 'Modern & High-Performance' },
    { title: 'UI/UX Design', icon: Palette, desc: 'Creative User Experiences' },
    { title: 'Mobile App Dev', icon: Smartphone, desc: 'iOS & Android Solutions' },
    { title: 'Digital Marketing', icon: Megaphone, desc: 'Grow Your Online Presence' },
    { title: 'SEO Services', icon: SearchCheck, desc: 'Rank Higher on Google' },
    { title: 'AI Automation', icon: BrainCircuit, desc: 'Smart Workflow Solutions' },
    { title: 'Cyber Security', icon: ShieldCheck, desc: 'Secure Your Digital Assets' },
    { title: 'App Maintenance', icon: LayoutGrid, desc: 'Reliable Support & Updates' },
  ];

  return (
    <div className="services-marquee-section" data-aos="fade-up">
      <div className="marquee-container">
        {/* Infinite scrolling track (Duplicated) */}
        <div className="marquee-track">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClass = `color-${(index % 8) + 1}`;
            return (
              <div className={`service-card ${colorClass}`} key={`1-${index}`}>
                <div className="service-icon-box">
                  <IconComponent size={26} strokeWidth={2.5} />
                </div>
                <div className="service-info">
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
                <div className="card-bottom-line"></div>
              </div>
            );
          })}
          {/* Duplicate set for seamless infinite loop */}
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClass = `color-${(index % 8) + 1}`;
            return (
              <div className={`service-card ${colorClass}`} key={`2-${index}`}>
                <div className="service-icon-box">
                  <IconComponent size={26} strokeWidth={2.5} />
                </div>
                <div className="service-info">
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
                <div className="card-bottom-line"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}