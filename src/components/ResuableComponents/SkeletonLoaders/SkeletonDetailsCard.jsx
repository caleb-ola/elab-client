import React from 'react';
import Skeleton from 'react-loading-skeleton';

function SkeletonDetailsCard() {
  return (
    <div className="detail-card p-4 p-lg-5 border-0 mx-auto">
      <Skeleton height={180} width="100%" />

      <div className="card-body px-0 mt-2">
        <h5 className="card-title my-1">
          {' '}
          <Skeleton width="40%" />
        </h5>

        <div className="row my-2">
          <div className="col">
            <Skeleton width="70%" />
          </div>
          <div className="col">
            <small>
              <Skeleton width="50%" />
            </small>
          </div>
        </div>
        <div>
          <div>
            <Skeleton height={50} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonDetailsCard;
