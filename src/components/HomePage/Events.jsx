import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import EventCard from '../ResuableComponents/EventCard';
import SkeletonEventRow from '../ResuableComponents/SkeletonLoaders/SkeletonEventsRow';

function Events() {
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <SkeletonEventRow />,
  );

  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/programs').then(
      (response) => {
        // console.log(response);
        setLoading(false);
        setSkeleton();
        setBody(
          response.data.data.map((item) => (
            <div className="col-md-6 col-lg-4 my-2 p-lg-4" key={item.id}>
              <EventCard image={item.image} label={item.tag} title={item.title} link={item.link} />
            </div>
          )),
        );
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
  }, []);

  return (
    <div className="events py-5">
      <div className="container pt-lg-5">
        <div className="partner__header text-center mx-auto">
          <h4 className="event__header--title">Events Just For You!</h4>
          <p className="events__header--text pb-2">
            We are consistently curating the best events that help our
            community achieve their dreams.
          </p>
        </div>
        <div className="row pt-3 g-4">
          {loading ? skeleton : body }
        </div>
      </div>
    </div>
  );
}

export default Events;
