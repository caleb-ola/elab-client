import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import EditFaqsForm from './EditFaqsForm';

function EditFaqs() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <EditFaqsForm />
        </div>
      </div>
    </div>
  );
}

export default EditFaqs;
