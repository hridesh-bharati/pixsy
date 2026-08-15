// src/components/Auth/Dashboard/AdminDashboard/Sidebar.jsx
import React from 'react';
import { LayoutDashboard, FolderGit2, PlusCircle, FileText, PlusSquare, ClipboardList, User, LogOut } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, onLogout }) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      gradient: 'linear-gradient(135deg, #7928ca 0%, #ff0080 100%)',
      shadowColor: 'rgba(255, 0, 128, 0.3)'
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <FolderGit2 size={20} />,
      gradient: 'linear-gradient(135deg, #0070f3 0%, #00dfd8 100%)',
      shadowColor: 'rgba(0, 112, 243, 0.3)'
    },
    {
      id: 'add-project',
      label: 'Add Project',
      icon: <PlusCircle size={20} />,
      gradient: 'linear-gradient(135deg, #f53803 0%, #f5d020 100%)',
      shadowColor: 'rgba(245, 56, 3, 0.3)'
    },
    {
      id: 'blogs',
      label: 'Blogs',
      icon: <FileText size={20} />,
      gradient: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
      shadowColor: 'rgba(255, 65, 108, 0.3)'
    },
    {
      id: 'add-blog',
      label: 'Add Blog',
      icon: <PlusSquare size={20} />,
      gradient: 'linear-gradient(135deg, #8a2be2 0%, #4a00e0 100%)',
      shadowColor: 'rgba(138, 43, 226, 0.3)'
    },
    {
      id: 'service-leads',
      label: 'Service Leads',
      icon: <ClipboardList size={20} />,
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      shadowColor: 'rgba(17, 153, 142, 0.3)'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <User size={20} />,
      gradient: 'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)',
      shadowColor: 'rgba(252, 74, 26, 0.3)'
    }
  ];

  return (
    <>
      {/* Desktop Colorful Sidebar */}
      <div className="admin-sidebar d-none d-md-flex flex-column p-3 text-white">
        <div className="sidebar-brand mb-4 px-2">
          <h4 className="fw-bold m-0 text-white">Pixsy <span style={{ color: '#ff0080' }}>Admin</span></h4>
        </div>

        <ul className="nav nav-pills flex-column mb-auto gap-3">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id || (item.id === 'profile' && activeTab === 'edit-profile');
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`nav-link text-white w-100 text-start d-flex align-items-center gap-3 py-2 px-3 border-0 transition-all ${isActive ? 'fw-bold shadow' : 'opacity-75'}`}
                  style={{
                    background: isActive ? item.gradient : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: isActive ? `0 8px 20px ${item.shadowColor}` : 'none',
                    borderRadius: '12px',
                    transform: isActive ? 'translateX(4px)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center p-2"
                    style={{
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                      width: '38px',
                      height: '38px'
                    }}
                  >
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <hr className="text-secondary" />
        <button
          onClick={onLogout}
          className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill py-2 border-0 shadow-sm"
          style={{ background: 'rgba(255, 255, 255, 0.1)' }}
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>

      {/* Mobile Offcanvas Colorful Sidebar */}
      <div className="offcanvas offcanvas-start bg-dark text-white d-md-none" tabIndex="-1" id="mobileAdminSidebar" aria-labelledby="mobileAdminSidebarLabel">
        <div className="offcanvas-header border-bottom border-secondary">
          <h5 className="offcanvas-title fw-bold text-white" id="mobileAdminSidebarLabel">
            Pixsy <span style={{ color: '#ff0080' }}>Admin</span>
          </h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column p-3">
          <ul className="nav nav-pills flex-column mb-auto gap-3">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id || (item.id === 'profile' && activeTab === 'edit-profile');
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      const closeBtn = document.querySelector('.btn-close-white');
                      if (closeBtn) closeBtn.click();
                    }}
                    className={`nav-link text-white w-100 text-start d-flex align-items-center gap-3 py-2.5 px-3 border-0 ${isActive ? 'fw-bold shadow' : 'opacity-75'}`}
                    style={{
                      background: isActive ? item.gradient : 'rgba(255, 255, 255, 0.05)',
                      boxShadow: isActive ? `0 8px 20px ${item.shadowColor}` : 'none',
                      borderRadius: '12px'
                    }}
                  >
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center p-2"
                      style={{
                        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                        width: '38px',
                        height: '38px'
                      }}
                    >
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <hr className="text-secondary" />
          <button
            onClick={onLogout}
            className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2 rounded-pill py-2 border-0"
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;