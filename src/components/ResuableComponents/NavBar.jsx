import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function NavBar() {
  const [hamburger, setHamburger] = useState(false);
  const ToggleHamburger = () => {
    setHamburger(!hamburger);
  };
  const [authBtn, setAuthBtn] = useState();
  const navigate = useNavigate();

  const Logout = () => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/logout`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('elUsrT')}`,
      },
    }).then((response) => {
      if (response) {
        localStorage.removeItem('elUsrT');
        navigate('/auth/login');
      }
    }, (error) => {
      if (error.response) {
        error.response.data.errors.map((err) => toast.error(`${err.message}`, {
          position: 'top-right',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }));
      } else {
        toast.error('Ops, something went wrong, please try again', {
          position: 'top-right',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  useEffect(() => {
    if (localStorage.getItem('elUsrT')) {
      if (window.location.pathname.includes('/dashboard/user')) {
        setAuthBtn(
          <button type="button" className="link btn navi--button px-2 px-md-4 " onClick={Logout}>Logout</button>,
        );
      } else {
        setAuthBtn(
          <Link to="/dashboard/user" type="button" className="link btn navi--button px-2 px-md-4 ">Dashboard</Link>,
        );
      }
    } else {
      setAuthBtn(
        <Link to="/auth/login" type="button" className="link btn navi--button px-2 px-md-4 ">Login</Link>,
      );
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-0 pb-3 pt-2 pt-lg-0 pb-lg-0 py-xl-0 fixed-top  navi">
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
            <li className="nav-item py-0  mx-3 mx-lg-2 mx-xl-3">
              <NavLink className="nav-link   links  px-0 py-1 my-1 my-lg-0 py-lg-4" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li className="nav-item dropdown nav__drop py-0  mx-3 mx-lg-2 mx-xl-3">
              <button type="button" className={window.location.pathname.includes('/program') ? 'nav-link  links px-0 py-1 my-1 my-lg-0 py-lg-4 active' : 'nav-link  links px-0 py-1 my-1 my-lg-0 py-lg-4'} id="navbarDropdown2" data-bs-toggle="dropdown2" aria-expanded="false">
                Programs
              </button>
              <ul className="dropdown-menu navi__dropdown" aria-labelledby="navbarDropdown2">
                <div className="row p-3 ">
                  <div className="col-md-6">
                    <a href="/program/community" className="p-2 px-3 btn text-start  navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">Community</p>
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
                    <a href="/program/innovation-hub" className=" p-2 px-3 btn text-start navi__dropdown--option my-2 text-decoration-none w-100" role="button">
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
            <li className="nav-item dropdown nav__drop py-0 mx-3 mx-lg-2 mx-xl-3">
              <button type="button" className={window.location.pathname.includes('/services') ? 'nav-link  links px-0 py-1 my-1 my-lg-0 py-lg-4 active' : 'nav-link  links px-0 py-1 my-1 my-lg-0 py-lg-4'} id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </button>
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
            <li className="nav-item dropdown nav__drop py-0 mx-3 mx-lg-2 mx-xl-3">
              <button type="button" href="/" className={window.location.pathname.includes('/resources') && window.location.pathname.indexOf('user') === -1 ? 'nav-link links px-0 py-1 my-1 my-lg-0 py-lg-4 active' : 'nav-link  links px-0 py-1 my-1 my-lg-0 py-lg-4'} id="navbarDropdown2" data-bs-toggle="dropdown2" aria-expanded="false">
                Resources
              </button>
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
                    <a href="/resources/faq" className=" p-2 px-3 btn text-start navi__dropdown--option my-2 text-decoration-none w-100" role="button">
                      <p className="fw-bold m-0 navi__dropdown--subhead">FAQs</p>
                      <p className="navi__dropdown--subtext m-0">A short description stays here</p>
                    </a>
                  </div>
                </div>
                <div className="row" />
              </ul>
            </li>
            <li className="nav-item py-0 mx-3 mx-lg-2 mx-xl-3">
              <NavLink className="nav-link   links  px-0 py-2 py-lg-4 " to="/contact-us">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item py-0 mx-3 mx-lg-2 mx-xl-3">
              <NavLink className="nav-link   links  px-0 py-2 py-lg-4 " to="/find-your-y">
                Find your Y
              </NavLink>
            </li>
            <li className="navi--button mx-2 pe-3 pe-lg-0 me-lg-0 my-2 my-lg-0">
              {authBtn}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
