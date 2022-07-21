import React from 'react';
import { PropTypes } from 'prop-types';
import CircleBg from './circleBg';
// import CircleBg from '../ResuableComponents/circleBg';

function Hero4({
  image, title, button, text, circleTitle, path, download,
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

      <div className="overla">
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
                {download && (
                  <a href={download} className="link fw-bold py-3 px-5 text-decoration-none text-start" type="button" download>
                    Download brochure
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

Hero4.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  circleTitle: PropTypes.string,
  path: PropTypes.string,
  download: PropTypes.string,
};

Hero4.defaultProps = {
  image: '',
  title: '',
  button: '',
  text: '',
  circleTitle: '',
  path: '',
  download: '',
};

export default Hero4;
