// src/components/Services/PixsyServices.jsx
import React, { useState, useEffect } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../../../lib/firebase';
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
  Send
} from 'lucide-react';

const PixsyServices = () => {
  const brandGradient = 'linear-gradient(135deg, #ff6b00, #ff2468, #a52aff, #315cff)';

  // Modal & Form States
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const categoryColors = {
    website: { bg: '#fff5f0', border: '#ff6b00', icon: '#ff6b00', glow: 'rgba(255,107,0,0.25)', gradient: 'linear-gradient(135deg, #ff6b00, #ff8c38)' },
    seo: { bg: '#fff0f4', border: '#ff2468', icon: '#ff2468', glow: 'rgba(255,36,104,0.25)', gradient: 'linear-gradient(135deg, #ff2468, #ff6b9d)' },
    local: { bg: '#f5f0ff', border: '#a52aff', icon: '#a52aff', glow: 'rgba(165,42,255,0.25)', gradient: 'linear-gradient(135deg, #a52aff, #c77dff)' },
    social: { bg: '#f0f4ff', border: '#315cff', icon: '#315cff', glow: 'rgba(49,92,255,0.25)', gradient: 'linear-gradient(135deg, #315cff, #6b8cff)' },
    content: { bg: '#fff8f0', border: '#ff8c00', icon: '#ff8c00', glow: 'rgba(255,140,0,0.25)', gradient: 'linear-gradient(135deg, #ff8c00, #ffb347)' },
    branding: { bg: '#fff0f8', border: '#e040a0', icon: '#e040a0', glow: 'rgba(224,64,160,0.25)', gradient: 'linear-gradient(135deg, #e040a0, #f062b5)' },
    ads: { bg: '#f0f0ff', border: '#6c5ce7', icon: '#6c5ce7', glow: 'rgba(108,92,231,0.25)', gradient: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' },
    googleads: { bg: '#f0faff', border: '#1a8cd8', icon: '#1a8cd8', glow: 'rgba(26,140,216,0.25)', gradient: 'linear-gradient(135deg, #1a8cd8, #4aabf0)' },
    performance: { bg: '#f0fff5', border: '#00b894', icon: '#00b894', glow: 'rgba(0,184,148,0.25)', gradient: 'linear-gradient(135deg, #00b894, #00d2a0)' },
    ecommerce: { bg: '#fff5f5', border: '#e17055', icon: '#e17055', glow: 'rgba(225,112,85,0.25)', gradient: 'linear-gradient(135deg, #e17055, #f0987a)' },
    messaging: { bg: '#f5fff0', border: '#00b894', icon: '#00b894', glow: 'rgba(0,184,148,0.25)', gradient: 'linear-gradient(135deg, #00b894, #55efc4)' },
    writing: { bg: '#f0f5ff', border: '#0984e3', icon: '#0984e3', glow: 'rgba(9,132,227,0.25)', gradient: 'linear-gradient(135deg, #0984e3, #4ab4f7)' },
    video: { bg: '#fff0f0', border: '#d63031', icon: '#d63031', glow: 'rgba(214,48,49,0.25)', gradient: 'linear-gradient(135deg, #d63031, #f05a5a)' },
    logo: { bg: '#f8f0ff', border: '#6c5ce7', icon: '#6c5ce7', glow: 'rgba(108,92,231,0.25)', gradient: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' },
    analytics: { bg: '#f0f8ff', border: '#00b4d8', icon: '#00b4d8', glow: 'rgba(0,180,216,0.25)', gradient: 'linear-gradient(135deg, #00b4d8, #48cae4)' }
  };

  const getCategory = (title) => {
    if (title.includes('Website')) return 'website';
    if (title.includes('SEO')) return 'seo';
    if (title.includes('Google Business') || title.includes('GMB')) return 'local';
    if (title.includes('Social Media')) return 'social';
    if (title.includes('Content Creation')) return 'content';
    if (title.includes('Graphic') || title.includes('Branding')) return 'branding';
    if (title.includes('Meta') || title.includes('FB') || title.includes('IG')) return 'ads';
    if (title.includes('Google Ads')) return 'googleads';
    if (title.includes('Performance')) return 'performance';
    if (title.includes('E-commerce')) return 'ecommerce';
    if (title.includes('Email') || title.includes('WhatsApp')) return 'messaging';
    if (title.includes('Content Writing') || title.includes('Copywriting')) return 'writing';
    if (title.includes('Video Editing') || title.includes('Motion')) return 'video';
    if (title.includes('Logo') || title.includes('Identity')) return 'logo';
    if (title.includes('Analytics') || title.includes('Reports')) return 'analytics';
    return 'website';
  };

  const servicesList = [
    { title: "Website Design & Development", description: "Build fast, responsive, and high-converting modern websites tailored to your brand.", icon: <Globe size={28} /> },
    { title: "Search Engine Optimization (SEO)", description: "Dominate search engine rankings and drive sustainable organic traffic to your business.", icon: <Search size={28} /> },
    { title: "Google Business Profile (GMB)", description: "Optimize your local presence to attract nearby customers and build instant trust.", icon: <MapPin size={28} /> },
    { title: "Social Media Management", description: "Engage your audience across Instagram, Facebook, and LinkedIn with consistent content.", icon: <Share2 size={28} /> },
    { title: "Content Creation", description: "Captivating posts, engaging reels, and professional video assets built for growth.", icon: <Video size={28} /> },
    { title: "Graphic Design & Branding", description: "Stand out with stunning visual graphics that communicate your unique brand identity.", icon: <Palette size={28} /> },
    { title: "Meta (FB & IG) Ads", description: "Targeted advertising campaigns on Facebook and Instagram designed for high ROI.", icon: <Target size={28} /> },
    { title: "Google Ads (Search & Display)", description: "Capture high-intent traffic instantly with optimized search and display ad networks.", icon: <Megaphone size={28} /> },
    { title: "Performance Marketing", description: "Data-driven lead generation frameworks focused purely on measurable business results.", icon: <TrendingUp size={28} /> },
    { title: "E-commerce Marketing", description: "Scale your online store sales through tailored multi-channel digital strategies.", icon: <ShoppingBag size={28} /> },
    { title: "Email & WhatsApp Marketing", description: "Nurture your leads and boost customer retention with automated direct messaging.", icon: <MessageSquare size={28} /> },
    { title: "Content Writing & Copywriting", description: "Persuasive and SEO-friendly copy that communicates value and drives action.", icon: <Edit3 size={28} /> },
    { title: "Video Editing & Motion Graphics", description: "Dynamic video edits and motion visuals that hook viewers from the first second.", icon: <Film size={28} /> },
    { title: "Logo & Brand Identity Design", description: "Create memorable logos and complete brand guidelines that define your authority.", icon: <PenTool size={28} /> },
    { title: "Monthly Analytics Reports", description: "Comprehensive performance reports tracking key metrics, growth, and ROI.", icon: <BarChart3 size={28} /> }
  ];

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
    <div className="bg-light min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>

      {/* HERO SECTION */}
      <div className="container py-5 text-center position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(255,107,0,0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(165,42,255,0.08) 0%, transparent 40%)',
          pointerEvents: 'none'
        }}></div>

        <div className="position-relative z-1">
          <span
            className="badge px-4 py-2 rounded-pill fw-bold text-white mb-4 shadow-lg"
            style={{ background: brandGradient, fontSize: '12px', letterSpacing: '2px' }}
          >
            <Sparkles size={14} className="me-2" style={{ display: 'inline' }} />
            PIXSY MEDIA — PREMIUM DIGITAL SERVICES
          </span>

          <h1 className="display-2 fw-bold text-dark mb-3">
            Elevate Your Brand With{' '}
            <span style={{ background: brandGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Result-Driven<br />Solutions
            </span>
          </h1>

          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px', fontSize: '1.25rem' }}>
            At Pixsy Media, we help businesses build a strong online presence and generate quality leads through result-driven digital marketing solutions.
          </p>

          <div className="mx-auto my-4" style={{ width: '100px', height: '4px', background: brandGradient, borderRadius: '4px' }}></div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="container py-4">
        <div className="row g-4">
          {servicesList.map((service, index) => {
            const category = getCategory(service.title);
            const colors = categoryColors[category];

            return (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="card border-0 rounded-4 p-4 h-100 d-flex flex-column position-relative overflow-hidden premium-card"
                  style={{
                    backgroundColor: colors.bg,
                    borderLeft: `6px solid ${colors.border}`,
                    boxShadow: `0 8px 30px ${colors.glow}, 0 2px 8px rgba(0,0,0,0.04)`,
                    transition: 'all 0.3s ease-in-out'
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
      </div>

      {/* CTA SECTION */}
      <div className="container py-5 text-center">
        <div
          className="card border-0 shadow-xl rounded-5 p-5 text-white position-relative overflow-hidden"
          style={{ background: brandGradient, boxShadow: '0 20px 60px rgba(255,107,0,0.3), 0 8px 20px rgba(0,0,0,0.1)' }}
        >
          <div className="position-relative z-2 py-4">
            <h2 className="fw-bold mb-3 display-4">Ready to Grow Your Business Online?</h2>
            <p className="lead mb-4 opacity-90 mx-auto" style={{ maxWidth: '600px', fontSize: '1.2rem' }}>
              Partner with Pixsy Media today and turn your digital traffic into loyal customers.
            </p>
            <button
              onClick={() => handleOpenModal('General Inquiry / Custom Package')}
              className="btn btn-light px-5 py-3 rounded-pill fw-bold shadow-lg text-dark d-inline-flex align-items-center gap-2"
            >
              Get Started Now <Send size={16} />
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
                <button onClick={() => setShowModal(false)} className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                  <X size={18} />
                </button>
              </div>

              {success ? (
                <div className="text-center py-5">
                  <CheckCircle size={56} className="text-success mb-3 animate-bounce" />
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
                    {submitting ? <Loader2 size={18} className="spin" /> : <Send size={18} />}
                    {submitting ? 'Submitting Request...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .premium-card:hover {
          transform: translateY(-8px);
        }
        .premium-card:hover .card-glow {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default PixsyServices;