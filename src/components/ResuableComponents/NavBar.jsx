import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  const [hamburger, setHamburger] = useState(false);
  const ToggleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-0 pb-3 pt-2 pt-lg-0 pb-lg-0 py-xl-0  navi">
      <div className="container align-items-center">
        <a className="navbar-brand " href="/">
          <img src="/images/logo.png" alt="" className="img-fluid my-2" />
        </a>
        <button
          onClick={ToggleHamburger}
          className="navbar-toggler custom-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className={hamburger ? 'animated-icon1 open' : 'animated-icon1'}>
            <span />
            <span />
            <span />
          </div>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end text-start "
          id="navbarNav"
        >
          <ul className="navbar-nav  my-lg-0 text-start text-lg-center ">
            <li className="nav-item py-0 mx-3">
              <NavLink className="nav-link   links  px-0 py-1 my-1 my-lg-0 py-lg-4" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item dropdown nav__drop py-0 mx-3">
              <a href="/" className="nav-link links px-0 py-1 my-1 my-lg-0 py-lg-4" id="navbarDropdown2" data-bs-toggle="dropdown2" aria-expanded="false">
                Program
              </a>
              <ul className="dropdown-menu navi__dropdown" aria-labelledby="navbarDropdown2">
                <div className="row p-3 ">
                  <div className="col-md-6">
                    <a href="/program/community" className="p-2 px-3 btn text-start  navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">community</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="/program/projects" className=" p-2 px-3 btn text-start navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">Projects</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="/" className=" p-2 px-3 btn text-start navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">Innovation  Hub</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="/program/non-profit" className=" p-2 px-3 btn text-start navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">Non-profits</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="/program/foundry" className=" p-2 px-3 btn text-start navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">Startup Foundry</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>

                  </div>
                </div>
                <div className="row" />
              </ul>
            </li>
            <li className="nav-item dropdown nav__drop py-0 mx-3">
              <a href="/" className="nav-link  links px-0 py-1 my-1 my-lg-0 py-lg-4" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu navi__dropdown" aria-labelledby="navbarDropdown">
                <div className="row p-3 ">
                  <div className="col-md-6">
                    <a href="/services/digital-services" className="p-2 px-3 btn text-start  navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">Digital Services</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="/services/training" className=" p-2 px-3 btn text-start navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">Training</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="/services/consultation" className=" p-2 px-3 btn text-start navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">Consulting</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>
                  </div>
                </div>
                <div className="row" />
              </ul>
            </li>
            <li className="nav-item dropdown nav__drop py-0 mx-3">
              <a href="/" className="nav-link links px-0 py-1 my-1 my-lg-0 py-lg-4" id="navbarDropdown2" data-bs-toggle="dropdown2" aria-expanded="false">
                Resources
              </a>
              <ul className="dropdown-menu navi__dropdown" aria-labelledby="navbarDropdown2">
                <div className="row p-3 ">
                  <div className="col-md-6">
                    <a href="/resources/blog" className="p-2 px-3 btn text-start  navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">Blog</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="/resources/playbook" className=" p-2 px-3 btn text-start navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">Playbook</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="/resources/whitepaper" className=" p-2 px-3 btn text-start navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">Whitepaper</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="/resources/faq" className=" p-2 px-3 btn text-start navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">FAQ</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>
                  </div>
                </div>
                <div className="row" />
              </ul>
            </li>
            <li className="nav-item py-0 mx-3">
              <NavLink className="nav-link   links  px-0 py-2 py-lg-4 " to="/contact">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item px-md-4 me-2 me-lg-0 my-2 my-lg-0 navi--button">
              <Link to="/find-your-y" type="button" className="link btn w-100"> Find your Y</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
