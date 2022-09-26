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
          content="“Never doubt that a small group of thoughtful committed citizens can change the world: indeed, it’s the only thing that ever has.” - Margaret Mead"
          keywords="Non-Profit"
        />
        <meta name="keywords" content="non-profit volunteer" />
      </Helmet>
      <NavBar />
      <HeroTwo
        image="url('/images/program/non-profit-hero.jpg')"
        title="eLab"
        title1="Non-Profit"
        text=" “Never doubt that a small group of thoughtful committed citizens can change the world: indeed, it’s the only thing that ever has.” - Margaret Mead"
        // button="Donate"
        button2="Donate"
        // DONATE BUTTON LINK GOES IN HERE.....
        path2="https://paystack.com/pay/elab-donations"
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
