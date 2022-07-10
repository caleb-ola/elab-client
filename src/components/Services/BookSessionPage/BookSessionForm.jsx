import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function BookSessionForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [company, setCompany] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [details, setDetails] = useState('');

  // LOADING STATE
  const [loading, setLoading] = useState(false);

  // console.log({
  //   name, email, number, company, date, time, location, type, details,
  // });

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('https://elab-api.herokuapp.com/api/v1/consultations', {
      name, email, number, company, date, time, location, type, details,
    }).then((response) => {
      // console.log(response);
      setLoading(false);
      toast.error(`${response.data.message}`, {
        position: 'top-right',
        autoClose: 15000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, (error) => {
      // console.log(error);
      if (error.response) {
        error.response.data.errors.map((err) => toast.error(`${err.message}`, {
          position: 'top-right',
          autoClose: 15000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }));
      } else {
        toast.error('Ops, something went wrong, please try again', {
          position: 'top-right',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };
  return (
    <div className="booksession pb-5">
      <ToastContainer />
      <div className="container pb-lg-5">
        {/* FORM STARTS */}
        <form action="" className=" booksession__form mx-auto px-2" onSubmit={Submit}>
          <div className="row py-2 px-2">
            <label className="p-0" htmlFor="name">
              Full Name
            </label>
            <input type="text" className="name p-3 my-2 booksession__form--input w-100 " id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="row py-2 px-2">
            <label className="p-0" htmlFor="email">
              Email Address
            </label>
            <input type="email" className="email p-3 my-2 booksession__form--input w-100 " id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="row py-2">
            <div className="col-lg-6">
              <label className="p-0" htmlFor="number">
                Phone Number
              </label>
              {' '}
              <br />
              <input type="number" className=" p-3 my-2 booksession__form--input w-100 " id="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className="col-lg-6">
              <label className="p-0" htmlFor="company">
                Company
              </label>
              <br />
              <input type="text" className="p-3 my-2 booksession__form--input w-100 " id="text" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-6">
              <label className="p-0" htmlFor="date">
                Available Date
              </label>
              <br />
              <input type="date" className=" p-3 my-2 booksession__form--input w-100 " id="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="col-lg-6">
              <label className="p-0" htmlFor="time">
                Available Time
              </label>
              <br />
              <input type="time" className="p-3 my-2 booksession__form--input w-100 " id="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-lg-6">
              <label className="p-0" htmlFor="location">
                Location
              </label>
              <br />
              <input type="text" className="p-3 my-2 booksession__form--input w-100" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="col-lg-6">
              <div className="input-group">
                <label className="p-0" htmlFor="volunteer__project">
                  Type of Consultation
                </label>
                <br />
                <select id="volunteer__project" name="volunteer__project" className="form-select shadow-none booksession__form--input p-3 my-2 w-100" value={type} onChange={(e) => setType(e.target.value)}>
                  <option defaultValue disabled>Choose...</option>
                  <option value="Business">Business</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Investment">Investment</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row py-2 px-2">
            <label className="p-0" htmlFor="volunteer__project">
              Consultation Needs
            </label>
            <br />
            <textarea name="" className="booksession__form--input my-2" id="" cols="30" rows="10" value={details} onChange={(e) => setDetails(e.target.value)} />
          </div>

          {/* <div className="py-3 py-lg-5 px-0">
            <button type="button" className=" link btn fw-bold py-3 px-5 me-0">
              Schedule a Call
              {' '}
            </button>
          </div> */}
          <div className="row py-3 py-lg-4 ">
            {
              loading
                ? (
                  <button type="button" className="link btn fw-bold py-3 px-5 me-0 content__form--button" disabled>
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                )
                : (
                  <button type="submit" className=" link btn fw-bold py-3 px-5 me-0 content__form--button ">
                    Schedule a Call
                  </button>

                )
          }
          </div>
        </form>
        {/* FORM ENDS */}

      </div>
    </div>
  );
}

export default BookSessionForm;
