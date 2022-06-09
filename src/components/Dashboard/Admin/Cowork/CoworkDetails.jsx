import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import CoworkDetailsContent from './CoworkDetailsContent';

function CoworkDetails() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <CoworkDetailsContent />
        </div>
      </div>
    </div>
  );
}

export default CoworkDetails;
