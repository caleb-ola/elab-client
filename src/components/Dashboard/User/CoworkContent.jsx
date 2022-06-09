import React from 'react';
import CoworkCard from '../../ResuableComponents/CoworkCard';

function CoworkContent() {
  return (
    <div className="cowork__content py-5">
      <div className="container py-lg-5">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <CoworkCard title="Private Team Workspace" text="2" button="See Details" image="/images/cowork/cowork1.png" path="/dashboard/user/cowork/:slug" />
          </div>
          <div className="col-md-6 col-lg-4" />
          <div className="col-md-6 col-lg-4" />
        </div>
      </div>
    </div>
  );
}

export default CoworkContent;
