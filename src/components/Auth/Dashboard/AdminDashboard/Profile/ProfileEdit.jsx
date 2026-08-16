// src/components/Auth/Dashboard/AdminDashboard/Profile/ProfileEdit.jsx
import React, { useState, useEffect } from 'react';
import { ref, update } from 'firebase/database';
import { db } from '../../../../../lib/firebase';
import { uploadToCloudinary } from '../../../../../lib/cloudinary';
import { Loader2, ArrowLeft, Save, User, Phone, Info, Camera } from 'lucide-react';

export default function ProfileEdit({ user, userData, setUserData, setActiveTab }) {
  const [formData, setFormData] = useState({ name: '', mobile: '', about: '', photoURL: '' });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (userData || user) {
      setFormData({
        name: userData?.name || user?.displayName || '',
        mobile: userData?.mobile || '',
        about: userData?.about || '',
        photoURL: userData?.photoURL || user?.photoURL || ''
      });
    }
  }, [user, userData]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadToCloudinary(file, `pixsymedia/profiles/${user?.uid || Date.now()}`);
      setFormData(prev => ({ ...prev, photoURL: url }));
    } catch {
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.uid) return alert("User not authenticated!");
    setSaving(true);
    try {
      const updatedData = { ...formData, email: user.email };
      await update(ref(db, `users/${user.uid}`), updatedData);
      if (setUserData) setUserData(prev => ({ ...prev, ...updatedData }));
      setActiveTab('profile');
    } catch (err) {
      console.error(err);
      alert("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container-fluid py-3 px-1 px-sm-3 px-lg-4">
      <div className="d-flex align-items-center gap-3 mb-4 px-1 px-sm-0">
        <button onClick={() => setActiveTab('profile')} className="btn btn-light rounded-circle shadow-sm p-2 border-0" style={{ width: '40px', height: '40px' }}>
          <ArrowLeft size={20} />
        </button>
        <h2 className="fw-bold text-dark m-0">Edit <span style={{ color: '#0070f3' }}>Profile</span></h2>
      </div>

      <div className="card border shadow-sm rounded-4 p-4 p-md-5 bg-white mx-auto w-100" style={{ maxWidth: '750px', borderColor: '#b8daf4' }}>
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-4">
            <div className="position-relative d-inline-block">
              {formData.photoURL ? (
                <img src={formData.photoURL} alt="Profile" className="rounded-circle shadow mx-auto mb-2 border border-2 border-primary" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
              ) : (
                <div className="mx-auto mb-2 d-flex align-items-center justify-content-center text-dark rounded-circle shadow border border-2 border-primary" style={{ width: '100px', height: '100px', fontSize: '2.5rem', fontWeight: 'bold', background: '#ffd700' }}>
                  {formData.name ? formData.name.charAt(0).toUpperCase() : 'A'}
                </div>
              )}
              <label htmlFor="profileImageUpload" className="position-absolute bottom-0 end-0 bg-dark text-white rounded-circle p-2 shadow" style={{ cursor: 'pointer' }}>
                <Camera size={16} />
              </label>
              <input id="profileImageUpload" type="file" className="d-none" accept="image/*" onChange={handleImageUpload} />
            </div>
            {uploading && <small className="text-primary mt-1 d-block"><Loader2 size={12} className="spin me-1" /> Uploading...</small>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">Full Name *</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><User size={18} className="text-muted" /></span>
              <input type="text" className="form-control rounded-end py-2 bg-light border-0" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">Mobile Number</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><Phone size={18} className="text-muted" /></span>
              <input type="text" className="form-control rounded-end py-2 bg-light border-0" value={formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })} />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary small">About / Bio</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0 pt-2"><Info size={18} className="text-muted" /></span>
              <textarea className="form-control rounded-end bg-light border-0" rows="3" value={formData.about} onChange={e => setFormData({ ...formData, about: e.target.value })}></textarea>
            </div>
          </div>

          <div className="pt-3 border-top d-flex justify-content-end gap-2">
            <button type="button" onClick={() => setActiveTab('profile')} className="btn btn-light px-4 rounded-pill fw-semibold text-secondary border-0">Cancel</button>
            <button type="submit" className="btn text-dark fw-semibold px-5 rounded-pill shadow-sm border-0 d-flex align-items-center gap-2" style={{ background: '#ffd700' }} disabled={saving || uploading}>
              {saving ? <Loader2 size={16} className="spin" /> : <Save size={16} />}
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}