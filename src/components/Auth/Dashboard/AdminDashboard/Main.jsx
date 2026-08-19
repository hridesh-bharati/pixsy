// src/components/Auth/Dashboard/AdminDashboard/Main.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';
import { auth, db } from '../../../../lib/firebase';
import Sidebar from './Sidebar';
import DashboardHome from './DashboardHome';
import Projects from './Projects';
import EditProjects from './EditProjects';
import ManageBlogs from './Blogs/ManageBlogs';
import EditBlog from './Blogs/EditBlog';
import ServiceLeads from './Services/ServiceLeads';
import TeamManagement from './Team/TeamManagement';
import Profile from './Profile/Profile';
import ProfileEdit from './Profile/ProfileEdit';
import { Menu } from 'lucide-react';
import './AdminDashboard.css';

const Main = ({ user }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingProject, setEditingProject] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.uid) {
      const userRef = ref(db, `users/${user.uid}`);
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        }
      });
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="admin-layout d-flex flex-column flex-md-row">
      {/* Mobile Header Bar */}
      <div className="d-md-none bg-dark text-white p-3 d-flex align-items-center justify-content-between shadow-sm">
        <h5 className="m-0 fw-bold">Pixsy <span style={{ color: '#ff0080' }}>Admin</span></h5>
        <button
          className="btn btn-dark text-white border border-secondary p-2 rounded-3 d-flex align-items-center justify-content-center shadow-sm"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileAdminSidebar"
          aria-controls="mobileAdminSidebar"
        >
          <Menu size={22} />
        </button>
      </div>

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setEditingBlog={setEditingBlog}
        setEditingProject={setEditingProject}
        onLogout={handleLogout}
      />

      <div className="admin-content flex-grow-1 p-1 p-md-4 bg-light min-vh-100">
        {activeTab === 'dashboard' && <DashboardHome user={user} userData={userData} />}
        {activeTab === 'projects' && <Projects setActiveTab={setActiveTab} setEditingProject={setEditingProject} />}
        {activeTab === 'add-project' && <EditProjects editingProject={editingProject} setActiveTab={setActiveTab} setEditingProject={setEditingProject} />}
        {activeTab === 'blogs' && <ManageBlogs setActiveTab={setActiveTab} setEditingBlog={setEditingBlog} />}
        {activeTab === 'add-blog' && <EditBlog editingBlog={editingBlog} setActiveTab={setActiveTab} setEditingBlog={setEditingBlog} />}
        {activeTab === 'service-leads' && <ServiceLeads setActiveTab={setActiveTab} />}
        {activeTab === 'team' && <TeamManagement />}
        {activeTab === 'profile' && <Profile user={user} userData={userData} setActiveTab={setActiveTab} />}
        {activeTab === 'edit-profile' && <ProfileEdit user={user} userData={userData} setActiveTab={setActiveTab} setUserData={setUserData} />}
      </div>
    </div>
  );
};

export default Main;