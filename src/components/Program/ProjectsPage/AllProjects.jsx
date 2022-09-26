import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Empty from '../../ResuableComponents/Empty';
import SkeletonEventRow from '../../ResuableComponents/SkeletonLoaders/SkeletonEventsRow';
// import Cta from '../../ResuableComponents/Cta';

function AllProjects() {
  const [active, setActive] = useState({
    PastProject: true,
    CurrentProject: false,
    FutureProject: false,
  });
  const [proj, setProj] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <SkeletonEventRow />,
  );

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/projects/past-projects`).then((response) => {
      // console.log(response);
      setLoading(false);
      setSkeleton();
      setProj(
        response.data.data.map((item) => (
          <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-5" key={item.id}>
            <div
              className="projects__card position-relative"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '384px',
              }}
            >
              <div className="projects__card--content position-absolute ">
                <h5 className="">{item.title}</h5>
                <div className="my-4 hero__button">
                  <Link to={`/program/projects/${item.slug}`} className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        )),

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

  const PastProject = () => {
    setActive({
      PastProject: true,
      CurrentProject: false,
      FutureProject: false,
    });
    setLoading(true);
    setSkeleton(<SkeletonEventRow />);
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/projects/past-projects`).then((response) => {
      // console.log(response);
      setLoading(false);
      setSkeleton();
      if (response.data.data.length === 0) {
        setProj(
          <Empty
            header="No projects"
            subtext="There are no projects here for now, but surely cooked something."
          />,
        );
      } else {
        setProj(
          response.data.data.map((item) => (
            <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-5" key={item.id}>
              <div
                className="projects__card position-relative"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '384px',
                }}
              >
                <div className="projects__card--content position-absolute ">
                  <h5 className="">{item.title}</h5>
                  <div className="my-4 hero__button">
                    <Link to={`/program/projects/${item.slug}`} className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>
                  </div>
                </div>
              </div>
            </div>
          )),
        );
      }
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
  };

  const CurrentProject = () => {
    setActive({
      PastProject: false,
      CurrentProject: true,
      FutureProject: false,
    });
    setLoading(true);
    setSkeleton(<SkeletonEventRow />);
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/projects/current-projects`).then((response) => {
      // console.log(response);
      setLoading(false);
      setSkeleton();
      if (response.data.data.length === 0) {
        setProj(
          <Empty
            header="No projects"
            subtext="There are no projects here for now, but surely something is cooking."
          />,
        );
      } else {
        setProj(
          response.data.data.map((item) => (
            <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-5" key={item.id}>
              <div
                className="projects__card position-relative"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '384px',
                }}
              >
                <div className="projects__card--content position-absolute ">
                  <h5 className="">{item.title}</h5>
                  <div className="my-4 hero__button">
                    <Link to={`/program/projects/${item.slug}`} className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>
                  </div>
                </div>
              </div>
            </div>
          )),
        );
      }
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
  };

  const FutureProject = () => {
    setActive({
      PastProject: false,
      CurrentProject: false,
      FutureProject: true,
    });
    setLoading(true);
    setSkeleton(<SkeletonEventRow />);
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/projects/future-projects`).then((response) => {
      // console.log(response);
      setLoading(false);
      setSkeleton();
      if (response.data.data.length === 0) {
        setProj(
          <Empty
            header="No projects"
            subtext="There are no projects here for now, but surely something is cooking."
          />,
        );
      } else {
        setProj(
          response.data.data.map((item) => (
            <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-5" key={item.id}>
              <div
                className="projects__card position-relative"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  height: '384px',
                }}
              >
                <div className="projects__card--content position-absolute ">
                  <h5 className="">{item.title}</h5>
                  <div className="my-4 hero__button">
                    <Link to={`/program/projects/${item.slug}`} className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>
                  </div>
                </div>
              </div>
            </div>
          )),
        );
      }
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
  };
  return (
    <div className="projects py-5 ">
      <ToastContainer />
      <div className="container py-lg-2 pb-lg-5">
        <div className="d-flex flex-wrap justify-content-center py-3 py-lg-5">
          <span role="button" tabIndex={0} className={active.PastProject ? 'btn button px-0 mx-2 mx-lg-3 projects__active' : 'btn button px-0 mx-2 mx-lg-3'} onClick={PastProject} aria-hidden="true">Past Projects</span>
          <span type="button" className={active.CurrentProject ? 'btn button px-0 mx-2 mx-lg-3 projects__active' : 'btn button px-0 mx-2 mx-lg-3'} onClick={CurrentProject} aria-hidden="true">Current Projects</span>
          <span type="button" className={active.FutureProject ? 'btn button px-0 mx-2 mx-lg-3 projects__active' : 'btn button px-0 mx-2 mx-lg-3'} onClick={FutureProject} aria-hidden="true">Future Projects</span>
        </div>
        <div className="row">
          {loading ? skeleton : proj}
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
