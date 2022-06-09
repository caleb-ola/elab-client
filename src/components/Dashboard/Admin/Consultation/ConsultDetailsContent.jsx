import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// import { useParams } from 'react-router-dom';

function ConsultDetailsContent() {
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
            Phone Number
          </p>
          <p className="content--subtext">
            +2347065783412
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Company
          </p>
          <p className="content--subtext">
            Ennovate Lab
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Available Date
          </p>
          <p className="content--subtext">
            23rd November, 2022
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Available Date
          </p>
          <p className="content--subtext">
            9PM
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Location
          </p>
          <p className="content--subtext">
            Los Angeles, CA
          </p>
        </div>
        <div className="col-md-6 col-lg-4 my-3">
          <p className="content--headtext">
            Type of Consultation
          </p>
          <p className="content--subtext">
            Innovation Challenge
          </p>
        </div>
        <div className="col-lg-8 my-3">
          <p className="content--headtext">
            Consultation Need
          </p>
          <p className="content--subtext">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English.
          </p>
        </div>
      </div>,
    );
  }, []);
  return (
    <div className="content px-4">
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Consultation</h4>
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

export default ConsultDetailsContent;
