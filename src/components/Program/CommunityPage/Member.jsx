import React from 'react';

function Member() {
  return (
    <div className="member ">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="container ps-lg-5 ms-lg-5 pe-lg-5">
              <h4>
                Become a part of an exclusive community for entrepreneurs and tech-enthusiasts.
              </h4>
              <div className="py-3 pt-lg-4 pb-lg-5 px-0">
                <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#trybeModal">
                  Be a Member, Today!
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 h-100 p-0"
          >
            <img src="/images/program/bg.png" alt="" className="img-fluid" />
            {' '}

          </div>
        </div>
      </div>

    </div>
  );
}

export default Member;
