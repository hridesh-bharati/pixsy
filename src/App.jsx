// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from "./lib/firebase";

import Home from "./components/Home/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Team from "./components/Team/Team";
import ContactForm from "./components/ContactForm/ContactForm";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";

import Login from "./components/Auth/AuthSystem/Login";
import SignUp from "./components/Auth/AuthSystem/SignUp";
import ResetPassword from "./components/Auth/AuthSystem/ResetPassword";
import Logout from "./components/Auth/AuthSystem/Logout";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard/Main";
import UserDashboard from "./components/Auth/Dashboard/UserDashboard/Main";

function AppContent() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    // Explicitly enforce local session persistence so login state saves reliably across reloads
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
            const email = currentUser.email ? currentUser.email.trim() : "";
            if (email === "Pixsymedia78@gmail.com") {
              setRole("admin");
            } else {
              setRole("user");
            }
          } else {
            setUser(null);
            setRole(null);
          }
          setLoading(false);
        });

        return () => unsubscribe();
      })
      .catch((error) => {
        console.error("Auth persistence error:", error);
        setLoading(false);
      });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return (
      <div className="text-center p-5" style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        Loading...
      </div>
    );
  }

  // Hide Navbar & Footer on Admin Dashboard route ONLY on mobile devices
  const isAdminRoute = location.pathname.startsWith('/admin-dashboard');
  const hideOnMobileAdmin = isAdminRoute && isMobile;

  return (
    <>
      {!hideOnMobileAdmin && <Navbar user={user} role={role} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/login" element={!user ? <Login /> : <Navigate to={role === 'admin' ? '/admin-dashboard' : '/user-dashboard'} />} />
        <Route path="/signup" element={!user ? <SignUp /> : <Navigate to={role === 'admin' ? '/admin-dashboard' : '/user-dashboard'} />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/admin-dashboard" element={user && role === 'admin' ? <AdminDashboard user={user} /> : <Navigate to="/login" />} />
        <Route path="/user-dashboard" element={user && role === 'user' ? <UserDashboard user={user} /> : <Navigate to="/login" />} />
      </Routes>
      {!hideOnMobileAdmin && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;