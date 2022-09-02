import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import PaddedCard from '../../ResuableComponents/PaddedCard';
import SkeletonPaddedRow from '../../ResuableComponents/SkeletonLoaders/SkeletonPaddedRow';

function AllNonProfit() {
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <SkeletonPaddedRow />,
  );
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/non-profits`).then(
      (response) => {
        // console.log(response);
        setLoading(false);
        setSkeleton();
        setBody(
          response.data.data.map((item) => (
            <div className="col-md-6 col-lg-4 px-3 px-lg-4 py-3 py-lg-4" key={item.id}>
              <PaddedCard
                image={item.image}
                title={item.title}
                brochure={item.brochure}
                button="Download"
              />
            </div>
          )),
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
    <div className="my-5">
      <ToastContainer />
      <div className="container pt-lg-5">
        <div className="row">
          {loading ? skeleton : body}
        </div>
      </div>

    </div>
  );
}

export default AllNonProfit;
