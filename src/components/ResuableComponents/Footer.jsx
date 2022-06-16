import React from 'react';

function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container py-lg-5">
        <div className="row footer__upper pb-lg-2">
          <div className="col-md-6 col-lg-3 my-2 my-lg-0">
            <h5 className="fw-bold footer__upper--title pb-2">Quick Links</h5>
            <a className="footer__upper--link" href="/">
              {' '}
              <p> Founder&apos;s Community</p>
            </a>
            <a className="footer__upper--link" href="/"><p>Trybe by eLab</p></a>
            <a className="footer__upper--link" href="/"><p>Find your Y</p></a>
          </div>
          <div className="col-md-6 col-lg-3 my-2 my-lg-0">
            <h5 className="fw-bold footer__upper--title pb-2">Resources</h5>
            <a className="footer__upper--link" href="/"><p>ebook</p></a>
            <a className="footer__upper--link" href="/"><p>Whitepaper</p></a>
            <a className="footer__upper--link" href="/"><p>Blog</p></a>
            <a className="footer__upper--link" href="/"><p>FAQ</p></a>
            {' '}

          </div>
          <div className="col-md-6 col-lg-3 my-2 my-lg-0">
            <h5 className="fw-bold footer__upper--title pb-2">Company</h5>
            <a className="footer__upper--link" href="/">About us</a>
          </div>
          <div className="col-md-6 col-lg-3 my-2 my-lg-0">
            <h5 className="fw-bold footer__upper--title pb-2">Contact us</h5>
            <p className="footer__upper--text" href="/">
              50, Ogbomoso-Ilorin Rd, General Area, Ogbomoso.
            </p>
            <p className="footer__upper--text" href="/"> hello@ennovatelab.com</p>
            <p className="footer__upper--text" href="/">
              +234 905 642 2768
            </p>

          </div>
        </div>
        <hr className="footer--line" />
        <div className="row pt-lg-3 footer__lower align-items-center justify-content-center text-center text-md-start">
          <div className="col-md-6 col-lg-4 my-2 my-lg-0 text-lg-start">
            <img src="/images/logo-white.png" alt="" className="img-fluid footer__lower--icon" />
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-0 ">
            <a href="/" className="footer__upper--link px-2">Privacy Policy</a>
            <a href="/" className="footer__upper--link px-2">Terms & Conditions</a>
          </div>
          <div className="col-md-6 col-lg-4 my-2 my-lg-0">
            <div className="custom-b text-lg-end w-100">
              <div className="footer__buttons--circle   my-md-2 w-100">
                <ul className="p-0 w-100 ml-0  text-lg-end">
                  <span className="fa-stack fa-1x custom ms-3">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                  </span>
                  {' '}
                  <span className="fa-stack fa-1x custom ms-3">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                  </span>
                  {' '}
                  <span className="fa-stack fa-1x custom ms-3">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" />
                  </span>
                  {' '}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
