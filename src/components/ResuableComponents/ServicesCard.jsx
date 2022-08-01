import { PropTypes } from 'prop-types';
import React from 'react';

function ServicesCard({
  title, text, button, image, path,
}) {
  const createMarkup = () => ({ __html: `${text.substring(0, 120)} ...` });

  return (
    <div className="card services__card border-0 h-100 pb-2">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body p-4">
        <h6 className="card-title fw-bold mb-0">{title.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}</h6>
        {/* <p className="services__card--text "> */}
        {/* eslint-disable-next-line */}
          <p className="markup services__card--text pt-1" dangerouslySetInnerHTML={createMarkup()} />
        {/* </p> */}
        <div className="py-2 pt-3 pt-lg-3">
          <a href={path} className="link text-decoration-none px-3 py-2 fw-bold">{button}</a>
        </div>
      </div>
    </div>
  );
}

ServicesCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  path: PropTypes.string,
};

ServicesCard.defaultProps = {
  image: '',
  title: '',
  text: '',
  button: '',
  path: '',
};

export default ServicesCard;
