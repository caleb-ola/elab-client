import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DashboardNav() {
  const navigate = useNavigate();

  const Logout = async () => {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/logout`).then((response) => {
      // console.log(response);
      if (response) {
        localStorage.removeItem('elAdmT');
        navigate('/auth/login');
      }
    }, (error) => {
      // console.log(error);
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
  const handleKeyPress = (e) => {
    e.onKeyPress();
  };

  return (
    <div className="dashnav">
      <ToastContainer />
      <nav className="navbar navbar-expand-lg navbar-light py-0 pb-3 pt-2 pt-lg-0 pb-lg-0 py-xl-0 fixed-top dashnav__navi">
        <div className="container-fluid align-items-center dashnav__container">
          <a className="navbar-brand " href="/">
            <img src="/images/logo.png" alt="" className="img-fluid my-2" />
          </a>
          <button className="dashnav__logout fw-bold btn" type="button" tabIndex={0} onKeyPress={handleKeyPress} onClick={Logout}>
            <i className="fa-solid fa-right-from-bracket me-2 dashnav__logout--icon" />
            Log Out
          </button>
        </div>
      </nav>
    </div>
  );
}

export default DashboardNav;
