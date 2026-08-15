import React, { useState } from 'react';
import { Mail, KeyRound, ArrowLeft, AlertCircle, CheckCircle2 } from 'lucide-react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../lib/firebase';
import './AuthSystem.css';

const ResetPassword = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset instructions sent to your email!');
    } catch (err) {
      setError(err.message.replace('Firebase: ', ''));
    } finally {
      setLoading(false);
    }
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

        {error && (
          <div className="alert alert-danger py-2 px-3 mb-3 d-flex align-items-center gap-2" role="alert" style={{ fontSize: '0.9rem', borderRadius: '10px' }}>
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {message && (
          <div className="alert alert-success py-2 px-3 mb-3 d-flex align-items-center gap-2" role="alert" style={{ fontSize: '0.9rem', borderRadius: '10px' }}>
            <CheckCircle2 size={16} />
            <span>{message}</span>
          </div>
        )}

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

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            <span>{loading ? 'Sending...' : 'Send Reset Link'}</span>
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