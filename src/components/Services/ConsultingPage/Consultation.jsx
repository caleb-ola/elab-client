import React from 'react';
import Hero from '../../HomePage/hero';
import Testimonial from '../../Program/CommunityPage/Testimonial';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';

import Brands from './Brands';
import HeaderBookSession from './HeaderBookSession';

function Consultation() {
  return (
    <div>
      <NavBar />
      <Hero
        image="url('/images/services/hero-services.png')"
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
