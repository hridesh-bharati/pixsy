// src/components/Services/PixsyServices.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../../../lib/firebase';
import { gsap } from 'gsap';
import {
  Globe,
  Search,
  MapPin,
  Share2,
  Video,
  Palette,
  Target,
  Megaphone,
  TrendingUp,
  ShoppingBag,
  MessageSquare,
  Edit3,
  Film,
  PenTool,
  BarChart3,
  Sparkles,
  X,
  CheckCircle,
  Loader2,
  Send,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const PixsyServices = () => {
  const brandGradient = 'linear-gradient(135deg, #ff6b00, #ff2468, #a52aff, #315cff)';

  // Modal & Form States
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Filter & View More States
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Gradient Animation Fixed
      if (headingRef.current) {
        gsap.to(headingRef.current, {
          backgroundPosition: '200% 50%',
          duration: 4,
          repeat: -1,
          ease: 'sine.inOut',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categoryColors = {
    website: { bg: '#fff5f0', border: '#ff6b00', icon: '#ff6b00', glow: 'rgba(255,107,0,0.25)', gradient: 'linear-gradient(135deg, #ff6b00, #ff8c38)' },
    seo: { bg: '#fff0f4', border: '#ff2468', icon: '#ff2468', glow: 'rgba(255,36,104,0.25)', gradient: 'linear-gradient(135deg, #ff2468, #ff6b9d)' },
    local: { bg: '#f5f0ff', border: '#a52aff', icon: '#a52aff', glow: 'rgba(165,42,255,0.25)', gradient: 'linear-gradient(135deg, #a52aff, #c77dff)' },
    social: { bg: '#f0f4ff', border: '#315cff', icon: '#315cff', glow: 'rgba(49,92,255,0.25)', gradient: 'linear-gradient(135deg, #315cff, #6b8cff)' },
    content: { bg: '#fff8f0', border: '#ff8c00', icon: '#ff8c00', glow: 'rgba(255,140,0,0.25)', gradient: 'linear-gradient(135deg, #ff8c00, #ffb347)' },
    branding: { bg: '#fff0f8', border: '#e040a0', icon: '#e040a0', glow: 'rgba(224,64,160,0.25)', gradient: 'linear-gradient(135deg, #e040a0, #f062b5)' },
    ads: { bg: '#f0f0ff', border: '#6c5ce7', icon: '#6c5ce7', glow: 'rgba(108,92,231,0.25)', gradient: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' },
  };

  const getCategory = (title) => {
    if (title.includes('Website')) return 'website';
    if (title.includes('SEO') || title.includes('Analytics')) return 'seo';
    if (title.includes('Google Business') || title.includes('GMB')) return 'local';
    if (title.includes('Social Media') || title.includes('Content Creation') || title.includes('Video Editing')) return 'social';
    if (title.includes('Graphic') || title.includes('Logo') || title.includes('Branding')) return 'branding';
    if (title.includes('Ads') || title.includes('Performance') || title.includes('Marketing')) return 'ads';
    return 'website';
  };

  const servicesList = [
    { title: "Website Design & Development", description: "Build fast, responsive, and high-converting modern websites tailored to your brand.", icon: <Globe size={28} /> },
    { title: "Search Engine Optimization (SEO)", description: "Dominate search engine rankings and drive sustainable organic traffic to your business.", icon: <Search size={28} /> },
    { title: "Social Media Management", description: "Engage your audience across Instagram, Facebook, and LinkedIn with consistent content.", icon: <Share2 size={28} /> },
    { title: "Meta (FB & IG) Ads", description: "Targeted advertising campaigns on Facebook and Instagram designed for high ROI.", icon: <Target size={28} /> },
    { title: "Graphic Design & Branding", description: "Stand out with stunning visual graphics that communicate your unique brand identity.", icon: <Palette size={28} /> },
    { title: "Google Business Profile (GMB)", description: "Optimize your local presence to attract nearby customers and build instant trust.", icon: <MapPin size={28} /> },
    { title: "Content Creation", description: "Captivating posts, engaging reels, and professional video assets built for growth.", icon: <Video size={28} /> },
    { title: "Google Ads (Search & Display)", description: "Capture high-intent traffic instantly with optimized search and display ad networks.", icon: <Megaphone size={28} /> },
    { title: "Performance Marketing", description: "Data-driven lead generation frameworks focused purely on measurable business results.", icon: <TrendingUp size={28} /> },
    { title: "E-commerce Marketing", description: "Scale your online store sales through tailored multi-channel digital strategies.", icon: <ShoppingBag size={28} /> },
    { title: "Email & WhatsApp Marketing", description: "Nurture your leads and boost customer retention with automated direct messaging.", icon: <MessageSquare size={28} /> },
    { title: "Content Writing & Copywriting", description: "Persuasive and SEO-friendly copy that communicates value and drives action.", icon: <Edit3 size={28} /> },
    { title: "Video Editing & Motion Graphics", description: "Dynamic video edits and motion visuals that hook viewers from the first second.", icon: <Film size={28} /> },
    { title: "Logo & Brand Identity Design", description: "Create memorable logos and complete brand guidelines that define your authority.", icon: <PenTool size={28} /> },
    { title: "Monthly Analytics Reports", description: "Comprehensive performance reports tracking key metrics, growth, and ROI.", icon: <BarChart3 size={28} /> }
  ];

  const filterOptions = [
    { label: 'All Services', value: 'all' },
    { label: 'Web', value: 'website' },
    { label: 'SEO', value: 'seo' },
    { label: 'Social', value: 'social' },
    { label: 'Ads', value: 'ads' },
    { label: 'Branding', value: 'branding' }
  ];

  const filteredServices = servicesList.filter(service => {
    if (activeFilter === 'all') return true;
    return getCategory(service.title) === activeFilter;
  });

  const displayedServices = showAll || activeFilter !== 'all' ? filteredServices : filteredServices.slice(0, 6);

  const handleOpenModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setShowModal(true);
    setSuccess(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) return;

    setSubmitting(true);
    try {
      const leadData = {
        service: selectedService,
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message || 'No specific message provided.',
        date: Date.now(),
        status: 'New'
      };

      await push(ref(db, 'serviceLeads'), leadData);
      setSuccess(true);
      setFormData({ name: '', email: '', mobile: '', message: '' });
      setTimeout(() => {
        setShowModal(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      console.error("Lead submission error:", err);
      alert("Failed to submit request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div ref={sectionRef} className="bg-light min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>

      {/* HERO SECTION */}
      <div className="container py-4 text-center position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(255,107,0,0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(165,42,255,0.08) 0%, transparent 40%)',
          pointerEvents: 'none'
        }}></div>

        <div className="position-relative z-1">
          <span
            className="badge px-3 py-1 rounded-pill fw-bold text-white mb-3 shadow-sm d-inline-block"
            style={{ background: brandGradient, fontSize: '11px', letterSpacing: '1.5px' }}
          >
            <Sparkles size={12} className="me-1" />
            PIXSY MEDIA — PREMIUM DIGITAL SERVICES
          </span>

          <h1 className="fw-bold text-dark mb-3" style={{ fontSize: '2.2rem', lineHeight: '1.3' }}>
            Elevate Your Brand With <br />
            <span>Our </span>
            <span ref={headingRef} className="process-gradient-text">Services</span>
          </h1>


          <p className="text-muted mx-auto mb-4" style={{ maxWidth: '600px', fontSize: '0.95rem', lineHeight: '1.6' }}>
            At Pixsy Media, we help businesses build a strong online presence and generate quality leads through result-driven digital marketing solutions.
          </p>

          {/* CATEGORY FILTER BUTTONS */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-2">
            {filterOptions.map((filter) => (
              <button
                key={filter.value}
                onClick={() => { setActiveFilter(filter.value); setShowAll(false); }}
                className={`btn btn-sm rounded-pill px-3 py-1.5 fw-semibold transition-all ${activeFilter === filter.value ? 'shadow-sm text-white border-0' : 'btn-outline-secondary bg-white text-dark'}`}
                style={{
                  background: activeFilter === filter.value ? brandGradient : '#ffffff',
                  fontSize: '0.82rem',
                  borderColor: activeFilter === filter.value ? 'transparent' : '#dee2e6'
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="mx-auto my-3" style={{ width: '50px', height: '3px', background: brandGradient, borderRadius: '4px' }}></div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="container py-3">
        <div className="row g-4">
          {displayedServices.map((service, index) => {
            const category = getCategory(service.title);
            const colors = categoryColors[category] || categoryColors.website;

            return (
              <div
                key={index}
                className="col-lg-4 col-md-6"
              >
                <div
                  className="card border-0 rounded-4 p-4 h-100 d-flex flex-column position-relative overflow-hidden premium-service-card"
                  style={{
                    backgroundColor: colors.bg,
                    boxShadow: `0 8px 30px ${colors.glow}, 0 2px 8px rgba(0,0,0,0.04)`,
                    '--card-gradient': colors.gradient
                  }}
                >
                  <div className="card-glow position-absolute top-0 start-0 w-100 h-100" style={{
                    background: `radial-gradient(circle at 50% 0%, ${colors.border}15 0%, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none'
                  }}></div>

                  {/* WATERMARK */}
                  <div
                    className="position-absolute"
                    style={{
                      bottom: '12px',
                      right: '16px',
                      fontSize: '72px',
                      fontWeight: '900',
                      color: colors.border,
                      fontFamily: 'Arial, sans-serif',
                      letterSpacing: '-4px',
                      lineHeight: 1,
                      userSelect: 'none',
                      pointerEvents: 'none',
                      opacity: 0.025,
                      zIndex: 0
                    }}
                  >
                    PX
                  </div>

                  {/* Service Number */}
                  <span
                    className="position-absolute top-0 end-0 p-3 fw-bold"
                    style={{
                      fontSize: '52px',
                      background: colors.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'Arial, sans-serif',
                      opacity: 0.15
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div
                    className="mb-3 p-3 rounded-3 d-inline-flex align-items-center justify-content-center align-self-start shadow-sm"
                    style={{
                      backgroundColor: colors.bg,
                      border: `2px solid ${colors.border}`,
                      color: colors.icon,
                      position: 'relative',
                      zIndex: 1,
                      width: '60px',
                      height: '60px'
                    }}
                  >
                    {React.cloneElement(service.icon, { style: { color: colors.icon, strokeWidth: 1.8 } })}
                  </div>

                  <h3 className="h5 fw-bold text-dark mb-2 position-relative z-1">{service.title}</h3>
                  <p className="text-muted small mb-4 flex-grow-1 position-relative z-1" style={{ lineHeight: '1.7' }}>
                    {service.description}
                  </p>

                  <div className="position-relative z-1">
                    <div className="pt-3 border-top d-flex align-items-center justify-content-between" style={{ borderColor: `${colors.border}20` }}>
                      <button
                        onClick={() => handleOpenModal(service.title)}
                        className="btn btn-sm rounded-pill fw-bold px-4 py-2 shadow-sm text-white border-0"
                        style={{ background: colors.gradient }}
                      >
                        Claim It
                      </button>
                      <span
                        className="badge rounded-pill px-3 py-1 fw-bold"
                        style={{ background: colors.gradient, color: '#fff', fontSize: '9px', letterSpacing: '0.8px', textTransform: 'uppercase' }}
                      >
                        {category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* LOAD MORE / SHOW LESS BUTTON */}
        {activeFilter === 'all' && (
          <div className="text-center mt-5">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn px-4 py-2.5 rounded-pill fw-bold shadow-sm d-inline-flex align-items-center gap-2 border bg-white text-dark"
              style={{ borderColor: '#d1d5db', fontSize: '0.9rem' }}
            >
              {showAll ? (
                <>Show Less <ChevronUp size={16} /></>
              ) : (
                <>Explore More Services ({servicesList.length - 6} More) <ChevronDown size={16} /></>
              )}
            </button>
          </div>
        )}
      </div>

      {/* CTA SECTION */}
      <div className="container py-5 text-center">
        <div
          className="card border-0 shadow-xl rounded-5 p-4 p-md-5 text-white position-relative overflow-hidden"
          style={{ background: brandGradient, boxShadow: '0 20px 60px rgba(255,107,0,0.3), 0 8px 20px rgba(0,0,0,0.1)' }}
        >
          <div className="position-relative z-2 py-3">
            <h2 className="fw-bold mb-2 h3">Ready to Grow Your Business Online?</h2>
            <p className="small mb-4 opacity-90 mx-auto" style={{ maxWidth: '500px', lineHeight: '1.6' }}>
              Partner with Pixsy Media today and turn your digital traffic into loyal customers.
            </p>
            <button
              onClick={() => handleOpenModal('General Inquiry / Custom Package')}
              className="btn btn-light px-4 py-2.5 rounded-pill fw-bold shadow-sm text-dark d-inline-flex align-items-center gap-2"
              style={{ fontSize: '0.9rem' }}
            >
              Get Started Now <Send size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* CLAIM SERVICE MODAL */}
      {showModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg rounded-4 p-4 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="fw-bold text-dark m-0">Claim Service</h4>
                <button onClick={() => setShowModal(false)} className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center border-0" style={{ width: '36px', height: '36px' }}>
                  <X size={18} />
                </button>
              </div>

              {success ? (
                <div className="text-center py-5">
                  <CheckCircle size={56} className="text-success mb-3" />
                  <h4 className="fw-bold text-dark">Request Submitted!</h4>
                  <p className="text-muted small">Our team will get in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3 p-3 rounded-3 bg-light border">
                    <small className="text-muted d-block">Selected Service:</small>
                    <span className="fw-bold text-dark">{selectedService}</span>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold text-secondary small">Your Full Name *</label>
                    <input
                      type="text"
                      className="form-control rounded-3 py-2 bg-light border-0"
                      placeholder="Hridesh Bharati"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold text-secondary small">Email Address *</label>
                    <input
                      type="email"
                      className="form-control rounded-3 py-2 bg-light border-0"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold text-secondary small">Mobile Number *</label>
                    <input
                      type="tel"
                      className="form-control rounded-3 py-2 bg-light border-0"
                      placeholder="+91 9876543210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold text-secondary small">Message / Requirements (Optional)</label>
                    <textarea
                      className="form-control rounded-3 bg-light border-0"
                      rows="3"
                      placeholder="Tell us briefly about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn text-white w-100 py-3 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2 border-0"
                    style={{ background: brandGradient }}
                    disabled={submitting}
                  >
                    {submitting ? <Loader2 size={18} className="spinner-border spinner-border-sm" /> : <Send size={18} />}
                    {submitting ? 'Submitting Request...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CUSTOM CSS */}
      <style>{`
        .premium-service-card {
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .premium-service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 0%;
          background: var(--card-gradient);
          transition: height 0.4s ease-in-out;
          border-top-left-radius: 1rem;
          border-bottom-left-radius: 1rem;
          z-index: 3;
        }

        .premium-service-card:hover {
          transform: translateY(-8px);
        }

        .premium-service-card:hover::before {
          height: 100%;
        }

        .premium-service-card:hover .card-glow {
          opacity: 1;
        }

        .process-gradient-text {
          background: linear-gradient(90deg, #ff8a00, #ff315c, #d21cff, #3b4cff, #1267ff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default PixsyServices;