import React from 'react';
import { checkPropTypes } from 'prop-types';
import Cta from './Cta';
import CircleBg from './circleBg';

function HeroTwo({
  image, title, title1, button, text, circleTitle,
}) {
  return (
    <section
      className="heroTwo position-relative"
      id="heroTwo"
      style={{
        backgroundImage: image,
        height: '91.4vh',
        backgroundSize: 'cover',
      }}
    >
      <div className="overlay">
        <div className="container">
          <div className=" heroTwo__text text-start w-100 ">
            <div className="heroTwo__container w-100 text-start">
              <h1 className="mt-2 mb-0 heroTwo-header-title">
                {' '}
                {circleTitle && <CircleBg text={circleTitle} />}
                {' '}
                {title}
              </h1>
              <h1 className="mb-2 mt-0 heroTwo-header-title">
                {' '}
                {circleTitle && <CircleBg text={circleTitle} />}
                {' '}
                {title1}
              </h1>
              {text && (
              <p className="my-3 my-lg-4 mb-lg-5 hero__paragragh text-start ">
                {text}
              </p>
              )}
              <div className="my-5 pt-5 hero__button">
                { button && <Cta text={button} />}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

HeroTwo.propTypes = {
  image: checkPropTypes.string,
  title: checkPropTypes.string,
  title1: checkPropTypes.string,
  button: checkPropTypes.string,
  text: checkPropTypes.string,
  circleTitle: checkPropTypes.string,
};

HeroTwo.defaultProps = {
  image: '',
  title: '',
  title1: '',
  button: '',
  text: '',
  circleTitle: '',
};

export default HeroTwo;
