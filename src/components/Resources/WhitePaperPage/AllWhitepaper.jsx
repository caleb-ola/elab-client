import React, { useState } from 'react';
import PaddedCard from '../../ResuableComponents/PaddedCard';
import Pagination from '../../ResuableComponents/Pagination';

function AllWhitepaper() {
  const [active, setActive] = useState({
    whitepaper: true,
    industry: false,
    open: false,
  });
  const [blogs, setBlogs] = useState(
    <>
      <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
        <PaddedCard
          title="Whitepaper title goes here"
          image="/images/Resources/blog1.png"
          path="/resources/blog/blog-post"
          button="Download"
        />
      </div>
      {' '}
      <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
        <PaddedCard
          title="Whitepaper title goes here"
          image="/images/Resources/blog2.png"
          button="Download"
          path="/resources/blog/blog-post"
        />
      </div>
      {' '}
      <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
        <PaddedCard
          title="Whitepaper title goes here"
          image="/images/Resources/blog3.png"
          button="Download"
          path="/resources/blog/blog-post"
        />
      </div>
      {' '}
      <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
        <PaddedCard
          title="Whitepaper title goes here"
          image="/images/Resources/blog3.png"
          button="Download"
          path="/resources/blog/blog-post"
        />
      </div>
      {' '}
      <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
        <PaddedCard
          title="Whitepaper title goes here"
          image="/images/Resources/blog4.png"
          button="Download"
          path="/resources/blog/blog-post"
        />
      </div>
      <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
        <PaddedCard
          title="Whitepaper title goes here"
          image="/images/Resources/blog5.png"
          button="Download"
          path="/resources/blog/blog-post"
        />
      </div>
    </>,
  );
  const Whitepaper = () => {
    setActive({
      whitepaper: true,
      industry: false,
      open: false,
    });
    setBlogs(
      <>
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <PaddedCard
            title="Whitepaper title goes here"
            image="/images/Resources/blog1.png"
            button="Download"
            path="/resources/blog/blog-post"
          />
        </div>
        {' '}
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <PaddedCard
            title="Whitepaper title goes here"
            image="/images/Resources/blog2.png"
            button="Download"
            path="/resources/blog/blog-post"
          />
        </div>
        {' '}
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <PaddedCard
            title="Whitepaper title goes here"
            image="/images/Resources/blog3.png"
            button="Download"
            path="/resources/blog/blog-post"
          />
        </div>
        {' '}
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <PaddedCard
            title="Whitepaper title goes here"
            image="/images/Resources/blog3.png"
            button="Download"
            path="/resources/blog/blog-post"
          />
        </div>
        {' '}
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <PaddedCard
            title="Whitepaper title goes here"
            image="/images/Resources/blog4.png"
            button="Download"
            path="/resources/blog/blog-post"
          />
        </div>
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <PaddedCard
            title="Whitepaper title goes here"
            image="/images/Resources/blog5.png"
            button="Download"
            path="/resources/blog/blog-post"
          />
        </div>
      </>,
    );
  };

  const Industry = () => {
    setActive({
      whitepaper: false,
      industry: true,
      open: false,
    });
    setBlogs(
      <>
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <PaddedCard
            title="Whitepaper title goes here"
            image="/images/Resources/blog3.png"
            button="Download"
            path="/resources/blog/blog-post"
          />
        </div>
        {' '}
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <PaddedCard
            title="Whitepaper title goes here"
            image="/images/Resources/blog4.png"
            button="Download"
            path="/resources/blog/blog-post"
          />
        </div>
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <PaddedCard
            title="Whitepaper title goes here"
            image="/images/Resources/blog5.png"
            button="Download"
            path="/resources/blog/blog-post"
          />
        </div>
      </>,
    );
  };
  const Open = () => {
    setActive({
      whitepaper: false,
      industry: false,
      open: true,
    });
    setBlogs(
      <>
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <PaddedCard
            title="Whitepaper title goes here"
            image="/images/Resources/blog3.png"
            button="Download"
            path="/resources/blog/blog-post"
          />
        </div>
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <PaddedCard
            title="Whitepaper title goes here"
            image="/images/Resources/blog5.png"
            button="Download"
            path="/resources/blog/blog-post"
          />
        </div>
      </>,
    );
  };
  return (
    <div className="whitepaper">
      <div className="container">
        <div className="d-flex flex-row  justify-content-center py-3 py-lg-5">
          <span role="button" tabIndex={0} className={active.whitepaper ? 'btn button px-0 mx-2 mx-lg-3 projects__active' : 'btn button px-0 mx-2 mx-lg-3'} onClick={Whitepaper} aria-hidden="true">All</span>
          <span type="button" className={active.industry ? 'btn button px-0 mx-2 mx-lg-3 projects__active' : 'btn button px-0 mx-2 mx-lg-3'} onClick={Industry} aria-hidden="true">Communinity Design</span>
          <span type="button" className={active.open ? 'btn button px-0 mx-2 mx-lg-3 projects__active' : 'btn button px-0 mx-2 mx-lg-3'} onClick={Open} aria-hidden="true">Innovation</span>
        </div>
        <div className="row">
          {blogs}
        </div>
        <div className="row">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default AllWhitepaper;
