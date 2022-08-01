import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../ResuableComponents/Footer';
import HeroTwo from '../../ResuableComponents/hero2';
import NavBar from '../../ResuableComponents/NavBar';
import AllTraining from './AllTraining';

function Training() {
  return (
    <div>
      <Helmet>
        <title>
          Training - Ennovate Lab
        </title>
        <meta
          name="description"
          content="Equipping the next generation in relevant tech skills."
        />
        {/* <meta name="keywords" content="" /> */}
      </Helmet>
      <NavBar />
      <HeroTwo
        image="url('/images/services/training-hero.jpg')"
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
