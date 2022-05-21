import React from 'react';

function Musings() {
  return (
    <div className="musings">
      <div className="container py-5">
        <div
          className="musings__card position-relative p-4 p-lg-5"
          style={{
            backgroundImage: "url('images/home/musing.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // height: '303px',
          }}
        >
          <div className="row position-relative ">
            <div className="musings__card--header ">
              <h2 className="musings__card--title ">eLab Musings</h2>
              <p>
                Let&apos;s share with you some information about the Lab as
                noteworthy business insights from lived-experiences as an organization.
              </p>
            </div>
            <div className="musings__card--form">
              <form className="py-3">
                <div className="row g-2">
                  <div className="col-md-6 col-lg-3">
                    <input type="text" placeholder="Your name" className=" p-3 musings__card--input w-100" />
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <input type="text" placeholder="Your email address" className="p-3 musings__card--input w-100" />

                  </div>
                  <div className="col-md-6 col-lg-3">
                    <button type="submit" className="musings__card--submit w-100 ms-lg-4 py-3 ">Subscibe</button>

                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Musings;
