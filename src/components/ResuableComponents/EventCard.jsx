import React from 'react';
import { checkPropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function EventCard({ title, label, image }) {
  return (
    <Link to="/" className="text-decoration-none events__link">
      <div className="card events__card border-0 h-100">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body p-4 ">
          <span className="events__body--label fw-bold py-2 px-3 text-center">{label}</span>
          <h5 className="card-title py-2 pt-lg-4 pb-lg-2">{title}</h5>

          {' '}
        </div>
      </div>

    </Link>
  );
}

EventCard.propTypes = {
  title: checkPropTypes.string,
  label: checkPropTypes.string,
  image: checkPropTypes.string,

};

EventCard.defaultProps = {
  title: '',
  label: '',
  image: '',
};

export default EventCard;
