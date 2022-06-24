import React from 'react';
import Footer from '../ResuableComponents/Footer';
import HeroThree from '../ResuableComponents/Hero3';
import NavBar from '../ResuableComponents/NavBar';
import ResetCard from './ResetCard';

function Reset() {
  return (
    <div>
      <NavBar />
      <HeroThree title="Reset Password" text="Create a new password that is difficult to get but easy for you to remember." />
      <ResetCard />
      <Footer />
    </div>
  );
}

export default Reset;
