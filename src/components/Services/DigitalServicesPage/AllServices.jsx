import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ServicesCard from '../../ResuableComponents/ServicesCard';
import SkeletonEventRow from '../../ResuableComponents/SkeletonLoaders/SkeletonEventsRow';

function AllServices() {
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <SkeletonEventRow />,
  );
  useEffect(() => {
    axios.get('https://elab-api.herokuapp.com/api/v1/services').then((response) => {
      // console.log(response);
      setLoading(false);
      setSkeleton();
      setBody(
        response.data.data.map((item) => (
          <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4" key={item.id}>
            <ServicesCard
              image={item.image}
              title={item.title}
              text={item.description}
              path={item.link}
              button="Visit Website"
            />
          </div>
        )),
      );
    }, (error) => {
      // console.log(error);
      if (error.response) {
        error.response.data.errors.map((err) => toast.error(`${err.message}`, {
          position: 'top-right',
          autoClose: 15000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }));
      } else {
        toast.error('Ops, something went wrong, please try again', {
          position: 'top-right',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  }, []);

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
          {loading ? skeleton : body}
          {/* <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
            <ServicesCard
              image="/images/services/services1.png"
              title="Graphics Design"
              text="We create memorable perceptions of your brand
               through unorthodox design solutions."
              button="Visit Website"
            />
          </div>
          <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
            <ServicesCard
              image="/images/services/services4.png"
              title="Graphics Design"
              text="We create memorable perceptions of your
              brand through unorthodox design solutions."
              button="Visit Website"
            />
          </div>
          <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
            <ServicesCard
              image="/images/services/services3.png"
              title="Graphics Design"
              text="We create memorable perceptions of your
              brand through unorthodox design solutions."
              button="Visit Website"
            />
          </div>
          <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
            <ServicesCard
              image="/images/services/services4.png"
              title="Graphics Design"
              text="We create memorable perceptions of your brand
              through unorthodox design solutions."
              button="Visit Website"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AllServices;
