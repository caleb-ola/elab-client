import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Cta from '../../ResuableComponents/Cta';

function AllProjects() {
  const [active, setActive] = useState({
    PastProject: true,
    CurrentProject: false,
    FutureProject: false,
  });
  const [proj, setProj] = useState(
    <>
      <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
        <div
          className="projects__card position-relative"
          style={{
            backgroundImage: "url('/images/program/project1.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '384px',
          }}
        >
          <div className="projects__card--content position-absolute ">
            <h5 className="">Project title goes here</h5>
            <div className="my-4 hero__button">
              <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

            </div>
          </div>
        </div>
      </div>
      {' '}
      <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
        <div
          className="projects__card position-relative"
          style={{
            backgroundImage: "url('/images/program/project2.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '384px',
          }}
        >
          <div className="projects__card--content position-absolute ">
            <h5 className="">Project title goes here</h5>
            <div className="my-4 hero__button">
              <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

            </div>
          </div>
        </div>
      </div>
      {' '}
      <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
        <div
          className="projects__card position-relative"
          style={{
            backgroundImage: "url('/images/program/project3.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '384px',
          }}
        >
          <div className="projects__card--content position-absolute ">
            <h5 className="">Project title goes here</h5>
            <div className="my-4 hero__button">
              <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

            </div>
          </div>
        </div>
      </div>
      {' '}
      <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
        <div
          className="projects__card position-relative"
          style={{
            backgroundImage: "url('/images/program/project1.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '384px',
          }}
        >
          <div className="projects__card--content position-absolute ">
            <h5 className="">Project title goes here</h5>
            <div className="my-4 hero__button">
              <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

            </div>
          </div>
        </div>
      </div>
      {' '}
      <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
        <div
          className="projects__card position-relative"
          style={{
            backgroundImage: "url('/images/program/project1.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '384px',
          }}
        >
          <div className="projects__card--content position-absolute ">
            <h5 className="">Project title goes here</h5>
            <div className="my-4 hero__button">
              <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
        <div
          className="projects__card position-relative"
          style={{
            backgroundImage: "url('/images/program/project1.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '384px',
          }}
        >
          <div className="projects__card--content position-absolute ">
            <h5 className="">Project title goes here</h5>
            <div className="my-4 hero__button">
              <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

            </div>
          </div>
        </div>
      </div>
    </>,
  );

  const PastProject = () => {
    setActive({
      PastProject: true,
      CurrentProject: false,
      FutureProject: false,
    });
    setProj(
      <>
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <div
            className="projects__card position-relative"
            style={{
              backgroundImage: "url('/images/program/project1.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '384px',
            }}
          >
            <div className="projects__card--content position-absolute ">
              <h5 className="">Project title goes here</h5>
              <div className="my-4 hero__button">
                <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

              </div>
            </div>
          </div>
        </div>
        {' '}
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <div
            className="projects__card position-relative"
            style={{
              backgroundImage: "url('/images/program/project2.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '384px',
            }}
          >
            <div className="projects__card--content position-absolute ">
              <h5 className="">Project title goes here</h5>
              <div className="my-4 hero__button">
                <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

              </div>
            </div>
          </div>
        </div>
        {' '}
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <div
            className="projects__card position-relative"
            style={{
              backgroundImage: "url('/images/program/project3.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '384px',
            }}
          >
            <div className="projects__card--content position-absolute ">
              <h5 className="">Project title goes here</h5>
              <div className="my-4 hero__button">
                <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

              </div>
            </div>
          </div>
        </div>
        {' '}
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <div
            className="projects__card position-relative"
            style={{
              backgroundImage: "url('/images/program/project1.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '384px',
            }}
          >
            <div className="projects__card--content position-absolute ">
              <h5 className="">Project title goes here</h5>
              <div className="my-4 hero__button">
                <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

              </div>
            </div>
          </div>
        </div>
        {' '}
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <div
            className="projects__card position-relative"
            style={{
              backgroundImage: "url('/images/program/project1.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '384px',
            }}
          >
            <div className="projects__card--content position-absolute ">
              <h5 className="">Project title goes here</h5>
              <div className="my-4 hero__button">
                <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <div
            className="projects__card position-relative"
            style={{
              backgroundImage: "url('/images/program/project1.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '384px',
            }}
          >
            <div className="projects__card--content position-absolute ">
              <h5 className="">Project title goes here</h5>
              <div className="my-4 hero__button">
                <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

              </div>
            </div>
          </div>
        </div>

      </>,
    );
  };

  const CurrentProject = () => {
    setActive({
      PastProject: false,
      CurrentProject: true,
      FutureProject: false,
    });
    setProj(
      <>
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <div
            className="projects__card position-relative"
            style={{
              backgroundImage: "url('/images/program/project1.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '384px',
            }}
          >
            <div className="projects__card--content position-absolute ">
              <h5 className="">Project title goes here</h5>
              <div className="my-4 hero__button">
                <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

              </div>
            </div>
          </div>
        </div>
        {' '}
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <div
            className="projects__card position-relative"
            style={{
              backgroundImage: "url('/images/program/project2.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '384px',
            }}
          >
            <div className="projects__card--content position-absolute ">
              <h5 className="">Project title goes here</h5>
              <div className="my-4 hero__button">
                <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

              </div>
            </div>
          </div>
        </div>
        {' '}
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <div
            className="projects__card position-relative"
            style={{
              backgroundImage: "url('/images/program/project3.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '384px',
            }}
          >
            <div className="projects__card--content position-absolute ">
              <h5 className="">Project title goes here</h5>
              <div className="my-4 hero__button">
                <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

              </div>
            </div>
          </div>
        </div>
        {' '}

      </>,
    );
  };

  const FutureProject = () => {
    setActive({
      PastProject: false,
      CurrentProject: false,
      FutureProject: true,
    });
    setProj(
      <>
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <div
            className="projects__card position-relative"
            style={{
              backgroundImage: "url('/images/program/project2.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '384px',
            }}
          >
            <div className="projects__card--content position-absolute ">
              <h5 className="">Project title goes here</h5>
              <div className="my-4 hero__button">
                <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

              </div>
            </div>
          </div>
        </div>
        {' '}
        <div className="col-md-6 col-lg-4 my-3 my-lg-4 px-3 px-lg-4">
          <div
            className="projects__card position-relative"
            style={{
              backgroundImage: "url('/images/program/project3.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '384px',
            }}
          >
            <div className="projects__card--content position-absolute ">
              <h5 className="">Project title goes here</h5>
              <div className="my-4 hero__button">
                <Link to="/program/projects/details" className="link text-decoration-none px-3 py-2 fw-bold">Learn more</Link>

              </div>
            </div>
          </div>
        </div>
        {' '}

      </>,
    );
  };
  return (
    <div className="projects py-5 ">
      <div className="container py-lg-2 pb-lg-5">
        <div className="d-flex flex-row  justify-content-center py-3 py-lg-5">
          <span role="button" tabIndex={0} className={active.PastProject ? 'btn button px-0 mx-2 mx-lg-3 projects__active' : 'btn button px-0 mx-2 mx-lg-3'} onClick={PastProject} aria-hidden="true">Past Projects</span>
          <span type="button" className={active.CurrentProject ? 'btn button px-0 mx-2 mx-lg-3 projects__active' : 'btn button px-0 mx-2 mx-lg-3'} onClick={CurrentProject} aria-hidden="true">Current Projects</span>
          <span type="button" className={active.FutureProject ? 'btn button px-0 mx-2 mx-lg-3 projects__active' : 'btn button px-0 mx-2 mx-lg-3'} onClick={FutureProject} aria-hidden="true">Future Projects</span>
        </div>
        <div className="row">
          {proj}
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
