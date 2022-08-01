import React from 'react';

function Story() {
  // const [gridImages, setGridImages] = useState();
  return (
    <section
      className="story my-5"
      id="story"
    >
      <div
        className="story__background"
        style={{
          backgroundImage: "url('./images/home/Union.png')",
          backgroundSize: 'cover',
        }}
      >
        <div className="container py-lg-5">
          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-md-1 ">
              {/* <div className=""> */}
              <h4 className="py-2">Our Story</h4>
              <p className="fw-bold">Building resilient innovation ecosystems in underserved university communities.</p>
              <div className="image__stack d-md-none  px-1 py-4">
                <div className="image__stack--item image__stack--top ">
                  <img src="/images/home/story3.png" alt="" className="img-fluid" />
                </div>
                <div className="image__stack--item image__stack--middle">
                  <img src="/images/home/story2.png" alt="" className="img-fluid" />
                </div>
                <div className="image__stack--item image__stack--bottom">
                  <img src="/images/home/story1.png" alt="" className="img-fluid" />
                </div>
              </div>
              <p className="">
                Ennovate Lab is an innovation hub that seeks to promote innovation and enterprise
                thinking and success in underserved university communities beginning from
                Ogbomoso.
              </p>
              {' '}
              <p>
                We support grassroots talents who are working on tech-enabled businesses with
                advisory services, mentorship, funding, tech support and networking.
              </p>
              <div className="mt-5 mb-3">
                <a href="/about-us" className="link fw-bold py-3 px-5 text-decoration-none">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <div className="image__stack d-none d-md-grid">
                <div className="image__stack--item image__stack--top ">
                  <img src="/images/home/story3.png" alt="" className="img-fluid" />
                </div>
                <div className="image__stack--item image__stack--middle">
                  <img src="/images/home/story2.png" alt="" className="img-fluid" />
                </div>
                <div className="image__stack--item image__stack--bottom">
                  <img src="/images/home/story1.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
