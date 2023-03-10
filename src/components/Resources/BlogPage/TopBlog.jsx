/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
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
      <div className="topblog p-4 p-md-5 mt-5 mx-auto">
        <Link to={path} className="text-decoration-none">
          <div className="row">
            <div className="col-md-6 col-lg-4 px-lg-3 order-sm-3 order-md-1 text-center text-md-start">
              <img
                src={image}
                alt=""
                className="img-fluid p-3"
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '20px',
                  height: '300px',
                }}
              />
              {/* <div
                className=""
                style={{
                  background: `url(${image})`, backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover', borderRadius: '10px', height: '380px',
                }}
              /> */}
            </div>
            {/* <div className="col-md-1 col-lg-1 px-3 order-2 order-md-2" /> */}
            <div className="col-md-6 col-lg-8 p-3 p-md-0 order-1 order-md-3 d-flex flex-column">
              {label && <span className="events__body--label py-2 px-3  text-center fw-bold">{label}</span>}
              <div className="align-text-top">
                <div className="d-flex flex-wrap ">
                  {tags && tags.map((item, index) => (
                    <div className="my-2" key={index}>
                      <span className="col topblog--tags mx-2 events__body--label fw-bold py-2 px-3 my-2 text-center">
                        {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <h4 className="my-3 topblog--header my-auto text-center text-md-start ms-0">{title}</h4>
              {/* <p className="topblog--description">{content}</p> */}
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
  // content: PropTypes.string,
};
TopBlog.defaultProps = {
  title: '',
  author: '',
  date: '',
  image: '',
  label: '',
  path: '',
  tags: [],
  // content: '',
};

export default TopBlog;
