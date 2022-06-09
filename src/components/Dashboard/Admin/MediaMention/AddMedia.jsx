import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import AddMediaForm from './AddMediaForm';
// import AddMediaForm from './AddMediaForm';

function AddMedia() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <AddMediaForm />
        </div>
      </div>
    </div>
  );
}

export default AddMedia;
