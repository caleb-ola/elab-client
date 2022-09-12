import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/users/send-us-a-message`, {
      name, email, message,
    }).then(
      (response) => {
        // console.log(response);
        setLoading(false);
        toast.success(
          response.data.data,
          {
            position: 'top-right',
            autoClose: 15000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );
        setName('');
        setEmail('');
        setMessage('');
      },
      (error) => {
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
      },
    );
  };
  return (
    <div className="contact pb-5">
      <ToastContainer />
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 my-2">
            <form action="" className="benefits__form px-2" onSubmit={Submit}>
              <div className="py-2">
                <label className="p-0 w-100" htmlFor="name">
                  Full Name
                </label>
                <input type="text" className="name p-3 my-2 contact__form--input " id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="py-2">
                <label className="p-0 w-100" htmlFor="email">
                  Email Address
                </label>
                <input type="email" className="email p-3 my-2 contact__form--input " id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="py-2">
                <label className="p-0 w-100" htmlFor="message">
                  Message
                </label>
                <textarea name="" className="contact__form--input my-2 p-3" id="message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} required />

              </div>
              <div className="py-3 py-lg-4 ">
                {
              loading
                ? (
                  <button type="button" className="link btn fw-bold py-3 px-5 me-0 contact__form--button" disabled>
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                )
                : (
                  <button type="submit" className=" link btn fw-bold py-3 px-5 me-0 contact__form--button ">
                    Send Message
                  </button>

                )
          }
              </div>
            </form>
          </div>
          <div className="col-lg-6 contact__details my-2 pt-2">
            <p className="fw-bold m-0 contact__details--header">Address</p>
            <p>50, Ogbomoso-Ilorin Rd, General Area, Ogbomoso, Oyo-State, Nigeria.</p>
            <p className="fw-bold m-0 contact__details--header">Email Address</p>
            <p>hello@ennovatelab.com</p>
            <p className="fw-bold m-0 contact__details--header">Phone Number</p>
            <p>
              +234 805 176 2471
            </p>
            <ul className="p-0 w-100 ml-0  text-start text-lg-start my-2 my-lg-3">
              <a href="https://web.facebook.com/Ennovatelab" target="_blank" rel="noreferrer">
                <span className="fa-stack fa-1x custom ">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                </span>
              </a>
              {' '}
              <a href="https://www.instagram.com/official_ennovatelab/" target="_blank" rel="noreferrer">
                <span className="fa-stack fa-1x custom ms-3">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-instagram fa-stack-1x fa-inverse" />
                </span>
              </a>
              {' '}
              <a href="https://www.linkedin.com/in/ennovatelabteam/" target="_blank" rel="noreferrer">
                <span className="fa-stack fa-1x custom ms-3">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
                </span>
              </a>
              {' '}
              <a href="https://twitter.com/ennovatelab" target="_blank" rel="noreferrer">
                <span className="fa-stack fa-1x custom ms-3">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                </span>
              </a>
              {' '}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
