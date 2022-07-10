import React from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonCourseCardDash() {
  return (
    <div className="card p-3 pb-0 border-0 w-100 text-decoration-none">
      <Skeleton height={180} width="100%" />
      <div className="card-body px-0">
        <h5 className="card-title">
          <Skeleton height={30} width="75%" />
        </h5>
        <p className="card-text lh-sm my-3">
          <Skeleton count={2} />
        </p>

        {/* <Skeleton width={"100%"} height={6} />
        <Skeleton width={"40%"} /> */}
      </div>
    </div>
  );
}

export default SkeletonCourseCardDash;
