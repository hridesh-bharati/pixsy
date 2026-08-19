// src/components/Navbar/Navbar.jsx
import React, { useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { LogIn, LayoutDashboard } from "lucide-react";
import { gsap } from "gsap";
import "./Navbar.css";

export default function Navbar({ user, role }) {
  const dashboardPath = role === 'admin' ? '/admin-dashboard' : '/user-dashboard';
  const brandHeadingRef = useRef(null);

  useEffect(() => {
    // Running color animation matching WhyChooseUs/Services
    if (brandHeadingRef.current) {
      gsap.to(brandHeadingRef.current, {
        backgroundPosition: '200% 50%',
        duration: 4,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg pixsy-navbar sticky-top">
      <div className="container">
        {/* Left: Brand Logo & Full Animated Title */}
        <Link className="navbar-brand pixsy-brand" to="/">
          <img src="/images/logo.webp" className="img-fluid" alt="Pixsy Logo" />
          <div className="pixsy-brand-text">
            <span ref={brandHeadingRef} className="pixsy-brand-title process-gradient-text">Pixsy Media</span>
            <span className="pixsy-brand-tagline d-lg-none">We're Partner of Your Innovations</span>
          </div>
        </Link>

        <button
          className="navbar-toggler pixsy-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#pixsyNavbar"
          aria-controls="pixsyNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="pixsyNavbar">
          {/* Center: Navigation Links */}
          <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/our-services" className="nav-link">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/our-team" className="nav-link">Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
            </li>
          </ul>

          {/* Right: Dashboard / Login Button */}
          <div className="navbar-nav ms-auto mt-3 mt-lg-0">
            <div className="nav-item">
              {user ? (
                <Link className="pixsy-nav-btn text-decoration-none d-flex align-items-center gap-2" to={dashboardPath}>
                  <LayoutDashboard size={16} />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link className="pixsy-nav-btn text-decoration-none d-flex align-items-center gap-2" to="/login">
                  <LogIn size={16} />
                  <span>Login</span> <span>→</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}