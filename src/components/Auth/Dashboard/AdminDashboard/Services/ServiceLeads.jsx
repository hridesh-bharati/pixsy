// src/components/Auth/Dashboard/AdminDashboard/ServiceLeads.jsx
import React, { useState, useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { db } from '../../../../../lib/firebase';
import { Trash2, Phone, Mail, User, Calendar, MessageSquare, ArrowLeft, ClipboardList } from 'lucide-react';

const ServiceLeads = ({ setActiveTab }) => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const leadsRef = ref(db, 'serviceLeads');
    onValue(leadsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedLeads = Object.entries(data).map(([id, val]) => ({
          id,
          ...val
        })).reverse();
        setLeads(loadedLeads);
      } else {
        setLeads([]);
      }
      setLoading(false);
    });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      await remove(ref(db, `serviceLeads/${id}`));
    }
  };

  const brandGradient = 'linear-gradient(135deg, #7928ca 0%, #ff0080 100%)';

  return (
    <div className="container-fluid p-0">

      {/* Header Bar */}
      <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
        <div className="d-flex align-items-center gap-3">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="btn btn-light rounded-circle shadow-sm p-2 d-flex align-items-center justify-content-center border-0"
            style={{ width: '40px', height: '40px' }}
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="fw-bold text-dark m-0 d-flex align-items-center gap-2">
              <ClipboardList size={24} style={{ color: '#ff0080' }} /> Service Inquiries
            </h2>
            <p className="text-muted small m-0">View and manage customer lead inquiries submitted from services pages.</p>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5 text-muted">Loading service requests...</div>
      ) : leads.length === 0 ? (
        <div className="text-center py-5 text-muted card border-0 shadow-sm rounded-4 p-5 bg-white">
          <ClipboardList size={48} className="text-muted mb-3 opacity-50" />
          <h4 className="fw-bold text-dark">No service leads yet</h4>
          <p className="text-muted small">Inquiries will appear here when users submit requests.</p>
        </div>
      ) : (
        <div className="row g-4">
          {leads.map((lead) => (
            <div key={lead.id} className="col-lg-6">
              <div
                className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white d-flex flex-column lead-card-item"
                style={{ transition: 'all 0.3s ease' }}
              >

                {/* Top Badge & Date */}
                <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                  <span className="badge text-white px-3 py-2 rounded-pill fw-bold text-uppercase shadow-sm" style={{ background: brandGradient, fontSize: '10px', letterSpacing: '0.5px' }}>
                    {lead.service}
                  </span>
                  <small className="text-muted d-flex align-items-center gap-1">
                    <Calendar size={13} /> {new Date(lead.date || Date.now()).toLocaleString()}
                  </small>
                </div>

                {/* User Info */}
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <User size={18} className="text-primary" />
                    <span className="fw-bold text-dark fs-5">{lead.name}</span>
                  </div>

                  <div className="d-flex flex-wrap gap-2 mt-2">
                    <a href={`mailto:${lead.email}`} className="text-decoration-none text-dark small d-flex align-items-center gap-1 bg-light px-3 py-1.5 rounded-pill border-0 shadow-sm">
                      <Mail size={14} className="text-primary" /> {lead.email}
                    </a>
                    <a href={`tel:${lead.mobile}`} className="text-decoration-none text-dark small d-flex align-items-center gap-1 bg-light px-3 py-1.5 rounded-pill border-0 shadow-sm">
                      <Phone size={14} className="text-success" /> {lead.mobile}
                    </a>
                  </div>
                </div>

                {/* Message Box */}
                {lead.message && (
                  <div className="bg-light p-3 rounded-3 mb-3 border-0 flex-grow-1">
                    <small className="text-secondary d-flex align-items-center gap-1 fw-bold mb-1">
                      <MessageSquare size={13} /> Message:
                    </small>
                    <p className="text-dark small m-0" style={{ whiteSpace: 'pre-line', lineHeight: '1.5' }}>{lead.message}</p>
                  </div>
                )}

                {/* Delete Action Button */}
                <div className="d-flex justify-content-end pt-2 mt-auto border-top">
                  <button
                    onClick={() => handleDelete(lead.id)}
                    className="btn btn-sm btn-outline-danger rounded-pill px-3 d-flex align-items-center gap-1 border-0 shadow-sm"
                  >
                    <Trash2 size={14} /> Delete Inquiry
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .lead-card-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.08) !important;
        }
      `}</style>
    </div>
  );
};

export default ServiceLeads;