import React from 'react';
import { Link } from 'react-router-dom';

function Partnership() {
  return (
    <div className="partnership">
      <div className="container-fluid ">
        <div
          className="row align-items-center partnership__left py-4 py-lg-0"
          style={{
            backgroundImage: "url('/images/program/union.png')",
            backgroundSize: '70%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 70px',
          }}
        >
          <div className="col-lg-6">
            <div className="container ps-lg-5 ms-lg-5 pe-lg-5">
              <h4 className="partnership__left--text mx-auto">
                Interested in partnering with us or want to invest?
                {' '}
                <div className="py-3 py-lg-5 px-0">
                  <Link to="/contact-us" type="button" className=" link-two btn fw-bold py-3 px-5 me-0">
                    Partner with us
                    {' '}
                  </Link>
                </div>
              </h4>

            </div>
          </div>
          <div
            className="col-lg-6 h-100 p-0"
          >
            <img src="/images/program/partnership.png" alt="" className="img-fluid partnership--image w-100" />
            {' '}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Partnership;
