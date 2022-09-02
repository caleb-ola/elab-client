import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
// import Cta from '../../ResuableComponents/Cta';

function Benefits() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/subscribers/subscribe-to-trybe-community`, {
      name, email,
    }).then((response) => {
      // console.log(response);
      setLoading(false);
      setEmail('');
      setName('');
      if (response) {
        toast.success('You have successfully applied to join our community, We will be in touch.', {
          position: 'top-right',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }, (error) => {
      // console.log(error);
      setLoading(false);
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
    <div className="benefits py-5">
      {/* JOIN TRYBE FORM STARTS */}
      <div className="modal fade benefits__form" id="trybeModal" tabIndex="-1" aria-labelledby="trybeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <i className="fa-solid fa-circle-xmark fa-2x btn-close shadow-none benefits__close" type="button" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-md-5 benefits__content pt-0 pb-4">
              <h4 className="modal-title" id="exampleModalLabel">Join Trybe by eLab</h4>
              <p>Supply the details below to join the community</p>
              <form action="" className="benefits__form" onSubmit={Submit}>
                <div className="row py-2">
                  <label className="p-0 benefits__form--label" htmlFor="name">
                    Full Name
                  </label>
                  <input type="text" className="name p-3 my-2 benefits__form--input " id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="row py-2">
                  <label className="p-0 benefits__form--label" htmlFor="email">
                    Email Address
                  </label>
                  <input type="email" className="email p-3 my-2 benefits__form--input " id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="py-3 py-lg-4 ">
                  {
              loading
                ? (
                  <button type="button" className="link btn fw-bold py-3 px-5 me-0 benefits__form--button" disabled>
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                )
                : (
                  <button type="submit" className=" link btn fw-bold py-3 px-5 me-0 benefits__form--button">
                    Join Trybe Community
                  </button>
                )
                }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* JOIN TRYBE FORM ENDS */}

      <div className="container py-lg-5">
        <ToastContainer />
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
                <img src="/images/program/benefit1.png" className="card-img-top img-fluid vision__card--icon my-2  my-lg-3 " alt="..." />
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
                <img src="/images/program/benefit2.png" className="card-img-top img-fluid vision__card--icon my-2  my-lg-3 " alt="..." />
                <div className="card-body px-3 px-md-5">
                  <h6 className="card-title benefits__all--title">Career sensitization summits</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 h-100 my-lg-3">
              <div className="card vision__card h-100">
                <img src="/images/program/benefit3.png" className="card-img-top img-fluid vision__card--icon my-2  my-lg-3 " alt="..." />
                <div className="card-body px-3 px-md-5">
                  <h6 className="card-title benefits__all--title">Mentorship opportunities</h6>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="benefits__cta py-4 text-center">
          <button type="button" className=" link btn fw-bold py-3 px-5" data-bs-toggle="modal" data-bs-target="#trybeModal">
            Join Trybe
          </button>
          {/* /<Cta text="Join Trybe" toggle="modal" target="#trybe-form" /> */}
        </div>
      </div>

    </div>
  );
}

export default Benefits;
