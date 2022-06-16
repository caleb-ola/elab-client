import { checkPropTypes } from 'prop-types';
import React from 'react';

function CircleBg({ text }) {
  return (
    <span
      style={{
        backgroundImage: "url('/images/Vector.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
      className="p-3 ps-3 pb-4 pt-2 pe-1 "
    >
      {text}
    </span>
  );
}

CircleBg.propTypes = {
  text: checkPropTypes.string,
};
CircleBg.defaultProps = {
  text: '',
};
export default CircleBg;
