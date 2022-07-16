import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

function TopBlog({
  title, author, date, image, label, path, tags,
}) {
  // tags.map((item) => (
  //   // eslint-disable-next-line no-undef
  //   // <span className="topblog--tags mx-2
  //   // events__body--label fw-bold py-2 px-3 text-center" key={index}>
  //   console.log(item)
  //   // </span>
  // ));/
  return (
    <div className="container py-5 my-lg-5">
      <div className="topblog p-3 p-md-5 mt-5">
        <Link to={path} className="text-decoration-none">
          <div className="row">
            <div className="col-md-5 col-lg-5 px-lg-3 order-sm-3 order-md-1">
              <div
                className=""
                style={{
                  background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '10px', height: '380px',
                }}
              />
            </div>
            <div className="col-md-1 col-lg-1 px-3 order-2 order-md-2" />
            <div className="col-md-6 col-lg-6 p-3 p-md-0 order-1 order-md-3 d-flex flex-column">
              {label && <span className="events__body--label py-2 px-3  text-center fw-bold">{label}</span>}
              <div className="align-text-top">
                <div className="row">
                  {tags && tags.map((item, index) => (
                  // eslint-disable-next-line
                  <span className="col topblog--tags mx-2 events__body--label fw-bold py-2 px-3 my-2 text-center" key={index}>
                    {item}
                  </span>
                  ))}
                </div>
              </div>
              <h4 className="my-3 topblog--header align-middle my-auto">{title}</h4>
              <div className="row pt-2 pt-lg-4 topblog__authorrow align-text-bottom mt-auto ">
                <div className="col-md-6 text-center text-md-start topblog--text">
                  <i className="fa-solid fa-user blog--icon pe-2" />
                  {author}
                </div>
                <div className="col-md-6 text-center text-md-end ">
                  <i className="fa-solid fa-calendar blog--icon pe-2" />
                  <Moment format="Do MMMM, YYYY" className="topblog--header">
                    {date}
                  </Moment>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
TopBlog.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  label: PropTypes.string,
  path: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};
TopBlog.defaultProps = {
  title: '',
  author: '',
  date: '',
  image: '',
  label: '',
  path: '',
  tags: [],
};

export default TopBlog;
