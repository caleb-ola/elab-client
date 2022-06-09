import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import ConsultDetailsContent from './ConsultDetailsContent';

function ConsultDetails() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <ConsultDetailsContent />
        </div>
      </div>
    </div>
  );
}

export default ConsultDetails;
