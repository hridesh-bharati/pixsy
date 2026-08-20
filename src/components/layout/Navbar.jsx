// src/components/Navbar/Navbar.jsx
import React, { useRef, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { gsap } from "gsap";
import "./Navbar.css";

export default function Navbar({ user, role }) {
  const dashboardPath = role === 'admin' ? '/admin-dashboard' : '/user-dashboard';
  const brandHeadingRef = useRef(null);
  const navListRef = useRef(null);
  const fireBarRef = useRef(null);
  const location = useLocation();

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

  // Function to move fire indicator accurately under the link with a wide tail
  const updateFireBar = (element) => {
    if (fireBarRef.current && element && navListRef.current) {
      const listRect = navListRef.current.getBoundingClientRect();
      const elRect = element.getBoundingClientRect();

      gsap.to(fireBarRef.current, {
        left: elRect.left - listRect.left,
        width: elRect.width,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      });
    }
  };

  // Align fire bar with active link on page load/route change
  useEffect(() => {
    const timer = setTimeout(() => {
      const activeEl = navListRef.current?.querySelector(".nav-link.active");
      if (activeEl) {
        updateFireBar(activeEl);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleMouseEnter = (e) => {
    updateFireBar(e.currentTarget);
  };

  const handleMouseLeave = () => {
    const activeEl = navListRef.current?.querySelector(".nav-link.active");
    if (activeEl) {
      updateFireBar(activeEl);
    } else {
      gsap.to(fireBarRef.current, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg pixsy-navbar sticky-top">
      <div className="container">
        {/* Left: Brand Logo & Title */}
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
          <ul
            className="navbar-nav mx-auto align-items-lg-center gap-lg-3 position-relative"
            ref={navListRef}
            onMouseLeave={handleMouseLeave}
          >
            {/* Sliding Real Flame / Diya Tail Indicator */}
            <div ref={fireBarRef} className="nav-fire-indicator"></div>

            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
              { name: "Services", path: "/our-services" },
              { name: "Our Work", path: "/our-work" },
              { name: "Process", path: "/process" },
              { name: "Blog", path: "/blog" },
            ].map((item, idx) => (
              <li className="nav-item" key={idx}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className="nav-link"
                  onMouseEnter={handleMouseEnter}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
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