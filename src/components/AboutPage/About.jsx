import React from 'react';
import Hero from '../HomePage/hero';
import Footer from '../ResuableComponents/Footer';
import NavBar from '../ResuableComponents/NavBar';
import Team from './team';
import Timeline from './Timeline';
import Values from './Values';
import Vision from './Vision';

function About() {
  return (
    <div>
      <NavBar />
      <Hero
        title="Appropriate Content is needed
        for this section"
        image="url('/images/about/hero1.png')"
      />
      <Timeline />
      <Vision />
      <Values />
      <Team />
      <Footer />
    </div>
  );
}

export default About;
