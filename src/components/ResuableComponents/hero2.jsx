import React from 'react';
import { checkPropTypes } from 'prop-types';
import Cta from './Cta';
import CircleBg from './circleBg';

function HeroTwo({
  image, title, title1, button, text, circleTitle, overlay, price,
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
      <div className="modal fade benefits__form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                  <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Register

                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

      {/* REGISTER FORM ENDS */}

      <div className={overlay}>
        <div className="container">
          <div className=" heroTwo__text text-start  ">
            <div className="heroTwo__container w-100 text-start">
              <h6>{price}</h6>
              <h1 className="mt-2 mb-0 heroTwo--title">
                {title}
                {/* {circleTitle && <CircleBg text={circleTitle} />} */}
              </h1>
              <h1 className="mb-2 my-1 heroTwo-header-title">
                {circleTitle && <CircleBg text={circleTitle} />}
                {title1}
              </h1>
              {text && (
              <p className="my-3 my-lg-4 my-lg-5 hero__paragragh text-start ">
                {text}
              </p>
              )}
              <div className="my-5 pt-5 hero__button">
                { button && <Cta text={button} toggle="modal" target="#exampleModal" />}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

HeroTwo.propTypes = {
  image: checkPropTypes.string,
  title: checkPropTypes.string,
  title1: checkPropTypes.string,
  button: checkPropTypes.string,
  text: checkPropTypes.string,
  circleTitle: checkPropTypes.string,
  overlay: checkPropTypes.string,
  price: checkPropTypes.string,
};

HeroTwo.defaultProps = {
  image: '',
  title: '',
  title1: '',
  button: '',
  text: '',
  circleTitle: '',
  overlay: '',
  price: '',

};

export default HeroTwo;
