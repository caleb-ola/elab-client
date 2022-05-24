import React from 'react';
import { Link } from 'react-router-dom';
import { checkPropTypes } from 'prop-types';

function PaddedCard({
  title, image, button, name, date, path, discount, price,
}) {
  return (
    path
      ? (
        <Link to="/" className="text-decoration-none paddedcard__link">
          <div className="paddedcard p-4 px-lg-5 py-lg-5 h-100">
            <h6 className="paddedcard__title fw-bold pb-3">
              {title}
            </h6>
            <img src={image} alt="" className="img-fluid" />
            {button ? (
              <div className="mt-4">
                <Link to="/" className="link py-1 px-2 text-decoration-none fw-bold">
                  {button}
                </Link>
              </div>

            )
              : (
                <div className="row mt-4">
                  <div className="col-6 text-start">{name}</div>
                  <div className="col-6 text-end">{date}</div>
                </div>
              )}
          </div>
        </Link>
      )
      : (
        <div className="paddedcard p-4 px-lg-5 py-lg-5 h-100">
          <h6 className="paddedcard__title fw-bold pb-3">
            {title}
          </h6>

          <img src={image} alt="" className="img-fluid" />

          {button ? (
            <div className="row my-4">
              <div className="col-6">
                <Link to="/" className="link pt-1 px-3 text-decoration-none fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  {button}
                </Link>
              </div>
              <div className="col-6 text-end">
                {discount ? (
                  <>
                    <span className="fw-bold text-start pe-2">{discount}</span>
                    <span className="text-end ps-2 m-0">{price}</span>
                  </>
                )
                  : <span className="fw-bold text-start pe-2">Free</span>}
              </div>
            </div>

          )
            : (
              <div className="row mt-4">
                <div className="col-6 text-start">{name}</div>
                <div className="col-6 text-end">{date}</div>
              </div>
            )}
        </div>
      )
  );
}

PaddedCard.propTypes = {
  title: checkPropTypes.string,
  image: checkPropTypes.string,
  button: checkPropTypes.string,
  name: checkPropTypes.string,
  date: checkPropTypes.string,
  path: checkPropTypes.string,
  discount: checkPropTypes.string,
  price: checkPropTypes.string,
};

PaddedCard.defaultProps = {
  title: '',
  image: '',
  button: '',
  name: '',
  date: '',
  path: '',
  discount: '',
  price: '',
};
export default PaddedCard;
