import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import BookingsDetailsContent from './BookingsDetailsContent';

function BookingsDetails() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <BookingsDetailsContent />
        </div>
      </div>
    </div>
  );
}

export default BookingsDetails;
