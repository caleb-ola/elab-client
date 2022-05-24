import React from 'react';

function BlogDetailsHero() {
  return (
    <div className="blogdetails">
      <div
        className="blogdetails__hero position-relative"
        style={{
          backgroundImage: "url('/images/Resources/blog-details-header.png')",
          backgroundSize: 'cover',
          height: '60vh',
        }}
      />
      <div className="container position-relative ">
        <div className="blogdetails__card p-3 p-md-5 mx-auto">
          <div className="row ">
            <div className="col-md-2 col-lg-2 px-lg-3 text-start ">
              <p className="blogdetails__hero--back fw-bold m-0">
                <span className="fa-stack fa-1x custom ms-3">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fa-solid fa-arrow-left fa-stack-1x fa-inverse" />
                </span>
                {' '}
                <span>Back</span>
              </p>

            </div>
            <div className="col-md-10 col-lg-10 p-3 p-md-0">
              <span className="events__body--label py-2 px-3  text-center fw-bold">Community Design</span>
              <h4 className="my-3">Blog Title stays here and it can take the entire length if need be. </h4>
              <div className="row pt-2 pt-lg-4">
                <div className="col-6 fw-bold">‘Dayo Salako</div>
                <div className="col-6 text-end">25th May, 2022</div>
              </div>
            </div>
          </div>
        </div>
        <div className="blogdetails__content mx-auto py-5">
          <div className="row">
            <div className="col-md-2 col-lg-2 px-lg-3 text-start ">
              <span className="fa-stack fa-1x custom ms-3 my-2 blogdetails__content--icon">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
              </span>
              <br />
              <span className="fa-stack fa-1x custom ms-3 my-2 blogdetails__content--icon">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
              </span>
            </div>
            <div className="col-md-10 col-lg-10 p-3 p-md-0">
              <h5 className="blogdetails__content--header pt-3 pb-2 m-0">
                Appropriate Header
              </h5>
              <p>
                Nisi, urna, urna vel quisque. Sem porttitor viverra at iaculis aliquet
                adipiscing eu, eget et. Hendrerit ultricies et malesuada egestas sagittis neque.
                Orci suspendisse bibendum sapien, volutpat scelerisque laoreet. Id ac elit id
                aliquam
                massa, risus sit sit eros. Mauris eleifend vestibulum rutrum interdum tempus magnis
                amet dictum eros. Nunc quis egestas enim orci, pellentesque vel vitae molestie.
                In sit
                nunc, aliquet mauris sem aliquam felis. At consequat feugiat velit varius ut
                massa non lectus.
                Aliquet ultrices lacus, consectetur massa ipsum id purus odio. Quam et placerat
                consequat,
                ultrices non, tristique massa. Pellentesque morbi lacinia quisque tristique non.
                Egestas a
                enim neque congue sem nibh volutpat ultrices. Dolor at interdum amet ac magna
                ultrices aenean.
              </p>
              {' '}
              <h5 className="blogdetails__content--header pt-3 pb-3 m-0">
                Appropriate Header
              </h5>
              <img src="/images/Resources/blog-content.png" className="img-fluid" alt="..." />
              {' '}
              <h5 className="blogdetails__content--header pt-4 pb-2 m-0">
                Appropriate Header
              </h5>
              <p>
                Nisi, urna, urna vel quisque. Sem porttitor viverra at iaculis aliquet
                adipiscing eu, eget et. Hendrerit ultricies et malesuada egestas sagittis neque.
                Orci suspendisse bibendum sapien, volutpat scelerisque laoreet. Id ac elit id
                aliquam
                massa, risus sit sit eros. Mauris eleifend vestibulum rutrum interdum tempus magnis
                amet dictum eros. Nunc quis egestas enim orci, pellentesque vel vitae molestie.
                In sit
                nunc, aliquet mauris sem aliquam felis. At consequat feugiat velit varius ut
                massa non lectus.
                Aliquet ultrices lacus, consectetur massa ipsum id purus odio. Quam et placerat
                consequat,
                ultrices non, tristique massa. Pellentesque morbi lacinia quisque tristique non.
                Egestas a
                enim neque congue sem nibh volutpat ultrices. Dolor at interdum amet ac magna
                ultrices aenean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsHero;
