import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import EditNonProfitForm from './EditNonProfitForm';

function EditNonProfit() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <EditNonProfitForm />
        </div>
      </div>
    </div>
  );
}

export default EditNonProfit;
