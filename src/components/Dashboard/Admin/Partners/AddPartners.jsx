import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import AddPartnersForm from './AddPartnersForm';

function AddPartners() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <AddPartnersForm />
        </div>
      </div>
    </div>
  );
}

export default AddPartners;
