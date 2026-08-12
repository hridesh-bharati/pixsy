import React, { useState } from 'react';
import { User, Mail, Lock, UserPlus, ArrowRight } from 'lucide-react';
import './AuthSystem.css';

const SignUp = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up data:", formData);
    alert("Account created successfully! (Hook your backend/Firebase here)");
  };

  return (
    <div className="auth-container">
      <div className="auth-bg-circle auth-bg-circle-1"></div>
      <div className="auth-bg-circle auth-bg-circle-2"></div>
      <div className="auth-grid-pattern"></div>

      <div className="auth-card position-relative z-2">
        <div className="auth-header">
          <h2>Create <span className="auth-gradient-text">Account</span></h2>
          <p>Join us today and start your journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <div className="input-with-icon">
              <User size={18} className="field-icon" />
              <input
                type="text"
                name="name"
                placeholder="Hridesh Bharati"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <div className="input-with-icon">
              <Mail size={18} className="field-icon" />
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-with-icon">
              <Lock size={18} className="field-icon" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            <span>Create Account</span>
            <UserPlus size={16} />
          </button>
        </form>

        <div className="auth-switch-text">
          Already have an account?{' '}
          <span className="auth-link-bold" onClick={onSwitchToLogin}>
            Sign In <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;