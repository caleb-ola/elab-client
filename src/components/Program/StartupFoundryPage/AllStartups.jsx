import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import SkeletonTrainingCard from '../../ResuableComponents/SkeletonLoaders/SkeletonTrainingCard';
import StartupCard from '../../ResuableComponents/StartupCard';

function AllStartups() {
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <div className="row pb-lg-5">
      <div className="col-md-12 p-3 my-3">
        <SkeletonTrainingCard />
      </div>
      <div className="col-md-12 p-3 my-3">
        <SkeletonTrainingCard />
      </div>
    </div>,
  );
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/startups').then((response) => {
      // console.log(response);
      setLoading(false);
      setSkeleton();
      setBody(
        response.data.data.map((item) => (
          <div key={item.id}>
            <StartupCard
              image={item.logo}
              title={item.name}
              text={item.description}
              path={`/program/foundry/${item.slug}`}
            />
          </div>
        )),
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
    <div className="startup">
      <ToastContainer />
      <div className="container">
        {loading ? skeleton : body}
      </div>
    </div>
  );
}

export default AllStartups;
