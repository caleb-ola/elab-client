import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../HomePage/hero';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';
import Partnership from '../../ResuableComponents/Partnership';
import AllProjects from './AllProjects';

function Projects() {
  return (
    <div>
      <Helmet>
        <title>
          Projects -
          Ennovate Lab
        </title>
        <meta
          name="description"
          content="We are relentless in our desire to transform underserved university communities."
          keywords="Non-Profit"
        />
        <meta name="keywords" content="projects transform underserved university communities" />
      </Helmet>
      <NavBar />
      <Hero
        image="url('/images/program/project-hero.jpg')"
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
