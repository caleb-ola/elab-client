import React from 'react';
import TrainingCard from '../ResuableComponents/TrainingCard';

function Training() {
  return (
    <div className="training py-5">
      <div className="container">
        <div className="partner__header text-center mx-auto">
          <h4 className="partnet--title ">
            Training Opportunities
          </h4>
          <p className="pt-4">
            The beautiful thing about learning is that nobody can take it away from you.
            And that’s why we can’t stop delivering exceptional training for all our stakeholders...
          </p>
        </div>
        <div className="row py-lg-5">
          <div className="col-md-6 p-3">
            <TrainingCard
              image="/images/home/training.png"
              title="Header text for
                training title stays here"
              text="Urna volutpat, ullamcorper egestas et. Amet risus ut. Urna volutpat, ullamcorper."
            />
          </div>
          <div className="col-md-6 p-3">
            <TrainingCard
              image="/images/home/training.png"
              title="Header text for
               training title stays here"
              text="Urna volutpat, ullamcorper egestas et. Amet risus ut. Urna volutpat, ullamcorper."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;
