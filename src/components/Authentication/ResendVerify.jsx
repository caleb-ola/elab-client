import React from 'react';
import Footer from '../ResuableComponents/Footer';
import HeroThree from '../ResuableComponents/Hero3';
import NavBar from '../ResuableComponents/NavBar';
import ResendVerifyCard from './ResendVerifyCard';

function ResendVerify() {
  return (
    <div>
      <NavBar />
      <HeroThree title="Email Verification" />
      <ResendVerifyCard />
      <Footer />
    </div>
  );
}

export default ResendVerify;
