import React from 'react';

// COMPONENTS
import NavBar from '../ResuableComponents/NavBar';
import CoworkHome from './CoworkHome';
import Events from './Events';
// import Hero from './hero';
import Measure from './Measure';
import MediaMention from './MediaMention';
import Musings from './Musings';
import Partner from './partner';
import Story from './Story';
import Training from './Training';
import Footer from '../ResuableComponents/Footer';
import Hero4 from '../ResuableComponents/Hero4';

function Home() {
  return (
    <div>
      <NavBar />
      <Hero4
        text="We plug Individuals, Startups, SMEs and Higher Education Institutions into the global digital economy."
        title="Prosperity in Africa’s Underserved University Communities"
        circleTitle="Unlocking "
        image="url('/images/home/hero.jpg')"
        button="Learn More"
        path="/about-us"
      />
      <Story />
      <Measure />
      <CoworkHome />
      <Partner />
      <Musings />
      <Events />
      <MediaMention />
      <Training />
      <Footer />
    </div>
  );
}

export default Home;
