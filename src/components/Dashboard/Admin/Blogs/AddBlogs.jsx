import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import AddBlogsForm from './AddBlogsForm';

function AddBlogs() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <AddBlogsForm />
        </div>
      </div>
    </div>
  );
}

export default AddBlogs;
