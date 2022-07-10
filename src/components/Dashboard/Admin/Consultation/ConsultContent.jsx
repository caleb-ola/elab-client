import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Pagination from '../../../ResuableComponents/Pagination';
import DashboardEmpty from '../DashboardReusable/DashboardEmpty';
import SkeletonTable from '../DashboardReusable/SkeletonTable';
// import Data from '../data';

function ConsultContent() {
  const navigate = useNavigate();
  const [deleteState, setDeleteState] = useState(
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
                    // onClick={() => deleteCourse(item.id)}
              data-bs-dismiss="modal"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </div>
    </div>,
  );
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <SkeletonTable />,
  );
  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    RenderData();
  }, []);

  const RenderData = () => {
    axios.get('https://elab-api.herokuapp.com/api/v1/consultations').then((response) => {
      // console.log(response);
      setLoading(false);
      setSkeleton();
      if (response.data.data.length === 0) {
        setBody(
          <DashboardEmpty header="No Consultation" subtext="Consultations are yet to be submitted by any user." />,
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
                  <th>Phone Number</th>
                  <th>Created On</th>
                </tr>
              </thead>
              <tbody>
                {
                      response.data.data.map((item, index) => (
                        <tr key={item.id} className="content__card--row" onClick={() => navigate(`/dashboard/admin/consultation/${item.slug}`)}>
                          <td className="py-3 text-center">{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.number}</td>
                          <td>
                            <Moment format="Do MMMM, YYYY">
                              {item.createddAt}
                            </Moment>
                          </td>
                          {/* <td className="text-end">
                            <Link to="/dashboard/admin/edit-impact/:slug">
                              <span
                                className="fa-stack fa-1x custom-c mx-2"
                              >
                                <i className="fas fa-circle fa-stack-2x" />
                                <i className="fa-solid fa-pen-to-square
                                fa-stack-1x custom-c--icon" />
                              </span>
                            </Link>
                          </td> */}
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
                                          onClick={() => DeleteConsult(item.id)}
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
  };

  const DeleteConsult = (slug) => {
    axios.delete(`https://elab-api.herokuapp.com/api/v1/consultations/${slug}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('elAdmT')}`,
      },
    }).then((response) => {
      // console.log(response);
      toast.success(
        response?.data?.message || 'You successfully deleted a consultation.',
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
      // eslint-disable-next-line no-undef
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
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Consultation</h4>
        </div>
      </div>
      <div
        className="content__card w-100 py-5 "
        style={{
          overflowX: 'auto',
        }}
      >
        <div className="content__search px-5">
          <input type="text" placeholder="Enter a name to search" className="name p-2 px-4 mb-2 content__card--input " id="name" />
          <i className="fa-solid fa-magnifying-glass content__card--icon" />
        </div>
        <hr />
        <div className="px-5">
          {loading ? skeleton : body}
        </div>
      </div>
    </div>
  );
}

export default ConsultContent;
