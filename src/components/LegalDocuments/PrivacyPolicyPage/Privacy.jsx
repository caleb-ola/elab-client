import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../ResuableComponents/Footer';
import HeroThree from '../../ResuableComponents/Hero3';
// import HeroThree from '../../ResuableComponents/Hero3'
// import HeroLight from '../../ResuableComponents/HeroLight';
import NavBar from '../../ResuableComponents/NavBar';
import PrivacyContent from './PrivacyContent';

function Privacy() {
  return (
    <>
      <Helmet>
        <title>
          Privacy Policy -
          Ennovate Lab
        </title>
      </Helmet>
      <NavBar />
      <HeroThree title="Privacy Policy" />
      <PrivacyContent />
      <Footer />
    </>
  );
}

export default Privacy;
