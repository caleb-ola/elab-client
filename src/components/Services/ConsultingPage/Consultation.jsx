import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../HomePage/hero';
import Testimonial from '../../Program/CommunityPage/Testimonial';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';

import Brands from './Brands';
import HeaderBookSession from './HeaderBookSession';

function Consultation() {
  return (
    <div>
      <Helmet>
        <title>
          Consulting - Ennovate Lab
        </title>
        <meta
          name="description"
          content="Building a clear path to help our clients deliver organizational success."
        />
        {/* <meta name="keywords" content="" /> */}
      </Helmet>
      <NavBar />
      <Hero
        image="url('/images/services/hero-services.jpg')"
        title="Business Consulting"
        text="Building a clear path to help our clients deliver organizational success."
        button="Book a Session"
        path="/services/consultation/book-a-session"
      />
      <HeaderBookSession />
      <Brands />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Consultation;
