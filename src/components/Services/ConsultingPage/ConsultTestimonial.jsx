import React from 'react';
import { Link } from 'react-router-dom';

function ConsultTestimonial() {
  return (
    <div className="container-fluid py-lg-5  mb-lg-5">
      <div className="testimonial__header text-center">
        <h4 className="testimonial__header--title ">
          Don’t take our words for it
        </h4>
        {' '}
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        <div className="col-12 col-md-6 col-xl-4 py-3 px-3 py-lg-5 ">
          <div
            className="card testimonial__Card p-3 p-lg-5 border-0 h-100"
            style={{
              boxShadow: '0px 2px 12px rgba(51, 51, 51, 0.1)',
              borderRadius: '5px',
              // height: '550px',
            }}
          >
            <div className="card-body p-0">
              <p>
                Ennovate Lab testimonial on Epe Impact Project 2021.
                Just like a friend, who journeys with you from one phase of life to
                another, that was
                how Ennovate Lab bonded with us at Threefold Social Impact Foundation,
                from the project
                initiating phase to the execution phase.
                We walked the street of Epe together from one school to another. it‘s
                a wonderful time
                of professionalism and a good gesture of heart that produces the excellent and
                beautiful outcome of Epe Impact Product.
                Thank you, Ennovate Lab team.
              </p>
            </div>
            <div className="row align-items-center card-footer testimonial__card--footer p-0 ">
              <div className="col-2">
                <img src="/images/program/olufadejimi.jpg" alt="..." className="img-fluid rounded-circle" />
              </div>
              <div className="col-10 p-0">
                <p className="fw-bold m-0">
                  Olufadejimi
                </p>
                <p className="m-0 lh-sm">
                  <small>
                    Project Coordinator- Threefold Social Impact Foundation.
                  </small>
                </p>
                {' '}
              </div>
            </div>
          </div>
        </div>
        {' '}
        {/* <div className=" col-12 col-md-6 col-xl-4 py-3 px-3 py-lg-5 ">
          <div
            className="card testimonial__Card p-3 p-lg-5 border-0 h-100"
            style={{
              boxShadow: '0px 2px 12px rgba(51, 51, 51, 0.1)',
              borderRadius: '5px',
              // height: '550px',
            }}
          >
            <div className="card-body p-0">
              <p>
                One of the best decisions I&apos;ve made in my undergraduate years is joining
                the Trybe Community by Ennovate Lab. With life transforming sessions, sharing
                of opportunities(both global and local), and interacting with great and like
                minds, this is one of the bestcommunitiesy you can find around.
              </p>
              <p>
                My testimony has been of tremendous growth and exploits.
                Thank you Trybe Community by Ennovate Lab.

              </p>
            </div>
            <div className="row align-items-center card-footer testimonial__card--footer p-0 ">
              <div className="col-2">
                <img src="/images/program/round.png" alt="..." className="img-fluid" />
              </div>
              <div className="col-10">
                <p className="fw-bold m-0">Peter Abegunde “Cephas”</p>
                {' '}
              </div>
            </div>
          </div>
        </div>
        {' '}
        <div className="col-12 col-md-6 col-xl-4 py-3 px-3 py-lg-5 ">
          <div
            className="card testimonial__Card p-3 p-lg-5 border-0 h-100"
            style={{
              boxShadow: '0px 2px 12px rgba(51, 51, 51, 0.1)',
              borderRadius: '5px',
              // height: '550px',
            }}
          >
            <div className="card-body p-0">
              <p>
                The most fascinating asset Trybe by eLab has earned me is ACCESS.
                Access to influential and notable entrepreneurs who have built a
                sustainable brand or business. I have been exposed to game-changing
                and strategic information which I have tested and proven, and
                these have had multiplying effects on my business.

              </p>

            </div>
            <div className="row align-items-center card-footer testimonial__card--footer p-0 ">
              <div className="col-2">
                <img src="/images/program/round.png" alt="..." className="img-fluid" />
              </div>
              <div className="col-10">
                <p className="fw-bold m-0">EyinjuOluwa</p>
                {' '}
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="benefits__cta py-3 py-lg-4 text-center">
        <Link to="/services/consultation/book-a-session" type="button" className=" link btn fw-bold py-3 px-5 me-0">
          Learn more
          {' '}
        </Link>
        {' '}
      </div>
    </div>
  );
}

export default ConsultTestimonial;
