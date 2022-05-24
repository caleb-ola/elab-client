import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import HeroTwo from '../../ResuableComponents/hero2';
import NavBar from '../../ResuableComponents/NavBar';
import AboutTraining from './AboutTraining';

function TrainingPageDetails() {
  return (
    <div>
      <NavBar />
      <HeroTwo
        image={"url('/images/services/training-hero.png')"}
        price="$ 100"
        title="Header Text for Training Title Stays Here"
        text="20TH MAY, 2022 | 9PM (WAT)"
        button="Register"
        overlay="overlay"
      />
      <AboutTraining />
      <Footer />
    </div>
  );
}

export default TrainingPageDetails;
