import React from 'react';
import TrainingCard from '../../ResuableComponents/TrainingCard';

function AllTraining() {
  return (
    <div className="trainings py-5">
      <div className="container py-lg-5">
        <div className="partner__header text-center mx-auto pb-4">
          <h4 className="partner--title ">
            Available Trainings
          </h4>
          <p className="pt-3">
            Our trainings are the best. We host trainings,
            webinars, and conferences that you’ll actually want to stick around for.
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
