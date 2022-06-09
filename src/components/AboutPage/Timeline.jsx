import React from 'react';

// REACT SLICK CSS
import Slider from 'react-slick';

// REACT SLCIK CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TimelineCard from '../ResuableComponents/TimelineCard';

function Timeline() {
  const appendDots = (dots) => (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '10px',
        // width: '50px',
      }}
    >
      <ul style={{ margin: '0px' }}>
        {dots}
      </ul>
    </div>
  );
  const customPaging = (i) => (
    <div
    //   className="mx-5"
      style={{
        // width: '200px',
        color: 'blue',
        border: '0px blue solid',
        marginRight: '20px',
      }}
    >
      {2022 - (i)}
    </div>
  );
  return (
    <div className="timeline py-5">
      <div className="container py-lg-5">
        <div className="partner__header text-center mx-auto">
          <h2 className="event__header--title">Our Story</h2>
          <p className="events__header--text">
            We are building resilient innovation ecosystems in underserved university communities.
          </p>
        </div>
      </div>
      <div className="">
        <Slider
          {...{
            height: 100,
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 100,
            autoplaySpeed: 10000,
            cssEase: 'linear',
            // responsive: [

            //   {
            //     breakpoint: 1440,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 1,
            //       //   infinite: true,
            //     },
            //   },
            //   {
            //     breakpoint: 600,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 1,
            //       // initialSlide: 2,
            //     },
            //   },
            //   {
            //     breakpoint: 480,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 1,
            //     },
            //   },
            // ],
            customPaging,
            appendDots,
            variableWidth: true,
          }}
        >
          <div className=" ">
            <TimelineCard />
            <hr />
          </div>
          <div className="">
            ABCD
            <hr />
          </div>
          <div className="">
            ABCD
            <hr />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Timeline;
