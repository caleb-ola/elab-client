import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../HomePage/hero';
import Footer from '../ResuableComponents/Footer';
import NavBar from '../ResuableComponents/NavBar';
import AllWhy from './AllWhy';

function FindYourY() {
  return (
    <div>
      <Helmet>
        <title>
          Find your Y -
          Ennovate Lab
        </title>
        <meta
          name="description"
          content="Digital resources for entrepreneurs and business owners changing the status quo"
        />
        <meta name="keywords" content="why joy pay" />
      </Helmet>
      <NavBar />
      <Hero
        image="url('/images/why/whyhero.jpg')"
        // title="Find your Joy"
        typingText
        text="Digital resources for entrepreneurs and business owners changing the status quo"
      />
      <AllWhy />
      <Footer />
    </div>
  );
}

export default FindYourY;
