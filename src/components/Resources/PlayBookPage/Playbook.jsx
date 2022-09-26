import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../ResuableComponents/Footer';
import HeroLight from '../../ResuableComponents/HeroLight';
import NavBar from '../../ResuableComponents/NavBar';
import AllPlaybook from './AllPlaybook';

function Playbook() {
  return (
    <div>
      <Helmet>
        <title>
          Playbook
          {' '}
          - Ennovate Lab
        </title>
        <meta
          name="description"
          content="Digital resources for entrepreneurs and business owners changing the status quo."
        />
      </Helmet>
      <NavBar />
      <HeroLight
        highlight2="Playbook"
        text="Digital resources for entrepreneurs and business owners changing the status quo."
      />
      <AllPlaybook />
      <Footer />
    </div>
  );
}

export default Playbook;
