import React from 'react';
// import Cta from '../../ResuableComponents/Cta';

function Benefits() {
  return (
    <div className="benefits py-5">
      {/* JOIN TRYBE FORM STARTS */}
      <div className="modal fade benefits__form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-md-5">
              <h4 className="modal-title" id="exampleModalLabel">Join Trybe by eLab</h4>
              <p>Supply the details below to join the community</p>

              <form action="" className="benefits__form px-2">
                <div className="row py-2">
                  <label className="p-0" htmlFor="name">
                    Full Name
                  </label>
                  <input type="text" className="name p-3 my-2 benefits__form--input " id="name" />
                </div>
                <div className="row py-2">
                  <label className="p-0" htmlFor="email">
                    Email Address
                  </label>
                  <input type="email" className="email p-3 my-2 benefits__form--input " id="email" />
                </div>

                <div className="py-3 py-lg-5 px-0">
                  <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Join Tyrbe Community
                    {' '}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* JOIN TRYBE FORM ENDS */}

      <div className="container py-lg-5">
        <div className="benefits__header text-center mx-auto">
          <h4 className="benefits__header--title py-3">Benefits of Joining the Community</h4>
          <p className="benefits__header--text">
            As a Trybe member, your benefits are:
          </p>
        </div>
        <div className="benefits__all">
          <div className="row text-center my-2 my-lg-4">
            <div className="col-md-6 col-lg-4 h-100 my-lg-3">
              <div className="card vision__card h-100">
                <img src="/images/about/vision.png" className="card-img-top img-fluid vision__card--icon my-2  my-lg-3 " alt="..." />
                <div className="card-body px-3 px-md-5">
                  <h6 className="card-title benefits__all--title">
                    Free online
                    masterclasses
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 h-100 my-lg-3">
              <div className="card vision__card h-100">
                <img src="/images/about/vision.png" className="card-img-top img-fluid vision__card--icon my-2  my-lg-3 " alt="..." />
                <div className="card-body px-3 px-md-5">
                  <h6 className="card-title benefits__all--title">Career sensitization summits</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 h-100 my-lg-3">
              <div className="card vision__card h-100">
                <img src="/images/about/vision.png" className="card-img-top img-fluid vision__card--icon my-2  my-lg-3 " alt="..." />
                <div className="card-body px-3 px-md-5">
                  <h6 className="card-title benefits__all--title">Mentorship opportunities</h6>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="benefits__cta py-4 text-center">
          <button type="button" className=" link btn fw-bold py-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Join Tyrbe
          </button>
          {/* /<Cta text="Join Trybe" toggle="modal" target="#trybe-form" /> */}
        </div>
      </div>

    </div>
  );
}

export default Benefits;
