import React from 'react';
import { PropTypes } from 'prop-types';

function EventCard({
  title, label, image, link,
}) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="text-decoration-none events__link">
      <div className="card events__card border-0 h-100">
        {/* <img src={image} className="card-img-top" alt="..." /> */}
        <div
          className="div"
          style={{
            background: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '250px',
            // borderRadius: '10px',
          }}
        />
        <div className="card-body p-4 ">
          <span className="events__body--label fw-bold py-2 px-3 text-center">{label}</span>
          <h5 className="card-title py-2 pt-lg-4 pb-lg-2">{title.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}</h5>
          {' '}
        </div>
      </div>

    </a>
  );
}

EventCard.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,

};

EventCard.defaultProps = {
  title: '',
  label: '',
  image: '',
  link: '',
};

export default EventCard;
