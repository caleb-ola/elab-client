import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import CoworkContent from './CoworkContent';

function Cowork() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <CoworkContent />
        </div>
      </div>
    </div>
  );
}

export default Cowork;
