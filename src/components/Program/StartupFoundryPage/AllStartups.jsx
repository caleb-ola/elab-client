import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Pagination from '../../ResuableComponents/Pagination';
import SkeletonTrainingCard from '../../ResuableComponents/SkeletonLoaders/SkeletonTrainingCard';
import StartupCard from '../../ResuableComponents/StartupCard';

function AllStartups() {
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [paginate, setPaginate] = useState({
    start: 0,
    end: 5,
    // all: 0,
  });
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
  const onNext = () => {
    setPaginate((prev) => ({
      start: prev.start + 5,
      end: prev.end + 5,
    }));
  };
  const onPrev = () => {
    setPaginate((prev) => ({
      start: prev.start - 5,
      end: prev.end - 5,
    }));
  };
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/startups').then((response) => {
      // console.log(response.data.data.slice(paginate.start, paginate.end));
      setLoading(false);
      setSkeleton();
      setBody(
        <>
          {
        response.data.data.slice(paginate.start, paginate.end).map((item) => (
          <div key={item.id}>
            <StartupCard
              image={item.image}
              title={item.name}
              text={item.description}
              path={`/program/foundry/${item.slug}`}
            />
          </div>
        ))
        }
          {
          response.data.data.length > 5
          && (
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
  }, [paginate]);

  return (
    <div className="startup">
      <ToastContainer />
      <div className="container pb-4">
        {loading ? skeleton : body}
      </div>
    </div>
  );
}

export default AllStartups;
