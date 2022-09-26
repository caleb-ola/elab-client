import React from 'react';

function AllFaq() {
  return (
    <div className="faq pb-5 pt-2">
      <div className="container pb-5">
        <div className="faq__card p-4 p-lg-5">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  What is the Ennovate Lab?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Ennovate is an innovation hub that is set on the path of building
                  resilient and inclusive innovation ecosystem in underserved university
                  communities.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What services do you render that could be helpful to me as an undergraduate?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  As an undergraduate student, you can take part in any of our
                  events, tech training or join the Trybe by eLab Community.
                  You can also use our cowork space if you’re a freelancer.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  How can Ennovate Lab help my Startup business?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  You can join our Founders’ Community to have access to
                  resources and training that would aid your business growth and development.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Who can partner with Ennovate Lab?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Student-Tech communities, organisations wanting to
                  partner with local innovation hubs, NGOs,
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Is Ennovate Lab a social enterprise?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Ennovate Lab is not a social enterprise. However, we have projects that
                  are targeted towards social enterprises such as CTCTW
                  (Children That Change The World) and ThisIsOgbomoso (TIO).
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Is it just tech-related start-ups that Ennovate Lab provides support for?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  No. Ennovate Lab provides support in different forms for every type of business.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  I am an innovator with a business idea but no
                  business plan, how can Ennovate Lab help me build a sustainable business?
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  You can join the Founders’ Community or reach out to Qeola.com
                  - the business arm of Ennovate Lab for consultation.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                  I am an investor, how can I forge a partnership with the eLab?
                </button>
              </h2>
              <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  You can reach out to us via hello@ennovatelab.com.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingNine">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                  Are certificates issued out for programs offered by the eLab?
                </button>
              </h2>
              <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  You get certified when you participate in any of our training programs.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingTen">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                  Is there a chance to volunteer or intern at the eLab?
                </button>
              </h2>
              <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Yes. You can volunteer to be part of any of our social
                  enterprise projects. And to intern with us at the Lab,
                  you can shoot us a mail at hello@ennovatelab.com.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingEleven">
                <button className="accordion-button faq--button shadow-none p-4 collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                  What are the internship opportunities available at the eLab ?
                </button>
              </h2>
              <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  You can decide to intern with us in any of the
                  following disciplines; Software development, Branding,
                  Graphics design, Content writing, Digital marketing,
                  Communications, and Project management.
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
