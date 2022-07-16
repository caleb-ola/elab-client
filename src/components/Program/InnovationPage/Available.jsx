import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import CoworkCard from '../../ResuableComponents/CoworkCard';
import Empty from '../../ResuableComponents/Empty';
import SkeletonEventRow from '../../ResuableComponents/SkeletonLoaders/SkeletonEventsRow';

function Available() {
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <SkeletonEventRow />,
  );

  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/workspaces').then((response) => {
      // console.log(response);
      setLoading(false);
      setSkeleton();
      if (response.data.data.length === 0) {
        setBody(<Empty header="No Space Available" />);
      } else {
        setBody(response.data.data.map((item) => (
          <div className="col-md-6 col-lg-4 my-3 px-3" key={item.id}>
            <CoworkCard title={item.title} space={item.availability.count > 1 ? `${item.availability.count} spaces` : `${item.availability.count} space`} button="See Details" image={item.image} path={`/program/innovation-hub/${item.slug}`} />
          </div>
        )));
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
  }, []);

  return (
    <div id="available" className="available pb-5">
      <ToastContainer />
      <div className="container pb-lg-5">
        <div className="partner__header text-center mx-auto my-2">
          <h2 className="event__header--title">Available Packages</h2>
          <p className="events__header--text">
            Select a package that best fits your need.
          </p>
        </div>

        <div className="row justify-content-center">
          {loading ? skeleton : body }
        </div>
      </div>
    </div>
  );
}

export default Available;
