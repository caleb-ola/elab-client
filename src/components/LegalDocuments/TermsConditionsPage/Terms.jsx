import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../ResuableComponents/Footer';
import HeroThree from '../../ResuableComponents/Hero3';
// import HeroThree from '../../ResuableComponents/Hero3'
// import HeroLight from '../../ResuableComponents/HeroLight';
import NavBar from '../../ResuableComponents/NavBar';
import TermsContent from './TermsContent';

function Terms() {
  return (
    <>
      <Helmet>
        <title>
          Terms & Conditions -
          Ennovate Lab
        </title>
      </Helmet>
      <NavBar />
      <HeroThree title="Terms & Conditions" />
      <TermsContent />
      <Footer />
    </>
  );
}

export default Terms;
