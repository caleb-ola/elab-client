import React from 'react';
import { checkPropTypes } from 'prop-types';

function TrainingCard({ image, text, title }) {
  return (
    <div className="training__card p-4 px-2 p-lg-5 h-100">
      <div className="row align-items-center">
        <div className="col-md-4  ">
          <img src={image} alt="" className="img-fluid p-5 p-md-0" />
        </div>
        <div className="col-md-8  ">
          <h6 className="training__card--title">
            {title}
          </h6>
          <p className="training__card--text mb-4">{text}</p>
          <div className="text-end  ">
            <a href="/services/training/training-details" className="link training__card--link fw-bold text-decoration-none px-3 py-2">Register</a>
            {/* <Cta text="Register" /> */}
          </div>

        </div>
      </div>
    </div>
  );
}

TrainingCard.propTypes = {
  image: checkPropTypes.string,
  title: checkPropTypes.string,
  text: checkPropTypes.string,
};

TrainingCard.defaultProps = {
  image: '',
  title: '',
  text: '',
};

export default TrainingCard;
