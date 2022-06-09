import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import AddImpactForm from './AddImpactForm';

function AddImpact() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <AddImpactForm />
        </div>
      </div>
    </div>
  );
}

export default AddImpact;
