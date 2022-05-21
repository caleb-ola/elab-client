import React from 'react';
import { checkPropTypes } from 'prop-types';

function EventCard({ title, label, image }) {
  return (
    <div>
      <div className="card events__card border-0 h-100">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body p-4 ">
          <span className="events__body--label py-2 px-3 text-center">{label}</span>
          <h5 className="card-title py-2 pt-lg-4 pb-lg-2">{title}</h5>

          {' '}
        </div>
        <div className="card-footer events__footer pb-3 pt-0 border-0">
          <span role="button" className="events__body--cta">
            <i className="fa-solid fa-arrow-right-long" />
            {' '}
            Appropriate CTA
          </span>
        </div>
      </div>

    </div>
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
