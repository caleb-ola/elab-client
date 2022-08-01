import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../HomePage/hero';
import Footer from '../ResuableComponents/Footer';
// import Hero4 from '../ResuableComponents/Hero4';
import NavBar from '../ResuableComponents/NavBar';
import Team from './team';
import Timeline from './Timeline';
import Values from './Values';
import Vision from './Vision';

function About() {
  return (
    <div>
      <Helmet>
        <title>
          About - Ennovate Lab
        </title>
        {/* <meta
          name="description"
          content=" We are dreamers and doers, artists and engineers, poets and coders,
          activists and analysts. Creativity, empathy and industry found perfect convergence
          in us and we couldn’t help but see building innovation ecosystems (especially in
          underserved university communities) as the most fulfilling way to express all
          our superpowers."
        /> */}
        {/* <meta name="keywords" content="" /> */}
      </Helmet>
      <NavBar />
      <Hero
        title="Appropriate Content is needed
        for this section"
        image="url('/images/about/hero1.jpg')"
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
