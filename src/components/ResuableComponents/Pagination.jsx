import React from 'react';

function Pagination() {
  return (
    <div className="pagination py-5 mx-auto">
      <div className="container py-lg-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start my-2 my-md-0">
            <p className=" m-0">
              Showing 1 to 10 of 100
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end my-2 my-md-0">
            <button type="button" className=" link btn fw-bold py-3 px-5 me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Prev
              {' '}
            </button>
            <button type="button" className=" link btn fw-bold py-3 px-5 ms-2 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Next
              {' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
