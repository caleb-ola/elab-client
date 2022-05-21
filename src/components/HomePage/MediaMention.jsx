import React from 'react';

function MediaMention() {
  return (
    <div className="media py-5">
      <div className="container">
        <div className="partner__header text-center mx-auto">
          <h4 className="partnet--title ">
            Media Mentions
          </h4>
          <p className="pt-4">
            Some media houses have decided to shout about what we do from the
            housetops and that’s great because we also aren’t hiding our light in any way.
          </p>
        </div>
        <div className="media__body py-lg-4 ">
          <div className="row align-items-center">
            <div className="col-sm-6 col-lg-3">
              <img src="/images/home/media1.png" alt="" className="img-fluid" />
            </div>
            <div className="col-sm-6 col-lg-3">
              <img src="/images/home/media2.png" alt="" className="img-fluid" />
            </div>
            <div className="col-sm-6 col-lg-3">
              <img src="/images/home/media3.png" alt="" className="img-fluid" />
            </div>
            <div className="col-sm-6 col-lg-3">
              <img src="/images/home/media4.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaMention;
