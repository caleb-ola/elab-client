import React from 'react';
import DashboardNav from './DashboardNav';
import Main from './Main';

function Admin() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <Main />
    </div>
  );
}

export default Admin;
