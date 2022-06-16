import React from 'react';

function AllFaq() {
  return (
    <div className="faq py-5">
      <div className="container pb-5">
        <div className="faq__card p-4 p-lg-5">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  What is Ennovate Lab
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the first items accordion body.</strong>
                  {' '}
                  It is shown by default, until the collapse plugin adds the appropriate classes
                  that we use to style each element. These classes control the overall appearance,
                  as well as the showing and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. Its also worth noting that
                  just about any HTML can go within the
                  <code>.accordion-body</code>
                  , though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Can I partner with Ennovate Lab on a project
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the second items accordion body.</strong>
                  {' '}
                  It is hidden by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS transitions.
                  You can modify any of this with custom CSS or overriding our default variables.
                  Its also worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>
                  , though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Is a Ennovate Lab a social enterprise
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third items accordion body.</strong>
                  {' '}
                  It is hidden by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes control the overall
                  appearance, as well as the showing and hiding via CSS transitions. You can
                  modify any of this with custom CSS or overriding our default variables.
                  Its also worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>
                  , though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllFaq;
