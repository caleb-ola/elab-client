import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';

function PaddedCard({
  title, image, button, name, date, path, price, brochure,
}) {
  return (
    path
      ? (
        <a href={path} className="text-decoration-none paddedcard__link">
          <div className="paddedcard p-4 px-lg-5 py-lg-4 pb-lg-4 pb-2 h-100">
            <h6 className="paddedcard__title fw-bold pb-3">
              {title}
            </h6>
            <div
              className="div"
              style={{
                background: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '320px',
                borderRadius: '10px',
              }}
            />
            {button ? (
              <div className="mt-4">
                <Link to="/" className="link py-1 px-2 text-decoration-none fw-bold">
                  {button}
                </Link>
              </div>

            )
              : (
                <div className="row mt-4">
                  <div className="col-md-6 text-center text-md-start">
                    {' '}
                    <i className="fa-solid fa-user blog--icon pe-2" />
                    {name}
                  </div>
                  <div className="col-md-6 text-center text-md-end">
                    {' '}
                    <i className="fa-solid fa-calendar blog--icon pe-2" />
                    <Moment format="Do MMMM, YYYY">
                      {date}
                    </Moment>
                  </div>
                </div>
              )}
          </div>
        </a>
      )
      : (
        <div className="paddedcard p-4 px-lg-5 py-lg-5 pb-lg-4 pb-2  h-100">
          <h6 className="paddedcard__title fw-bold pb-3">
            {title}
          </h6>

          <div
            className="div"
            style={{
              background: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '320px',
              borderRadius: '10px',
            }}
          />
          {button ? (
            <div className="row my-4 align-items-center">
              <div className="col-7">
                <a type="button" href={brochure} className="link py-1 px-3 text-decoration-none fw-bold" download>
                  {button}
                </a>
              </div>
              <div className="col-5 text-end">
                {price !== 0 && price ? (
                  <>
                    {/* <span className="fw-bold text-start pe-2">{discount}</span> */}
                    <span className="text-end ps-2 m-0 fw-bold">
                      &#x20A6;
                      {price}
                    </span>
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
  title: PropTypes.string,
  image: PropTypes.string,
  button: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  // discount: PropTypes.string,
  price: PropTypes.number,
  brochure: PropTypes.string,
};

PaddedCard.defaultProps = {
  title: '',
  image: '',
  button: '',
  name: '',
  date: '',
  path: '',
  // discount: '',
  price: '',
  brochure: '',
};
export default PaddedCard;
