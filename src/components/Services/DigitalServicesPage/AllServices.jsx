import React from 'react';
import ServicesCard from '../../ResuableComponents/ServicesCard';

function AllServices() {
  return (
    <div className="services py-5">
      <div className="container py-lg-5">
        <div className="partner__header text-center mx-auto">
          <h4 className="partner--title ">
            Services Provided
          </h4>
          <p className="pt-3">
            We are ready to serve you. Take a deep dive now
          </p>
        </div>
        <div className="row py-5">
          <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
            <ServicesCard
              image="/images/services/services1.png"
              title="Graphics Design"
              text="We create memorable perceptions of your brand through unorthodox design solutions."
              button="Visit Website"
            />
          </div>
          <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
            <ServicesCard
              image="/images/services/services4.png"
              title="Graphics Design"
              text="We create memorable perceptions of your brand through unorthodox design solutions."
              button="Visit Website"
            />
          </div>
          <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
            <ServicesCard
              image="/images/services/services3.png"
              title="Graphics Design"
              text="We create memorable perceptions of your brand through unorthodox design solutions."
              button="Visit Website"
            />
          </div>
          <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
            <ServicesCard
              image="/images/services/services4.png"
              title="Graphics Design"
              text="We create memorable perceptions of your brand through unorthodox design solutions."
              button="Visit Website"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllServices;
