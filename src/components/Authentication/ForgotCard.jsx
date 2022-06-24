import React from 'react';

function ForgotCard() {
  return (
    <div className="signup py-5">
      <div className="signup__card p-3 p-lg-5 mx-auto mb-lg-5">
        <div className="py-2 px-lg-5">
          <label className="p-0" htmlFor="email">
            Email Address
          </label>
          <input type="text" className="name p-3 my-2 signup__card--input " id="name" required />
        </div>
        <div className="py-3 py-lg-4 px-0 mx-0 px-lg-5">
          <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Send link
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotCard;
