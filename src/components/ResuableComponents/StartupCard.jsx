import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function StartupCard({
  image, title, text, path,
}) {
  const createMarkup = () => ({ __html: `${text.substring(0, 120)} ...` });

  return (
    <Link to={path} className="text-decoration-none">
      <div className="startup__card p-3 p-lg-5 my-3 my-lg-5 mx-auto h-100 text-decoration-none">
        <div className="row align-items-center ">
          <div className="col-md-2 my-2 text-center">
            <div
              className="training__card--image mx-auto"
              style={{
                background: `url(${image})`,
                backgroundRepeat: 'noRepeat',
                backgroundSize: 'cover',
                backgroundPositionX: 'center',
              }}
            >
              {/* <img src={image} alt="..." className="img-fluid w-75 p-5 p-md-0" /> */}
            </div>
          </div>
          <div className="col-md-9 my-2 pe-lg-5">
            <h6>{title.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}</h6>
            {/* <p className="m-0"> */}
            {/*  eslint-disable-next-line */}
              <div className="markup py-2" dangerouslySetInnerHTML={createMarkup()} />
            {/* </p> */}
          </div>
        </div>
      </div>
    </Link>

  );
}

StartupCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};

StartupCard.defaultProps = {
  image: '',
  title: '',
  text: '',
  path: '',
};

export default StartupCard;
