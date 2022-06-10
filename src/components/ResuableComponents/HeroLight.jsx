import React from 'react';
import { checkPropTypes } from 'prop-types';

function HeroLight({
  title, text, highlight, highlight2, highlight3,
}) {
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
            {highlight2 && (
            <span
              style={{
                backgroundImage: "url('/images/Vector.png')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
              className="ps-4 pt-4 pb-2 pe-5"
            >
              {highlight2}
            </span>
            )}
            {highlight3 && (
              <span
                style={{
                  backgroundImage: "url('/images/Vector.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
                className="ps-4 pt-2 pe-4"
              >
                {highlight3}
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
  highlight2: checkPropTypes.string,
  highlight3: checkPropTypes.string,
};

HeroLight.defaultProps = {
  title: '',
  text: '',
  highlight: '',
  highlight2: '',
  highlight3: '',
};

export default HeroLight;
