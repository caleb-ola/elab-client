import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../HomePage/hero';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';

import AllServices from './AllServices';

function Services() {
  return (
    <div>
      <Helmet>
        <title>
          Digital Services - Ennovate Lab
        </title>
        <meta
          name="description"
          content="We strive to create technological solutions that will help advance our
          client's business and solve real-life problems using strategic and high-level technology to drive and power business growth."
        />
        {/* <meta name="keywords" content="" /> */}
      </Helmet>
      <NavBar />
      <Hero
        image="url('/images/services/hero-services.jpg')"
        title="Digital Services"
        text="We strive to create technological solutions that will help advance our client's
        business and solve real-life problems using strategic and high-level technology to drive and power business growth."
        button="Learn More"
      />
      <AllServices />
      <Footer />
    </div>
  );
}

export default Services;
