import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import AddPlansForm from './AddPlansForm';

function AddPlans() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <AddPlansForm />
        </div>
      </div>
    </div>
  );
}

export default AddPlans;
