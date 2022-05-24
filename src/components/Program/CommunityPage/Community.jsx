import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import HeroTwo from '../../ResuableComponents/hero2';
import NavBar from '../../ResuableComponents/NavBar';
import Benefits from './Benefits';
import Member from './Member';
import Testimonial from './Testimonial';

function Community() {
  return (
    <div>
      <NavBar />
      <HeroTwo
        title="Trybe by eLab"
        text="The Trybe by eLab community is a resourceful online community for tech-enthusiasts and entrepreneurs"
        button="Join Tyrbe"
        image="url('/images/about/hero1.png')"
        overlay="overlay"
      />
      <Benefits />
      <Testimonial />
      <Member />
      <Footer />
    </div>
  );
}

export default Community;
