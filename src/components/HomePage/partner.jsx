import React from 'react';

function Partner() {
  return (
    <section className="partner py-5">
      <div className="container py-lg-5">
        <div className="partner__header text-center mx-auto">
          <h4 className="partnet--title ">
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
    </section>
  );
}

export default Partner;
