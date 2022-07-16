import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function ResendVerifyCard() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/resend-verification-email`, {
      email,
    }).then(
      (response) => {
        // console.log(response);
        setLoading(false);
        if (response) {
          toast.success(
            response?.data?.msg,
            {
              position: 'top-right',
              autoClose: 15000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              // progress: undefined,
            },
          );
        }
      },
      (error) => {
        setLoading(false);
        if (error.response) {
          error.response.data.errors.map((err) => toast.error(`${err.message}`, {
            position: 'top-right',
            autoClose: 15000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // progress: undefined,
          }));
        } else {
          toast.error('Ops, something went wrong, please try again', {
            position: 'top-right',
            autoClose: 15000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            // progress: undefined,
          });
        }
      },
    );
  };

  return (
    <div className="signup pb-5">
      <ToastContainer />
      <div className="signup__card p-3 p-lg-5 mx-auto mb-lg-5">
        <form onSubmit={Submit}>
          <div className="py-2 px-lg-5">
            <label className="p-0" htmlFor="email">
              Email Address
            </label>
            <input type="email" className="name p-3 my-2 signup__card--input " id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="py-3 py-lg-4 px-0 mx-0 px-lg-5">
            {loading ? (
              <button type="button" className="link btn fw-bold py-3 px-5 me-0 signup__card--button w-100" disabled>
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </button>
            )
              : (
                <button type="submit" className="link btn fw-bold py-3 px-5 me-0 signup__card--button w-100">
                  Resend
                </button>
              )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResendVerifyCard;
