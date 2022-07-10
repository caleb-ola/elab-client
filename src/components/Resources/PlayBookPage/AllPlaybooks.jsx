import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Empty from '../../ResuableComponents/Empty';
import PaddedCard from '../../ResuableComponents/PaddedCard';
import Pagination from '../../ResuableComponents/Pagination';
import SkeletonPaddedRow from '../../ResuableComponents/SkeletonLoaders/SkeletonPaddedRow';

function AllPlaybooks() {
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <SkeletonPaddedRow />,
  );
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/resources').then(
      (response) => {
        setLoading(false);
        setSkeleton();
        // console.log(response);
        // const { data } = response.data;
        if (response.data.data.length === 0) {
          setBody(
            <Empty header="No Playbook" />,
          );
        } else {
          setBody(
            <>
              { response.data.data.map((item) => (
                (item.category === 'Whitepaper' || item.category === 'whitepaper')
                && (
                  <div className="col-md-6 col-lg-4 px-2 px-lg-4 my-3 my-lg-4" key={item.id}>
                    <PaddedCard
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      brochure={item.book}
                      button="Download"
                    />
                  </div>
                )
              ))}
              <div className="row">
                <Pagination />
              </div>
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
  }, []);

  return (
    <div className="allplaybooks">
      {/* PLAYBOOK STARTS */}
      <div className="modal fade benefits__form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-md-5">
              <h4 className="modal-title" id="exampleModalLabel">
                Download the free
                <br />
                ebook
              </h4>
              <form action="" className="benefits__form px-2">
                <div className="row py-2">
                  <label className="p-0" htmlFor="name">
                    Full Name
                  </label>
                  <input type="text" className="name p-3 my-2 benefits__form--input " id="name" />
                </div>
                <div className="row py-2">
                  <label className="p-0" htmlFor="email">
                    Email Address
                  </label>
                  <input type="email" className="email p-3 my-2 benefits__form--input " id="email" />
                </div>
                <div className="py-3 py-lg-5 px-0">
                  <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Get Access
                    {' '}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* PLAYBOOK ENDS */}
      <div className="container">
        <ToastContainer />
        <div className="row pb-5">
          {loading ? skeleton : body}
        </div>
      </div>
    </div>
  );
}

export default AllPlaybooks;
