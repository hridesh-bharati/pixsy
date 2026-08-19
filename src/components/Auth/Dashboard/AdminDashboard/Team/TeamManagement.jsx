// src/components/Auth/Dashboard/AdminDashboard/Team/TeamManagement.jsx
import React, { useState, useEffect } from 'react';
import { ref, onValue, push, remove } from 'firebase/database';
import { db } from '../../../../../lib/firebase';
import { Sparkles, Trash2, PlusCircle, UserPlus, Image as ImageIcon } from 'lucide-react';

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    handle: '',
    email: '',
    avatar: '',
    color: '#ff8a00',
    experience: '',
    projects: '',
    location: ''
  });

  useEffect(() => {
    const teamRef = ref(db, 'teamMembers');
    onValue(teamRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.entries(data).map(([id, val]) => ({ id, ...val }));
        setTeamMembers(list);
      } else {
        setTeamMembers([]);
      }
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({ ...prev, avatar: reader.result }));
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.title || !formData.avatar) {
      alert('Please fill in all required fields and upload an avatar image!');
      return;
    }

    const teamRef = ref(db, 'teamMembers');
    const newMember = {
      ...formData,
      bgColor: `${formData.color}10`,
      borderColor: `${formData.color}33`,
      createdAt: Date.now()
    };

    push(teamRef, newMember)
      .then(() => {
        alert('Team member added successfully!');
        setFormData({
          name: '',
          title: '',
          handle: '',
          email: '',
          avatar: '',
          color: '#ff8a00',
          experience: '',
          projects: '',
          location: ''
        });
      })
      .catch((error) => console.error('Error adding team member: ', error));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this team member?')) {
      const memberRef = ref(db, `teamMembers/${id}`);
      remove(memberRef).catch((error) => console.error('Error deleting:', error));
    }
  };

  return (
    <div className="container-fluid p-0">
      {/* Header Banner */}
      <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #002147, #004080)' }}>
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 position-relative z-2">
          <div>
            <h3 className="fw-bold m-0 text-white mb-1">Team Management</h3>
            <p className="text-white opacity-75 m-0 small">Add team members with full details and manage them below.</p>
          </div>
          <span className="badge bg-white text-dark px-3 py-2 rounded-pill fw-bold shadow-sm">
            {teamMembers.length} Members Active
          </span>
        </div>
      </div>

      {/* Full Add Form */}
      <div className="card border-0 shadow-sm rounded-4 p-4 mb-5 bg-white">
        <h5 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
          <UserPlus size={20} className="text-primary" /> Add New Team Member
        </h5>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-4">
            <label className="form-label small fw-semibold text-muted">Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="e.g. Hridesh Bharati" required />
          </div>
          <div className="col-md-4">
            <label className="form-label small fw-semibold text-muted">Job Title *</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-control" placeholder="e.g. CEO & Founder" required />
          </div>
          <div className="col-md-4">
            <label className="form-label small fw-semibold text-muted">Social Handle</label>
            <input type="text" name="handle" value={formData.handle} onChange={handleChange} className="form-control" placeholder="e.g. hrideshb" />
          </div>
          <div className="col-md-4">
            <label className="form-label small fw-semibold text-muted">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="e.g. Pixsymedia78@gmail.com" />
          </div>
          <div className="col-md-4">
            <label className="form-label small fw-semibold text-muted d-flex align-items-center gap-1">
              <ImageIcon size={16} /> Upload Photo *
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="form-control"
              required={!formData.avatar}
            />
            {uploading && <small className="text-primary mt-1 d-block">Processing image...</small>}
            {formData.avatar && (
              <div className="mt-2 d-flex align-items-center gap-2">
                <img src={formData.avatar} alt="Preview" className="rounded-circle border" style={{ width: '30px', height: '30px', objectFit: 'cover' }} />
                <small className="text-success fw-semibold">Photo ready</small>
              </div>
            )}
          </div>
          <div className="col-md-4">
            <label className="form-label small fw-semibold text-muted">Theme Color</label>
            <input type="color" name="color" value={formData.color} onChange={handleChange} className="form-control form-control-color w-100" />
          </div>
          <div className="col-md-4">
            <label className="form-label small fw-semibold text-muted">Experience</label>
            <input type="text" name="experience" value={formData.experience} onChange={handleChange} className="form-control" placeholder="e.g. 12+ Years" />
          </div>
          <div className="col-md-4">
            <label className="form-label small fw-semibold text-muted">Completed Projects</label>
            <input type="text" name="projects" value={formData.projects} onChange={handleChange} className="form-control" placeholder="e.g. 200+" />
          </div>
          <div className="col-md-4">
            <label className="form-label small fw-semibold text-muted">Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-control" placeholder="e.g. Nichlaul" />
          </div>
          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-primary px-4 py-2 rounded-pill fw-bold d-flex align-items-center gap-2" style={{ background: 'linear-gradient(135deg, #ff6b00, #ff2468)', border: 'none' }}>
              <PlusCircle size={18} /> Publish Team Member
            </button>
          </div>
        </form>
      </div>

      {/* Niche Minimalist List View (Pic, Name, Email, Delete Button) */}
      <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
        <h5 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
          <Sparkles size={18} className="text-primary" /> Existing Team Members List
        </h5>

        {loading ? (
          <div className="text-center py-4 text-muted">Loading team members...</div>
        ) : teamMembers.length === 0 ? (
          <div className="text-center py-4 text-muted">No team members added in database yet.</div>
        ) : (
          <div className="row g-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-6">
                <div className="p-3 rounded-3 bg-light border-0 d-flex justify-content-between align-items-center shadow-sm">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={member.avatar || 'https://via.placeholder.com/50'}
                      alt={member.name}
                      className="rounded-circle border"
                      width="45"
                      height="45"
                      style={{ objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="fw-bold text-dark m-0">{member.name}</h6>
                      <small className="text-muted text-truncate d-block" style={{ maxWidth: '180px' }}>
                        {member.email || member.title || 'Team Member'}
                      </small>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="btn btn-sm btn-outline-danger border-0 rounded-circle p-2"
                    title="Delete Member"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamManagement;