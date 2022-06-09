import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import EditTrainingsForm from './EditTrainingsForm';

function EditTrainings() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <EditTrainingsForm />
        </div>
      </div>
    </div>
  );
}

export default EditTrainings;
