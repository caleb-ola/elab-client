import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import HeroThree from '../../ResuableComponents/Hero3';
import NavBar from '../../ResuableComponents/NavBar';
import Partnership from '../../ResuableComponents/Partnership';
import AllStartups from './AllStartups';
// import Pagination from '../../ResuableComponents/Pagination';

function StartupFoundry() {
  return (
    <div>
      <NavBar />
      <HeroThree title="Our Startup" highlight="Directory" text="Startups in our foundry" />
      <AllStartups />
      {/* <Pagination /> */}
      <Partnership />
      <Footer />
    </div>
  );
}

export default StartupFoundry;
