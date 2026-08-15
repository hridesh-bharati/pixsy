// src\components\Auth\AuthSystem\Logout.jsx
import React, { useState } from 'react';
import { LogOut, AlertCircle } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../lib/firebase';
import { useNavigate } from 'react-router-dom';
import './AuthSystem.css';

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    setError('');
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      setError(err.message.replace('Firebase: ', ''));
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-bg-circle auth-bg-circle-1"></div>
      <div className="auth-bg-circle auth-bg-circle-2"></div>
      <div className="auth-grid-pattern"></div>

      <div className="auth-card text-center position-relative z-2">
        <div className="auth-header">
          <h2>Oh no! You're <span className="auth-gradient-text">Leaving</span></h2>
          <p>Are you sure you want to log out from your account?</p>
        </div>

        {error && (
          <div className="alert alert-danger py-2 px-3 mb-3 d-flex align-items-center gap-2" role="alert" style={{ fontSize: '0.9rem', borderRadius: '10px' }}>
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <div className="d-flex gap-3 justify-content-center mt-4">
          <button
            className="auth-submit-btn"
            onClick={handleLogout}
            disabled={loading}
            style={{ background: 'linear-gradient(135deg, #ff315c 0%, #d21cff 100%)' }}
          >
            <span>{loading ? 'Logging out...' : 'Confirm Logout'}</span>
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;