import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import PaymentsContent from './PaymentsContent';

function Payments() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <PaymentsContent />
        </div>
      </div>
    </div>
  );
}

export default Payments;
