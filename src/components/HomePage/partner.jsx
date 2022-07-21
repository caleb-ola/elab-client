import React from 'react';

function Partner() {
  return (
    <section className="partner py-5">
      <div className="container py-lg-5">
        <div className="partner__header text-center mx-auto">
          <h4 className="partner--title ">
            <span
              style={{
                backgroundImage: "url('/images/Vector.png')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
              className="p-3 ps-4  pt-3 pe-4"
            >
              Our Partners
            </span>
          </h4>
          <p className="pt-4">
            We are always looking out for other organizations who are
            doing good in the world and are proud to be associated with them.
          </p>
        </div>
        <div className="row align-items-center text-center justify-content-center">
          <div className="col-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/eridan.png" alt="" className="img-fluid partner--image" />
          </div>
          <div className="col-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/global.png" alt="" className="img-fluid partner--image" />

          </div>
          <div className="col-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/hult.png" alt="" className="img-fluid partner--image" />

          </div>
          <div className="col-6 col-md-4 col-lg-2 p-4 ">
            <img src="/images/home/threefold.png" alt="" className="img-fluid partner--image" />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
