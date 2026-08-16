// src\components\Auth\Dashboard\AdminDashboard\Profile.jsx

import React from 'react';
import { User, Mail, Phone, Info, Shield, Calendar, Edit3, ArrowLeft } from 'lucide-react';

const Profile = ({ user, userData, setActiveTab }) => {
  const profilePic = userData?.photoURL || user?.photoURL;
  const username = userData?.name || user?.displayName || 'Not Provided';
  const email = userData?.email || user?.email || 'Not Provided';
  const mobile = userData?.mobile || 'Not Provided';
  const about = userData?.about || 'No bio added yet.';

  return (
    <div className="container-fluid py-3 px-1 px-sm-3 px-lg-4">
      <div className="d-flex justify-content-between align-items-center mb-4 px-1 px-sm-0">
        <button
          onClick={() => setActiveTab('dashboard')}
          className="btn btn-light rounded-circle shadow-sm p-2 d-flex align-items-center justify-content-center"
          style={{ width: '40px', height: '40px' }}
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => setActiveTab('edit-profile')} className="btn text-white fw-semibold rounded-pill shadow-sm bg-primary gap-2"><Edit3 size={16} /> Edit
        </button>
      </div>

      <div className="card border shadow-sm rounded-4 p-3 p-sm-4 p-md-5 mx-auto w-100" style={{ maxWidth: '850px', backgroundColor: '#eef6fc', borderColor: '#b8daf4' }}>
        <div className="text-center mb-4">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="rounded-circle shadow mx-auto mb-3 border border-2 border-primary" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
          ) : (
            <div className="mx-auto mb-3 d-flex align-items-center justify-content-center text-dark rounded-circle shadow border border-2 border-primary" style={{ width: '90px', height: '90px', fontSize: '2rem', fontWeight: 'bold', background: '#ffd700' }}>
              {username !== 'Not Provided' ? username.charAt(0).toUpperCase() : 'A'}
            </div>
          )}
          <h2 className="fw-bold text-dark m-0">{username}</h2>
          <small className="text-muted fw-semibold">Administrator Profile</small>
        </div>

        <div className="p-3 p-sm-4 rounded-4 mb-4 border" style={{ backgroundColor: '#ffffff', borderColor: '#b8daf4' }}>
          <div className="mb-3 d-flex align-items-center gap-3 p-3 rounded-3" style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeeba' }}>
            <User className="text-dark flex-shrink-0" size={20} />
            <div className="text-break">
              <small className="text-muted d-block">Username / Full Name</small>
              <span className="fw-semibold text-dark">{username}</span>
            </div>
          </div>

          <div className="mb-3 d-flex align-items-center gap-3 p-3 rounded-3" style={{ backgroundColor: '#d1ecf1', border: '1px solid #bee5eb' }}>
            <Mail className="text-dark flex-shrink-0" size={20} />
            <div className="text-break">
              <small className="text-muted d-block">Email Address</small>
              <span className="fw-semibold text-dark">{email}</span>
            </div>
          </div>

          <div className="mb-3 d-flex align-items-center gap-3 p-3 rounded-3" style={{ backgroundColor: '#d4edda', border: '1px solid #c3e6cb' }}>
            <Phone className="text-dark flex-shrink-0" size={20} />
            <div className="text-break">
              <small className="text-muted d-block">Mobile Number</small>
              <span className="fw-semibold text-dark">{mobile}</span>
            </div>
          </div>

          <div className="mb-3 d-flex align-items-center gap-3 p-3 rounded-3" style={{ backgroundColor: '#f8d7da', border: '1px solid #f5c6cb' }}>
            <Info className="text-dark flex-shrink-0" size={20} />
            <div className="text-break">
              <small className="text-muted d-block">About</small>
              <span className="fw-semibold text-dark">{about}</span>
            </div>
          </div>

          <div className="mb-3 d-flex align-items-center gap-3 p-3 rounded-3" style={{ backgroundColor: '#d1ecf1', border: '1px solid #bee5eb' }}>
            <Shield className="text-dark flex-shrink-0" size5={20} />
            <div className="text-break">
              <small className="text-muted d-block">Role</small>
              <span className="badge bg-success text-white px-2 py-1">Administrator</span>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3 p-3 rounded-3" style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeeba' }}>
            <Calendar className="text-dark flex-shrink-0" size={20} />
            <div className="text-break">
              <small className="text-muted d-block">Account Created</small>
              <span className="fw-semibold text-dark">
                {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;