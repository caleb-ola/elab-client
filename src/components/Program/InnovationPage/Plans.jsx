import React from 'react';

function Plans() {
  return (
    <div id="plans" className="plans py-5">
      <div className="container py-lg-5">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex flex-column mx-3">
              <div
                className="plans__card position-relative col-8 my-4"
                style={{
                  backgroundImage: "url('/images/cowork/plan1.png')",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '851.34px',
                }}
              >
                <div className="plans__card--content position-absolute ">
                  <h4 className="">
                    Conducive
                    <br />
                    Workspace
                  </h4>
                </div>
              </div>
              <div
                className="plans__card position-relative col-4 my-4"
                style={{
                  backgroundImage: "url('/images/cowork/plan4.png')",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '486px',
                }}
              >
                <div className="plans__card--content position-absolute ">
                  <h4 className="">
                    Office Address
                    <br />
                    Usage
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column mx-3">
              <div
                className="plans__card position-relative col-4 my-4 "
                style={{
                  backgroundImage: "url('/images/cowork/plan2.png')",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '486px',
                }}
              >
                <div className="plans__card--content position-absolute ">
                  <h4 className="">
                    Regular
                    <br />
                    Power Supply
                  </h4>
                </div>
              </div>
              <div
                className="plans__card position-relative col-8 my-4"
                style={{
                  backgroundImage: "url('/images/cowork/plan3.png')",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '851.34px',
                }}
              >
                <div className="plans__card--content position-absolute ">
                  <h4 className="">
                    Internet
                    <br />
                    Access
                  </h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
