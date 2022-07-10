import axios from 'axios';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(
      'https://elab-api.herokuapp.com/api/v1/auth/login',
      { email, password },
    ).then((response) => {
      // console.log(response);
      setLoading(false);
      const { role } = response.data.data.user;
      const { token } = response.data;

      if (role === 'admin') {
        // elAdmT is used to denote "eLab Admin Token"
        localStorage.setItem('elAdmT', token);
        if (location.state?.from?.pathname?.includes('dashboard/user')) {
          navigate('/dashboard/admin');
        } else if (location.state?.from) {
          navigate(location.state.from);
        } else {
          navigate('/dashboard/admin');
        }
      } else if (role === 'user') {
        localStorage.setItem('elUsrT', token);
        if (location.state?.from?.pathname?.includes('dashboard/admin')) {
          navigate('/dashboard/user');
        } else if (location.state?.from) {
          navigate(location.state.from);
        } else {
          navigate('/dashboard/user');
        }
      }
    }, (error) => {
      setLoading(false);
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

  return (
    <div className="signup py-5">
      <ToastContainer />
      <div className="signup__card p-3 p-lg-5 mx-auto mb-lg-5">
        <form onSubmit={Submit}>
          <div className="py-2 px-lg-5">
            <label className="p-0" htmlFor="email">
              Email Address
            </label>
            <input type="email" className="name p-3 my-2 signup__card--input " id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="py-2 px-lg-5">
            <label className="p-0" htmlFor="password">
              Password
            </label>
            <input type="password" className="name p-3 my-2 signup__card--input " id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="py-2 px-lg-5">
            <span>
              <Link to="/auth/forgot-password" className="signup__Card--link text-decoration-underline fw-bold">Forget Password</Link>
            </span>
          </div>
          <div className="py-3 py-lg-4 px-0 mx-0 px-lg-5">
            {loading ? (
              <button type="button" className="link btn fw-bold py-3 px-5 me-0 signup__card--button " disabled>
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </button>
            )
              : (
                <button type="submit" className="link btn fw-bold py-3 px-5 me-0 signup__card--button">
                  Login
                </button>
              )}
          </div>
          <div className="py-2 px-lg-5">
            Don&apos;t have an account?
            {' '}
            <span>
              <Link to="/auth/signup" className="signup__Card--link text-decoration-underline fw-bold">Signup</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginCard;
