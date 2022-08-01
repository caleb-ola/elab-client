import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SkeletonTrainingCard from '../ResuableComponents/SkeletonLoaders/SkeletonTrainingCard';
import TrainingCard from '../ResuableComponents/TrainingCard';

function Training() {
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

  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/trainings?limit=2').then((response) => {
      setLoading(false);
      setSkeleton();
      setBody(
        <div className="row pt-lg-2 pb-lg-4">
          {
          response.data.data.map((item) => (
            <div className="col-md-6 p-3" key={item.id}>
              <TrainingCard
                image={item.image}
                title={item.title}
                text={item.description}
                path={`/services/training/${item.id}`}
              />
            </div>
          ))
         }
          <div className="col-12 mt-5 mb-3 text-center">
            <Link to="/services/training" className="link fw-bold py-3 px-5 text-decoration-none">
              See More
            </Link>
          </div>
        </div>,

      );
    });
  }, []);

  return (
    <div className="training py-5">
      <div className="container">
        <div className="partner__header text-center mx-auto">
          <h4 className="partnet--title ">
            Training Opportunities
          </h4>
          <p className="pt-2">
            The beautiful thing about learning is that nobody can take it away from you.
            And that’s why we can’t stop delivering exceptional training for all our stakeholders...
          </p>
        </div>
        {loading ? skeleton : body}
      </div>
    </div>
  );
}

export default Training;
