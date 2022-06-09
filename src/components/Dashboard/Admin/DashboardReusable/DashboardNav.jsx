import React from 'react';

function DashboardNav() {
  return (
    <div className="dashnav">
      <nav className="navbar navbar-expand-lg navbar-light py-0 pb-3 pt-2 pt-lg-0 pb-lg-0 py-xl-0 fixed-top dashnav__navi">
        <div className="container-fluid align-items-center dashnav__container">
          <a className="navbar-brand " href="/">
            <img src="/images/logo.png" alt="" className="img-fluid my-2" />
          </a>
          <span className="dashnav__logout fw-bold">
            <i className="fa-solid fa-right-from-bracket me-2 dashnav__logout--icon " />
            Log Out
          </span>
        </div>
      </nav>
    </div>
  );
}

export default DashboardNav;
