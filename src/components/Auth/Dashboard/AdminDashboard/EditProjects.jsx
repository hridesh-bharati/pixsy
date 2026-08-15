import React, { useState, useEffect } from 'react';
import { ref, push, update } from 'firebase/database';
import { db } from '../../../../lib/firebase';
import { uploadToCloudinary } from '../../../../lib/cloudinary';
import { Loader2, ArrowLeft, Save } from 'lucide-react';

export default function EditProjects({ editingProject, setActiveTab, setEditingProject }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    projectUrl: '',
    imageUrl: ''
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (editingProject) {
      setFormData(editingProject);
    }
  }, [editingProject]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      // Overwrite strategy for project banner using project ID or unique sanitized title key
      const projectIdKey = editingProject?.id || `proj_${Date.now()}`;
      const publicId = `pixsymedia/projects/${projectIdKey}`;

      const url = await uploadToCloudinary(file, publicId);
      setFormData({ ...formData, imageUrl: url });
    } catch (err) {
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.projectUrl) {
      alert("Please fill required fields!");
      return;
    }

    setSaving(true);
    try {
      if (editingProject?.id) {
        await update(ref(db, `projects/${editingProject.id}`), formData);
      } else {
        await push(ref(db, 'projects'), formData);
      }
      setEditingProject(null);
      setActiveTab('projects');
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container-fluid p-1">
      <div className="d-flex align-items-center gap-3 mb-4">
        <button
          onClick={() => { setEditingProject(null); setActiveTab('projects'); }}
          className="btn btn-light rounded-circle shadow-sm p-2 d-flex align-items-center justify-content-center"
          style={{ width: '40px', height: '40px' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="fw-bold text-dark m-0">
            {editingProject ? 'Edit' : 'Add New'} <span style={{ background: 'linear-gradient(135deg, #ff6b00, #ff2468, #a52aff, #315cff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Project</span>
          </h2>
          <small className="text-secondary fw-semibold">Fill project specifications below</small>
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">Project Title *</label>
            <input
              type="text"
              className="form-control rounded-3 py-2.5 bg-light border-light"
              placeholder="e.g., AWebGrow"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">Project URL (Live Link) *</label>
            <input
              type="url"
              className="form-control rounded-3 py-2.5 bg-light border-light"
              placeholder="https://example.com"
              value={formData.projectUrl}
              onChange={(e) => setFormData({ ...formData, projectUrl: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary small">Description</label>
            <textarea
              className="form-control rounded-3 bg-light border-light"
              rows="3"
              placeholder="Brief details about the project..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary small">Project Banner Image (Cloudinary)</label>
            <input
              type="file"
              className="form-control rounded-3 py-2.5 bg-light border-light"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {uploading && <small className="text-primary mt-1 d-block"><Loader2 size={12} className="spin me-1" /> Uploading & optimizing to Cloudinary...</small>}

            {formData.imageUrl && (
              <div className="mt-3">
                <img src={formData.imageUrl} alt="Preview" className="rounded-3 border shadow-sm" style={{ width: '140px', height: '90px', objectFit: 'cover' }} />
              </div>
            )}
          </div>

          <div className="pt-3 border-top d-flex justify-content-end gap-2">
            <button
              type="button"
              onClick={() => { setEditingProject(null); setActiveTab('projects'); }}
              className="btn btn-light px-4 rounded-pill fw-semibold text-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn text-white fw-semibold px-5 rounded-pill shadow-sm border-0 d-flex align-items-center gap-2"
              style={{ background: 'linear-gradient(135deg, #ff6b00, #ff2468, #a52aff, #315cff)' }}
              disabled={saving || uploading}
            >
              {saving ? <Loader2 size={16} className="spin" /> : <Save size={16} />}
              {saving ? 'Saving...' : (editingProject ? 'Update Project' : 'Publish Project')}
            </button>
          </div>
        </form>
      </div>
    </div >
  );
}