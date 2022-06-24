import React from 'react';
import CoworkCard from '../../ResuableComponents/CoworkCard';

function Available() {
  return (
    <div id="available" className="available pb-5">
      <div className="container pb-lg-5">
        <div className="partner__header text-center mx-auto my-2">
          <h2 className="event__header--title">Available Packages</h2>
          <p className="events__header--text">
            Select a package that best fits your need.
          </p>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-lg-4 my-3 px-3">
            <CoworkCard title="Private Team Workspace" text="2" button="See Details" image="/images/cowork/cowork1.png" path="/program/innovation-hub/:slug" />
          </div>
          <div className="col-md-6 col-lg-4 my-3 px-3">
            <CoworkCard title="Private Team Workspace" text="2" button="See Details" image="/images/cowork/cowork1.png" path="/program/innovation-hub/:slug" />
          </div>
          <div className="col-md-6 col-lg-4 my-3 px-3">
            <CoworkCard title="Private Team Workspace" text="2" button="See Details" image="/images/cowork/cowork1.png" path="/program/innovation-hub/:slug" />
          </div>
          <div className="col-md-6 col-lg-4 my-3 px-3">
            <CoworkCard title="Private Team Workspace" text="2" button="See Details" image="/images/cowork/cowork1.png" path="/program/innovation-hub/:slug" />
          </div>
          <div className="col-md-6 col-lg-4 my-3 px-3">
            <CoworkCard title="Private Team Workspace" text="2" button="See Details" image="/images/cowork/cowork1.png" path="/program/innovation-hub/:slug" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Available;
