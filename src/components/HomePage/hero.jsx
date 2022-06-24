import React from 'react';
import { checkPropTypes } from 'prop-types';
import CircleBg from '../ResuableComponents/circleBg';

function Hero({
  image, title, button, text, circleTitle, path,
}) {
  return (
    <section
      className="hero position-relative"
      id="hero"
      style={{
        backgroundImage: image,
        height: '100vh',
        backgroundSize: 'cover',
      }}
    >

      <div className="overlay">
        <div className="container">
          <div className="hero hero__text text-center mx-auto">
            <div className="hero__container w-100 text-center">

              <h1 className="my-1 hero-header-title">
                {' '}
                {circleTitle && <CircleBg text={circleTitle} />}
                {' '}
                {title}
              </h1>
              {text && (
              <p className="my-2 my-lg-3 hero__paragragh text-center mx-auto ">
                {text}
              </p>
              )}
              <div className="my-5 hero__button">
                { button && (
                <a href={path} className="link fw-bold py-3 px-5 text-decoration-none">
                  {button}
                </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  image: checkPropTypes.string,
  title: checkPropTypes.string,
  button: checkPropTypes.string,
  text: checkPropTypes.string,
  circleTitle: checkPropTypes.string,
  path: checkPropTypes.string,
};

Hero.defaultProps = {
  image: '',
  title: '',
  button: '',
  text: '',
  circleTitle: '',
  path: '',
};

export default Hero;
