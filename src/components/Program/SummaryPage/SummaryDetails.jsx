import React from 'react';

function SummaryDetails() {
  return (
    <div className="summary py-5 my-5">
      <div className="container py-lg-5">
        <h4 className="">Package Summary</h4>
        <div className="summary__card my-5 p-5">
          <h5 className="mb-3">Private Team Workspace </h5>
          <h6 className="mb-3">NGN 45,000</h6>
          <p className="">Duration: Monthly</p>
          <p className="">Date: 26th Oct; - 25th Nov; 2022</p>
          <p className="">Number of person: 2</p>
          <p className="">Internet: No</p>
          <p className="">Office address usage: Yes</p>
        </div>
        <div className="my-3">
          <button type="submit" className="link px-5 py-3 fw-bold">Make payment </button>
        </div>
      </div>
    </div>
  );
}

export default SummaryDetails;
