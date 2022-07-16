import React from 'react';
import Footer from '../ResuableComponents/Footer';
import HeroThree from '../ResuableComponents/Hero3';
import NavBar from '../ResuableComponents/NavBar';
import VerifyCard from './VerifyCard';

function Verify() {
  return (
    <div>
      <NavBar />
      <HeroThree title="Email Verification" />
      <VerifyCard />
      <Footer />
    </div>
  );
}

export default Verify;
