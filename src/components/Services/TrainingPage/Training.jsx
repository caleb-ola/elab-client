import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import HeroTwo from '../../ResuableComponents/hero2';
import NavBar from '../../ResuableComponents/NavBar';
import AllTraining from './AllTraining';

function Training() {
  return (
    <div>
      <NavBar />
      <HeroTwo
        image="url('/images/services/training-hero.png')"
        title="eLab"
        title1="Learning"
        text="Equipping the next generation in relevant tech skills."
        overlay="overlay__two"
      />
      <AllTraining />
      <Footer />

    </div>
  );
}

export default Training;
