import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className="error py-5">
      <div className="container py-5 text-center">
        <div className="error__content">
          <img src="/images/reusable/error.png" alt="" className="img-fluid" />
          <p className="py-3">You did not break the internet, but we cannot find what you are looking for.</p>
          <div className="py-lg-2">
            <Link to="/" className="link text-decoration-none fw-bold py-2 py-lg-3 px-4 px-lg-5 ">
              Go back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
