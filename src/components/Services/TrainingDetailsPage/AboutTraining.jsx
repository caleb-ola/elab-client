import { PropTypes } from 'prop-types';
import React from 'react';

function AboutTraining({
  link, linkText, description, download, downloadText,
}) {
  return (
    <div className="about-training py-5">

      {/* REGISTER FORM STARTS */}
      <div className="modal fade benefits__form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-md-5">
              <h4 className="modal-title pb-3 pb-lg-4" id="exampleModalLabel">Register for the Training</h4>

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
                    Register
                    {' '}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* REGISTER FORM ENDS */}

      <div className="container py-lg-5">
        <div className="about-training__header text-center mx-auto pb-3 pb-lg-5">
          <h4 className="about-training--title ">
            About the Training
          </h4>
          <p className="pt-3 ">
            {description}
          </p>
        </div>
        {/* <h4 className="partner--title text-center ">
          Instructors
          {' '}
        </h4>
        <div className="row py-3 py-lg-4 about-training__instructors mx-auto">
          <div className="col-md-6">
            <div className="card text-center border-0 about-training__card">
              <img src="/images/services/instructor1.png " className="card-
              img-top img-fluid w-25 mx-auto" alt="..." />
              <div className="card-body">
                <h6 className="card-title m-0">Name of Instructor</h6>
                <p className="card-text">Designation</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card text-center border-0 about-training__card">
              <img src="/images/services/instructor2.png" className="card-img-top
              img-fluid w-25 mx-auto" alt="..." />
              <div className="card-body">
                <h6 className="card-title m-0">Name of Instructor</h6>
                <p className="card-text">Designation</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="text-center my-3">
          <Cta text="Register" toggle="modal" target="#exampleModal" />
        </div> */}
        <div className="my-3 hero__button text-center">
          { link && (
            <>
              <span className=" m-2">
                <a href={link} className="link fw-bold py-3 px-5 my-2 text-decoration-none" type="button" target="_blank" rel="noreferrer">
                  {linkText}
                </a>
              </span>
              <span className=" m-2">
                <a href={download} className="link fw-bold py-3 px-5 my-2 text-decoration-none" type="button" download>
                  {downloadText}
                </a>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
AboutTraining.propTypes = {
  description: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  download: PropTypes.string,
  downloadText: PropTypes.string,
};

AboutTraining.defaultProps = {
  description: PropTypes.string,
  link: '',
  linkText: '',
  download: '',
  downloadText: '',
};

export default AboutTraining;
