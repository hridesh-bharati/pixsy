import React, { useState } from 'react';
import { Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import './AuthSystem.css';

const Login = ({ onSwitchToSignup, onSwitchToReset }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    alert("Logged in successfully! (Hook your backend/Firebase here)");
  };

  return (
    <div className="auth-container">
      <div className="auth-bg-circle auth-bg-circle-1"></div>
      <div className="auth-bg-circle auth-bg-circle-2"></div>
      <div className="auth-grid-pattern"></div>

      <div className="auth-card position-relative z-2">
        <div className="auth-header">
          <h2>Welcome <span className="auth-gradient-text">Back</span></h2>
          <p>Please enter your details to sign in.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
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

          <div className="auth-actions-row">
            <span className="auth-link" onClick={onSwitchToReset}>
              Forgot password?
            </span>
          </div>

          <button type="submit" className="auth-submit-btn">
            <span>Sign In</span>
            <LogIn size={16} />
          </button>
        </form>

        <div className="auth-switch-text">
          Don't have an account?{' '}
          <span className="auth-link-bold" onClick={onSwitchToSignup}>
            Sign Up <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;