// src/components/Auth/Dashboard/UserDashboard/Main.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, updateProfile } from 'firebase/auth';
import { ref, onValue, update } from 'firebase/database';
import { auth, db } from '../../../../lib/firebase';
import { uploadToCloudinary } from '../../../../lib/cloudinary';
import {
  User,
  Mail,
  Phone,
  ClipboardList,
  LogOut,
  Sparkles,
  Calendar,
  Edit3,
  Save,
  X,
  Camera,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function Main({ user }) {
  const [userData, setUserData] = useState(null);
  const [userLeads, setUserLeads] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  // Edit Profile Form States
  const [formData, setFormData] = useState({ name: '', mobile: '', photoURL: '' });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.uid) {
      const userRef = ref(db, `users/${user.uid}`);
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setUserData(data);
          setFormData({
            name: data.name || user.displayName || '',
            mobile: data.mobile || '',
            photoURL: data.photoURL || user.photoURL || ''
          });
        } else {
          setFormData({
            name: user.displayName || '',
            mobile: '',
            photoURL: user.photoURL || ''
          });
        }
      });

      const leadsRef = ref(db, 'serviceLeads');
      onValue(leadsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const allLeads = Object.entries(data).map(([id, val]) => ({ id, ...val }));
          const myLeads = allLeads.filter(
            (lead) => lead.email?.trim() === user.email?.trim()
          ).reverse();
          setUserLeads(myLeads);
        }
      });
    }
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setError('');
    try {
      const url = await uploadToCloudinary(file);
      setFormData((prev) => ({ ...prev, photoURL: url }));
    } catch (err) {
      setError("Failed to upload profile picture.");
    } finally {
      setUploading(false);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;

    setSaving(true);
    setError('');
    setSuccess('');

    try {
      // Update Firebase Auth profile
      await updateProfile(user, {
        displayName: formData.name,
        photoURL: formData.photoURL
      });

      // Update Firebase Realtime Database
      const userRef = ref(db, `users/${user.uid}`);
      const updatedData = {
        name: formData.name,
        email: user.email,
        mobile: formData.mobile,
        photoURL: formData.photoURL,
        updatedAt: Date.now()
      };

      await update(userRef, updatedData);
      setUserData((prev) => ({ ...(prev || {}), ...updatedData }));
      setSuccess('Profile updated successfully!');

      setTimeout(() => {
        setIsEditing(false);
        setSuccess('');
      }, 1500);
    } catch (err) {
      setError(err.message.replace('Firebase: ', ''));
    } finally {
      setSaving(false);
    }
  };

  const displayName = userData?.name || user?.displayName || 'User';
  const profilePic = userData?.photoURL || user?.photoURL;
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="container-fluid py-4 px-3" style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>

      {/* Top Header Banner */}
      <div
        className="card border-0 rounded-4 p-4 text-white mb-4 shadow-sm position-relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7928ca 0%, #ff0080 100%)' }}
      >
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 position-relative z-2">
          <div>
            <span className="badge bg-white bg-opacity-20 px-3 py-1 rounded-pill fw-bold text-white mb-2" style={{ fontSize: '11px' }}>
              <Sparkles size={13} className="me-1" /> USER PORTAL
            </span>
            <h2 className="fw-bold mb-1">Welcome back, {displayName}! 👋</h2>
            <p className="m-0 text-white-50 small d-flex align-items-center gap-1">
              <Calendar size={14} /> {currentDate} — Manage your profile and service requests.
            </p>
          </div>
          <div className="d-flex gap-2">
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-light text-dark fw-semibold px-3 py-2 rounded-pill shadow-sm d-flex align-items-center gap-2 border-0"
                style={{ fontSize: '14px' }}
              >
                <Edit3 size={15} /> Edit Profile
              </button>
            )}
            <button
              onClick={handleLogout}
              className="btn btn-outline-light fw-semibold px-3 py-2 rounded-pill shadow-sm d-flex align-items-center gap-2"
              style={{ fontSize: '14px' }}
            >
              <LogOut size={15} /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Left: Profile Minimal or Edit Form */}
        <div className="col-lg-4">
          {!isEditing ? (
            <div className="card border-0 shadow-sm rounded-4 p-4 text-center">
              <div className="mb-3">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="rounded-circle border" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                ) : (
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto" style={{ width: '80px', height: '80px', fontSize: '1.5rem' }}>
                    {displayName.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <h5 className="fw-bold">{displayName}</h5>
              <div className="text-start mt-4">
                <p className="small text-muted mb-2"><Mail size={14} className="me-2" /> {user?.email}</p>
                <p className="small text-muted mb-0"><Phone size={14} className="me-2" /> {userData?.mobile || 'No phone'}</p>
              </div>
            </div>
          ) : (
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold m-0">Edit Profile</h6>
                <button onClick={() => setIsEditing(false)} className="btn btn-light btn-sm rounded-circle p-1">
                  <X size={16} />
                </button>
              </div>

              {error && (
                <div className="alert alert-danger py-2 px-2 mb-2 d-flex align-items-center gap-1" style={{ fontSize: '12px', borderRadius: '8px' }}>
                  <AlertCircle size={14} /> {error}
                </div>
              )}

              {success && (
                <div className="alert alert-success py-2 px-2 mb-2 d-flex align-items-center gap-1" style={{ fontSize: '12px', borderRadius: '8px' }}>
                  <CheckCircle size={14} /> {success}
                </div>
              )}

              <form onSubmit={handleProfileUpdate}>
                <div className="text-center mb-3">
                  <div className="position-relative d-inline-block">
                    {formData.photoURL ? (
                      <img src={formData.photoURL} alt="Avatar" className="rounded-circle border" style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
                    ) : (
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto" style={{ width: '70px', height: '70px', fontSize: '1.2rem' }}>
                        {formData.name ? formData.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                    )}
                    <label htmlFor="user-pic-upload" className="position-absolute bottom-0 end-0 bg-dark text-white rounded-circle p-1 shadow" style={{ cursor: 'pointer', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Camera size={12} />
                    </label>
                    <input id="user-pic-upload" type="file" className="d-none" accept="image/*" onChange={handleImageUpload} />
                  </div>
                  {uploading && <small className="text-primary d-block mt-1" style={{ fontSize: '11px' }}><Loader2 size={10} className="spin me-1" /> Uploading...</small>}
                </div>

                <div className="mb-2">
                  <label className="form-label text-muted" style={{ fontSize: '11px' }}>Full Name</label>
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-3 bg-light border-0"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label text-muted" style={{ fontSize: '11px' }}>Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control form-control-sm rounded-3 bg-light border-0"
                    placeholder="+91 9876543210"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted" style={{ fontSize: '11px' }}>Email (Read-only)</label>
                  <input type="email" className="form-control form-control-sm rounded-3 bg-light border-0" value={user?.email || ''} disabled />
                </div>

                <div className="d-flex justify-content-end gap-2">
                  <button type="button" onClick={() => setIsEditing(false)} className="btn btn-light btn-sm rounded-pill px-3">Cancel</button>
                  <button type="submit" className="btn btn-dark btn-sm rounded-pill px-3 d-flex align-items-center gap-1" disabled={saving || uploading}>
                    {saving ? <Loader2 size={13} className="spin" /> : <Save size={13} />}
                    {saving ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Right: Inquiries List */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <h6 className="fw-bold mb-3"><ClipboardList size={18} className="me-2" /> My Inquiries ({userLeads.length})</h6>
            {userLeads.length === 0 ? (
              <p className="text-muted small">No inquiries found.</p>
            ) : (
              <div className="d-flex flex-column gap-2">
                {userLeads.map((lead) => (
                  <div key={lead.id} className="p-3 bg-light rounded-3 d-flex justify-content-between align-items-center">
                    <div>
                      <span className="badge bg-dark" style={{ fontSize: '10px' }}>{lead.service}</span>
                      <p className="m-0 small fw-semibold">{lead.message?.substring(0, 50)}...</p>
                    </div>
                    <small className="text-muted small">{new Date(lead.date).toLocaleDateString()}</small>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}