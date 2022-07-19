import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import HeroLight from '../../ResuableComponents/HeroLight';
import NavBar from '../../ResuableComponents/NavBar';
import AllPlaybook from './AllPlaybook';

function Playbook() {
  return (
    <div>
      <NavBar />
      <HeroLight
        highlight2="Playbook"
        text="Digital resources for entrepreneurs and business owners changing the status quo"
      />
      <AllPlaybook />
      <Footer />
    </div>
  );
}

export default Playbook;
