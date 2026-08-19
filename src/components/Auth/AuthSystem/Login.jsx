// src\components\Auth\AuthSystem\Login.jsx
import React, { useState } from 'react';
import { Mail, Lock, LogIn, ArrowRight, AlertCircle } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../lib/firebase';
import { useNavigate, Link } from 'react-router-dom';
import './AuthSystem.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const email = userCredential.user.email.trim().toLowerCase();

      const role = email === 'Pixsymedia78@gmail.com' ? 'admin' : 'user';

      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }
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
          <h2>Welcome <span className="auth-gradient-text">Back</span></h2>
          <p>Please enter your details to sign in.</p>
        </div>

        {error && (
          <div className="alert alert-danger py-2 px-3 mb-3 d-flex align-items-center gap-2" role="alert" style={{ fontSize: '0.9rem', borderRadius: '10px' }}>
            <AlertCircle size={16} />
            <span>{error}</span>
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
            <Link to="/reset-password" className="auth-link text-decoration-none">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            <span>{loading ? 'Signing In...' : 'Sign In'}</span>
            <LogIn size={16} />
          </button>
        </form>

        <div className="auth-switch-text">
          Don't have an account?{' '}
          <Link to="/signup" className="auth-link-bold text-decoration-none">
            Sign Up <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;