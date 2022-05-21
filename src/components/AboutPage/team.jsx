import React from 'react';

function Team() {
  return (
    <div className="team pt-5">
      <div className="container py-3 py-lg-5">
        <div className="team__header mx-auto text-center mb-2">
          <h4 className="team__header--title my-lg-2">
            Meet the eLab Team
          </h4>
          <p className="team__header__text m-0">
            Our team of talented minds, creatives, strategists, and managers
            responsible for building, resourcing and equipping the community.
          </p>
        </div>

      </div>
      <div className="team__members">
        <img src="/images/about/team.png" alt="" className="img-fluid w-100" />
      </div>
    </div>
  );
}

export default Team;
