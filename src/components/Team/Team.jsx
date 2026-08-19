// src/components/Team/Team.jsx
import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../lib/firebase';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Sparkles,
  Briefcase,
  MapPin,
  Star
} from 'lucide-react';
import './Team.css';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });

    const teamRef = ref(db, 'teamMembers');
    onValue(teamRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.entries(data).map(([id, val]) => ({ id, ...val }));
        setTeamMembers(list);
      } else {
        setTeamMembers([]);
      }
      setLoading(false);
    });
  }, []);

  const socialIcons = [
    (
      <svg key="1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    (
      <svg key="2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    (
      <svg key="3" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  ];

  return (
    <section className="py-5 bg-light position-relative overflow-hidden">
      <div className="container-fluid py-4">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="badge rounded-pill px-3 py-2 mb-3 fw-bold text-warning bg-warning bg-opacity-10 border border-warning border-opacity-10 d-inline-flex align-items-center gap-2" style={{ fontSize: '0.75rem', letterSpacing: '1.5px' }}>
            <Sparkles size={14} /> OUR TEAM
          </span>
          <h2 className="fw-bold display-5 text-dark mb-2">Meet Our <span className="gradient-text-modern">Experts</span></h2>
          <p className="text-muted fs-6">Passionate professionals dedicated to your success</p>
        </div>

        {loading ? (
          <div className="text-center py-5 text-muted">Loading experts...</div>
        ) : teamMembers.length === 0 ? (
          <div className="text-center py-5 text-muted bg-white rounded-4 shadow-sm">No team members available right now.</div>
        ) : (
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="col-lg-3 col-md-6 col-sm-10"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="card border rounded-4 p-4 text-center h-100 position-relative overflow-hidden team-card-modern shadow-sm"
                  style={{
                    borderColor: '#f1f5f9',
                    '--card-color': member.color || '#ff8a00',
                    '--card-bg': member.bgColor || 'rgba(255, 138, 0, 0.04)'
                  }}
                >
                  {/* Top Accent Line */}
                  <div className="position-absolute top-0 start-0 end-0" style={{ height: '3px', backgroundColor: member.color || '#ff8a00' }}></div>

                  {/* Avatar Section */}
                  <div className="position-relative d-inline-block mb-3">
                    <div
                      className="rounded-circle p-1 d-flex align-items-center justify-content-center bg-white shadow-sm mx-auto"
                      style={{ width: '76px', height: '76px', border: `3px solid ${member.color || '#ff8a00'}` }}
                    >
                      <img src={member.avatar} alt={member.name} className="rounded-circle w-100 h-100 object-fit-cover" />
                    </div>
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 rounded-circle filter-blur"
                      style={{ background: `radial-gradient(circle, ${(member.color || '#ff8a00')}80, transparent)`, zIndex: -1, filter: 'blur(10px)', opacity: 0.6 }}
                    ></div>
                  </div>

                  {/* Info */}
                  <div className="mb-3">
                    <h5 className="fw-bold mb-1" style={{ color: member.color || '#ff8a00', fontSize: '1.1rem' }}>{member.name}</h5>
                    <p className="text-secondary small fw-medium mb-1">{member.title}</p>
                    <p className="text-muted" style={{ fontSize: '0.75rem' }}>@{member.handle}</p>
                  </div>

                  {/* Stats */}
                  {(member.experience || member.projects || member.location) && (
                    <div className="d-flex justify-content-center align-items-center gap-3 py-2 my-2 border-top border-bottom border-light text-muted small">
                      {member.experience && (
                        <div className="d-flex align-items-center gap-1" style={{ fontSize: '0.72rem' }}>
                          <Briefcase size={12} style={{ color: member.color || '#ff8a00' }} />
                          <span>{member.experience}</span>
                        </div>
                      )}
                      {member.projects && (
                        <div className="d-flex align-items-center gap-1" style={{ fontSize: '0.72rem' }}>
                          <Star size={12} style={{ color: member.color || '#ff8a00' }} />
                          <span>{member.projects}</span>
                        </div>
                      )}
                      {member.location && (
                        <div className="d-flex align-items-center gap-1" style={{ fontSize: '0.72rem' }}>
                          <MapPin size={12} style={{ color: member.color || '#ff8a00' }} />
                          <span>{member.location}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Social Links */}
                  <div className="d-flex justify-content-center gap-2 mt-auto pt-2">
                    {socialIcons.map((icon, sIndex) => (
                      <a
                        key={sIndex}
                        href="#"
                        className="btn btn-light btn-sm rounded-2 d-flex align-items-center justify-content-center p-0 border text-muted social-icon-link"
                        style={{ width: '32px', height: '32px', '--social-color': member.color || '#ff8a00' }}
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;