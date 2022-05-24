import React from 'react';

function WhyVideo() {
  return (
    <div className="whyvideo py-5">
      {/* COMMUNITY SIGN UP FORM STARTS */}
      <div className="modal fade benefits__form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-md-5">
              <h4 className="modal-title" id="exampleModalLabel">
                Sign up for the
                <br />
                Founder’s Community.
              </h4>

              <form action="" className="benefits__form px-2">
                <div className="row py-2">
                  <label className="p-0" htmlFor="name">
                    Full Name
                  </label>
                  <input type="text" className="name p-3 my-2 benefits__form--input " id="name" />
                </div>
                <div className="row py-2">
                  <label className="p-0" htmlFor="email">
                    Email Address
                  </label>
                  <input type="email" className="email p-3 my-2 benefits__form--input " id="email" />
                </div>

                <div className="py-3 py-lg-5 px-0">
                  <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Sign up
                    {' '}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* COMMUNITY SIGN UP FORM ENDS */}
      <div className="container py-lg-5">
        <div className="whyvideo__content mx-auto">
          <h4 className="whyvideo--header text-center pb-3 pb-lg-4">
            Founders’ Community
          </h4>
          <video width="100%" height="600" controls className="py-3">
            <track kind="captions" />
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <p className="whyvideo--text text-center py-3 mx-auto">
            Consequat eget nisl tellus, sed turpis.
            Nulla et lectus vel mauris. Cursus nulla viverra interdum et
            interdum egestas ornare neque. Vulputate sapien, sed cursus
            tortor ante purus ultrices. At viverra gravida integer malesuada
            diam non elit. Sed luctus fringilla in mattis quis risus aliquam
            enim tristique. Molestie vestibulum malesuada.
          </p>
          <div className="whyvideo__cta--btn py-4 text-center">
            <button type="button" className="whyvideo__cta--btn link btn fw-bold py-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Sign Up
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WhyVideo;
