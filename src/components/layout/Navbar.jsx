// src/components/Navbar/Navbar.jsx
import React, { useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { gsap } from "gsap";
import "./Navbar.css";

export default function Navbar({ user, role }) {
  const dashboardPath = role === 'admin' ? '/admin-dashboard' : '/user-dashboard';
  const brandHeadingRef = useRef(null);

  useEffect(() => {
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
        {/* Left: Brand Logo & Running Color Animated Title */}
        <Link className="navbar-brand d-flex align-items-center text-decoration-none" to="/">
          <img src="/images/logo.webp" className="img-fluid" alt="Pixsy Logo" style={{ width: '40px' }} />
          <div className="ms-2">
            <span ref={brandHeadingRef} className="fw-bold fs-5 process-gradient-text">Pixsy Media</span>
            <div style={{ fontSize: '10px', color: '#ff4d4d' }}>We're Partner of Your Innovations</div>
          </div>
        </Link>

        <button className="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#pixsyNavbar" aria-controls="pixsyNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="pixsyNavbar">
          <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-3">
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

          <div className="navbar-nav ms-auto mt-3 mt-lg-0">
            <Link className="btn btn-primary rounded-pill px-4 py-2 d-flex align-items-center justify-content-center gap-2 text-white fw-semibold shadow-sm" to={dashboardPath} style={{ background: "linear-gradient(135deg, #ff6b00, #ff2770, #873cff)", border: "none" }}>
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}