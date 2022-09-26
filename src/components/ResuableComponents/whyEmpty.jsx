import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function WhyEmpty({
  header, subtext, button, path,
}) {
  return (
    <div className=" p-3 pt-1 text-center mx-auto ">
      <div className="empty__header mx-auto">
        <h4 className="py-2">{header}</h4>
        <p>{subtext}</p>
      </div>
      <img src="/images/reusable/empty.png" alt="" className="img-fluid w-75" />
      <div className="py-lg-2">
        {button
      && (
      <Link to={path} className="link text-decoration-none fw-bold py-2 py-lg-3 px-4 px-lg-5 ">
        {button}
      </Link>
      )}

      </div>
    </div>
  );
}
WhyEmpty.propTypes = {
  header: PropTypes.string,
  subtext: PropTypes.string,
  button: PropTypes.string,
  path: PropTypes.string,
};
WhyEmpty.defaultProps = {
  header: '',
  subtext: '',
  button: '',
  path: '',
};

export default WhyEmpty;
