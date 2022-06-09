import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';
import SummaryDetails from './SummaryDetails';

function Summary() {
  return (
    <div>
      <NavBar />
      <SummaryDetails />
      <Footer />
    </div>
  );
}

export default Summary;
