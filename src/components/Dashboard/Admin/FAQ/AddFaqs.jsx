import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import AddFaqsForm from './AddFaqForm';

function AddFaqs() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <AddFaqsForm />
        </div>
      </div>
    </div>
  );
}

export default AddFaqs;
