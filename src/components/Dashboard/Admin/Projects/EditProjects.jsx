import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import EditProjectsForm from './EditProjectsForm';

function EditProjects() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <EditProjectsForm />
        </div>
      </div>
    </div>
  );
}

export default EditProjects;
