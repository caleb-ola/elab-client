import React from 'react';

function HeaderBookSession() {
  return (
    <div className="services__book py-5">
      <div className="container py-lg-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="py-2">Header text about consultation stays here</h4>
            <p className="py-2">
              We integrate consulting and advisory services with solution-rich
              insights and strategically aligned, contextually responsive practices customized
              for your business needs.
            </p>
            <div className="py-2 py-lg-3">
              <a href="/services/consultation/book-a-session" className="link fw-bold py-3 px-5 text-decoration-none" type="button">
                Book a Session
              </a>
            </div>
          </div>
          <div className="col-lg-6 px-md-5">
            <img src="/images/services/services5.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBookSession;
