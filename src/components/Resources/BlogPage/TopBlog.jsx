import React from 'react';

function TopBlog() {
  return (
    <div className="container py-5 my-lg-5">
      <div className="topblog p-3 p-md-5 mt-5">
        <div className="row align-items-center">
          <div className="col-md-5 col-lg-5 px-lg-3 ">
            <img src="/images/Resources/blog-header.png" alt="" className="img-fluid" />
          </div>
          <div className="col-md-1 col-lg-1 px-3 " />
          <div className="col-md-6 col-lg-6 p-3 p-md-0">
            <span className="events__body--label py-2 px-3  text-center fw-bold">Community Design</span>
            <h4 className="my-3">Blog Title stays here and it can take the entire length if need be. </h4>
            <div className="row pt-2 pt-lg-4">
              <div className="col-6">‘Dayo Salako</div>
              <div className="col-6 text-end">25th May, 2022</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default TopBlog;
