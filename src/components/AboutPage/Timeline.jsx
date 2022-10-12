import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import TimelineData from './TimelineData';

// REACT SLCIK CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Timeline() {
  const [content, setContent] = useState([]);
  // const [btn, setBtn] = useState([]);
  const [active, setActive] = useState();

  useEffect(() => {
    // setBtn(
    //   TimelineData,
    // );
    setActive(TimelineData[0].year);
    setContent(
      TimelineData.map((item) => (
        <span id={item.year} key={item.id} className="position-relative d-flex align-items-end me-5 pe-5">
          <div className="timeline--pole" />
          <div className="timeline--dot position-absolute">
            <img src="/images/about/dot.png" alt="" className="img-fluid" />
          </div>
          <div className="timeline--date">
            <p className="mb-3 pb-3">{item.year}</p>
          </div>
          {
            item.brands.map((brand, index) => (
              index % 2 === 0
                ? (
                  <div className="ms-5 px-3  mt-5 mb-4 pb-5" key={brand.id}>
                    <div className="timeline__content--detailsa " key={brand.id}>
                      {brand.logo
                        ? <img src={brand.logo} alt={brand.title} className="img-fluid timeline--logo" />
                        : <h6 className="fw-bold">{brand.title}</h6>}
                      <p className="lh-sm">
                        <small>
                          {brand.content}
                        </small>
                      </p>
                    </div>
                  </div>
                )
                : (
                  <div className="ms-5 px-3 mb-5 pb-5" key={brand.id}>
                    <div className="timeline__content--detailsb pb-5 mb-5 " key={brand.id}>
                      {brand.logo
                        ? <img src={brand.logo} alt={brand.title} className="img-fluid timeline--logo" />
                        : <h6 className="fw-bold">{brand.title}</h6>}
                      <p className="lh-sm">
                        <small>
                          {brand.content}
                        </small>
                      </p>
                    </div>
                  </div>
                )
            ))
            }
        </span>
      )),
    );
  }, []);

  const ChangeDates = (year) => {
    // console.log(e);
    // e.preventDefault();

    setActive(year);
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
        {' '}
        <div className="text-start">
          <div className=" ">
            <div className="timeline__content">
              <Slider
                {...{
                  arrows: false,
                  dots: true,
                  infinite: false,
                  speed: 2000,
                  // autoplaySpeed: 5000,
                  variableWidth: true,
                  className: 'slider variable-width',
                  // centerMode: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
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
                  // eslint-disable-next-line react/no-unstable-nested-components
                  appendDots: (dots) => (
                    <div
                      style={{
                        backgroundColor: '#fff',
                        padding: '10px',
                        borderTop: '1px solid #060016',
                      }}
                    >
                      <ul style={{ margin: '0px' }} className="d-flex justify-content-md-center">
                        {' '}
                        {dots}
                        {' '}
                      </ul>
                    </div>
                  ),
                  // eslint-disable-next-line react/no-unstable-nested-components
                  customPaging: (i) => (
                    <div
                      className={`py-2 px-4 timeline__tab--button text-decoration-none ${2022 - i === active && 'active'}`}
                      onClick={() => ChangeDates(2022 - i)}
                      role="button"
                      aria-hidden
                    >
                      {(2022 - i !== 2016) && 2022 - i}
                    </div>
                  ),
                }}
              >
                {content}
                <span />
              </Slider>
            </div>
          </div>
        </div>
        <div className="root-div pb-3 pb-lg-4">
          <div style={{
            width: '100%',
            height: '100px',
            margin: '0 auto',
          // padding: '30px 0',
          }}
          >
            {/* <hr className="timeline__tab--horizontal mt-0" color="red" /> */}
            {/* <div className="d-flex text-center timeline__tab mx-auto  ">
              // {btn?.map((item) => (
                <div className={`timeline__tab--container
                mx-2 ${item.year === active && 'active'}`} key={item.id}>
                  <a href={`#${item.year}`} className={`col py-2 mb-2 px-4
                  timeline__tab--button text-decoration-none ${item.year ===
                    active && 'active'}`} onClick={() => ChangeDates(item.year)}
                    role="button" aria-hidden>{item.year}</a>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
