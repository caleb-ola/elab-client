import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import AddProjectsForm from './AddProjectsForm';

function AddProjects() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <AddProjectsForm />
        </div>
      </div>
    </div>
  );
}

export default AddProjects;
