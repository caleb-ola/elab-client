import React from 'react';
import { Link } from 'react-router-dom';

function SignupCard() {
  return (
    <div className="signup py-5">
      <div className="signup__card p-3 p-lg-5 mx-auto mb-lg-5">
        <div className="py-2 px-lg-5">
          <label className="p-0" htmlFor="name">
            Full Name
          </label>
          {' '}
          <input type="text" className="name p-3 my-2 signup__card--input " id="name" required />
        </div>
        <div className="py-2 px-lg-5">
          <label className="p-0" htmlFor="email">
            Email Address
          </label>
          <input type="text" className="name p-3 my-2 signup__card--input " id="name" required />
        </div>
        <div className="py-2 px-lg-5">
          <label className="p-0" htmlFor="email">
            Password
          </label>
          <input type="password" className="name p-3 my-2 signup__card--input " id="name" required />
        </div>
        <div className="py-2 px-lg-5">
          <label className="p-0" htmlFor="email">
            Confirm Password
          </label>
          <input type="confirm-password" className="name p-3 my-2 signup__card--input " id="name" required />
        </div>
        <div className="py-2 px-lg-5">
          Already have an account?
          {' '}
          {' '}
          <span>
            <Link to="/auth/login" className="signup__Card--link text-decoration-underline fw-bold"> Login</Link>
          </span>
        </div>
        <div className="py-3 py-lg-4 px-0 mx-0 px-lg-5">
          <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Create your Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupCard;
