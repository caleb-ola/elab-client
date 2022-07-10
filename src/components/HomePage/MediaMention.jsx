import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

function MediaMention() {
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <div className="row g-4 align-items-center text-center">
      <div className="col-6 col-lg-3  ">
        <Skeleton circle height={120} width={120} />
      </div>
      <div className="col-6 col-lg-3 ">
        <Skeleton circle height={120} width={120} />
      </div>
      <div className="col-6 col-lg-3 ">
        <Skeleton circle height={120} width={120} />
      </div>
      <div className="col-6 col-lg-3 ">
        <Skeleton circle height={120} width={120} />
      </div>
    </div>,
  );

  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/mentions').then((response) => {
      // console.log(response);
      setLoading(false);
      setSkeleton();
      setBody(response.data.data.map((item) => (
        <div className="col-6 col-lg-3" key={item.id}>
          <Link to={item.link} className="" target="_blank" rel="norefferrer">
            <img src={item.image} alt="" className="img-fluid partner--image text-center" />
          </Link>
        </div>
      )));
    });
  }, []);

  return (
    <div className="media py-5">
      <div className="container">
        <div className="partner__header text-center mx-auto">
          <h4 className="partner--title ">
            Media Mentions
          </h4>
          <p className="pt-4">
            Some media houses have decided to shout about what we do from the
            housetops and that’s great because we also aren’t hiding our light in any way.
          </p>
        </div>
        <div className="media__body py-lg-4 ">
          <div className="row align-items-center justify-content-center">
            {loading ? skeleton : body}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaMention;
