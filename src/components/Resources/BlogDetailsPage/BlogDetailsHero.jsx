/* eslint-disable react/no-danger */
// import axios from 'axios';
import axios from 'axios';
import Disqus from 'disqus-react';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Moment from 'react-moment';
import { useLocation, useParams } from 'react-router-dom';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { toast, ToastContainer } from 'react-toastify';
import HelmetData from '../../ResuableComponents/HelmetData';

function BlogDetailsHero() {
  const params = useParams();
  const location = useLocation();
  const [body, setBody] = useState();
  const [topCard, setTopCard] = useState();
  const [Socials, setSocials] = useState();
  // const [SocialsTags, setSocialsTags] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <div className="col-md-10 col-lg-10 p-3 p-md-0">
      {/* <span className="events__body--label py-2 px-3
        text-center fw-bold">Community Design</span> */}
      <h4 className="my-3 text-start">
        <Skeleton width="70%" />
      </h4>
      <div className="row pt-2 pt-lg-4">
        <div className="col-6 fw-bold">
          <Skeleton height={20} width="50%" />
        </div>
        <div className="col-6 text-end">
          <Skeleton height={20} width="50%" />
        </div>
      </div>
    </div>,
  );
  const [skeletonBody, setSkeletonBody] = useState(
    <div className="">
      <p>
        <Skeleton count={6} height={20} width="100%" />
      </p>
    </div>,
  );
  // console.log(params);
  // const disqusShortname = 'https-elab-client-herokuapp-com';
  // const disqusConfig = {
  //   url: 'https://elab-client.herokuapp.com/',
  //   identifier: 'disqus_wnlF5mInwQ',
  //   title: 'data?.title',
  // };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/posts/${params.slug}`).then((response) => {
      // console.log(response);
      setLoading(false);
      setSkeleton();
      setSkeletonBody();
      const { data } = response.data;
      const disqusShortname = 'ennovatelab';
      const disqusConfig = {
        url: window.location.href,
        identifier: data.id,
        title: data?.title,
      };
      setTopCard(
        <div className="col-md-10 col-lg-10 p-3 p-md-0">
          <HelmetData title={`${data?.title} - Ennovate Lab`} description={data?.content} image={data?.image} />
          {/* <Helmet>
            <title>
              {data.title}
              {' '}
              - Ennovate Lab
            </title>
            {/* <meta
            name="description"
            content="Building a clear path to help our clients deliver organizational success."
          /> */}
          {/* </Helmet> */}
          {/* <span className="events__body--label py-2 px-3
        text-center fw-bold">Community Design</span> */}
          <div className="align-text-top">
            <div className="d-inline-flex flex-wrap">
              {data.tags && data.tags.map((item, index) => (
                item && (
                // eslint-disable-next-line
                <div key={index}>
                  <span className="col topblog--tags mx-2 events__body--label fw-bold py-2 px-3 my-2 text-center">
                    {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                  </span>
                </div>
                )
              ))}
            </div>
          </div>
          <h4 className="my-3">
            {data.title}
          </h4>
          <div className="row pt-2 pt-lg-4">
            <div className="col-6 fw-bold">
              <i className="fa-solid fa-user blog--icon pe-2" />
              {data.author}
            </div>
            <div className="col-6 text-end">
              <i className="fa-solid fa-calendar blog--icon pe-2" />
              <Moment format="Do MMMM, YYYY">
                {data.createdAt}
              </Moment>
            </div>
          </div>
        </div>,
      );
      // setSocialsTags(
      //   data.tags && data.tags.map((tag) => `#${tag}`),
      // );
      setSocials(
        <>
          <div className="col-6 col-md-12">
            <FacebookShareButton
              url={`http://www.ennovatelab.com/${location.pathname}`}
              quote="Ennovate Lab - Building Resilient Innovation Ecosystems in Under-served University communities"
              hashtag={`#${data.tags.join('#')}`}
              className="border-rounded-circle"
            >
              <span className="fa-stack fa-1x custom ms-3 my-2 blogdetails__content--icon">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
              </span>
              {/* <FacebookIcon size={36} round /> */}
            </FacebookShareButton>
          </div>
          <div className="col-6 col-md-12">
            <LinkedinShareButton
              url={`http://www.ennovatelab.com/${location.pathname}`}
              quote="Ennovate Lab - Building Resilient Innovation Ecosystems in Under-served University communities"
              hashtag={`#${data.tags.join('#')}`}
              className="border-rounded-circle"
            >
              <span className="fa-stack fa-1x custom ms-3 my-2 blogdetails__content--icon">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
              </span>
            </LinkedinShareButton>
          </div>
          <div className="col-6 col-md-12">
            <TwitterShareButton
              url={`http://www.ennovatelab.com/${location.pathname}`}
              quote="Ennovate Lab - Building Resilient Innovation Ecosystems in Under-served University communities"
              hashtag={`#${data.tags.join('#')}`}
              className="border-rounded-circle"
            >
              <span className="fa-stack fa-1x custom ms-3 my-2 blogdetails__content--icon">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-twitter fa-stack-1x fa-inverse" />
              </span>
            </TwitterShareButton>
          </div>
        </>,
      );
      const createMarkup = () => ({ __html: response.data.data?.content });
      // eslint-disable-next-line
      setBody(
        <>
          <div className="markup" dangerouslySetInnerHTML={createMarkup()} />
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
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

  return (
    <div className="blogdetails">
      <ToastContainer />
      <div
        className="blogdetails__hero position-relative"
        style={{
          backgroundColor: '#fff',
          // backgroundImage: "url('/images/Resources/blog-details-header.png')",
          backgroundSize: 'cover',
          height: '30vh',
        }}
      />
      <div className="container position-relative ">
        <div className="blogdetails__card p-3 p-md-5 mx-auto">
          <div className="row ">
            <div className="col-md-2 col-lg-2 px-lg-3 text-start ">
              <p className="blogdetails__hero--back fw-bold m-0">
                <a href="/resources/blog/">
                  <span
                    className="fa-stack fa-1x custom ms-3"
                    aria-hidden="true"
                  >
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fa-solid fa-arrow-left fa-stack-1x fa-inverse" />
                  </span>
                </a>
              </p>
            </div>
            {loading ? skeleton : topCard}
          </div>
        </div>
        <div className="blogdetails__content mx-auto pb-5">
          <div className="row">
            <div className="col-md-2 col-lg-2 px-lg-3 text-start ">
              <div className="row">
                {/* <h2><i className="fa-solid fa-share-nodes" /></h2> */}
                {Socials}
              </div>
            </div>
            <div className="col-md-10 col-lg-10 p-3 p-md-0">
              {loading ? skeletonBody : body}
              {/* <h5 className="blogdetails__content--header pt-3 pb-2 m-0">
                Appropriate Header
              </h5>
              <p>
                Nisi, urna, urna vel quisque. Sem porttitor viverra at iaculis aliquet
                adipiscing eu, eget et. Hendrerit ultricies et malesuada egestas sagittis neque.
                Orci suspendisse bibendum sapien, volutpat scelerisque laoreet. Id ac elit id
                aliquam
                massa, risus sit sit eros. Mauris eleifend vestibulum rutrum interdum tempus magnis
                amet dictum eros. Nunc quis egestas enim orci, pellentesque vel vitae molestie.
                In sit
                nunc, aliquet mauris sem aliquam felis. At consequat feugiat velit varius ut
                massa non lectus.
                Aliquet ultrices lacus, consectetur massa ipsum id purus odio. Quam et placerat
                consequat,
                ultrices non, tristique massa. Pellentesque morbi lacinia quisque tristique non.
                Egestas a
                enim neque congue sem nibh volutpat ultrices. Dolor at interdum amet ac magna
                ultrices aenean.
              </p>
              {' '}
              <h5 className="blogdetails__content--header pt-3 pb-3 m-0">
                Appropriate Header
              </h5>
              <img src="/images/Resources/blog-content.png" className="img-fluid" alt="..." />
              {' '}
              <h5 className="blogdetails__content--header pt-4 pb-2 m-0">
                Appropriate Header
              </h5>
              <p>
                Nisi, urna, urna vel quisque. Sem porttitor viverra at iaculis aliquet
                adipiscing eu, eget et. Hendrerit ultricies et malesuada egestas sagittis neque.
                Orci suspendisse bibendum sapien, volutpat scelerisque laoreet. Id ac elit id
                aliquam
                massa, risus sit sit eros. Mauris eleifend vestibulum rutrum interdum tempus magnis
                amet dictum eros. Nunc quis egestas enim orci, pellentesque vel vitae molestie.
                In sit
                nunc, aliquet mauris sem aliquam felis. At consequat feugiat velit varius ut
                massa non lectus.
                Aliquet ultrices lacus, consectetur massa ipsum id purus odio. Quam et placerat
                consequat,
                ultrices non, tristique massa. Pellentesque morbi lacinia quisque tristique non.
                Egestas a
                enim neque congue sem nibh volutpat ultrices. Dolor at interdum amet ac magna
                ultrices aenean.
              </p> */}
              {/* <Disqus.DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsHero;
