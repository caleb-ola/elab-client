import React from 'react';
// REACT SLICK CSS
import Slider from 'react-slick';

// REACT SLCIK CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Team() {
  return (
    <div className="team pt-5">
      <div className="container py-3 pt-lg-5">
        <div className="team__header mx-auto text-center my-2">
          <h4 className="team__header--title my-lg-2">
            Meet the eLab Team
          </h4>
          <p className="team__header__text m-0">
            Our team of talented minds, creatives, strategists, and managers
            responsible for building, resourcing and equipping the community.
          </p>
        </div>
      </div>
      <Slider
        {...{
          arrows: false,
          dots: true,
          // fade: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 7000,
          autoplaySpeed: 5000,
          cssEase: 'linear',
          responsive: [

            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                //   infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        }}
      >
        <span className="m-0 ">
          <img src="/images/about/abouta.png" alt="" className="img-fluid w-100" />
        </span>
        <span className="m-0">
          <img src="/images/about/aboutb.png" alt="" className="img-fluid w-100" />
        </span>
        <span className="m-0">
          <img src="/images/about/aboutc.png" alt="" className="img-fluid w-100" />
        </span>
      </Slider>
    </div>

  );
}

export default Team;
