import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import ImpactContent from './servicesContent';

function ServicesAdmin() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <ImpactContent />
        </div>
      </div>
    </div>
  );
}

export default ServicesAdmin;
