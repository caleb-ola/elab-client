import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Empty from '../../ResuableComponents/Empty';
import Pagination from '../../ResuableComponents/Pagination';
import SkeletonTrainingCard from '../../ResuableComponents/SkeletonLoaders/SkeletonTrainingCard';
import TrainingCard from '../../ResuableComponents/TrainingCard';

function AllTraining() {
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <div className="row pt-lg-2">
      <div className="col-md-6 p-3">
        <SkeletonTrainingCard />
      </div>
      <div className="col-md-6 p-3">
        <SkeletonTrainingCard />
      </div>
    </div>,
  );
  const [paginate, setPaginate] = useState({
    start: 0,
    end: 6,
    // all: 0,
  });
  const onNext = () => {
    setPaginate((prev) => ({
      start: prev.start + 6,
      end: prev.end + 6,
    }));
  };
  const onPrev = () => {
    setPaginate((prev) => ({
      start: prev.start - 6,
      end: prev.end - 6,
    }));
  };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/trainings`).then((response) => {
      setLoading(false);
      setSkeleton();
      if (response.data.data.length === 0) {
        setBody(
          <Empty header="No Available Trainings" />,
        );
      } else {
        setBody(
          <div className="row pt-lg-5">
            {
            response.data.data.slice(paginate.start, paginate.end).map((item) => (
              <div className="col-lg-6 my-3 px-3 my-lg-4 px-lg-4" key={item.id}>
                <TrainingCard
                  image={item.image}
                  title={item.title}
                  text={item.description}
                  path={`/services/training/${item.id}`}
                />
              </div>
            ))
           }
            {
              response.data.data.length > 6
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
          </div>,
        );
      }
    });
  }, [paginate]);

  return (
    <div className="trainings py-5">
      <div className="container py-lg-5">
        <div className="partner__header text-center mx-auto pb-4">
          <h4 className="partner--title ">
            Available Trainings
          </h4>
          <p className="pt-3">
            Our trainings are the best. We host trainings,
            webinars, and conferences that you???ll actually want to stick around for.
          </p>
        </div>
        <div className="row">
          {loading ? skeleton : body}
        </div>
      </div>
    </div>
  );
}

export default AllTraining;
