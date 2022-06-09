import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import FaqsContent from './FaqsContent';

function Faqs() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <FaqsContent />
        </div>
      </div>
    </div>
  );
}

export default Faqs;
