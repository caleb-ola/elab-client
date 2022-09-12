import React from 'react';
import { Link } from 'react-router-dom';

function CoworkHome() {
  return (
    <section className="cowork__home py-5">
      <div className="container py-lg-5">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1 my-2">
            {/* <div className=""> */}
            <h4 className="cowork--title py-2">The perfect Workspace for you</h4>
            <p className="cowork--para py-2 m-0">
              Whether you&apos;re an individual or a team, we have an affordable
              and flexible space just for you.
            </p>
            <div className="my-4 my-lg-5">
              <Link to="/program/innovation-hub" className="link fw-bold py-3 px-5 text-decoration-none" type="button">
                See available options
              </Link>
            </div>
          </div>
          <div className="col-md-1 order-md-1" />
          <div className="col-md-5 order-1 order-md-2">
            <img src="/images/home/cowork.jpg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoworkHome;
