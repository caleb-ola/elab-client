import React from 'react';
import PaddedCard from '../../ResuableComponents/PaddedCard';

function RelatedBlogs() {
  return (
    <div className="related py-5">
      <div className="container">
        <div className="related__header">
          <h4 className="related__header--title">Related Blog Post</h4>
        </div>
        <div className="row py-4 py-lg-4">
          <div className="col-md-6 col-lg-3 my-2 my-lg-3 ">
            <PaddedCard
              title="Blog post title stays hereand it can take...."
              image="/images/Resources/blog1.png"
              name="Funto Adesola"
              date="25th May, 2022"
            />
          </div>
          {' '}
          <div className="col-md-6 col-lg-3 my-3 my-lg-4 ">
            <PaddedCard
              title="Blog post title stays hereand it can take...."
              image="/images/Resources/blog2.png"
              name="Funto Adesola"
              date="25th May, 2022"
            />
          </div>
          {' '}
          <div className="col-md-6 col-lg-3 my-3 my-lg-4 ">
            <PaddedCard
              title="Blog post title stays hereand it can take...."
              image="/images/Resources/blog3.png"
              name="Funto Adesola"
              date="25th May, 2022"
            />
          </div>
          <div className="col-md-6 col-lg-3 my-3 my-lg-4 ">
            <PaddedCard
              title="Blog post title stays hereand it can take...."
              image="/images/Resources/blog3.png"
              name="Funto Adesola"
              date="25th May, 2022"
            />
          </div>
          {' '}

        </div>
      </div>
    </div>
  );
}

export default RelatedBlogs;
