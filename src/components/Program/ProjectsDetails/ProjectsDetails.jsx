import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Hero from '../../HomePage/hero';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';
// import DownloadReport from './DownloadReport';

function ProjectsDetails() {
  const [body, setBody] = useState();
  const params = useParams();

  useEffect(() => {
    axios.get(`https://elab-api.herokuapp.com/api/v1/projects/${params.slug}`).then((response) => {
      // console.log(response);
      const { data } = response.data;
      setBody(
        <>
          <Helmet>
            <title>
              {data.title}
              {' '}
              Project
              - Ennovate Lab
            </title>
            {/* <meta
            name="description"
            content="Building a clear path to help our clients deliver organizational success."
          /> */}
          </Helmet>
          <Hero
            image="url('/images/program/project-details-hero.png')"
            title={data.title}
          // text={data.description}
            download={data.brochure}
          />
          ,
          <div className="container p-3 p-md-5 mx-auto">
            <div className="p-2 p-md-5">
              <p>
                {data.description}
              </p>
              <div className="pt-3 text-center">
                <a href={data.brochure} className="link fw-bold py-3 px-5 text-decoration-none text-start" type="button" download>
                  Download brochure
                </a>
              </div>
            </div>
          </div>
          ,
        </>,
      );
    }, (error) => {
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
    <div>
      <ToastContainer />
      <NavBar />
      {body}
      <Footer />
    </div>
  );
}

export default ProjectsDetails;
