import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import AddServicesForm from './AddServicesForm';

function AddServices() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <AddServicesForm />
        </div>
      </div>
    </div>
  );
}

export default AddServices;
