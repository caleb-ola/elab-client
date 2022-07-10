import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PaddedCard from '../../ResuableComponents/PaddedCard';
import Pagination from '../../ResuableComponents/Pagination';
import SkeletonPaddedRow from '../../ResuableComponents/SkeletonLoaders/SkeletonPaddedRow';

function AllBlogs() {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <SkeletonPaddedRow />,
  );
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/posts?limit').then((response) => {
      setLoading(false);
      setSkeleton();
      setBlog(
        <>
          {
        response.data.data.map((item) => (
          <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4" key={item.id}>
            <PaddedCard
              title={item.title}
              image={item.image}
              name={item.author}
              date={item.createdAt}
              path={`/resources/blog/${item.slug}`}
            />
            {/* { console.log(item.tags) } */}
          </div>
        ))
      }
          <div className="row">
            <Pagination />
          </div>
        </>,
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

  // const [active, setActive] = useState({
  //   All: true,
  //   Community: false,
  //   Innovation: false,
  //   Creativity: false,
  //   Empathy: false,
  // });
  // const [blogs, setBlogs] = useState(
  //   <>
  //     <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //       <PaddedCard
  //         title="Blog post title stays hereand it can take...."
  //         image="/images/Resources/blog1.png"
  //         name="Funto Adesola"
  //         date="25th May, 2022"
  //         path="/resources/blog/blog-post"
  //       />
  //     </div>
  //     {' '}
  //     <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //       <PaddedCard
  //         title="Blog post title stays hereand it can take...."
  //         image="/images/Resources/blog2.png"
  //         name="Funto Adesola"
  //         date="25th May, 2022"
  //         path="/resources/blog/blog-post"
  //       />
  //     </div>
  //     {' '}
  //     <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //       <PaddedCard
  //         title="Blog post title stays hereand it can take...."
  //         image="/images/Resources/blog3.png"
  //         name="Funto Adesola"
  //         date="25th May, 2022"
  //         path="/resources/blog/blog-post"
  //       />
  //     </div>
  //     {' '}
  //     <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //       <PaddedCard
  //         title="Blog post title stays hereand it can take...."
  //         image="/images/Resources/blog3.png"
  //         name="Funto Adesola"
  //         date="25th May, 2022"
  //         path="/resources/blog/blog-post"
  //       />
  //     </div>
  //     {' '}
  //     <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //       <PaddedCard
  //         title="Blog post title stays hereand it can take...."
  //         image="/images/Resources/blog4.png"
  //         name="Funto Adesola"
  //         date="25th May, 2022"
  //         path="/resources/blog/blog-post"
  //       />
  //     </div>
  //     <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //       <PaddedCard
  //         title="Blog post title stays hereand it can take...."
  //         image="/images/Resources/blog5.png"
  //         name="Funto Adesola"
  //         date="25th May, 2022"
  //         path="/resources/blog/blog-post"
  //       />
  //     </div>
  //   </>,
  // );
  // const All = () => {
  //   setActive({
  //     All: true,
  //     Community: false,
  //     Innovation: false,
  //     Creativity: false,
  //     Empathy: false,
  //   });
  //   setBlogs(
  //     <>
  //       <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //         <PaddedCard
  //           title="Blog post title stays hereand it can take...."
  //           image="/images/Resources/blog1.png"
  //           name="Funto Adesola"
  //           date="25th May, 2022"
  //           path="/resources/blog/blog-post"
  //         />
  //       </div>
  //       {' '}
  //       <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //         <PaddedCard
  //           title="Blog post title stays hereand it can take...."
  //           image="/images/Resources/blog2.png"
  //           name="Funto Adesola"
  //           date="25th May, 2022"
  //           path="/resources/blog/blog-post"
  //         />
  //       </div>
  //       {' '}
  //       <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //         <PaddedCard
  //           title="Blog post title stays hereand it can take...."
  //           image="/images/Resources/blog3.png"
  //           name="Funto Adesola"
  //           date="25th May, 2022"
  //           path="/resources/blog/blog-post"
  //         />
  //       </div>
  //       {' '}
  //       <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //         <PaddedCard
  //           title="Blog post title stays hereand it can take...."
  //           image="/images/Resources/blog3.png"
  //           name="Funto Adesola"
  //           date="25th May, 2022"
  //           path="/resources/blog/blog-post"
  //         />
  //       </div>
  //       {' '}
  //       <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //         <PaddedCard
  //           title="Blog post title stays hereand it can take...."
  //           image="/images/Resources/blog4.png"
  //           name="Funto Adesola"
  //           date="25th May, 2022"
  //           path="/resources/blog/blog-post"
  //         />
  //       </div>
  //       <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //         <PaddedCard
  //           title="Blog post title stays hereand it can take...."
  //           image="/images/Resources/blog5.png"
  //           name="Funto Adesola"
  //           date="25th May, 2022"
  //           path="/resources/blog/blog-post"
  //         />
  //       </div>
  //     </>,
  //   );
  // };

  // const Community = () => {
  //   setActive({
  //     All: false,
  //     Community: true,
  //     Innovation: false,
  //     Creativity: false,
  //     Empathy: false,
  //   });
  //   setBlogs(
  //     <>
  //       <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //         <PaddedCard
  //           title="Blog post title stays hereand it can take...."
  //           image="/images/Resources/blog3.png"
  //           name="Funto Adesola"
  //           date="25th May, 2022"
  //           path="/resources/blog/blog-post"
  //         />
  //       </div>
  //       {' '}
  //       <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //         <PaddedCard
  //           title="Blog post title stays hereand it can take...."
  //           image="/images/Resources/blog4.png"
  //           name="Funto Adesola"
  //           date="25th May, 2022"
  //           path="/resources/blog/blog-post"
  //         />
  //       </div>
  //       <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //         <PaddedCard
  //           title="Blog post title stays hereand it can take...."
  //           image="/images/Resources/blog5.png"
  //           name="Funto Adesola"
  //           date="25th May, 2022"
  //           path="/resources/blog/blog-post"
  //         />
  //       </div>
  //     </>,
  //   );
  // };
  // const Innovation = () => {
  //   setActive({
  //     All: false,
  //     Community: false,
  //     Innovation: true,
  //     Creativity: false,
  //     Empathy: false,
  //   });
  //   setBlogs(
  //     <>
  //       <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //         <PaddedCard
  //           title="Blog post title stays hereand it can take...."
  //           image="/images/Resources/blog3.png"
  //           name="Funto Adesola"
  //           date="25th May, 2022"
  //           path="/resources/blog/blog-post"
  //         />
  //       </div>
  //       <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
  //         <PaddedCard
  //           title="Blog post title stays hereand it can take...."
  //           image="/images/Resources/blog5.png"
  //           name="Funto Adesola"
  //           date="25th May, 2022"
  //           path="/resources/blog/blog-post"
  //         />
  //       </div>
  //     </>,
  //   );
  // };

  return (
    <div className="allblogs pb-5 mb-lg-5">
      <div className="container ">
        <div className="text-center">
          <h4>
            All Blog Posts
          </h4>
        </div>
        {/* <div className="d-flex flex-row  justify-content-center py-3 py-lg-5">
          <span role="button" tabIndex={0} className={active.All ? 'btn button px-0
          mx-2 mx-lg-3 projects__active' : 'btn button px-0 mx-2 mx-lg-3'} onClick={All}
          aria-hidden="true">All</span>
          <span type="button" className={active.Community ? 'btn button px-0 mx-2 mx-lg-3
          projects__active' : 'btn button px-0 mx-2 mx-lg-3'} onClick={Community}
          aria-hidden="true">Communinity Design</span>
          <span type="button" className={active.Innovation ? 'btn button px-0 mx-2 mx-lg-3
          projects__active' : 'btn button px-0 mx-2 mx-lg-3'} onClick={Innovation}
          aria-hidden="true">Innovation</span>
          <span type="button" className={active.Creativity ? 'btn button px-0 mx-2 mx-lg-3
          projects__active' : 'btn button px-0 mx-2 mx-lg-3'} aria-hidden="true">Creativity</span>
          <span type="button" className={active.Empathy ? 'btn button px-0 mx-2 mx-lg-3
          projects__active' : 'btn button px-0 mx-2 mx-lg-3'} aria-hidden="true">Empathy</span>
        </div> */}
      </div>
      <div className="container">
        <div className="row mt-3 mt-lg-4">
          {loading ? skeleton : blog}
        </div>
      </div>

    </div>
  );
}

export default AllBlogs;
