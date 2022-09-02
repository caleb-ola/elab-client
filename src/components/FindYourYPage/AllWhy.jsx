import React from 'react';
import ProjectCard from '../ResuableComponents/ProjectCard';

function AllWhy() {
  return (
    <div className="why py-5">
      <div className="container py-lg-5">
        <div className="row">
          <div className="col-md-6 col-lg-4 my-3 px-3">
            <ProjectCard
              image="url('/images/why/why1.png')"
              title="Founders’ Community"
              button="Learn more"
              path="/find-your-y/founders-community"
            />
          </div>
          <div className="col-md-6 col-lg-4 my-3 px-3">
            <ProjectCard
              image="url('/images/why/why2.png')"
              title="Technical Co-founder"
              button="Learn more"
              path="/find-your-y/technical-cofounder"
            />
          </div>
          <div className="col-md-6 col-lg-4 my-3 px-3">
            <ProjectCard
              image="url('/images/why/why3.png')"
              title="Skills Seeker"
              button="Learn more"
              path="/find-your-y/skills-seeker"

            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllWhy;
