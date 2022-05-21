import React from 'react';
import Cta from '../../ResuableComponents/Cta';

function Member() {
  return (
    <div className="member py-5">
      <div className="container-fluid pb-lg-5 mb-lg-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="container ps-lg-5 ms-lg-5 pe-lg-5">
              <h4>
                Become a part of an exclusive community for entrepreneurs and tech-enthusiasts.
              </h4>
              <div className="mt-3 mt-lg-5">
                <Cta text="Be a Member, Today!" />
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 h-100 p-0"
          >
            <img src="/images/program/bg.png" alt="" className="img-fluid" />
            {' '}

          </div>
        </div>
      </div>

    </div>
  );
}

export default Member;
