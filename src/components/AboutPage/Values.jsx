import React from 'react';

function Values() {
  return (
    <div className="values py-5">
      <div className="container py-lg-5">
        <div className="values__header mx-auto text-center">
          <h4 className="values__header--title py-3">Our Guiding Values</h4>
          <p className="values__header--text">
            Ennovate Lab is an ark built
            on the foundations of redemptive entrepreneurship to preserve posterity
            in the marketplace as well as to template kingdom enterprise for the age to come.
          </p>
        </div>
        <div className="row text-center py-2">
          <div className="col-md-6 col-lg-4 my-2 my-lg-3">
            <div className="card vision__card h-100">
              <img src="/images/about/community.png" className="card-img-top img-fluid values__card--icon my-2 mx-auto " alt="..." />
              <div className="card-body px-3 px-md-5">
                <h6 className="card-title fw-bold">Community-driven</h6>
                <p className="card-text">We desire to see underserved university communities thrive. </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-3">
            <div className="card vision__card h-100">
              <img src="/images/about/community.png" className="card-img-top img-fluid values__card--icon my-2 mx-auto " alt="..." />
              <div className="card-body px-3 px-md-5">
                <h6 className="card-title fw-bold">Creativity</h6>
                <p className="card-text">Creativity is a unique part of our culture which drives everything we do.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-3">
            <div className="card vision__card h-100">
              <img src="/images/about/teamwork.png" className="card-img-top img-fluid values__card--icon my-2 mx-auto " alt="..." />
              <div className="card-body px-3 px-md-5">
                <h6 className="card-title fw-bold">Teamwork</h6>
                <p className="card-text">At Ennovate Lab, every one person is as important as the other person. </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-3">
            <div className="card vision__card h-100">
              <img src="/images/about/integrity.png" className="card-img-top img-fluid values__card--icon my-2 mx-auto " alt="..." />
              <div className="card-body px-3 px-md-5">
                <h6 className="card-title fw-bold">Integrity</h6>
                <p className="card-text">Integrity is the force that knits us all together from the 4 founders to the newest intern.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-3">
            <div className="card vision__card h-100">
              <img src="/images/about/empathy.png" className="card-img-top img-fluid values__card--icon my-2 mx-auto " alt="..." />
              <div className="card-body px-3 px-md-5">
                <h6 className="card-title fw-bold">Empathy</h6>
                <p className="card-text">
                  Empathy is non-negotiable. It is what allows us to understand
                  non-consumption and build for market-creating innovations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-3">
            <div className="card vision__card h-100">
              <img src="/images/about/cama.png" className="card-img-top img-fluid values__card--icon my-2 mx-auto " alt="..." />
              <div className="card-body px-3 px-md-5">
                <h6 className="card-title fw-bold">Camaraderie</h6>
                <p className="card-text">We hold dearly the pervading atmosphere of familyhood and friendship both in the workplace and in our relationship with other stakeholders. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
