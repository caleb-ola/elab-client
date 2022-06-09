import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import EditResourcesForm from './EditBlogsForm';

function EditBlogs() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <EditResourcesForm />
        </div>
      </div>
    </div>
  );
}

export default EditBlogs;
