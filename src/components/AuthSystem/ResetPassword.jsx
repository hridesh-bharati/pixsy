import React, { useState } from 'react';
import { Mail, KeyRound, ArrowLeft } from 'lucide-react';
import './AuthSystem.css';

const ResetPassword = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    alert("Password reset instructions sent to your email!");
  };

  return (
    <div className="auth-container">
      <div className="auth-bg-circle auth-bg-circle-1"></div>
      <div className="auth-bg-circle auth-bg-circle-2"></div>
      <div className="auth-grid-pattern"></div>

      <div className="auth-card position-relative z-2">
        <div className="auth-header">
          <h2>Reset <span className="auth-gradient-text">Password</span></h2>
          <p>Enter your email and we'll send you instructions to reset your password.</p>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            <span>Send Reset Link</span>
            <KeyRound size={16} />
          </button>
        </form>

        <div className="auth-switch-text">
          <span className="auth-link-bold" onClick={onSwitchToLogin}>
            <ArrowLeft size={14} /> Back to Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;