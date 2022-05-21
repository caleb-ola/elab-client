import React from 'react';
import PaddedCard from '../../ResuableComponents/PaddedCard';

function AllNonProfit() {
  return (
    <div className="my-5">
      <div className="container pt-lg-5">
        <div className="row">
          <div className="col-md-6 col-lg-4 px-3 px-lg-4 py-3 py-lg-4">
            <PaddedCard
              image="/images/program/non-profit1.png"
              title="Non-profit title
            goes here"
              button="Learn More"
            />
          </div>
          <div className="col-md-6 col-lg-4 px-3 px-lg-4 py-3 py-lg-4">
            <PaddedCard
              image="/images/program/non-profit2.png"
              title="Non-profit title
            goes here"
              button="Learn More"
            />
          </div>
          <div className="col-md-6 col-lg-4 px-3 px-lg-4 py-3 py-lg-4">
            <PaddedCard
              image="/images/program/non-profit3.png"
              title="Non-profit title
            goes here"
              button="Learn More"
            />
          </div>
          <div className="col-md-6 col-lg-4 px-3 px-lg-4 py-3 py-lg-4">
            <PaddedCard
              image="/images/program/non-profit4.png"
              title="Non-profit title
            goes here"
              button="Learn More"
            />
          </div>
          <div className="col-md-6 col-lg-4 px-3 px-lg-4 py-3 py-lg-4">

            <PaddedCard
              image="/images/program/non-profit5.png"
              title="Non-profit title
            goes here"
              button="Learn More"
            />

          </div>
        </div>
      </div>

    </div>
  );
}

export default AllNonProfit;
