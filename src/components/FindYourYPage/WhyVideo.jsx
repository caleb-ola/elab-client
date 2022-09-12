import React, { useEffect, useState } from 'react';
// import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';

function WhyVideo() {
  const { id } = useParams();
  const [title, setTitle] = useState();
  // const [videolink, setVideolink] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    if (id === 'founders-community') {
      setTitle(<span>Founder’s Community</span>);
      // setVideolink();
      setDescription(
        <p className="whyvideo--text text-center py-3 mx-auto">
          The Founders&apos; Community is a platform initiated by Ennovate Lab
          to provide a support system for founders and aspiring founders
          in the Ogbomoso tech ecosystem. The aim of the community is to
          provide founders with actionable knowledge and opportunities to
          aid their business growth and development. Since the Founders
          Community was established in 2022, the community has welcomed
          over 30 founders, innovators, and entrepreneurs. The members
          are given access to capacity-building programs and mentorship
          through the community. In June 2022, Ennovate Lab, in partnership
          with Butterfly Works Studio, facilitated a hybrid training program
          on Design Thinking, Understanding Your Customer and Developing Agile
          Solutions. Other capacity-building sessions held independently covered
          topics like brand storytelling and more.

        </p>,
      );
    } else if (id === 'technical-cofounder') {
      setTitle(<span>Technical Co-founder</span>);
      // setVideolink();
      setDescription(
        <p className="whyvideo--text text-center py-3 mx-auto">
          Consequat eget nisl tellus, sed turpis.
          Nulla et lectus vel mauris. Cursus nulla viverra interdum et
          interdum egestas ornare neque. Vulputate sapien, sed cursus
          tortor ante purus ultrices. At viverra gravida integer malesuada
          diam non elit. Sed luctus fringilla in mattis quis risus aliquam
          enim tristique. Molestie vestibulum malesuada.
        </p>,
      );
    } else if (id === 'skills-seeker') {
      setTitle(<span>Skills Seeker</span>);
      // setVideolink();
      setDescription(
        <p className="whyvideo--text text-center py-3 mx-auto">
          Consequat eget nisl tellus, sed turpis.
          Nulla et lectus vel mauris. Cursus nulla viverra interdum et
          interdum egestas ornare neque. Vulputate sapien, sed cursus
          tortor ante purus ultrices. At viverra gravida integer malesuada
          diam non elit. Sed luctus fringilla in mattis quis risus aliquam
          enim tristique. Molestie vestibulum malesuada.
        </p>,
      );
    }
  }, []);

  return (
    <div className="whyvideo py-5">
      {/* COMMUNITY SIGN UP FORM STARTS */}
      <div className="modal fade benefits__form" id="exampleModal" tabIndex="-1" aria-labelledby="trybeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <i className="fa-solid fa-circle-xmark fa-2x btn-close shadow-none benefits__close" type="button" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-md-5 benefits__content pt-0 pb-4">
              <h4 className="modal-title" id="exampleModalLabel">
                Sign up for
                {' '}
                {title}
              </h4>
              <form action="" className="benefits__form">
                <div className="row py-2">
                  <label className="p-0 benefits__form--label" htmlFor="name">
                    Full Name
                  </label>
                  <input type="text" className="name p-3 my-2 benefits__form--input " id="name" required />
                </div>
                <div className="row py-2">
                  <label className="p-0 benefits__form--label" htmlFor="email">
                    Email Address
                  </label>
                  <input type="email" className="email p-3 my-2 benefits__form--input " id="email" required />
                </div>
                <div className="py-3 py-lg-4 ">
                  <button type="submit" className=" link btn fw-bold py-3 px-5 me-0 benefits__form--button">
                    Join
                    {' '}
                    {title}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* COMMUNITY SIGN UP FORM ENDS */}
      <div className="container py-lg-5 mt-5">
        <div className="whyvideo__content mx-auto pt-5">
          <h4 className="whyvideo--header text-center pb-3 pb-lg-4">
            {title}
          </h4>
          {/* <video width="100%" height="550" controls className="py-3">
            <track kind="captions" />
            <source src={videolink} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video> */}
          {description}
          <div className="whyvideo__cta--btn pt-4 text-center">
            <button type="button" className="whyvideo__cta--btn link btn fw-bold py-3 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Sign Up
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// WhyVideo.propTypes = {
//   title: PropTypes.string,
//   videoLink: PropTypes.string,
//   description: PropTypes.string,
// };

// WhyVideo.defaultProps = {
//   title: '',
//   videoLink: '',
//   description: '',
// };
export default WhyVideo;
