import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import EditMediaForm from './EditMediaForm';

function EditMedia() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <EditMediaForm />
        </div>
      </div>
    </div>
  );
}

export default EditMedia;
