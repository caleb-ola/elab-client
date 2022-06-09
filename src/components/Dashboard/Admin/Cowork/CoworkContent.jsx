import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../../ResuableComponents/Pagination';
import Data from '../data';

function CoworkContent() {
  const navigate = useNavigate();
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
      <table
        className="w-100 "

      >
        <thead>
          <tr className="fw-bold">
            <th className="ps-0 px-3 py-3 text-center">S/N</th>
            <th className="pe-4">Name</th>
            <th>Email Address</th>
            <th>Status</th>
            <th>Created On</th>
          </tr>
        </thead>

        <tbody>
          {
                  Data[5].map((item, index) => (
                    <tr key={item.id} className="content__card--row" onClick={() => navigate('/dashboard/admin/cowork/:slug')}>
                      <td className="py-3 text-center">{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                        {item.status === 'active'
                          ? <span className="content__card--active px-4 py-1">active</span>
                          : <span className="content__card--expired px-3 py-1">expired</span>}
                      </td>
                      <td>{item.CreatedAt}</td>
                    </tr>
                  ))
            }
        </tbody>
      </table>,
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
        <div className="pt-4 px-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default CoworkContent;
