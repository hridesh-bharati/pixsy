import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-gradient">PIXSY</span>
                <span className="logo-light">MEDIA</span>
              </div>
              <p>
                We build stunning websites and digital experiences
                that drive real results for businesses worldwide.
              </p>
              <div className="footer-social">
                {/* External social links can stay as <a> */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/our-services">Services</Link></li>
                <li><Link to="/our-services">Portfolio</Link></li> {/* Portfolio ke liye route nahi tha toh services par map kiya hai */}
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/our-services">Web Development</Link></li>
                <li><Link to="/our-services">SEO Optimization</Link></li>
                <li><Link to="/our-services">Creative Design</Link></li>
                <li><Link to="/our-services">Digital Marketing</Link></li>
                <li><Link to="/our-services">Security Solutions</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <ul>
                <li>
                  <MapPin size={18} />
                  <span>Noida</span>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:pixsymedia78@gmail.com">pixsymedia78@gmail.com</a>
                </li>
                <li>
                  <Phone size={18} />
                  <a href="tel:+916200514381">6200514381</a>
                </li>
              </ul>
              <Link to="/contact-us" className="footer-cta">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="mb-0">
            &copy; {currentYear} <span className="logo-gradient">Pixsy Media</span>.
            All rights reserved.
          </p>
          <div className="text-muted small">
            Developed by <a href="https://www.awebgrow.com" className="text-decoration-none small fw-semibold text-warning">Awebgrow</a>
          </div>
          <div className="footer-bottom-links">
            <a href="#" className="text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-decoration-none">Terms of Service</a>
            <a href="#" className="text-decoration-none">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;