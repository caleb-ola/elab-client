import React from 'react';
import TrainingCard from '../../ResuableComponents/TrainingCard';

function AllTraining() {
  return (
    <div className="trainings py-5">
      <div className="container py-lg-5">
        <div className="partner__header text-center mx-auto pb-4">
          <h4 className="partner--title ">
            Services Provided
          </h4>
          <p className="pt-3">
            We are ready to serve you. Take a deep dive now
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 my-3 px-3 my-lg-4 px-lg-4">
            <TrainingCard
              image="/images/home/training.png"
              title="Header text for training title stays here"
              text="Urna volutpat, ullamcorper egestas et. Amet risus ut. Urna volutpat, ullamcorper."
            />
          </div>
          <div className="col-lg-6 my-3 px-3 my-lg-4 px-lg-4">
            {' '}
            <TrainingCard
              image="/images/home/training.png"
              title="Header text for training title stays here"
              text="Urna volutpat, ullamcorper egestas et. Amet risus ut. Urna volutpat, ullamcorper."
            />
          </div>
          {' '}
          <div className="col-lg-6 my-3 px-3 my-lg-4 px-lg-4">
            <TrainingCard
              image="/images/home/training.png"
              title="Header text for training title stays here"
              text="Urna volutpat, ullamcorper egestas et. Amet risus ut. Urna volutpat, ullamcorper."
            />
          </div>
          <div className="col-lg-6 my-3 px-3 my-lg-4 px-lg-4">
            {' '}
            <TrainingCard
              image="/images/home/training.png"
              title="Header text for training title stays here"
              text="Urna volutpat, ullamcorper egestas et. Amet risus ut. Urna volutpat, ullamcorper."
            />
          </div>
          <div className="col-lg-6 my-3 px-3 my-lg-4 px-lg-4">
            <TrainingCard
              image="/images/home/training.png"
              title="Header text for training title stays here"
              text="Urna volutpat, ullamcorper egestas et. Amet risus ut. Urna volutpat, ullamcorper."
            />
          </div>
          <div className="col-lg-6 my-3 px-3 my-lg-4 px-lg-4">
            {' '}
            <TrainingCard
              image="/images/home/training.png"
              title="Header text for training title stays here"
              text="Urna volutpat, ullamcorper egestas et. Amet risus ut. Urna volutpat, ullamcorper."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTraining;
