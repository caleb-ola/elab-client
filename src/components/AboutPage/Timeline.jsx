import React, { useState } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import Fade from 'react-reveal/Fade';

function Timeline() {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);

  // Values should be only date
  const VALUES = ['2022', '2021', '2020', '2019', '2018', '2017'];

  // Description array corresponding to values
  const description = [
    <div className="p-lg-5 timeline__content" key={previous}>
      <div className="timeline__content--details mb-3 mb-lg-4">
        <img src="/images/about/timeline1.png" alt="" className="img-fluid timeline--logo" />
        <p>
          We launched Cademy to provide access to quality education for
          children in underserved communities as well as those involved in homeschooling.
        </p>
      </div>

      <div className="timeline__content--details mb-3 mb-lg-4">
        <img src="/images/about/timeline2.png" alt="" className="img-fluid timeline--logo" />
        <p>
          We launched the MVP for Trifold
        </p>
      </div>

      <div className="timeline__content--details mb-3 mb-lg-4">
        <img src="/images/about/timeline1.png" alt="" className="img-fluid timeline--logo" />
        <p>
          We launched Cademy to provide access to quality education for
          children in underserved communities as well as those involved in homeschooling.
        </p>
      </div>

      <div className="timeline__content--details mb-3 mb-lg-4">
        <img src="/images/about/timeline2.png" alt="" className="img-fluid timeline--logo" />
        <p>
          We launched the MVP for Trifold
        </p>
      </div>
    </div>,
    <div className="p-lg-5 timeline__content" key={previous}>
      <div className="timeline__content--details mb-3 mb-lg-4">
        <img src="/images/about/timeline2.png" alt="" className="img-fluid timeline--logo" />
        <p>
          We launched the MVP for Trifold
        </p>
      </div>
    </div>,
    <div className="p-lg-5 timeline__content" key={previous}>
      <div className="timeline__content--details mb-3 mb-lg-4">
        <img src="/images/about/timeline2.png" alt="" className="img-fluid timeline--logo" />
        <p>
          We launched the MVP for Trifold
        </p>
      </div>
    </div>,
    <div className="p-lg-5 timeline__content" key={previous}>
      <div className="timeline__content--details mb-3 mb-lg-4">
        <img src="/images/about/timeline1.png" alt="" className="img-fluid timeline--logo" />
        <p>
          We launched Cademy to provide access to quality education for
          children in underserved communities as well as those involved in homeschooling.
        </p>
      </div>
    </div>,
    <div className="p-lg-5 timeline__content" key={previous}>
      <div className="timeline__content--details mb-3 mb-lg-4">
        <img src="/images/about/timeline2.png" alt="" className="img-fluid timeline--logo" />
        <p>
          We launched the MVP for Trifold
        </p>
      </div>
    </div>,
    <div className="p-lg-5 timeline__content" key={previous}>
      <div className="timeline__content--details mb-3 mb-lg-4">
        <img src="/images/about/timeline1.png" alt="" className="img-fluid timeline--logo" />
        <p>
          We launched Cademy to provide access to quality education for
          children in underserved communities as well as those involved in homeschooling.
        </p>
      </div>
    </div>,
  ];
  return (
    <div className="timeline py-5">
      <div className="container py-lg-5">
        <div className="partner__header text-center mx-auto">
          <h4 className="partnet--title ">
            Our Story
          </h4>
          <p className="pt-3">
            We are building resilient innovation ecosystems in underserved university communities.
          </p>
        </div>
        <div className="root-div py-3 py-lg-4">
          <div style={{
            width: '100%',
            height: '100px',
            margin: '0 auto',
            // padding: '30px 0',
          }}
          >
            <HorizontalTimeline
              slidingMotion={{ stiffness: 0, damping: 0 }}
              styles={{ outline: '#828282', foreground: '#FFCC03' }}
              index={value}
              indexClick={(index) => {
                setValue(index);
                setPrevious(value);
              }}
              values={VALUES}
            />
          </div>
          <div className="text-start">
            <Fade right>
              <div className="timeline__card p-3 p-md-5">
                {description[value]}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
