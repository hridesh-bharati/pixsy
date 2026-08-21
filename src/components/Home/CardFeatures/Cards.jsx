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

  const clientImages = [
    '/images/card-slider/card1.JPEG',
    '/images/card-slider/card2.JPEG',
    '/images/card-slider/card3.JPEG',
    '/images/card-slider/card4.JPEG',
    '/images/card-slider/card5.JPEG',
    '/images/card-slider/card6.JPEG',
    '/images/card-slider/card7.JPEG',
  ];

  return (
    <div className="services-marquee-section py-4" data-aos="fade-up">
      {/* First Marquee: Services */}
      <div className="marquee-container mb-4">
        <div className="marquee-track-left">
          {[...services, ...services].map((service, index) => {
            const IconComponent = service.icon;
            const colorClass = `color-${(index % 8) + 1}`;
            return (
              <div className={`service-card ${colorClass}`} key={`service-${index}`}>
                <div className="service-icon-box">
                  <IconComponent size={22} strokeWidth={2.5} />
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

      {/* Second Marquee: Trusted By Brands Section */}
      <div className="trusted-brands-section mt-4">
        <div className="text-center mb-3">
          <h6 className="trusted-brands-title">TRUSTED BY BRANDS</h6>
        </div>
        <div className="marquee-container">
          <div className="marquee-track-right" style={{ animationDuration: '32s' }}>
            {[...clientImages, ...clientImages].map((imgSrc, index) => (
              <div className="client-image-card" key={`client-${index}`}>
                <img src={imgSrc} alt={`Client Brand ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}