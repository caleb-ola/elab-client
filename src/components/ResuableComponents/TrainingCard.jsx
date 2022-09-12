import React from 'react';
import { PropTypes } from 'prop-types';

function TrainingCard({
  image, text, title, path,
}) {
  return (
    <div className="training__card p-4 px-2 p-lg-4 h-100">
      <div className="row align-items-center">
        <div className="col-md-4 my-2 text-center ">
          <div
            className="training__card--image mx-auto"
            style={{
              background: `url(${image})`,
              backgroundRepeat: 'noRepeat',
              backgroundSize: 'cover',
              backgroundPositionX: 'center',
            }}
          >
            {/* <img src={image} alt="" className="img-fluid p-5 p-md-0" /> */}
          </div>
        </div>
        <div className="col-md-8 my-2  ">
          <h6 className="training__card--title">
            {title.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
          </h6>
          <p className="training__card--text mb-4">
            {text.substring(0, 70)}
            {' '}
            ...
          </p>
          <div className=" text-start text-md-end me-3 ">
            <a href={path} className="link training__card--link fw-bold text-decoration-none px-3 py-2">Register</a>
            {/* <Cta text="Register" /> */}
          </div>

        </div>
      </div>
    </div>
  );
}

TrainingCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};

TrainingCard.defaultProps = {
  image: '',
  title: '',
  text: '',
  path: '',
};

export default TrainingCard;
