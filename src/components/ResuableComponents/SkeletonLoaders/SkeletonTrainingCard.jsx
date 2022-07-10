import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonTrainingCard() {
  return (
    <div className="training__card p-3 p-lg-5 border-0 w-100 text-decoration-none">
      <div className="row align-items-center">
        <div className="col-md-3 my-2 text-center ">
          <Skeleton circle height={120} width={120} />
        </div>
        <div className="col-md-9 my-2  ">
          <h5 className="card-title">
            <Skeleton height={50} width="75%" />
          </h5>
          <p className="card-text lh-sm my-3 mb-0">
            <Skeleton count={3} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkeletonTrainingCard;
