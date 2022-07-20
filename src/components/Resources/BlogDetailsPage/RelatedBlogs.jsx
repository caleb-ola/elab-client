import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PaddedCard from '../../ResuableComponents/PaddedCard';
import SkeletonPaddedRow from '../../ResuableComponents/SkeletonLoaders/SkeletonPaddedRow';

function RelatedBlogs() {
  const [blog, setBlog] = useState();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <SkeletonPaddedRow />,
  );

  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/posts?limit=3').then((response) => {
      // console.log(response);
      setLoading(false);
      setSkeleton();
      setBlog(
        response.data.data.map((item) => (
          item.slug !== params.slug
          && (
          <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4" key={item.id}>
            <PaddedCard
              title={item.title}
              image={item.image}
              name={item.author}
              date={item.createdAt}
              path={`/resources/blog/${item.slug}`}
            />
          </div>
          )
        )),
      );
    }, (error) => {
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
    <div className="related py-5">
      <div className="container">
        <div className="related__header">
          <h4 className="related__header--title">Related Blog Post</h4>
        </div>
        <div className="row py-4 py-lg-4">
          {loading ? skeleton : blog}
        </div>
      </div>
    </div>
  );
}

export default RelatedBlogs;
