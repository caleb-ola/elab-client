import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import ResourcesContent from './ResourcesContent';

function Resources() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <ResourcesContent />
        </div>
      </div>
    </div>
  );
}

export default Resources;
