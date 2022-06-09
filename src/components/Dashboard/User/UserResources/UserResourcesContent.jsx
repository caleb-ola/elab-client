import React from 'react';
import PaddedCard from '../../../ResuableComponents/PaddedCard';

function UserResourcesContent() {
  return (
    <div>
      <div className="container py-5 my-lg-5">
        <div className="row">
          <div className="col-md-6 col-lg-4 px-2 px-lg-4 my-3 my-lg-4">
            <PaddedCard
              image="/images/Resources/playbook1.png"
              button="Download"
            />
          </div>
          {' '}
          <div className="col-md-6 col-lg-4 px-2 px-lg-4 my-3 my-lg-4">
            <PaddedCard
              image="/images/Resources/playbook2.png"
              discount="$100"
              price="$100"
              button="Download"
            />
          </div>
          {' '}
          <div className="col-md-6 col-lg-4 px-2 px-lg-4 my-3 my-lg-4">
            <PaddedCard
              image="/images/Resources/playbook3.png"
              discount="$100"
              price="$100"
              button="Download"
            />
          </div>
          {' '}
          <div className="col-md-6 col-lg-4 px-2 px-lg-4 my-3 my-lg-4">
            <PaddedCard
              image="/images/Resources/playbook4.png"
              discount="$100"
              price="$100"
              button="Download"
            />
          </div>
          <div className="col-md-6 col-lg-4 px-2 px-lg-4 my-3 my-lg-4">
            <PaddedCard
              image="/images/Resources/playbook5.png"
              discount="$100"
              price="$100"
              button="Download"
            />
          </div>
          <div className="col-md-6 col-lg-4 px-2 px-lg-4 my-3 my-lg-4">
            <PaddedCard
              image="/images/Resources/playbook9.png"
              discount="$100"
              price="$100"
              button="Download"
            />
          </div>
        </div>
        {' '}

      </div>
    </div>
  );
}

export default UserResourcesContent;
