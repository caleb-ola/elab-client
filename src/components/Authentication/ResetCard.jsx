import React, { useState } from 'react';

function ResetCard() {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const Submit = (e) => {
    e.preventDefault();
    // if (password === confirmPassword) {

    // }
  };

  return (
    <div className="signup py-5">
      <div className="signup__card p-3 p-lg-5 mx-auto mb-lg-5">
        <form onSubmit={Submit}>
          <div className="py-2 px-lg-5">
            <label className="p-0" htmlFor="email">
              New Password
            </label>
            <input type="password" className="name p-3 my-2 signup__card--input " id="name" value={password} onChange={(e) => { setPassword(e.target.value); }} required />
          </div>
          <div className="py-2 px-lg-5">
            <label className="p-0" htmlFor="email">
              Confirm Password
            </label>
            <input type="password" className="name p-3 my-2 signup__card--input " id="name" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); }} required />
          </div>
          <div className="py-3 py-lg-4 px-0 mx-0 px-lg-5">
            <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetCard;
