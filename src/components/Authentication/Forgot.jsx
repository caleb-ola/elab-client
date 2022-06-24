import React from 'react';
import Footer from '../ResuableComponents/Footer';
import HeroThree from '../ResuableComponents/Hero3';
import NavBar from '../ResuableComponents/NavBar';
import ForgotCard from './ForgotCard';

function Forgot() {
  return (
    <div>
      <NavBar />
      <HeroThree title="Forget Password" text="Enter the email address you created your account with to get a link to reset your passwork." />
      <ForgotCard />
      <Footer />
    </div>
  );
}

export default Forgot;
