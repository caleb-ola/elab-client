import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import EditImpactForm from './EditImpactForm';

function EditImpact() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <EditImpactForm />
        </div>
      </div>
    </div>
  );
}

export default EditImpact;
