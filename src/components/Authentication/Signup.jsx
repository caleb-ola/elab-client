import React from 'react';
import Footer from '../ResuableComponents/Footer';
import HeroThree from '../ResuableComponents/Hero3';
import NavBar from '../ResuableComponents/NavBar';
import SignupCard from './SignupCard';

function Signup() {
  return (
    <div>
      <NavBar />
      <HeroThree title="Sign Up" text="Become a part of an exclusive community for entrepreneurs and tech-enthusiasts." />
      <SignupCard />
      <Footer />
    </div>
  );
}

export default Signup;
