import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg pixsy-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand pixsy-brand" to="/">
          <div className="pixsy-logo-mark">P</div>

          <div className="pixsy-brand-text">
            <span className="pixsy-name">PIXSY</span>
            <span className="pixsy-media">MEDIA</span>
            <small>A DIGITAL MARKETING AGENCY</small>
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
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <NavLink to="/" end className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/our-services" className="nav-link">
                Services
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link">
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/our-team" className="nav-link">
                Team
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact-us" className="nav-link">
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link className="pixsy-nav-btn" to="/contact-us">
                Get In Touch <span>→</span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}