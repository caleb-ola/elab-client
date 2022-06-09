import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import EditEventForm from './EditEventForm';

function EditEvent() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <EditEventForm />
        </div>
      </div>
    </div>
  );
}

export default EditEvent;
