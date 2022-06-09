import React from 'react';

function AddTrainingsForm() {
  return (
    <div className="content px-4">
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Add a Training</h4>
        </div>
        <div className="col-md-6 p-0 text-center text-md-end">
          <span
            className="content__back dashnav__logout "
            aria-hidden="true"
            onClick={() => history.back()}
          >
            <i className="fa-solid fa-arrow-left pe-2" />
            <span className="py-2 px-1 text-decoration-none fw-bold">
              Back
            </span>
          </span>
        </div>
      </div>
      <div className="content__card w-100 p-5">
        <form className="content__form mx-5">
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="name">
              Training Title
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="name" required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="email">
              Training Description
            </label>
            <textarea name="" className="content__form--input my-2 p-3" id="" cols="30" rows="10" required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="email">
              Training Link
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="name" required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="email">
              Training Image
            </label>
            <input type="file" className="name p-3 my-2 content__form--input " id="name" required />
          </div>
          <div className="py-3 py-lg-4 px-0 mx-0 ">
            <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Save Training
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTrainingsForm;
