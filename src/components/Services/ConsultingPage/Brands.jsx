import React from 'react';

function Brands() {
  return (
    <div className="brands py-5">
      <div className="container py-lg-5 text-center">
        <h4 className="py-2">Brands we have consulted for</h4>
        <p className="py-2">
          Urna volutpat, ullamcorper egestas et. Amet risus ut.
          Urna volutpat, ullamcorper egestas et. Amet risus ut.
        </p>

        <div className="row align-items-center g-4 text-center justify-content-center">
          <div className="col-sm-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/logo.png" alt="" className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/logo2.png" alt="" className="img-fluid" />

          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/logo3.png" alt="" className="img-fluid" />

          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/logo4.png" alt="" className="img-fluid" />

          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/logo5.png" alt="" className="img-fluid" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
