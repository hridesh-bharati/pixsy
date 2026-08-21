// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section text-light pt-5 pb-3">
      <div className="container-fluid px-4 px-lg-5">
        {/* Main Footer Content */}
        <div className="row g-4 justify-content-between pb-4">

          {/* Column 1: Brand Info & Socials */}
          <div className="col-12 col-md-3 footer-col-border pe-md-4">
            <div className="footer-logo mb-3 d-flex align-items-center">
              <img src="/images/logo.webp" alt="Pixsy Logo" style={{ width: '36px' }} className="me-2" />
              <span className="fw-bold fs-4 text-white tracking-wide">PIXSY <span style={{ color: "#ff2770" }}>MEDIA</span></span>
            </div>
            <p className="text-secondary small mb-4 lh-base" style={{ fontSize: "0.85rem" }}>
              Crafting digital experiences that inspire, engage & grow your business.
            </p>
            <div className="d-flex align-items-center gap-3 social-icon-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-6 col-md-2 footer-col-border ps-md-4">
            <h6 className="fw-bold text-white mb-3 footer-heading">Quick Links</h6>
            <ul className="list-unstyled footer-links-list mb-0">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/our-services">Services</Link></li>
              <li><Link to="/our-work">Our Work</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-6 col-md-2 footer-col-border ps-md-4">
            <h6 className="fw-bold text-white mb-3 footer-heading">Services</h6>
            <ul className="list-unstyled footer-links-list mb-0">
              <li><Link to="/our-services">Website Development</Link></li>
              <li><Link to="/our-services">E-Commerce Solutions</Link></li>
              <li><Link to="/our-services">UI/UX Design</Link></li>
              <li><Link to="/our-services">SEO & Digital Marketing</Link></li>
              <li><Link to="/our-services">Social Media Management</Link></li>
              <li><Link to="/our-services">Branding & Identity</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-12 col-md-2 footer-col-border ps-md-4">
            <h6 className="fw-bold text-white mb-3 footer-heading">Contact Us</h6>
            <ul className="list-unstyled text-secondary small lh-lg mb-0 footer-contact-list">
              <li className="d-flex align-items-center gap-2 mb-1">
                <Phone size={14} className="text-primary flex-shrink-0" />
                <a href="tel:6200514381" className="text-secondary text-decoration-none">6200514381</a>
              </li>
              <li className="d-flex align-items-center gap-2 mb-1">
                <Mail size={14} className="text-danger flex-shrink-0" />
                <a href="mailto:pixsymedia78@gmail.com" className="text-secondary text-decoration-none text-truncate">pixsymedia78@gmail.com</a>
              </li>
              <li className="d-flex align-items-center gap-2 mb-1">
                <MapPin size={14} className="text-warning flex-shrink-0" />
                <span>Noida, India</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <Clock size={14} className="text-info flex-shrink-0" />
                <span>Mon - Sat: 10AM - 7PM</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="col-12 col-md-3 ps-md-4">
            <h6 className="fw-bold text-white mb-3 footer-heading">Newsletter</h6>
            <p className="text-secondary small mb-3" style={{ fontSize: "0.83rem" }}>
              Subscribe to get updates on our latest services & offers.
            </p>
            <div className="input-group footer-input-group">
              <input
                type="email"
                className="form-control text-white bg-transparent shadow-none py-2 px-3"
                placeholder="Enter your email"
              />
              <button className="btn px-3 text-white d-flex align-items-center justify-content-center" type="button">
                <Send size={15} />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom Border Bar */}
        <div className="footer-bottom-row pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-secondary small">
          <div>
            &copy; {currentYear} Pixsy Media. All Rights Reserved.
          </div>
          <div>
            Developed by <a href="https://www.awebgrow.com" target="_blank" rel="noopener noreferrer" className="text-warning text-decoration-none fw-semibold">Awebgrow</a>
          </div>
          <div className="d-flex gap-3 align-items-center footer-bottom-links">
            <Link to="#" className="text-secondary text-decoration-none">Privacy Policy</Link>
            <span>|</span>
            <Link to="#" className="text-secondary text-decoration-none">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}