import { PropTypes } from 'prop-types';
import React from 'react';
import Moment from 'react-moment';

function CoworkCard({
  title, text, button, image, path, people, startDate, expDate, amount, payment,
}) {
  return (
    <div className="card services__card border-0 h-100">
      {image
        && (
          <img src={image} className="card-img-top" alt="..." />
        )}
      <div className="card-body p-4">
        <h6 className="card-title fw-bold my-2">{title}</h6>
        {text
        && (
        <p className="services__card--text pt-1 pb-2 ">
          {text > 1 ? `${text} Team members` : `${text} Team member`}
        </p>
        )}
        {people
        && (
        <p className="services__card--text pt-1 mb-1">
          <span className="fw-bold"> No. of people:</span>
          {' '}
          {people > 1 ? `${people} People` : `${people} Person`}
        </p>
        )}
        {startDate
        && (
        <p className="services__card--text pt-1 mb-1 ">
          <span className="fw-bold">Date:</span>
          {' '}
          {' '}
          <Moment format="Do MMMM, YYYY">
            {startDate}
          </Moment>
          {' '}
          -
          {' '}
          <Moment format="Do MMMM, YYYY">
            {expDate}
          </Moment>
        </p>
        )}
        {amount
        && (
        <p className="services__card--text pt-1 mb-1">
          <span className="fw-bold">Amount:</span>
          {' '}
          {amount}
        </p>
        )}
        {(payment === true || payment === false)
        && (
        <p className="services__card--text pt-1 mb-2">
          <span className="fw-bold">Payment status:</span>
          {' '}
          {payment ? 'Paid' : 'Unpaid'}
        </p>
        )}
        {
          button
        && <a href={path} className=" link text-decoration-none px-3 py-2 fw-bold">{button}</a>
        }
      </div>
    </div>
  );
}

CoworkCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  path: PropTypes.string,
  people: PropTypes.string,
  startDate: PropTypes.string,
  expDate: PropTypes.string,
  amount: PropTypes.number,
  payment: PropTypes.bool,
};

CoworkCard.defaultProps = {
  image: '',
  title: '',
  text: '',
  button: '',
  path: '',
  people: '',
  startDate: '',
  expDate: '',
  amount: '',
  payment: '',
};

export default CoworkCard;
