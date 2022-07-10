import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
// import { useParams } from 'react-router-dom';

function ConsultDetailsContent() {
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

  const params = useParams();
  useEffect(() => {
    setLoading(false);
    axios.get(`https://elab-api.herokuapp.com/api/v1/consultations${params.slug}`).then((response) => {
      // console.log(response);
      const { data } = response.data;
      setSkeleton();
      setBody(
        <div className="row content__details">
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Name
            </p>
            <p className="content--subtext">
              {data.name}
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Email Address
            </p>
            <p className="content--subtext">
              {data.email}
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Phone Number
            </p>
            <p className="content--subtext">
              {data.number}
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Company
            </p>
            <p className="content--subtext">
              {data.company}
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Available Date
            </p>
            <p className="content--subtext">
              <Moment format="Do MMMM, YYYY">
                {data.date}
              </Moment>
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Available Time
            </p>
            <p className="content--subtext">
              {data.time}
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Location
            </p>
            <p className="content--subtext">
              {data.location}
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Type of Consultation
            </p>
            <p className="content--subtext">
              {data.type}
            </p>
          </div>
          <div className="col-lg-8 my-3">
            <p className="content--headtext">
              Consultation Need
            </p>
            <p className="content--subtext">
              {data.details}
            </p>
          </div>
        </div>,
      );
    }, (error) => {
      // console.log(error);
      if (error.response) {
        error.response.data.errors.map((err) => toast.error(`${err.message}`, {
          position: 'top-right',
          autoClose: 15000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }));
      } else {
        toast.error('Ops, something went wrong, please try again', {
          position: 'top-right',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  }, []);
  return (
    <div className="content px-4">
      <ToastContainer />
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
