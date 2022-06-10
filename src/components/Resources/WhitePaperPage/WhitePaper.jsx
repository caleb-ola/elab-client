import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import HeroLight from '../../ResuableComponents/HeroLight';
import NavBar from '../../ResuableComponents/NavBar';
import AllWhitepaper from './AllWhitepaper';

function WhitePaper() {
  return (
    <div>
      <NavBar />
      <HeroLight
        highlight2="WhitePaper"
        text="Startups in our foundry"
      />
      <AllWhitepaper />
      <Footer />
    </div>
  );
}

export default WhitePaper;
