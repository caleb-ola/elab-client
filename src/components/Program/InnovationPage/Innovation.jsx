import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import HeroTwo from '../../ResuableComponents/hero2';
import NavBar from '../../ResuableComponents/NavBar';
import Available from './Available';
import Plans from './Plans';

function InnovationPage() {
  return (
    <div>
      <NavBar />
      <HeroTwo
        image="url('/images/program/heroInnovation.png')"
        overlay="overlay__two"
        title="Refreshing + creative environment = "
        text="We provide the ambience, serenity, functionality and flexibility you need to achieve your work goals."
        circleTitle="Productivity"
      />
      <Plans />
      <Available />
      <Footer />
    </div>
  );
}

export default InnovationPage;
