// src/components/Navbar/Navbar.jsx
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { LogIn, LayoutDashboard } from "lucide-react";
import "./Navbar.css";

export default function Navbar({ user, role }) {
  const dashboardPath = role === 'admin' ? '/admin-dashboard' : '/user-dashboard';

  // Function to automatically close mobile navbar on click
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("pixsyNavbar");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg pixsy-navbar sticky-top">
      <div className="container">
        {/* Left: Brand Logo */}
        <Link className="navbar-brand pixsy-brand" to="/" onClick={closeNavbar}>
          <img src="/images/logo.webp" className="img-fluid" alt="Pixsy Logo" />
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
              <NavLink to="/" end className="nav-link" onClick={closeNavbar}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/our-services" className="nav-link" onClick={closeNavbar}>Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link" onClick={closeNavbar}>About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link" onClick={closeNavbar}>Blog</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/our-team" className="nav-link" onClick={closeNavbar}>Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact-us" className="nav-link" onClick={closeNavbar}>Contact Us</NavLink>
            </li>
          </ul>

          {/* Right: Dashboard / Login Button */}
          <div className="navbar-nav ms-auto mt-3 mt-lg-0">
            <div className="nav-item">
              {user ? (
                <Link className="pixsy-nav-btn text-decoration-none d-flex align-items-center gap-2" to={dashboardPath} onClick={closeNavbar}>
                  <LayoutDashboard size={16} />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link className="pixsy-nav-btn text-decoration-none d-flex align-items-center gap-2" to="/login" onClick={closeNavbar}>
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