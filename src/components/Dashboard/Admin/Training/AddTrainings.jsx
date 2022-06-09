import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import AddTrainingsForm from './AddTrainingsForm';

function AddTrainings() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <AddTrainingsForm />
        </div>
      </div>
    </div>
  );
}

export default AddTrainings;
