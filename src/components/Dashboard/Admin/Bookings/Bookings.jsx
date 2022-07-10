import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import BookingsContent from './BookingsContent';

function Bookings() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <BookingsContent />
        </div>
      </div>
    </div>
  );
}

export default Bookings;
