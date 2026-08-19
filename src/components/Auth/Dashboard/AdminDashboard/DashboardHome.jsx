// src/components/Auth/Dashboard/AdminDashboard/DashboardHome.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { db } from '../../../../lib/firebase';
import {
  Users,
  FolderGit2,
  FileText,
  ClipboardList,
  ExternalLink,
  Calendar
} from 'lucide-react';

const DashboardHome = ({ user, userData }) => {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({
    projects: 0,
    blogs: 0,
    leads: 60, // Updated base count as requested in your notes
    clients: 6800
  });
  const [recentLeads, setRecentLeads] = useState([]);
  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    const projectsRef = ref(db, 'projects');
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.entries(data).map(([id, val]) => ({ id, ...val }));
        setCounts(prev => ({ ...prev, projects: list.length }));
        setRecentProjects(list.slice(-3).reverse());
      } else {
        setCounts(prev => ({ ...prev, projects: 0 }));
        setRecentProjects([]);
      }
    });

    const blogsRef = ref(db, 'blogs');
    onValue(blogsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.keys(data);
        setCounts(prev => ({ ...prev, blogs: list.length }));
      } else {
        setCounts(prev => ({ ...prev, blogs: 0 }));
      }
    });

    const leadsRef = ref(db, 'serviceLeads');
    onValue(leadsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.entries(data).map(([id, val]) => ({ id, ...val })).reverse();
        setCounts(prev => ({ ...prev, leads: list.length }));
        setRecentLeads(list.slice(0, 3));
      } else {
        setCounts(prev => ({ ...prev, leads: 0 }));
        setRecentLeads([]);
      }
    });
  }, []);

  const statCards = [
    {
      title: 'Total Projects',
      count: counts.projects,
      icon: <FolderGit2 size={24} className="text-white opacity-75" />,
      gradient: 'linear-gradient(135deg, #7c3aed, #8b5cf6)'
    },
    {
      title: 'Published Blogs',
      count: counts.blogs,
      icon: <FileText size={24} className="text-white opacity-75" />,
      gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)'
    },
    {
      title: 'Service Leads',
      count: `${counts.leads}+`,
      icon: <ClipboardList size={24} className="text-white opacity-75" />,
      gradient: 'linear-gradient(135deg, #f97316, #ea580c)'
    },
    {
      title: 'Community Members',
      count: `${counts.clients}+`,
      icon: <Users size={24} className="text-white opacity-75" />,
      gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)'
    }
  ];

  return (
    <div className="container-fluid p-0">
      {/* Top Banner */}
      <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}>
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 position-relative z-2">
          <div>
            <h3 className="fw-bold m-0 text-white mb-1">Admin Console</h3>
            <div className="d-flex align-items-center gap-2 text-white opacity-75 small">
              <Calendar size={14} /> <span>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
          <div className="badge bg-white text-dark px-3 py-2 rounded-pill fw-bold shadow-sm d-flex align-items-center gap-2" style={{ fontSize: '11px' }}>
            <span className="bg-success rounded-circle" style={{ width: '8px', height: '8px', display: 'inline-block' }}></span> SYSTEM LIVE
          </div>
        </div>
      </div>

      {/* Metric Cards - Changed col-md-6 to col-6 col-lg-3 for 2x2 grid on mobile */}
      <div className="row g-3 g-lg-4 mb-4">
        {statCards.map((card, idx) => (
          <div key={idx} className="col-6 col-lg-3">
            <div
              className="card border-0 shadow-sm p-3 p-lg-4 rounded-4 h-100 text-white position-relative overflow-hidden stat-card"
              style={{ background: card.gradient }}
            >
              <div className="d-flex align-items-center justify-content-between mb-2 mb-lg-3">
                <h3 className="fw-bold m-0 fs-4 fs-lg-2 text-white">{card.count}</h3>
                <div className="p-2 rounded-3 bg-white bg-opacity-10">
                  {card.icon}
                </div>
              </div>
              <h6 className="text-white opacity-90 m-0 fw-semibold fs-7 fs-lg-6">{card.title}</h6>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Sections */}
      <div className="row g-4">
        {/* Recent Service Inquiries */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold text-dark m-0 d-flex align-items-center gap-2">
                <ClipboardList size={20} className="text-primary" /> Recent Service Inquiries
              </h5>
              <span className="badge bg-light text-secondary border-0 fw-bold px-3 py-1.5 rounded-pill">
                {recentLeads.length} New
              </span>
            </div>

            {recentLeads.length === 0 ? (
              <div className="text-center py-5 text-muted small">No recent leads found in database.</div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="p-3 rounded-3 bg-light border-0 d-flex justify-content-between align-items-center">
                    <div>
                      <span className="badge bg-dark px-2.5 py-1 rounded-pill mb-1" style={{ fontSize: '10px' }}>{lead.service}</span>
                      <h6 className="fw-bold text-dark m-0">{lead.name}</h6>
                      <small className="text-muted">{lead.mobile} • {lead.email}</small>
                    </div>
                    <span className="small text-secondary fw-semibold">
                      {new Date(lead.date || Date.now()).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recent Projects */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold text-dark m-0 d-flex align-items-center gap-2">
                <FolderGit2 size={20} className="text-success" /> Active Portfolio Projects
              </h5>
              <span className="badge bg-light text-secondary border-0 fw-bold px-3 py-1.5 rounded-pill">
                {recentProjects.length} Active
              </span>
            </div>

            {recentProjects.length === 0 ? (
              <div className="text-center py-5 text-muted small">No projects added yet.</div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {recentProjects.map((proj) => (
                  <div key={proj.id} className="p-3 rounded-3 bg-light border-0 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      {proj.imageUrl && (
                        <img src={proj.imageUrl} alt="" className="rounded-2 object-fit-cover" style={{ width: '45px', height: '45px' }} />
                      )}
                      <div>
                        <h6 className="fw-bold text-dark m-0">{proj.title}</h6>
                        <small className="text-muted text-truncate d-block" style={{ maxWidth: '220px' }}>{proj.description || 'No description'}</small>
                      </div>
                    </div>
                    {proj.projectUrl && (
                      <a href={proj.projectUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-light text-dark rounded-circle p-2 shadow-sm border-0">
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .stat-card:hover {
          transform: translateY(-3px);
          transition: transform 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default DashboardHome;