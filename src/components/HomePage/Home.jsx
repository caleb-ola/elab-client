import React from 'react';
import Footer from '../ResuableComponents/Footer';

// COMPONENTS
import NavBar from '../ResuableComponents/NavBar';
import Events from './Events';
import Hero from './hero';
import Measure from './Measure';
import MediaMention from './MediaMention';
import Musings from './Musings';
import Partner from './partner';
import Story from './Story';
import Training from './Training';

function Home() {
  return (
    <div>
      <NavBar />
      <Hero
        text="We plug Individuals, Startups, SMEs and Higher Education Institutions into the global digital economy."
        title="Prosperity in Africa’s Underserved University Communities"
        circleTitle="Unlocking "
        image="url('/images/home/hero.png')"
        button="Learn More"
      />
      <Story />
      <Measure />
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
