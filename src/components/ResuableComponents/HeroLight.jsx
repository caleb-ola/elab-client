import React from 'react';
import { checkPropTypes } from 'prop-types';

function HeroLight({ title, text, highlight }) {
  return (
    <div className="hero-light py-5">
      <div className="container py-5">
        <div className="hero-light__header py-lg-5">
          <h1 className="hero-light__header--title text-center">
            {title}
            {' '}
            <br />
            {highlight && (
            <span
              style={{
                backgroundImage: "url('/images/Vector.png')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
              className="ps-4 pe-4"
            >
              {highlight}
            </span>
            )}
          </h1>

          <p className="hero-light__header--text text-center pt-3">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

HeroLight.propTypes = {
  title: checkPropTypes.string,
  text: checkPropTypes.string,
  highlight: checkPropTypes.string,
};

HeroLight.defaultProps = {
  title: '',
  text: '',
  highlight: '',
};

export default HeroLight;
