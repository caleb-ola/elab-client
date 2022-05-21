import React from 'react';

// REACT SLICK CSS
import Slider from 'react-slick';

// REACT SLCIK CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {
  return (
    <div className="testimonial py-3 px-3 py-lg-5  my-lg-5">
      {/* JOIN TRYBE FORM STARTS */}
      <div className="modal fade benefits__form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-md-5">
              <h4 className="modal-title" id="exampleModalLabel">Join Trybe by eLab</h4>
              <p>Supply the details below to join the community</p>

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
                    Join Tyrbe Community
                    {' '}
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
        <Slider
          {...{
            arrows: false,
            infinite: true,
            slidesToShow: 4,
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
        >

          <div className="py-3 px-3 py-lg-5 ">
            <div
              className="testimonial__Card p-3 p-lg-4 h-100"
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
          </div>
          {' '}
          <div className="py-3 px-3 py-lg-5 ">
            <div
              className="testimonial__Card p-3 p-lg-4 h-100"
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
          </div>
          {' '}
          <div className="py-3 px-3 py-lg-5 ">
            <div
              className="testimonial__Card p-3 p-lg-4 h-100"
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
          </div>
          {' '}
          <div className="py-3 px-3 py-lg-5 ">
            <div
              className="testimonial__Card p-3 p-lg-4 h-100"
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
          </div>
          {' '}
          <div className="py-3 px-3 py-lg-5 ">
            <div
              className="testimonial__Card p-3 p-lg-4 h-100"
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
          </div>
          {' '}
          <div className="py-3 px-3 py-lg-5 ">
            <div
              className="testimonial__Card p-3 p-lg-4 h-100"
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
          </div>

        </Slider>
        {' '}

      </div>
      <div className="benefits__cta py-3 py-lg-5 text-center">
        <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Join Tyrbe Community
          {' '}
        </button>
        {' '}

      </div>
    </div>
  );
}

export default Testimonial;
