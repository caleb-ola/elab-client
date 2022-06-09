import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import AddStartupForm from './AddStartupForm';

function AddStartup() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <AddStartupForm />
        </div>
      </div>
    </div>
  );
}

export default AddStartup;
