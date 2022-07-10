import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import PaymentsDetailsContent from './PaymentsDetailsContent';

function PaymentsDetails() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <PaymentsDetailsContent />
        </div>
      </div>
    </div>
  );
}

export default PaymentsDetails;
