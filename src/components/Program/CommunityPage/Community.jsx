import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../ResuableComponents/Footer';
import HeroTwo from '../../ResuableComponents/hero2';
import NavBar from '../../ResuableComponents/NavBar';
import Benefits from './Benefits';
import Member from './Member';
import Testimonial from './Testimonial';

function Community() {
  return (
    <div>
      <Helmet>
        <title>
          Community -
          Ennovate Lab
        </title>
        <meta
          name="description"
          content="Trybe by eLab. The Trybe by eLab community is a resourceful online community for tech-enthusiasts and entrepreneursTrybe by eLab. "
        />
        <meta name="keywords" content="community" />
      </Helmet>
      <NavBar />
      <HeroTwo
        title="Trybe by eLab"
        text="The Trybe by eLab community is a resourceful online community for tech-enthusiasts and entrepreneurs"
        button="Join Trybe"
        image="url('/images/about/hero1.jpg')"
        overlay="overlay"
        modal="#trybeModal"
      />
      <Benefits />
      <Testimonial />
      <Member />
      <Footer />
    </div>
  );
}

export default Community;
