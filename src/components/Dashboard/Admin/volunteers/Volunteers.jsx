import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import VolunteerContent from './VolunteersContent';

function Volunteers() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <VolunteerContent />
        </div>
      </div>
    </div>
  );
}

export default Volunteers;
