import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import DashboardEmpty from '../DashboardReusable/DashboardEmpty';
import SkeletonTable from '../DashboardReusable/SkeletonTable';

function VolunteerContent() {
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
    axios.get('https://elab-api.herokuapp.com/api/v1/volunteers').then(
      (response) => {
        // console.log(response);
        setLoading(false);
        setSkeleton();
        if (response.data.data.length === 0) {
          setBody(
            <DashboardEmpty header="No Volunteer" subtext="There are currently no volunteers, but you can add a new volunteer." />,
          );
        } else {
          setBody(
            <table className="w-100 text-start px-5 mx-2 mx-lg-5">
              <thead>
                <tr className="fw-bold">
                  <th className="px-3 ps-0 py-3">S/N</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Project</th>
                  <th>Skills</th>
                  <th>Created On</th>
                </tr>
              </thead>
              <tbody>
                {
                      response.data.data.map((item, index) => (
                        <tr key={item.id}>
                          <td className="py-3">{index + 1}</td>
                          <td className="">
                            {item.name}
                          </td>
                          <td>{item.email}</td>
                          <td>
                            {item.project}
                          </td>
                          <td>
                            {item.skills.map((skill) => skill)}
                          </td>
                          <td>
                            <Moment format="Do MMMM, YYYY">
                              {item.createddAt}
                            </Moment>
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
                                          onClick={() => DeleteContent(item.id)}
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
            </table>,
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

  const DeleteContent = (id) => {
    axios.delete(`https://elab-api.herokuapp.com/api/v1/volunteers/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('elAdmT')}`,
      },
    }).then((response) => {
      // console.log(response);
      toast.success(
        response?.data?.message || 'You successfully removed a volunteer.',
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
          <h4 className="m-0">Volunteers</h4>
        </div>
        <div className="col-md-6 p-0 text-center text-md-end">
          <Link to="/dashboard/admin/add-volunteers" className="link px-4 py-2 text-decoration-none fw-bold">Add a Volunteer</Link>
        </div>
      </div>
      <div className="content__card w-100 p-5">
        {loading ? skeleton : body}
      </div>
    </div>
  );
}

export default VolunteerContent;
