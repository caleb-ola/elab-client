import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import HeroLight from '../../ResuableComponents/HeroLight';
import NavBar from '../../ResuableComponents/NavBar';
import AllFaq from './AllFaq';

function Faq() {
  return (
    <div>
      <NavBar />
      <HeroLight
        title="Frequently Asked Questions Answered"
        text="You have questions?
        We have answers."
      />
      <AllFaq />
      <Footer />
    </div>
  );
}

export default Faq;
