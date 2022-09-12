import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../ResuableComponents/Footer';
import HeroTwo from '../../ResuableComponents/hero2';
import NavBar from '../../ResuableComponents/NavBar';
import AllNonProfit from './AllNonProfit';
import Volunteer from './Volunteer';

function NonProfitPage() {
  return (
    <div>
      <Helmet>
        <title>
          Non-Profit -
          Ennovate Lab
        </title>
        <meta
          name="description"
          content="We seek to transform our community one project at a time."
          keywords="Non-Profit"
        />
        <meta name="keywords" content="non-profit volunteer" />
      </Helmet>
      <NavBar />
      <HeroTwo
        image="url('/images/program/non-profit-hero.jpg')"
        title="eLab"
        title1="Non-Profit"
        text=" We seek to transform our community one project at a time."
        button="Volunteer"
        button2="Donate"
        // DONATE BUTTON LINK GOES IN HERE.....
        path2=""
        modal="#volunteerModal"
        overlay="overlay__two"
      />
      <AllNonProfit />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default NonProfitPage;
