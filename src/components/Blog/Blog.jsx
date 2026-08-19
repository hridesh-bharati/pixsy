// src/components/Blog/Blog.jsx
import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../lib/firebase';
import { Sparkles, Calendar, User, ArrowRight, Search, BookOpen, Clock, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blogsRef = ref(db, 'blogs');
    onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedBlogs = Object.entries(data).map(([id, val]) => ({ id, ...val }));
        setBlogs(loadedBlogs);
      } else {
        setBlogs([]);
      }
      setLoading(false);
    });
  }, []);

  // Filter only by Search Term (Title or Content)
  const filteredPosts = blogs.filter(post =>
    post.title?.includes(searchTerm) ||
    post.content?.includes(searchTerm)
  );

  return (
    <div className="bg-light min-vh-100">
      {/* HERO BANNER */}
      <section className="text-center position-relative py-5 bg-white border-bottom">
        <div className="container position-relative py-4">
          <span className="badge bg-light text-primary border px-3 py-2 rounded-pill fw-bold text-uppercase mb-3" style={{ fontSize: '12px' }}>
            <Sparkles size={14} className="me-1" /> Our Insights & Articles
          </span>
          <h1 className="display-4 fw-bold text-dark mb-3">
            Latest News & <span className="text-primary">Tech Blog</span>
          </h1>

          {/* Search Bar */}
          <div className="row justify-content-center mt-4">
            <div className="col-md-6">
              <div className="input-group shadow-sm rounded-pill overflow-hidden border bg-white">
                <span className="input-group-text bg-white border-0 ps-4 text-muted">
                  <Search size={18} />
                </span>
                <input
                  type="text"
                  className="form-control border-0 py-3 shadow-none bg-white"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG GRID SECTION */}
      <section className="py-5">
        <div className="container py-4">
          {loading ? (
            <div className="text-center py-5 text-muted">Loading articles...</div>
          ) : filteredPosts.length > 0 ? (
            <div className="row g-4">
              {filteredPosts.map((post) => (
                <div key={post.id} className="col-lg-4 col-md-6">
                  <div className="card h-100 rounded-4 border-0 shadow-sm overflow-hidden bg-white d-flex flex-column">
                    <div className="position-relative" style={{ height: '200px', backgroundColor: '#f1f5f9' }}>
                      {post.imageUrl ? (
                        <img src={post.imageUrl} alt={post.title} className="w-100 h-100 object-fit-cover" />
                      ) : (
                        <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted">
                          <ImageIcon size={32} className="opacity-50" />
                        </div>
                      )}
                    </div>

                    <div className="card-body p-4 d-flex flex-column flex-grow-1">
                      <div className="d-flex align-items-center gap-3 text-muted small mb-2">
                        <span className="d-flex align-items-center gap-1"><Calendar size={13} /> {new Date(post.date || Date.now()).toLocaleDateString()}</span>
                        <span className="d-flex align-items-center gap-1"><Clock size={13} /> 4 min read</span>
                      </div>

                      <h3 className="h5 fw-bold text-dark mb-2">{post.title}</h3>
                      <p className="text-muted small mb-4 flex-grow-1">
                        {post.content?.substring(0, 100) + '...'}
                      </p>

                      <div className="d-flex align-items-center justify-content-between pt-3 border-top mt-auto">
                        <span className="small fw-semibold text-secondary d-flex align-items-center gap-1">
                          <User size={13} /> {post.author || 'abhilasha singh'}
                        </span>
                        <Link to={`/blog/${post.id}`} className="text-primary text-decoration-none fw-bold small d-inline-flex align-items-center gap-1">
                          <span>Read More</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="col-12 text-center py-5">
              <BookOpen size={48} className="text-muted mb-3 opacity-50" />
              <h4 className="text-dark fw-bold">No articles found</h4>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;