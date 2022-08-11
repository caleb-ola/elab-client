import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { toast, ToastContainer } from 'react-toastify';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';
import AllBlogs from './AllBlog';
import TopBlog from './TopBlog';

function Blog() {
  const [topBody, setTopBody] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <div className="container py-5 my-lg-5">
      <div className="topblog p-3 p-md-5 mt-5">
        <div className="row">
          <div className="col-md-5 col-lg-5 px-lg-3 order-sm-3 order-md-1">
            <Skeleton height={350} width="100%" />
          </div>
          <div className="col-md-1 col-lg-1 px-3 order-2 order-md-2" />
          <div className="col-md-6 col-lg-6 p-3 p-md-0 order-1 order-md-3 d-flex flex-column">
            <div className="row pt-2 pt-lg-4 topblog__authorrow align-text-bottom mt-auto ">
              <h4 className="my-3 text-center">
                <Skeleton count="2" height={50} width="80%" />
              </h4>
            </div>
            <div className="row pt-2 pt-lg-4 topblog__authorrow align-text-bottom mt-auto ">
              <div className="col-md-6 text-center text-md-start topblog--text">
                <Skeleton height={25} width="50%" />
              </div>
              <div className="col-md-6 text-center text-md-end ">
                <Skeleton height={25} width="50%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  );

  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/posts').then((response) => {
      // console.log(response.data.data[0]);
      const data = response.data.data[0];
      setLoading(false);
      setSkeleton();
      setTopBody(
        // response.data.data.map((item) => (
        <div key={data.id}>
          <TopBlog
            image={data.image}
            title={data.title}
            date={data.createdAt}
            author={data.author}
            tags={data.tags}
            content={data.content}
            path={`/resources/blog/${data.slug}`}
          />
          {/* {console.log(item)} */}
        </div>,
        // )),
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
    <div>
      <Helmet>
        <title>
          Blog - Ennovate Lab
        </title>
        {/* <meta
            name="description"
            content="Building a clear path to help our clients deliver organizational success."
          /> */}
      </Helmet>
      <ToastContainer />
      <NavBar />
      {loading ? skeleton : topBody}
      <AllBlogs />
      <Footer />
    </div>
  );
}

export default Blog;
