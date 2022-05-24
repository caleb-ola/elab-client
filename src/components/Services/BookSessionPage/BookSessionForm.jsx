import React from 'react';

function BookSessionForm() {
  return (
    <div className="booksession py-5">
      <div className="container py-lg-5">

        {/* FORM STARTS */}
        <form action="" className=" booksession__form mx-auto px-2">
          <div className="row py-2 px-2">
            <label className="p-0" htmlFor="name">
              Full Name
            </label>
            <input type="text" className="name p-3 my-2 booksession__form--input w-100 " id="name" />
          </div>
          <div className="row py-2 px-2">
            <label className="p-0" htmlFor="email">
              Email Address
            </label>
            <input type="email" className="email p-3 my-2 booksession__form--input w-100 " id="email" />
          </div>
          <div className="row py-2">
            <div className="col-lg-6">
              <label className="p-0" htmlFor="number">
                Phone Number
              </label>
              {' '}
              <br />
              <input type="number" className=" p-3 my-2 booksession__form--input w-100 " id="number" />
            </div>
            <div className="col-lg-6">
              <label className="p-0" htmlFor="company">
                Company
              </label>
              <br />
              <input type="text" className="p-3 my-2 booksession__form--input w-100 " id="text" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-6">
              <label className="p-0" htmlFor="date">
                Available Date
              </label>
              <br />
              <input type="date" className=" p-3 my-2 booksession__form--input w-100 " id="date" />
            </div>
            <div className="col-lg-6">
              <label className="p-0" htmlFor="time">
                Available Time
              </label>
              <br />
              <input type="time" className="p-3 my-2 booksession__form--input w-100 " id="time" />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-6">
              <label className="p-0" htmlFor="location">
                Location
              </label>
              <br />
              <input type="text" className="p-3 my-2 booksession__form--input w-100" id="location" />
            </div>
            <div className="col-lg-6">
              <label className="p-0" htmlFor="volunteer__project">
                Type of Consultation
              </label>
              <br />
              <select id="volunteer__project" name="volunteer__project" className="booksession__form--input p-3 my-2 w-100">
                <option value="">Innovation Challenge</option>
                <option value="">Trybe</option>
              </select>
            </div>
          </div>
          <div className="row py-2 px-2">
            <label className="p-0" htmlFor="volunteer__project">
              Consultation Needs
            </label>
            <br />
            <textarea name="" className="booksession__form--input my-2" id="" cols="30" rows="10" />
          </div>

          <div className="py-3 py-lg-5 px-0">
            <button type="button" className=" link btn fw-bold py-3 px-5 me-0">
              Schedule a Call
              {' '}
            </button>
          </div>
        </form>
        {/* FORM ENDS */}

      </div>
    </div>
  );
}

export default BookSessionForm;
