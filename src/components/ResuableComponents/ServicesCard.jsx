import { checkPropTypes } from 'prop-types';
import React from 'react';

function ServicesCard({
  title, text, button, image,
}) {
  return (
    <div className="card services__card border-0 h-100">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body p-4 ">
        <h6 className="card-title fw-bold">{title}</h6>
        <p className="services__card--text py-2 py-lg-3">{text}</p>
        <a href="/" className=" link text-decoration-none px-3 py-2 fw-bold">{button}</a>
      </div>
    </div>
  );
}

ServicesCard.propTypes = {
  image: checkPropTypes.string,
  title: checkPropTypes.string,
  text: checkPropTypes.string,
  button: checkPropTypes.string,
};

ServicesCard.defaultProps = {
  image: '',
  title: '',
  text: '',
  button: '',

};

export default ServicesCard;
