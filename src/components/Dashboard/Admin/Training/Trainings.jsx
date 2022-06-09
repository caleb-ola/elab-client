import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import TrainingContent from './TrainingsContent';

function Trainings() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <TrainingContent />
        </div>
      </div>
    </div>
  );
}

export default Trainings;
