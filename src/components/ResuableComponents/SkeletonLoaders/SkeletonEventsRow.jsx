import React from 'react';
import SkeletonCard from './SkeletonCard';

function SkeletonEventRow() {
  return (
    <div className="row g-4">
      <div className="col-md-6 col-lg-4 my-2 p-lg-4">
        <SkeletonCard />
      </div>
      <div className="col-md-6 col-lg-4 my-2 p-lg-4">
        <SkeletonCard />
      </div>
      <div className="col-md-6 col-lg-4 my-2 p-lg-4">
        <SkeletonCard />
      </div>
    </div>
  );
}

export default SkeletonEventRow;
