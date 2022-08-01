import React from 'react';
import { PropTypes } from 'prop-types';

function HeroLight({
  title, text, highlight, highlight2, highlight3, highlight4,
}) {
  return (
    <div className="hero-light pt-5">
      <div className="container py-5">
        <div className="hero-light__header py-lg-5">
          <h1 className="hero-light__header--title text-center pt-5">
            {title}
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
              className="ps-4 pt-2 pb-3 pe-3"
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
            {highlight4 && (
              <span
                style={{
                  backgroundImage: "url('/images/Vector.png')",
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
                className="pb-5 pe-5 ps-5"
              >
                {highlight4}
              </span>
            )}
          </h1>

          <p className="hero-light__header--text text-center pt-2">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

HeroLight.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  highlight: PropTypes.string,
  highlight2: PropTypes.string,
  highlight3: PropTypes.string,
  highlight4: PropTypes.string,
};

HeroLight.defaultProps = {
  title: '',
  text: '',
  highlight: '',
  highlight2: '',
  highlight3: '',
  highlight4: '',
};

export default HeroLight;
