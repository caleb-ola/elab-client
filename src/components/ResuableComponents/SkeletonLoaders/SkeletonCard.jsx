import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonCard() {
  return (
    <div className="card events__card pb-0 border-0 w-100 text-decoration-none">
      <Skeleton height={190} width="100%" />
      <div className="card-body p-3">
        <h5 className="card-title">
          <Skeleton height={40} width="75%" />
        </h5>
        <p className="card-text lh-sm my-3">
          <Skeleton count={3} />
        </p>
      </div>
    </div>
  );
}

export default SkeletonCard;
