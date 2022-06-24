import React from 'react';
import { Link } from 'react-router-dom';

function LoginCard() {
  return (
    <div className="signup py-5">
      <div className="signup__card p-3 p-lg-5 mx-auto mb-lg-5">
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
          <span>
            <Link to="/auth/forgot-password" className="signup__Card--link text-decoration-underline fw-bold">Forget Password</Link>
          </span>
        </div>
        <div className="py-3 py-lg-4 px-0 mx-0 px-lg-5">
          <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Login
          </button>
        </div>
        <div className="py-2 px-lg-5">
          Don&apos;t have an account?
          {' '}
          {' '}
          <span>
            <Link to="/auth/signup" className="signup__Card--link text-decoration-underline fw-bold">Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
