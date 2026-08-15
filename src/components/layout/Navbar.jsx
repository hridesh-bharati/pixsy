import React from "react";
import { NavLink, Link } from "react-router-dom";
import { LogIn, LogOut, LayoutDashboard } from "lucide-react";
import "./Navbar.css";

export default function Navbar({ user, role }) {
  // Determine dashboard link based on role
  const dashboardPath = role === 'admin' ? '/admin-dashboard' : '/user-dashboard';

  return (
    <nav className="navbar navbar-expand-lg pixsy-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand pixsy-brand" to="/">
          <img src="/images/logo.jpg" className="img-fluid" alt="Pixsy Logo" />
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

            {/* Auth / Dashboard Buttons */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              {user ? (
                <div className="d-flex align-items-center gap-2">
                  <Link className="pixsy-nav-btn text-decoration-none d-flex align-items-center gap-2" to={dashboardPath}>
                    <LayoutDashboard size={16} />
                    <span>Dashboard</span>
                  </Link>
                  <Link className="btn btn-outline-danger btn-sm rounded-pill px-3 py-2 d-flex align-items-center gap-1" to="/logout">
                    <LogOut size={16} />
                    <span>Logout</span>
                  </Link>
                </div>
              ) : (
                <Link className="pixsy-nav-btn text-decoration-none d-flex align-items-center gap-2" to="/login">
                  <LogIn size={16} />
                  <span>Login</span> <span>→</span>
                </Link>
              )}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}