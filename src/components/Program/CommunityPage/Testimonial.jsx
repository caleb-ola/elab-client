import React from 'react';

// REACT SLICK CSS
// import Slider from 'react-slick';

// REACT SLCIK CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {
  return (
    <div className="testimonial py-3 px-3 py-lg-5  my-lg-5">
      {/* JOIN TRYBE FORM STARTS */}
      <div className="modal fade benefits__form" id="trybeModal" tabIndex="-1" aria-labelledby="trybeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              {/* <button type="button" className="btn-close shadow-none
              benefits__close" data-bs-dismiss="modal" aria-label="Close">
                <i className="fa-solid fa-xmark-large" />
                {' '}

              </button> */}
              <i className="fa-solid fa-circle-xmark fa-2x btn-close shadow-none benefits__close" type="button" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-md-5 benefits__content pt-0 pb-4">
              <h4 className="modal-title" id="exampleModalLabel">Join Trybe by eLab</h4>
              <p>Supply the details below to join the community</p>

              <form action="" className="benefits__form">
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
                <div className="py-3 py-lg-5 px-0">
                  <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#trybeModal">
                    Join Trybe Community
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* JOIN TRYBE FORM ENDS */}

      <div className="testimonial__header text-center">
        <h4 className="testimonial__header--title ">
          Don’t take our words for it
        </h4>
        {' '}
      </div>
      <div className="testimonial__carousel py-3">
        {/* <Slider
          {...{
            // height: '100%',
            arrows: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 3000,
            cssEase: 'linear',
            responsive: [

              {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                //   infinite: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  // initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          }}
        > */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
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
                  ‘Trybe by eLab Community is a community I am proud to be a part of.
                  I have benefitted a lot from this community, this includes connection with
                  resourceful minds, several employment opportunities like the Grade-plus Africa
                  (A subsidiary of Ennovate Lab) internship application. I remember I also learnt
                  that, ‘a particular sea has a pink color’ and what really is of utmost delight
                  to me is the community town hall meeting. It&apos;s so unique,
                  thought-provoking and eye-opening.’

                </p>
              </div>
              <div className="row align-items-center card-footer testimonial__card--footer p-0 ">
                <div className="col-2">
                  <img src="/images/program/round.png" alt="..." className="img-fluid" />
                </div>
                <div className="col-10">
                  <p className="fw-bold m-0">Glo-Mary</p>
                  {' '}
                </div>
              </div>
            </div>
          </div>
          {' '}
          <div className=" col-12 col-md-6 col-xl-4 py-3 px-3 py-lg-5 ">
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
          </div>
        </div>
        {' '}

        {' '}
        {/* <div className="py-3 px-3 py-lg-5 ">
            <div
              className="testimonial__Card p-3 p-lg-4 h-100 border-0"
              style={{
                boxShadow: '0px 2px 12px rgba(51, 51, 51, 0.1)',
                borderRadius: '5px',
              }}
            >
              <p>
                Nisl amet, tincidunt lacus, egestas sed. Sed donec viverra odio massa
                sed a, id fames. Sollicitudin ac condimentum pellentesque duis
                feugiat. Pellentesque.
              </p>
              <div className="row align-items-center">
                <div className="col-2">
                  <img src="/images/program/round.png" alt="..." className="img-fluid" />
                </div>
                <div className="col-10">
                  <p className="fw-bold m-0">Name of Tryber</p>
                  {' '}
                </div>
              </div>
            </div>
          </div> */}

        {/* </Slider> */}
        {' '}

      </div>
      <div className="benefits__cta py-3 py-lg-4 text-center">
        <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#trybeModal">
          Join Trybe Community
          {' '}
        </button>
        {' '}

      </div>
    </div>
  );
}

export default Testimonial;
