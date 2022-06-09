import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import PartnersContent from './PartnersContent';

function Impact() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <PartnersContent />
        </div>
      </div>
    </div>
  );
}

export default Impact;
