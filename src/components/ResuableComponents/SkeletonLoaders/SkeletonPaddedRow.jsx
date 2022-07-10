import React from 'react';
import SkeletonPaddedCard from './SkeletonPaddedCard';

function SkeletonPaddedRow() {
  return (
    <div className="row g-4 mb-3">
      <div className="col-md-6 col-lg-4 my-2 p-lg-4">
        <SkeletonPaddedCard />
      </div>
      <div className="col-md-6 col-lg-4 my-2 p-lg-4">
        <SkeletonPaddedCard />
      </div>
      <div className="col-md-6 col-lg-4 my-2 p-lg-4">
        <SkeletonPaddedCard />
      </div>
    </div>
  );
}

export default SkeletonPaddedRow;
