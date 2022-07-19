import React from 'react';
import { Link } from 'react-router-dom';
import { checkPropTypes } from 'prop-types';

function ProjectCard({
  image, title, button, path,
}) {
  return (
    <div
      className="projects__card position-relative"
      style={{
        backgroundImage: image,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '500px',
      }}
    >
      <div className="projects__card--content position-absolute ">
        <h5 className="">{title.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}</h5>
        <div className="my-4 hero__button">
          <Link to={path} className="link text-decoration-none px-3 py-2 fw-bold">{button}</Link>
        </div>
      </div>
    </div>
  );
}
ProjectCard.propTypes = {
  image: checkPropTypes.string,
  title: checkPropTypes.string,
  button: checkPropTypes.string,
  path: checkPropTypes.string,
};
ProjectCard.defaultProps = {
  image: '',
  title: '',
  button: '',
  path: '',
};
export default ProjectCard;
