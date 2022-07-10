import { PropTypes } from 'prop-types';
import React from 'react';

function CoworkCard({
  title, text, button, image, path,
}) {
  return (
    <div className="card services__card border-0 h-100">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body p-4 pb-lg-5">
        <h6 className="card-title fw-bold m-0">{title}</h6>
        <p className="services__card--text pt-1 pb-2 ">
          {text}
          {' '}
          Team members
        </p>
        <a href={path} className=" link text-decoration-none px-3 py-2 fw-bold">{button}</a>
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
};

CoworkCard.defaultProps = {
  image: '',
  title: '',
  text: '',
  button: '',
  path: '',
};

export default CoworkCard;
