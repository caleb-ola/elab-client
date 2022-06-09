import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import NonProfitContent from './NonProfitContent';

function NonProfit() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <NonProfitContent />
        </div>
      </div>
    </div>
  );
}

export default NonProfit;
