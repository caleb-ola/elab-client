import React from 'react';

function Details() {
  return (
    <div className="details">

      {/* JOIN TRYBE FORM STARTS */}
      <div className="modal fade benefits__form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <i className="fa-solid fa-circle-xmark fa-2x btn-close shadow-none benefits__close" type="button" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body benefits__content pt-0">
              <h4 className="modal-title " id="exampleModalLabel">Download Brochure</h4>
              <p className="">
                Become a part of an exclusive community for entrepreneurs
                and tech-enthusiasts.
              </p>

              <form action="" className="benefits__form ">
                <div className="row py-2">
                  <label className="p-0 benefits__form--label" htmlFor="name">
                    Full Name
                  </label>
                  <input type="text" className="name p-3 my-2 benefits__form--input " id="name" />
                </div>
                <div className="row py-2">
                  <label className="p-0 benefits__form--label" htmlFor="email">
                    Email Address
                  </label>
                  <input type="email" className="email p-3 my-2 benefits__form--input " id="email" />
                </div>

                <div className="py-3 py-lg-4 px-0">
                  <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Join Tyrbe Community
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* JOIN TRYBE FORM ENDS */}

      <div className="container">
        <div className=" details__body p-3 p-lg-5 my-3 my-lg-5 mx-auto h-100">
          {/* HEADER CARD STARTS */}
          <div className="row align-items-center mb-3 mb-lg-5 mt-5 ">
            <div className="col-md-2 my-2 text-start ps-lg-0">
              <img src="/images/program/gradeplus.png" alt="..." className="img-fluid w-75" />
            </div>
            <div className="col-md-9 my-2 pe-lg-5">
              <h6>GradePlus Africa</h6>
              <p className="m-0">An edtech product</p>
              <a href="/" className="text-decoration-none">
                <i className="fa-solid fa-link" />
                {' '}
                {' '}
                gradeplusafrica.com
              </a>
            </div>
          </div>
          {/* HEADER CARD ENDS */}

          <h6 className="">About the Startup</h6>
          <p>
            GradePlus Africa is an EdTech Startup that teaches students and entrepreneurs
            how to learn and make the right choice of relevant African university courses or
            career path that is a best fit. GradePlus Africa is presently undergoing incubation
            at Ennovate Lab, Ogbomoso.
          </p>

          <h6 className="">Goals</h6>
          <p>
            The overall goal is to see Africa’s human capital potential fully unlocked through
            improved academic performance and increased career satisfaction. GradePlus Africa is
            rebuilding a foundation for a better African future with a proposed reach of 400,000
            students and professionals, trained in Nigeria by 2025.
          </p>

          <h6 className=""> Investment Opportunity</h6>
          <p>
            Currently open for Investment. Reach out to us.
          </p>
          <div className="py-3 py-lg-5 px-0">
            <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Details;
