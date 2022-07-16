import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function VerifyCard() {
  const [body, setBody] = useState();
  const params = useParams();
  useEffect(() => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/verification-email`, {
      token: params.token,
    }).then(
      (response) => {
        // console.log(response);
        if (response) {
          setBody(
            <>
              <div className="check-icon mt-1 my-3">
                <i className="fa-solid fa-thumbs-up signup__verify--success fa-6x fa-fw" />
              </div>
              <p className="">
                You are good to go, your email verification was successful.
              </p>
              <Link
                to="/auth/login"
                className="link fw-bold py-3 px-5 me-0 signup__card--button text-decoration-none"
                aria-disabled="true"
                type="submit"
              >
                Proceed to Sign in
              </Link>
            </>,
          );
        }
      },
      (error) => {
        if (error.response) {
          error.response.data.errors.map((err) => setBody(
            <>
              <div className="check-icon mt-1 my-3">
                <i className="fa-solid fa-circle-exclamation signup__verify--failed fa-6x fa-fw" />
                {' '}
              </div>
              <p className="">{err.message}</p>
              <Link
                to="/auth/resend-verification-email"
                className="link fw-bold py-3 px-5 me-0 signup__card--button text-decoration-none"
                aria-disabled="true"
                type="submit"
              >
                Resend Email Verification
              </Link>
            </>,
          ));
        } else {
          setBody(
            <>
              <div className="check-icon mt-1 my-3">
                <i className="fa-solid fa-circle-exclamation signup__verify--failed fa-6x fa-fw" />
                {' '}
              </div>
              <p className="">
                something went wrong with your email verification, please
                try again.
              </p>
              <Link
                to="/auth/resend-verification-email"
                className="link fw-bold py-3 px-5 me-0 signup__card--button text-decoration-none"
                aria-disabled="true"
                type="submit"
              >
                Resend Email Verification
              </Link>
            </>,
          );
        }
      },
    );
  }, []);

  return (
    <div className="signup pb-5">
      <ToastContainer />
      <div className="signup__card p-3 p-lg-5 mx-auto mb-lg-5 text-center">
        {body}
      </div>
    </div>
  );
}

export default VerifyCard;
