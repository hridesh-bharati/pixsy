import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg pixsy-navbar sticky-top">

      <div className="container">

        <Link
          className="navbar-brand pixsy-brand"
          to="/"
        >
          <div className="pixsy-logo-mark">
            P
          </div>

          <div className="pixsy-brand-text">

            <span className="pixsy-name">
              PIXSY
            </span>

            <span className="pixsy-media">
              MEDIA
            </span>

            <small>
              A DIGITAL MARKETING AGENCY
            </small>

          </div>
        </Link>


        {/* Mobile Toggle */}

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


        {/* Menu */}

        <div
          className="collapse navbar-collapse"
          id="pixsyNavbar"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/services"
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/blog"
              >
                Blog
              </Link>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">

              <Link
                className="pixsy-nav-btn"
                to="/contact"
              >
                Get In Touch
                <span>→</span>
              </Link>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}