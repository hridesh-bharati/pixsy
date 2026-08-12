import React from 'react';
import { LogOut } from 'lucide-react';
import './AuthSystem.css';

const Logout = ({ onConfirmLogout }) => {
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

        <div className="d-flex gap-3 justify-content-center mt-4">
          <button
            className="auth-submit-btn bg-danger"
            onClick={onConfirmLogout}
            style={{ background: 'linear-gradient(135deg, #ff315c 0%, #d21cff 100%)' }}
          >
            <span>Confirm Logout</span>
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;