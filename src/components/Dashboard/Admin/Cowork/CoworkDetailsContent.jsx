import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// import { useParams } from 'react-router-dom';

function CoworkDetailsContent() {
//   const params = useParams();

  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
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
        <div className="row align-items-center">
          <div className="col-8 ">
            <Skeleton height={25} className="table__skeleton" />
          </div>
          <div className="col-2">
            {' '}
            <Skeleton height={35} className="table__skeleton" />
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
        <div className="row align-items-center">
          <div className="col-8 ">
            <Skeleton height={25} className="table__skeleton" />
          </div>
          <div className="col-2 text-end">
            {' '}
            <Skeleton height={35} className="table__skeleton" />
          </div>
          <div className="col-1 text-end">
            <Skeleton
              height={30}
              width={30}
              circle
              className="table__skeleton"
            />
          </div>
          <div className="col-1 text-start">
            <Skeleton
              height={30}
              width={30}
              circle
              className="table__skeleton"
            />
          </div>
        </div>
      </div>
    </div>,
  );
  useEffect(() => {
    setLoading(false);
    setSkeleton();
    setBody(
      <div className="row content__details">
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Name
          </p>
          <p className="content--subtext">
            Ikeoluwa Julianah
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Email Address
          </p>
          <p className="content--subtext">
            ikeoluwa@julianah.com
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Date
          </p>
          <p className="content--subtext">
            23rd Nov; 2022
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Duration
          </p>
          <p className="content--subtext">
            Daily
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Number of Days
          </p>
          <p className="content--subtext">
            3
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Number of Person
          </p>
          <p className="content--subtext">
            2
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Internet Usage
          </p>
          <p className="content--subtext">
            No
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Office Address Usage
          </p>
          <p className="content--subtext">
            No
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Status
          </p>
          <p className="content--subtext">
            Active
          </p>
        </div>
      </div>,
    );
  }, []);
  return (
    <div className="content px-4">
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Co-work</h4>
        </div>
      </div>
      <div
        className="content__card w-100 py-5 px-5"
        style={{
          overflowX: 'auto',
        }}
      >
        <div className="px-5">
          {loading ? skeleton : body}
        </div>
      </div>
    </div>
  );
}

export default CoworkDetailsContent;
