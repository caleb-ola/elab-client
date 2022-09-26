import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../ResuableComponents/Footer';
import HeroThree from '../../ResuableComponents/Hero3';
import NavBar from '../../ResuableComponents/NavBar';
import Partnership from '../../ResuableComponents/Partnership';
import AllStartups from './AllStartups';
// import Pagination from '../../ResuableComponents/Pagination';

function StartupFoundry() {
  return (
    <div>
      <Helmet>
        <title>
          Startup Foundry -
          Ennovate Lab
        </title>
        <meta
          name="description"
          content="Startups in our foundry"
          keywords="Non-Profit"
        />
        <meta name="keywords" content="Startup Foundry" />
      </Helmet>
      <NavBar />
      <HeroThree
        title="Our Startup"
        highlight="Directory"
        // text="Startups in our foundry"
      />
      <AllStartups />
      {/* <Pagination /> */}
      <Partnership />
      <Footer />
    </div>
  );
}

export default StartupFoundry;
