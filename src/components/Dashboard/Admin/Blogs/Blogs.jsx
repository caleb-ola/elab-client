import React from 'react';
import DashboardNav from '../DashboardReusable/DashboardNav';
import Sidebar from '../DashboardReusable/Sidebar';
import BlogsContent from './BlogsContent';

function Blogs() {
  return (
    <div className="admin-dashboard">
      <DashboardNav />
      <div className="main py-5">
        <div className="container-fluid main__container">
          <Sidebar />
          <BlogsContent />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
