import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Pagination from '../../../ResuableComponents/Pagination';
import DashboardEmpty from '../DashboardReusable/DashboardEmpty';
import SkeletonTable from '../DashboardReusable/SkeletonTable';

function PaymentsContent() {
  const navigate = useNavigate();
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [paginate, setPaginate] = useState({
    start: 0,
    end: 10,
    // all: 0,
  });
  const [skeleton, setSkeleton] = useState(
    <SkeletonTable />,
  );

  const onNext = () => {
    setPaginate((prev) => ({
      start: prev.start + 10,
      end: prev.end + 10,
    }));
  };
  const onPrev = () => {
    setPaginate((prev) => ({
      start: prev.start - 10,
      end: prev.end - 10,
    }));
  };
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/payments').then(
      (response) => {
        // console.log(response);
        setLoading(false);
        setSkeleton();
        if (response.data.data.length === 0) {
          setBody(
            <DashboardEmpty header="No Payment" subtext="No payment has been made by any user for our resources." />,
          );
        } else {
          setBody(
            <>
              <table
                className="w-100 "
              >
                <thead>
                  <tr className="fw-bold">
                    <th className="ps-0 px-3 py-3 text-center">S/N</th>
                    {/* <th className="pe-4">Name</th> */}
                    <th>Email Address</th>
                    <th>Amount(&#x20A6;)</th>
                    {/* <th>Status</th> */}
                    <th>Created On</th>
                  </tr>
                </thead>

                <tbody>
                  {
                        response.data.data.slice(paginate.start, paginate.end).map(
                          (item, index) => (
                            <tr key={item.id} className="content__card--row" onClick={() => navigate(`/dashboard/admin/payments/${item.id}`)}>
                              <td className="py-3 text-center">{index + 1}</td>
                              <td>{item.email}</td>
                              <td>
                                {item.amount.toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                              </td>
                              {/* <td>
                              {item.status === 'active'
                                ? <span className="content__card--active px-4 py-1">active</span>
                                : <span className="content__card--expired px-3 py-1">expired</span>}
                            </td> */}
                              <td>
                                <Moment format="Do MMMM, YYYY">
                                  {item.CreatedAt}
                                </Moment>
                              </td>
                            </tr>
                          ),
                        )
                }
                </tbody>
              </table>
              {
                response.data.data.length > 10 && (
                <div className="pt-4 px-5">
                  <Pagination
                    start={paginate.start}
                    end={paginate.end}
                    length={response.data.data.length}
                    onPrev={onPrev}
                    onNext={onNext}
                  />
                </div>
                )
              }
            </>,
          );
        }
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
  }, [paginate]);

  return (
    <div className="content px-4">
      <ToastContainer />
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Payments</h4>
        </div>
      </div>
      <div
        className="content__card w-100 py-5 "
        style={{
          overflowX: 'auto',
        }}
      >
        {/* <div className="content__search px-5">
          <div className="row">
            <div className="col-lg-6 text-start">
              <input type="text" placeholder="Enter a name to search"
              className="name p-2 px-4 mb-2 content__card--input " id="name" />
              <i className="fa-solid fa-magnifying-glass content__card--icon" />
            </div>
          </div>
        </div>
        <hr /> */}
        <div className="px-5">
          {loading ? skeleton : body}
        </div>
      </div>
    </div>
  );
}

export default PaymentsContent;
