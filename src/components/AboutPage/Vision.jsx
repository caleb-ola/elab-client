import React from 'react';

function Vision() {
  return (
    <div className="vision py-5">
      <div className="container py-lg-5">
        <div className="row text-center">
          <div className="col-md-6 my-2">
            <div className="card vision__card h-100">
              <img src="/images/about/vision.png" className="card-img-top img-fluid vision__card--icon my-2  my-lg-3 " alt="..." />
              <div className="card-body px-3 px-md-5">
                <h5 className="card-title">Vision (Our over-aching Focus)</h5>
                <p className="card-text">To see resilient innovation ecosystems emerge in underserved university communities.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className=" card vision__card h-100">
              <img src="/images/about/mission.png" className="card-img-top vision__card--icon my-2 my-lg-3" alt="..." />
              <div className="card-body px-3 px-md-5">
                <h5 className="card-title">Mission (How we do this)</h5>
                <p className="card-text">
                  We identify key stakeholders, educate, resource, and release or commission
                  them in order to facilitate economic abundance and virtuous culture creation
                  for human flourishing.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
