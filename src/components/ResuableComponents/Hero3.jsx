import React from 'react';
import { PropTypes } from 'prop-types';

function HeroThree({ title, text, highlight }) {
  return (
    <div className="herothree pt-5">
      <div className="container pt-5 pb-3">
        <div className="herothree__header text-center">
          <h1 className="herothree__header--title pt-5 mt-5">
            {title}
            <br />
            {highlight && (
            <span
              style={{
                backgroundImage: "url('/images/Vector.png')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
              className="p-3 ps-5 pb-3 pt-1 pe-4"
            >
              {highlight}
            </span>
            ) }
          </h1>
          <p className="py-2 py-lg-3">{text}</p>
        </div>
      </div>
    </div>
  );
}

HeroThree.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  highlight: PropTypes.string,
};

HeroThree.defaultProps = {
  title: '',
  text: '',
  highlight: '',
};
export default HeroThree;
