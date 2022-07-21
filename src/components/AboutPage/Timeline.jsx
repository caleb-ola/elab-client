import React, { useEffect, useState } from 'react';
import TimelineData from './TimelineData';

function Timeline() {
  const [content, setContent] = useState([]);
  const [btn, setBtn] = useState([]);
  const [active, setActive] = useState();

  useEffect(() => {
    setBtn(
      TimelineData,
    );
    setActive(TimelineData[0].year);
    setContent(
      TimelineData[0].brands.map((brand) => (
        <div className="timeline__content--details mb-3 mb-lg-4" key={brand.id}>
          <img src={brand.logo} alt="" className="img-fluid timeline--logo" />
          <p>
            {brand.content}
          </p>
        </div>
      )),
    );
  }, []);

  const ChangeDates = (year) => {
    const exactDate = TimelineData.filter((item) => item.year === year);
    setActive(year);
    setContent(exactDate.map((item) => (
      item.brands.map((brand) => (
        <div className="timeline__content--details mb-3 mb-lg-4" key={brand.id}>
          <img src={brand.logo} alt="" className="img-fluid timeline--logo" />
          <p>
            {brand.content}
          </p>
        </div>
      ))
    )));
    // console.log(exactDate);
  };

  return (
    <div className="timeline py-5">
      <div className="container py-lg-5">
        <div className="partner__header text-center mx-auto">
          <h4 className="partnet--title ">
            Our Story
          </h4>
          <p className="pt-3">
            We are building resilient innovation ecosystems
            in underserved university communities.
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
            <div className="d-flex justify-content-center text-center timeline__tab mx-auto">
              {btn?.map((item) => (
                <div className={`timeline__tab--container mx-2 ${item.year === active && 'active'}`} key={item.id}>
                  <div className={`col py-2 mb-2 px-4 mx-3 timeline__tab--button ${item.year === active && 'active'}`} role="button" aria-hidden onClick={() => ChangeDates(item.year)}>{item.year}</div>
                </div>
              ))}
            </div>
            <hr className="timeline__tab--horizontal" />
          </div>
          <div className="text-start">
            <div className="timeline__card p-4 px-2 p-md-5">
              <div className="timeline__content">
                {content}
                {/* {content?.brands?.map((item) => (
                  <div key={item.id}>
                    {item.content}
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
