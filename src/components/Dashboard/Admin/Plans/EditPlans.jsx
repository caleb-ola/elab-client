import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import EditPlansForm from './EditPlansForm';

function EditPlans() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <EditPlansForm />
        </div>
      </div>
    </div>
  );
}

export default EditPlans;
