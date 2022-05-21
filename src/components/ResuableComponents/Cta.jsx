import React from 'react';
import PropTypes from 'prop-types';

function Cta({ text, target, toggle }) {
  return (
    <a href="/" className="link fw-bold py-3 px-5 text-decoration-none" type="button" data-bs-target={target} data-bs-toggle={toggle}>
      {text}
    </a>
  );
}

Cta.propTypes = {
  text: PropTypes.string,
  target: PropTypes.string,
  toggle: PropTypes.string,
};
Cta.defaultProps = {
  text: '',
  target: '',
  toggle: '',
};

export default Cta;
