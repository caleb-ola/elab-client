import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../ResuableComponents/Footer';
import HeroTwo from '../../ResuableComponents/hero2';
import NavBar from '../../ResuableComponents/NavBar';
import Available from './Available';
import Plans from './Plans';

function InnovationPage() {
  return (
    <div>
      <Helmet>
        <title>
          Innovation Hub -
          Ennovate Lab
        </title>
        <meta
          name="description"
          content="We provide the ambience, serenity, functionality and flexibility you need to achieve your work goals."
        />
        <meta name="keywords" content="innovation hub cowork" />
      </Helmet>
      <NavBar />
      <HeroTwo
        image="url('/images/program/heroInnovation.jpg')"
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
