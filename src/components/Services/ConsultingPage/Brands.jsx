import React from 'react';

function Brands() {
  return (
    <div className="brands py-5">
      <div className="container pt-lg-5 text-center">
        <h4 className="py-2">Brands we have consulted for</h4>
        <p className="py-2">
          Urna volutpat, ullamcorper egestas et. Amet risus ut.
          Urna volutpat, ullamcorper egestas et. Amet risus ut.
        </p>

        <div className="row align-items-center text-center justify-content-center">
          <div className="col-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/field.png" alt="" className="img-fluid partner--image w-75" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/hult.png" alt="" className="img-fluid partner--image w-75 " />
          </div>
          <div className="col-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/eridan.png" alt="" className="img-fluid partner--image w-75" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/global.png" alt="" className="img-fluid partner--image w-75" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/threefold.png" alt="" className="img-fluid partner--image w-75" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
