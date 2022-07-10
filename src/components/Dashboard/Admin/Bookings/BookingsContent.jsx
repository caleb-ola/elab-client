import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Pagination from '../../../ResuableComponents/Pagination';
import DashboardEmpty from '../DashboardReusable/DashboardEmpty';
import SkeletonTable from '../DashboardReusable/SkeletonTable';

function BookingsContent() {
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <SkeletonTable />,
  );
  const [deleteState, setDeleteState] = useState(
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Confirm Delete
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            You are about to delete an entry, are you sure you want to do
            this?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </div>
    </div>,
  );
  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    RenderData();
  }, []);

  const RenderData = () => {
    axios.get('https://elab-api.herokuapp.com/api/v1/bookings', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('elAdmT')}`,
      },
    }).then(
      (response) => {
        // console.log(response);
        setLoading(false);
        setSkeleton();
        if (response.data.data.length === 0) {
          setBody(
            <DashboardEmpty header="No Bookings" subtext="There are currently no bookings for available workspaces." />,
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
                    <th className="pe-4">Name</th>
                    <th>Email Address</th>
                    <th>Amount(&#x20A6;)</th>
                    <th>Duration</th>
                    {/* <th>Status</th> */}
                    <th>Created On</th>
                  </tr>
                </thead>
                <tbody>
                  {
                      response.data.data.map((item, index) => (
                        <tr key={item.id} className="">
                          <td className="py-3 text-center">{index + 1}</td>
                          <td>{item.plan}</td>
                          <td>{item.email}</td>
                          <td>
                            {item.amount.toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          </td>
                          <td>{item.duration}</td>
                          {/* <td>
                            {item.status === 'active'
                              ? <span className="content__card--active px-4 py-1">active</span>
                              : <span className="content__card--expired px-3 py-1">expired</span>}
                          </td> */}
                          <td>
                            <Moment format="Do MMMM, YYYY">
                              {item.createdAt}
                            </Moment>
                          </td>
                          <td>
                            <Link to={`/dashboard/admin/workspace-bookings/${item.id}`} className="link text-decoration-none px-3 py-1 fw-bold">
                              See more...
                            </Link>
                          </td>
                          <td className="text-start">
                            <span
                              className="fa-stack fa-1x custom-c mx-2"
                              role="button"
                              aria-hidden="true"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={() => setDeleteState(
                                <div
                                  className="modal fade "
                                  id="staticBackdrop"
                                  data-bs-backdrop="static"
                                  data-bs-keyboard="false"
                                  tabIndex="-1"
                                  aria-labelledby="staticBackdropLabel"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                      <div className="modal-header  border-0">
                                        <h5
                                          className="modal-title"
                                          id="staticBackdropLabel"
                                        >
                                          Confirm Delete
                                        </h5>
                                        <button
                                          type="button"
                                          className="btn-close shadow-none"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        />
                                      </div>
                                      <div className="modal-body">
                                        You are about to delete an entry, are
                                        you sure you want to do this?
                                      </div>
                                      <div className="modal-footer  border-0">
                                        <button
                                          type="button"
                                          className="btn btn-secondary shadow-none"
                                          data-bs-dismiss="modal"
                                        >
                                          Cancel
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-danger shadow-none"
                                          // eslint-disable-next-line no-use-before-define
                                          onClick={() => DeleteBooking(item.id)}
                                          data-bs-dismiss="modal"
                                        >
                                          Confirm Delete
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>,
                              )}
                            >
                              <i className="fas fa-circle fa-stack-2x" />
                              <i className="fa-solid fa-trash fa-stack-1x custom-c--icon" />
                            </span>
                          </td>
                        </tr>
                      ))
                }
                </tbody>
              </table>
              ,
              <div className="pt-4 px-5">
                <Pagination />
              </div>
            </>,
          );
        }
      },
      (error) => {
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
  };

  const DeleteBooking = (id) => {
    axios.delete(`https://elab-api.herokuapp.com/api/v1/bookings/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('elAdmT')}`,
      },
    }).then((response) => {
      // console.log(response);
      toast.success(
        response?.data?.message || 'You successfully deleted a booking.',
        {
          position: 'top-right',
          autoClose: 15000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
      RenderData();
    }, (error) => {
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
  };
  return (
    <div className="content px-4">
      {deleteState}
      <ToastContainer />
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Workspace Bookings</h4>
        </div>
      </div>
      <div
        className="content__card w-100 py-5 "
        style={{
          overflowX: 'auto',
        }}
      >
        <div className="content__search px-5">
          <div className="row">
            <div className="col-lg-6 text-start">
              <input type="text" placeholder="Enter a name to search" className="name p-2 px-4 mb-2 content__card--input " id="name" />
              <i className="fa-solid fa-magnifying-glass content__card--icon" />
            </div>
          </div>
        </div>
        <hr />
        <div className="px-5">
          {loading ? skeleton : body}
        </div>
      </div>
    </div>
  );
}

export default BookingsContent;
