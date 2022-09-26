import React from 'react';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';
// import { Link } from 'react-router-dom';
// import Cta from './Cta';
import CircleBg from './circleBg';

function HeroTwo({
  image, title, title1, button,
  text, circleTitle, price,
  modal, date, link, linkText, button2,
}) {
  return (
    <section
      className="heroTwo position-relative"
      id="heroTwo"
      style={{
        backgroundImage: image,
        height: '100vh',
        backgroundSize: 'cover',
      }}
    >
      {/* REGISTER FORM STARTS */}
      <div className="modal fade benefits__form" id="trainingModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-md-5">
              <h4 className="modal-title pb-3 pb-lg-4" id="exampleModalLabel">Register for the Training</h4>

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
                  <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target={modal}>
                    Register
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

      {/* REGISTER FORM ENDS */}
      <div className="">
        <div className="container">
          <div className=" heroTwo__text text-start  ">
            <div className="heroTwo__container w-100 text-start">
              {price && (
              <h6>
                &#x20A6;
                {' '}
                {' '}
                {price.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </h6>
              ) }
              <h1 className="mt-2 mb-0 heroTwo--title">
                {title}
                {/* {circleTitle && <CircleBg text={circleTitle} />} */}
              </h1>
              <h1 className="mb-2 mt-0 heroTwo-header-title">
                {circleTitle && <CircleBg text={circleTitle} />}
                {title1}
              </h1>
              {text && (
              <p className="my-3 hero__paragragh text-start ">
                {text}
              </p>
              )}
              {date && (
              <p className="my-3 hero__paragragh text-start ">
                <Moment format="Do MMMM, YYYY">
                  {date}
                </Moment>
              </p>
              )}
              <div className="mt-4 hero__button">
                <div className="my-3 mx-1">
                  { button && (
                  <button className="link fw-bold py-3 px-5 text-decoration-none volunteer__hero--btn" type="button" data-bs-target={modal} data-bs-toggle="modal">
                    {button}
                  </button>
                  )}
                  <div className="my-2">
                    { button2 && <a href="https://paystack.com/pay/elab-donations" target="_blank" rel="noreferrer" className="link fw-bold py-3 px-5 text-decoration-none volunteer__hero--btn" type="button">{button2}</a>}
                  </div>
                </div>
              </div>
              <div className="my-5 hero__button">
                { link && (
                <a href={link} className="link fw-bold py-3 px-5 text-decoration-none" type="button" target="_blank" rel="noreferrer">
                  {linkText}
                </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

HeroTwo.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  title1: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  circleTitle: PropTypes.string,
  // overlay: PropTypes.string,
  price: PropTypes.string,
  modal: PropTypes.string,
  date: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  button2: PropTypes.string,
  // path2: PropTypes.string,
};

HeroTwo.defaultProps = {
  image: '',
  title: '',
  title1: '',
  button: '',
  text: '',
  circleTitle: '',
  // overlay: '',
  price: '',
  modal: '',
  date: '',
  link: '',
  linkText: '',
  button2: '',
  // path2: '',
};

export default HeroTwo;
