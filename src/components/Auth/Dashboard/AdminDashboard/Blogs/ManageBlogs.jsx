// src/components/Auth/Dashboard/AdminDashboard/Blogs/ManageBlogs.jsx
import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { db } from '../../../../../lib/firebase';
import { Trash2, Edit, Plus, Image as ImageIcon, FileText } from 'lucide-react';

const ManageBlogs = ({ setActiveTab, setEditingBlog }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blogsRef = ref(db, 'blogs');
    onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      setBlogs(data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : []);
      setLoading(false);
    });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      await remove(ref(db, `blogs/${id}`));
    }
  };

  const handleEditClick = (blog) => {
    setEditingBlog(blog);
    setActiveTab('add-blog');
  };

  const brandGradient = 'linear-gradient(135deg, #7928ca 0%, #ff0080 100%)';

  return (
    <div className="container-fluid p-0">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <h2 className="fw-bold text-dark m-0 d-flex align-items-center gap-2">
            <FileText size={24} className="text-primary" /> Manage Blogs
          </h2>
          <p className="text-muted small m-0">View, update, or remove published articles from database.</p>
        </div>
        <button
          className="btn text-white fw-semibold px-4 rounded-pill shadow-sm d-flex align-items-center gap-2 border-0"
          style={{ background: brandGradient }}
          onClick={() => { setEditingBlog(null); setActiveTab('add-blog'); }}
        >
          <Plus size={18} /> Add New Blog
        </button>
      </div>

      {loading ? (
        <div className="text-center py-5 text-muted">Loading blogs from database...</div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-5 text-muted card border-0 shadow-sm rounded-4 p-5 bg-white">
          <FileText size={48} className="text-muted mb-3 opacity-50" />
          <h4 className="fw-bold text-dark">No blogs found</h4>
          <p className="text-muted small">Create your first blog post using the button above!</p>
        </div>
      ) : (
        <div className="row g-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6">
              <div
                className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden bg-white blog-card-item"
                style={{ transition: 'all 0.3s ease' }}
              >
                <div style={{ height: '160px', backgroundColor: '#f1f5f9' }} className="position-relative">
                  {blog.imageUrl ? (
                    <img src={blog.imageUrl} alt={blog.title} className="w-100 h-100 object-fit-cover" />
                  ) : (
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted">
                      <ImageIcon size={32} className="opacity-50" />
                    </div>
                  )}
                  <span className="badge bg-dark position-absolute top-0 start-0 m-3 px-3 py-1.5 rounded-pill shadow-sm fw-bold" style={{ fontSize: '10px' }}>
                    Published
                  </span>
                </div>

                <div className="card-body d-flex flex-column p-4">
                  <h5 className="fw-bold text-dark mb-2">{blog.title}</h5>
                  <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                    {blog.content?.substring(0, 85) + '...'}
                  </p>

                  <div className="d-flex align-items-center justify-content-between mt-auto pt-3 border-top">
                    <small className="text-muted fw-semibold">{new Date(blog.date || Date.now()).toLocaleDateString()}</small>
                    <div className="d-flex gap-2">
                      <button
                        onClick={() => handleEditClick(blog)}
                        className="btn btn-sm btn-light text-primary rounded-circle p-2 border-0 shadow-sm"
                        title="Edit Blog"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="btn btn-sm btn-light text-danger rounded-circle p-2 border-0 shadow-sm"
                        title="Delete Blog"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .blog-card-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.08) !important;
        }
      `}</style>
    </div>
  );
};

export default ManageBlogs;