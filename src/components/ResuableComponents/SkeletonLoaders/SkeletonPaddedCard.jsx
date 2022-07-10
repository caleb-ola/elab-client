import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonPaddedCard() {
  return (
    <div className="card paddedcard__link border-0 p-4 px-lg-5 py-lg-5 pb-lg-4 pb-2 h-100">
      <h6 className="paddedcard__title fw-bold pb-3">
        <Skeleton height={40} width="70%" />
      </h6>
      <Skeleton height={280} width="100%" />
      <div className="row my-4">
        <div className="col-md-6 text-center text-md-start">
          <Skeleton height={20} width="75%" />
        </div>
        <div className="col-md-6 text-center text-md-end">
          <Skeleton height={20} width="75%" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonPaddedCard;
