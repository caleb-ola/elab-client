import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function BookingsDetailsContent() {
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
    axios.get(`https://elab-api.herokuapp.com/api/v1/bookings/${params.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('elAdmT')}`,
      },
    }).then((response) => {
      // console.log(response);
      const { data } = response.data;
      setLoading(false);
      setSkeleton();
      setBody(
        <div className="row content__details">
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Plan
            </p>
            <p className="content--subtext">
              {data.plan}
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
              Amount
            </p>
            <p className="content--subtext">
              &#x20A6;
              {data.amount.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Start Date
            </p>
            <p className="content--subtext">
              <Moment format="Do MMMM, YYYY">
                {data.startDate}
              </Moment>
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Expiry Date
            </p>
            <p className="content--subtext">
              <Moment format="Do MMMM, YYYY">
                {data.expDate}
              </Moment>
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Created On
            </p>
            <p className="content--subtext">
              <Moment format="Do MMMM, YYYY">
                {data.createdAt}
              </Moment>
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Duration
            </p>
            <p className="content--subtext">
              {data.duration}
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Number of People
            </p>
            <p className="content--subtext">
              {data.noOfPersons > 1 ? `${data.noOfPersons} people` : `${data.noOfPersons} person` }
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Internet Usage
            </p>
            <p className="content--subtext">
              {data.useInternet === true ? 'Yes' : 'No'}
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Office Address Usage
            </p>
            <p className="content--subtext">
              {data.useOfficeAddress === true ? 'Yes' : 'No'}
            </p>
          </div>
          <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Payment Status
            </p>
            <p className="content--subtext">
              {data.paymentStatus ? 'Paid' : 'Unpaid'}
            </p>
          </div>

          {/* <div className="col-md-6 col-lg-4 my-3">
            <p className="content--headtext">
              Status
            </p>
            <p className="content--subtext">
              Active
            </p>
          </div> */}
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
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Booking Details</h4>
        </div>
        <div className="col-md-6 p-0 text-center text-md-end">
          <span
            className="content__back dashnav__logout "
            aria-hidden="true"
            onClick={() => history.back()}
          >
            <i className="fa-solid fa-arrow-left pe-2" />
            <span className="py-2 px-1 text-decoration-none fw-bold">
              Back
            </span>
          </span>
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

export default BookingsDetailsContent;
