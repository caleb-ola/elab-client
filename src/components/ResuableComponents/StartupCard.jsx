import React from 'react';
import { checkPropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function StartupCard({ image, title, text }) {
  return (
    <Link to="/program/foundry/gradeplus" className="text-decoration-none">
      <div className="startup__card p-3 p-lg-5 my-3 my-lg-5 mx-auto h-100 text-decoration-none">
        <div className="row align-items-center ">
          <div className="col-md-2 my-2 text-center">
            <img src={image} alt="..." className="img-fluid w-75" />
          </div>
          <div className="col-md-9 my-2 pe-lg-5">
            <h6>{title}</h6>
            <p className="m-0">{text}</p>
          </div>
        </div>
      </div>
    </Link>

  );
}

StartupCard.propTypes = {
  image: checkPropTypes.string,
  title: checkPropTypes.string,
  text: checkPropTypes.string,
};

StartupCard.defaultProps = {
  image: '',
  title: '',
  text: '',
};

export default StartupCard;
