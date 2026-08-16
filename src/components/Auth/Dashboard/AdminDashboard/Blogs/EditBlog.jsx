// src/components/Auth/Dashboard/AdminDashboard/Blogs/EditBlog.jsx
import React, { useState, useEffect } from 'react';
import { ref, push, update } from 'firebase/database';
import { db } from '../../../../../lib/firebase';
import { uploadToCloudinary } from '../../../../../lib/cloudinary';
import { Loader2, ArrowLeft, Save, Plus, FileText } from 'lucide-react';

export default function EditBlog({ editingBlog, setActiveTab, setEditingBlog }) {
  const [formData, setFormData] = useState({ title: '', content: '', imageUrl: '' });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (editingBlog) {
      setFormData({
        title: editingBlog.title || '',
        content: editingBlog.content || '',
        imageUrl: editingBlog.imageUrl || ''
      });
    } else {
      setFormData({ title: '', content: '', imageUrl: '' });
    }
  }, [editingBlog]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadToCloudinary(file);
      setFormData((prev) => ({ ...prev, imageUrl: url }));
    } catch (err) {
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return;

    setSaving(true);
    const payload = { ...formData, author: 'Hridesh Bharati' };

    try {
      if (editingBlog?.id) {
        await update(ref(db, `blogs/${editingBlog.id}`), { ...payload, updatedAt: Date.now() });
      } else {
        await push(ref(db, 'blogs'), { ...payload, date: Date.now() });
      }
      setEditingBlog(null);
      setActiveTab('blogs');
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container-fluid py-3 px-2 px-sm-3 px-lg-4">
      <div className="d-flex align-items-center gap-3 mb-4">
        <button
          onClick={() => { setEditingBlog(null); setActiveTab('blogs'); }}
          className="btn btn-light rounded-circle shadow-sm p-2 d-flex align-items-center justify-content-center"
          style={{ width: '40px', height: '40px' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="fw-bold text-dark m-0 d-flex align-items-center gap-2">
            <FileText size={24} className="text-primary" /> {editingBlog ? 'Edit Blog Post' : 'Add New Blog Post'}
          </h2>
          <p className="text-muted small m-0">
            {editingBlog ? 'Modify existing article details.' : 'Fill out form specifications to publish a new article.'}
          </p>
        </div>
      </div>

      <div className="card border shadow-sm rounded-4 p-4 p-md-5 mx-auto" style={{ maxWidth: '800px', backgroundColor: '#eef6fc', borderColor: '#b8daf4' }}>
        <form onSubmit5 onSubmit={handleSubmit}>

          <div className="mb-3 p-3 rounded-3 border" style={{ backgroundColor: '#ffffff', borderColor: '#b8daf4' }}>
            <label className="form-label fw-semibold text-secondary small">Blog Title *</label>
            <input
              type="text"
              className="form-control rounded-3 py-2 bg-light border-0"
              placeholder="e.g., The Future of Web Development"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="mb-3 p-3 rounded-3 border" style={{ backgroundColor: '#ffffff', borderColor: '#b8daf4' }}>
            <label className="form-label fw-semibold text-secondary small">Blog Content *</label>
            <textarea
              className="form-control rounded-3 bg-light border-0"
              rows="8"
              placeholder="Write main blog content..."
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
            ></textarea>
          </div>

          <div className="mb-4 p-3 rounded-3 border" style={{ backgroundColor: '#ffffff', borderColor: '#b8daf4' }}>
            <label className="form-label fw-semibold text-secondary small">Banner Image</label>
            <input type="file" className="form-control rounded-3 py-2 bg-light border-0" accept="image/*" onChange={handleImageUpload} />
            {uploading && <small className="text-primary mt-1 d-block"><Loader2 size={12} className="spin me-1" /> Uploading image...</small>}
            {formData.imageUrl && (
              <div className="mt-3"><img src={formData.imageUrl} alt="Preview" className="rounded-3 border shadow-sm" style={{ width: '140px', height: '90px', objectFit: 'cover' }} /></div>
            )}
          </div>

          <div className="pt-3 border-top d-flex justify-content-end gap-2">
            <button type="button" onClick={() => { setEditingBlog(null); setActiveTab('blogs'); }} className="btn btn-light px-4 rounded-pill fw-semibold text-secondary border">Cancel</button>
            <button type="submit" className="btn text-dark fw-semibold px-5 rounded-pill shadow-sm border border-dark d-flex align-items-center gap-2" style={{ background: '#ffd700' }} disabled={saving || uploading}>
              {saving ? <Loader2 size={16} className="spin" /> : (editingBlog ? <Save size={16} /> : <Plus size={16} />)}
              {saving ? 'Saving...' : (editingBlog ? 'Update Blog' : 'Publish Blog')}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}