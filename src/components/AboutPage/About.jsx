import React from 'react';
import Hero from '../HomePage/hero';
import Footer from '../ResuableComponents/Footer';
import NavBar from '../ResuableComponents/NavBar';
import Team from './team';
import Values from './Values';
import Vision from './Vision';

function About() {
  return (
    <div>
      <NavBar />
      <Hero
        title="Appropriate Content is needed
        for this section"
        // circleTitle="Unlocking "
        image="url('/images/about/hero1.png')"
        // button="Learn More"
      />
      <Vision />
      <Values />
      <Team />
      {' '}
      <Footer />
    </div>
  );
}

export default About;
