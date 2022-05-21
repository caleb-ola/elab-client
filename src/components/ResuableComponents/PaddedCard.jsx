import React from 'react';
import { Link } from 'react-router-dom';
import { checkPropTypes } from 'prop-types';

function PaddedCard({ title, image, button }) {
  return (
    <div className="paddedcard p-4 p-lg-5">
      <h6 className="paddedcard__title">
        {title}
      </h6>
      <img src={image} alt="" className="img-fluid" />

      {button && (
      <div className="my-4">
        <Link to="/" className="link py-1 px-2 text-decoration-none fw-bold">
          {button}
        </Link>
      </div>

      )}
    </div>
  );
}

PaddedCard.propTypes = {
  title: checkPropTypes.string,
  image: checkPropTypes.string,
  button: checkPropTypes.string,
};

PaddedCard.defaultProps = {
  title: '',
  image: '',
  button: '',
};
export default PaddedCard;
