import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotCard() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('https://elab-api.herokuapp.com/api/v1/auth/forgot-password', { email }).then(
      (response) => {
        // console.log(response);
        setLoading(false);
        toast.success(
          response?.data?.message,
          {
            position: 'top-right',
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );
      },
      (error) => {
        // console.log(error);
        setLoading(false);
        if (error.response) {
          error.response.data.errors.map((err) => toast.error(`${err.message}`, {
            position: 'top-right',
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }));
        } else {
          toast.error('Ops, something went wrong, please try again.', {
            position: 'top-right',
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      },
    );
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
            <input type="email" className="name p-3 my-2 signup__card--input" value={email} onChange={(e) => setEmail(e.target.value)} id="name" required />
          </div>
          <div className="py-3 py-lg-4 px-0 mx-0 px-lg-5">
            {
              loading
                ? (
                  <button type="button" className="link btn fw-bold py-3 px-5 me-0 signup__card--button " disabled>
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                )
                : (
                  <button type="submit" className="link btn fw-bold py-3 px-5 me-0 signup__card--button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Send link
                  </button>
                )
            }

          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotCard;
