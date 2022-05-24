import React from 'react';

function ContactForm() {
  return (
    <div className="contact py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-2">
            <form action="" className="benefits__form px-2">
              <div className="row py-2">
                <label className="p-0" htmlFor="name">
                  Full Name
                </label>
                <input type="text" className="name p-3 my-2 contact__form--input " id="name" />
              </div>
              <div className="row py-2">
                <label className="p-0" htmlFor="email">
                  Email Address
                </label>
                <input type="email" className="email p-3 my-2 contact__form--input " id="email" />
              </div>
              <div className="row py-2">
                <label className="p-0" htmlFor="email">
                  Message
                </label>
                <textarea name="" className="contact__form--input my-2 p-3" id="" cols="30" rows="10" />
                {' '}
                {' '}
              </div>
              <div className="py-3 py-lg-5 px-0 ">
                <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Send Message
                  {' '}
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6 contact__details my-2">
            <p className="fw-bold m-0 contact__details--header">Address</p>
            <p>50, Ogbomoso-Ilorin Rd, General Area, Ogbomoso, Oyo-State, Nigeria.</p>
            <p className="fw-bold m-0 contact__details--header">Email Address</p>
            <p>hello@ennovatelab.com</p>
            <p className="fw-bold m-0 contact__details--header">Phone Number</p>
            <p>+234 905 642 2768</p>
            <ul className="p-0 w-100 ml-0  text-center text-lg-start my-2 my-lg-3">
              <span className="fa-stack fa-1x custom">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-twitter fa-stack-1x fa-inverse" />
              </span>
              {' '}
              <span className="fa-stack fa-1x custom ms-3">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
              </span>
              {' '}
              <span className="fa-stack fa-1x custom ms-3">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
              </span>
              {' '}
              <span className="fa-stack fa-1x custom ms-3">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-instagram fa-stack-1x fa-inverse" />
              </span>
              {' '}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
