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

  // Function to automatically close the mobile navbar collapse when a link is clicked
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById("pixsyNavbar");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = window.bootstrap?.Collapse?.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      } else {
        navbarCollapse.classList.remove("show");
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg pixsy-navbar sticky-top">
      <div className="container">
        {/* Left: Brand Logo & Full Animated Title */}
        <Link className="navbar-brand pixsy-brand" to="/" onClick={handleNavLinkClick}>
          <img src="/images/logo.webp" className="img-fluid" alt="Pixsy Logo" />
          <div className="pixsy-brand-text">
            <span ref={brandHeadingRef} className="pixsy-brand-title process-gradient-text">Pixsy Media</span>
            <span className="pixsy-brand-tagline">We're Partner of Your Innovations</span>
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
              <NavLink to="/" end className="nav-link" onClick={handleNavLinkClick}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/our-services" className="nav-link" onClick={handleNavLinkClick}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link" onClick={handleNavLinkClick}>About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link" onClick={handleNavLinkClick}>Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/our-team" className="nav-link" onClick={handleNavLinkClick}>Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact-us" className="nav-link" onClick={handleNavLinkClick}>Contact Us</NavLink>
            </li>
          </ul>

          {/* Right: Dashboard / Login Button */}
          <div className="navbar-nav ms-auto mt-3 mt-lg-0">
            <div className="nav-item">
              {user ? (
                <Link className="pixsy-nav-btn text-decoration-none d-flex align-items-center gap-2" to={dashboardPath} onClick={handleNavLinkClick}>
                  <LayoutDashboard size={16} />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link className="pixsy-nav-btn text-decoration-none d-flex align-items-center gap-2" to="/login" onClick={handleNavLinkClick}>
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