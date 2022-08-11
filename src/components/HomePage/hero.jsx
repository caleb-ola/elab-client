import React from 'react';
import { PropTypes } from 'prop-types';
import ReactTypingEffect from 'react-typing-effect';
import CircleBg from '../ResuableComponents/circleBg';

function Hero({
  image, title, button, text, circleTitle, path, download, typingText,
}) {
  return (
    <section
      className="hero position-relative"
      id="hero"
      style={{
        backgroundImage: image,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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

              { typingText && (
              <ReactTypingEffect
                text={[
                  'Wh',
                  'Jo',
                  'Pa',
                ]}
                cursor=" "
                cursorClassName="hero__header--cursor"
                eraseDelay={1000}
                typingDelay={0}
                // eslint-disable-next-line react/no-unstable-nested-components
                // cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                // eslint-disable-next-line react/no-unstable-nested-components
                displayTextRenderer={(txt) => (
                  <h1 className="my-1 hero-header-title">
                    Find your
                    {' '}
                    {' '}
                    {txt.split('').map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                        >
                          {char}
                        </span>
                      );
                    })}
                    y
                  </h1>
                )}
              />
              )}

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

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  circleTitle: PropTypes.string,
  path: PropTypes.string,
  download: PropTypes.string,
  typingText: PropTypes.bool,
};

Hero.defaultProps = {
  image: '',
  title: '',
  button: '',
  text: '',
  circleTitle: '',
  path: '',
  download: '',
  typingText: '',
};

export default Hero;
