import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonTable() {
  return (
    <div className="row justify-content-center">
      <div className="">
        <Skeleton height={50} className="table__skeleton" />
        <div className="row align-items-center mt-3">
          <div className="col-10 ">
            <Skeleton height={30} className="table__skeleton" />
          </div>
          <div className="col-1 text-end">
            <Skeleton
              height={30}
              width={30}
              circle
              className="table__skeleton"
            />
          </div>
          <div className="col-1">
            <Skeleton
              height={30}
              width={30}
              circle
              className="table__skeleton"
            />
          </div>
        </div>
        <div className="row align-items-center mt-3">
          <div className="col-10 ">
            <Skeleton height={30} className="table__skeleton" />
          </div>
          <div className="col-1 text-end">
            <Skeleton
              height={30}
              width={30}
              circle
              className="table__skeleton"
            />
          </div>
          <div className="col-1">
            <Skeleton
              height={30}
              width={30}
              circle
              className="table__skeleton"
            />
          </div>
        </div>
        <div className="row align-items-center mt-3">
          <div className="col-10 ">
            <Skeleton height={30} className="table__skeleton" />
          </div>
          <div className="col-1 text-end">
            <Skeleton
              height={30}
              width={30}
              circle
              className="table__skeleton"
            />
          </div>
          <div className="col-1">
            <Skeleton
              height={30}
              width={30}
              circle
              className="table__skeleton"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonTable;
