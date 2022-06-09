import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import AddResourcesForm from './AddResourcesForm';

function AddResources() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <AddResourcesForm />
        </div>
      </div>
    </div>
  );
}

export default AddResources;
