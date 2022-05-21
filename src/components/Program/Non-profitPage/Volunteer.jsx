import React from 'react';

function Volunteer() {
  return (
    <>
      {/* JOIN TRYBE FORM STARTS */}
      <div className="modal fade benefits__form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-md-5">
              <h4 className="modal-title lh-sm" id="exampleModalLabel">
                Join our
                <br />
                volunteering team
              </h4>
              <p>Supply the details below to join the team</p>

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
                <div className="row py-2">
                  <label className="p-0" htmlFor="volunteer__project">
                    Select Name of project
                  </label>
                  <select id="volunteer__project" name="volunteer__project" className="p-3 my-2 benefits__form--input">
                    <option value="">CTCTW</option>
                    <option value="">Cogneasy</option>
                    <option value="">Trifold</option>
                    <option value="">Gradeplus</option>
                  </select>
                </div>
                <div className="row py-2">
                  <div className="form-check py-1">
                    <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Design
                    </label>
                  </div>
                  <div className="form-check py-1">
                    <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Software Development
                    </label>
                  </div>
                  <div className="form-check py-1">
                    <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Content Writing
                    </label>
                  </div>
                  <div className="form-check py-1">
                    <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Project Management
                    </label>
                  </div>
                </div>

                <div className="py-3 py-lg-4 px-0">
                  <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Submit
                    {' '}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* JOIN TRYBE FORM ENDS */}
      <div className="volunteer text-center pb-5 pb-lg-5 mb-lg-5">
        <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Volunteer
          {' '}
        </button>
      </div>
    </>
  );
}

export default Volunteer;
