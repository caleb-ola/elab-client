import React from 'react';
import Hero from '../HomePage/hero';
import Footer from '../ResuableComponents/Footer';
import NavBar from '../ResuableComponents/NavBar';
import AllWhy from './AllWhy';

function FindYourY() {
  return (
    <div>
      <NavBar />
      <Hero
        image="url('/images/why/whyhero.png')"
        title="Find your Joy"
        text="Digital resources for entrepreneurs and business owners changing the status quo"
      />
      <AllWhy />
      <Footer />
    </div>
  );
}

export default FindYourY;
