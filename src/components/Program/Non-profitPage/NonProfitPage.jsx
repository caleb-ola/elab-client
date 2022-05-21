import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import HeroTwo from '../../ResuableComponents/hero2';
import NavBar from '../../ResuableComponents/NavBar';
import AllNonProfit from './AllNonProfit';
import Volunteer from './Volunteer';

function NonProfitPage() {
  return (
    <div>
      <NavBar />
      <HeroTwo
        image="url('/images/program/non-profit-hero.png')"
        title="eLab"
        title1="Non-Profit"
        text=" We seek to transform our community one project at a time."
        button="Donate"

      />
      <AllNonProfit />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default NonProfitPage;
