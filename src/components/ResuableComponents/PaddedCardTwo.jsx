import React from 'react';
// import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

function PaddedCardTwo({
  title, image, button,
  path,
}) {
  // const navigate = useNavigate();
  return (
    (
      <div className="card border-0 paddedcard p-4 px-lg-5 py-5 py-lg-5 h-100">
        <div className="card-header bg-white border-0 m-0 p-0 h-100">
          <h6 className="paddedcard__title fw-bold pb-3">
            {title.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
          </h6>
        </div>
        <div className="card-body m-0 p-0 h-100">
          <div
            className="div"
            style={{
              background: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '340px',
              borderRadius: '10px',
            }}
          />
        </div>
        {/* <div className="card-footer bg-white border-0 p-0"> */}
        {button && (
          <span className="mt-4">
            <a href={path} type="button" className="link py-2 px-3 text-decoration-none fw-bold" target="_blank" rel="noreferrer">
              {button}
            </a>
          </span>
        )}
        {/* </div> */}
      </div>
    )
  );
}

PaddedCardTwo.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  button: PropTypes.string,
  // button2: PropTypes.string,
  path: PropTypes.string,
  // brochure: PropTypes.string,
};

PaddedCardTwo.defaultProps = {
  title: '',
  image: '',
  button: '',
  // button2: '',
  path: '',
  // brochure: '',
};
export default PaddedCardTwo;
