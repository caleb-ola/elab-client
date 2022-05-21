import React from 'react';

function Measure() {
  return (
    <section
      id="measure"
      className="id py-5 position-relative measure"
      style={{
        backgroundImage: "url('/images/home/measure.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="measure__overlay">
        <div className="container my-5 py-lg-5">
          <div className="measure__header">
            <h4 className="measure__header--title my-2">How We Measure Impact</h4>
            <p className="measure__header--text my-2 my-lg-3">
              We have a hard time measuring
              some kinds of impact we have made. For instance, how does one
              measure the hope, love, laughter, fulfillment our presence in our
              community has brought? While those are difficult to measure, there
              are some much easier to
              {' '}
            </p>
          </div>
          <div className="row mt-lg-5 pt-5 measure__stats">
            <div className="col-md-5 py-3">
              <h2 className="measure__stats--title">195+</h2>
              <h2 className="measure__stats--stat">Team Members</h2>
            </div>
            {' '}
            <div className="col-md-7 py-3">
              <h2 className="measure__stats--title">4+</h2>
              <h2 className="measure__stats--stat">Businesses</h2>
            </div>
            {' '}
            <div className="col-md-5 py-3">
              <h2 className="measure__stats--title">50+</h2>
              <h2 className="measure__stats--stat">Entrepreneurs</h2>
            </div>
            <div className="col-md-7 py-3">
              <h2 className="measure__stats--title">750+</h2>
              <h2 className="measure__stats--stat w-100">Secondary School Students</h2>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Measure;
