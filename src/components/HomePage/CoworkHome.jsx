import React from 'react';

function CoworkHome() {
  return (
    <section className="cowork__home py-5">
      <div className="container py-lg-5">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1 my-2">
            {/* <div className=""> */}
            <h4 className="cowork--title py-2">Header text about cowork stays here</h4>
            <p className="cowork--para py-2 m-0">
              We integrate consulting and advisory services with solution-rich
              insights and strategically aligned, contextually responsive practices
              customized for your business needs.
            </p>
            <div className="my-4 my-lg-5">
              <a href="/program/innovation-hub/#available" className="link fw-bold py-3 px-5 text-decoration-none" type="button">
                See available options
              </a>
            </div>
          </div>
          <div className="col-md-1 order-md-1" />
          <div className="col-md-5 order-1 order-md-2">
            <img src="/images/home/cowork.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoworkHome;
