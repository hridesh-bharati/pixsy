// src/components/Auth/Dashboard/AdminDashboard/Projects.jsx
import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { db } from '../../../../lib/firebase';
import { ExternalLink, Trash2, Edit, Plus, Image as ImageIcon } from 'lucide-react';

const Projects = ({ setActiveTab, setEditingProject }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectsRef = ref(db, 'projects');
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedProjects = Object.entries(data).map(([id, val]) => ({
          id,
          ...val
        }));
        setProjects(loadedProjects);
      } else {
        setProjects([]);
      }
      setLoading(false);
    });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await remove(ref(db, `projects/${id}`));
    }
  };

  const handleEditClick = (proj) => {
    setEditingProject(proj);
    setActiveTab('add-project');
  };

  return (
    <div className="container-fluid px-0">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold text-dark mb-1">Manage Projects</h3>
          <p className="text-muted small mb-0">View and manage your portfolio projects.</p>
        </div>
        <button
          className="btn btn-primary btn-sm rounded-pill px-3 py-2 fw-semibold d-flex align-items-center gap-2"
          onClick={() => { setEditingProject(null); setActiveTab('add-project'); }}
        >
          <Plus size={16} /> Add Project
        </button>
      </div>

      {loading ? (
        <div className="text-center py-5 text-muted">Loading projects...</div>
      ) : projects.length === 0 ? (
        <div className="text-center py-5 text-muted card border-0 shadow-sm rounded-4 p-5 bg-white">
          No projects found.
        </div>
      ) : (
        <div className="row g-3">
          {projects.map((proj) => (
            <div key={proj.id} className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 bg-white overflow-hidden">
                <div style={{ height: '160px', backgroundColor: '#f8f9fa' }}>
                  {proj.imageUrl ? (
                    <img src={proj.imageUrl} alt={proj.title} className="w-100 h-100 object-fit-cover" />
                  ) : (
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted">
                      <ImageIcon size={32} className="opacity-50" />
                    </div>
                  )}
                </div>
                <div className="card-body d-flex flex-column p-3">
                  <h6 className="fw-bold text-dark text-truncate mb-1">{proj.title}</h6>
                  <p className="text-muted small mb-3 text-truncate">{proj.description || 'No description'}</p>

                  <div className="d-flex align-items-center justify-content-between pt-2 border-top mt-auto">
                    {proj.projectUrl ? (
                      <a href={proj.projectUrl} target="_blank" rel="noopener noreferrer" className="btn btn-link btn-sm text-decoration-none p-0 text-dark small d-flex align-items-center gap-1">
                        <ExternalLink size={13} /> Live View
                      </a>
                    ) : (
                      <span className="text-muted small">No link</span>
                    )}

                    <div className="d-flex gap-1">
                      <button onClick={() => handleEditClick(proj)} className="btn btn-light btn-sm text-primary p-1.5 rounded-circle border-0">
                        <Edit size={14} />
                      </button>
                      <button onClick={() => handleDelete(proj.id)} className="btn btn-light btn-sm text-danger p-1.5 rounded-circle border-0">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;