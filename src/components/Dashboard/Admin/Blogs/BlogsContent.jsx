import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import Pagination from '../../../ResuableComponents/Pagination';
import Data from '../data';

function BlogsContent() {
  const [deleteState, setDeleteState] = useState();
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
      <table className="w-100 text-start px-5 mx-2 mx-lg-5">
        <thead>
          <tr className="fw-bold">
            <th className="px-3 ps-0 py-3">S/N</th>
            <th>Blog title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Created On</th>
          </tr>
        </thead>

        <tbody>
          {
                  Data[8].map((item, index) => (
                    <tr key={item.id}>
                      <td className="py-3">{index + 1}</td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>
                        <span className={item.status === 'saved' ? 'content--published px-4 py-1' : 'content--saved px-3 py-1'}>
                          {item.status}
                        </span>
                      </td>
                      <td>{item.CreatedAt}</td>
                      <td className="text-end">
                        <Link to="/dashboard/admin/edit-blog/:slug">
                          <span
                            className="fa-stack fa-1x custom-c mx-2"
                          >
                            <i className="fas fa-circle fa-stack-2x" />
                            <i className="fa-solid fa-pen-to-square fa-stack-1x custom-c--icon" />
                          </span>
                        </Link>
                      </td>
                      <td className="text-start">
                        <span
                          className="fa-stack fa-1x custom-c mx-2"
                          role="button"
                          aria-hidden="true"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={
                            setDeleteState(
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
                            )
                          }
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
  }, []);
  return (
    <div className="content px-4">
      {deleteState}
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Blog</h4>
        </div>
        <div className="col-md-6 p-0 text-center text-md-end">
          <Link to="/dashboard/admin/add-blog" className="link px-4 py-2 text-decoration-none fw-bold">Add a Blog</Link>
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
        <div className="pt-4 px-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default BlogsContent;
