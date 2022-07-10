import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import EditServicesForm from './EditServicesForm';

function EditServices() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <EditServicesForm />
        </div>
      </div>
    </div>
  );
}

export default EditServices;
