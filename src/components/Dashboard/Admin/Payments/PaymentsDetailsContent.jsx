import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function PaymentsDetailsContent() {
  const params = useParams();

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
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/payments/${params.id}`).then(
      (response) => {
        const { data } = response.data;
        // console.log(data);
        setBody(
          <div className="row content__details">
            <div className="col-md-6 col-lg-4 my-3">
              <p className="content--headtext">
                Payment for
              </p>
              <p className="content--subtext">
                {data.purpose}
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
                Amount Paid(&#x20A6;)
              </p>
              <p className="content--subtext">
                {data.amount.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </p>
            </div>
            <div className="col-md-6 col-lg-4 my-3">
              <p className="content--headtext">
                Payment date
              </p>
              <p className="content--subtext">
                <Moment format="Do MMMM, YYYY">
                  {data.CreatedAt}
                </Moment>
              </p>
            </div>
            <div className="col-md-6 col-lg-4 my-3">
              <p className="content--headtext">
                Payment reference
              </p>
              <p className="content--subtext">
                {data.reference}
              </p>
            </div>
          </div>,
        );
      },
      (error) => {
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
      },
    );
  }, []);
  return (
    <div className="content px-4">
      <ToastContainer />
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

export default PaymentsDetailsContent;
