import React from 'react';
import PaddedCard from '../../ResuableComponents/PaddedCard';

function AllPlaybooks() {
  return (
    <div className="allplaybooks">
      {/* PLAYBOOK STARTS */}
      <div className="modal fade benefits__form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body px-md-5">
              <h4 className="modal-title" id="exampleModalLabel">
                Download the free
                {' '}
                <br />
                {' '}
                ebook
              </h4>

              <form action="" className="benefits__form px-2">
                <div className="row py-2">
                  <label className="p-0" htmlFor="name">
                    Full Name
                  </label>
                  <input type="text" className="name p-3 my-2 benefits__form--input " id="name" />
                </div>
                <div className="row py-2">
                  <label className="p-0" htmlFor="email">
                    Email Address
                  </label>
                  <input type="email" className="email p-3 my-2 benefits__form--input " id="email" />
                </div>

                <div className="py-3 py-lg-5 px-0">
                  <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Get Access
                    {' '}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* PLAYBOOK ENDS */}
      <div className="container">
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
              image="/images/Resources/playbook6.png"
              discount="$100"
              price="$100"
              button="Download"
            />
          </div>
          <div className="col-md-6 col-lg-4 px-2 px-lg-4 my-3 my-lg-4">
            <PaddedCard
              image="/images/Resources/playbook7.png"
              discount="$100"
              price="$100"
              button="Download"
            />
          </div>
          <div className="col-md-6 col-lg-4 px-2 px-lg-4 my-3 my-lg-4">
            <PaddedCard
              image="/images/Resources/playbook8.png"
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
      </div>
    </div>
  );
}

export default AllPlaybooks;
