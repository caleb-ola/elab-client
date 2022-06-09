import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import EditPartnersForm from './EditPartnersForm';

function EditPartners() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <EditPartnersForm />
        </div>
      </div>
    </div>
  );
}

export default EditPartners;
