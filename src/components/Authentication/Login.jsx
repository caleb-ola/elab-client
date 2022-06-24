import React from 'react';
import Footer from '../ResuableComponents/Footer';
import HeroThree from '../ResuableComponents/Hero3';
import NavBar from '../ResuableComponents/NavBar';
import LoginCard from './LoginCard';

function Login() {
  return (
    <div>
      <NavBar />
      <HeroThree title="Login" text=" Become a part of an exclusive community for entrepreneurs and tech-enthusiasts." />
      <LoginCard />
      <Footer />
    </div>
  );
}

export default Login;
