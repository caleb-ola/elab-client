import React from 'react';
import Hero from '../../HomePage/hero';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';
import Partnership from '../../ResuableComponents/Partnership';
import AllProjects from './AllProjects';

function Projects() {
  return (
    <div>
      <NavBar />
      <Hero
        image="url('/images/program/project-hero.png')"
        title="Projects"
        text="We are relentless in our desire to transform underserved university communities."
      />
      <AllProjects />
      <Partnership />
      <Footer />
    </div>

  );
}

export default Projects;
