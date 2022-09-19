import React from 'react';

function Plans() {
  return (
    <div id="plans" className="plans py-5">
      <div className="container py-lg-2">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3 px-2 px-xl-5">
            <div className="card vision__card h-100">
              <img src="/images/cowork/plana.png" className="card-img-top img-fluid w-75 mx-auto  my-2 mb-0  mt-lg-4 " alt="..." />
              <div className="card-body px-1 px-lg-2 p-0  text-center">
                <h5 className="card-title">
                  Conducive
                  {' '}
                  <br />
                  {' '}
                  Workspace
                </h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 px-2 px-xl-5">
            <div className="card vision__card h-100">
              <img src="/images/cowork/planb.png" className="card-img-top img-fluid w-75 mx-auto  my-2 mb-0  mt-lg-4 " alt="..." />
              <div className="card-body px-1 px-lg-2 p-0 text-center">
                <h5 className="card-title">
                  Regular
                  {' '}
                  <br />
                  {' '}
                  Power Supply
                </h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 px-2 px-xl-5">
            <div className="card vision__card h-100">
              <img src="/images/cowork/planc.png" className="card-img-top img-fluid w-75 mx-auto  my-2 mb-0  mt-lg-4 " alt="..." />
              <div className="card-body px-1 px-lg-2 p-0 text-center">
                <h5 className="card-title">
                  Office Address
                  Usage
                </h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3 px-2 px-xl-5">
            <div className="card vision__card h-100">
              <img src="/images/cowork/pland.png" className="card-img-top img-fluid w-75 mx-auto  my-2 mb-0  mt-lg-4 " alt="..." />
              <div className="card-body px-1 px-lg-2 p-0  text-center">
                <h5 className="card-title">
                  Internet
                  {' '}
                  <br />
                  {' '}
                  Access
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
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
        </div> */}
      </div>
    </div>
  );
}

export default Plans;
