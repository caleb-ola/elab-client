import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import AddVolunteerForm from './AddVolunteersForm';

function AddVolunteer() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <AddVolunteerForm />
        </div>
      </div>
    </div>
  );
}

export default AddVolunteer;
