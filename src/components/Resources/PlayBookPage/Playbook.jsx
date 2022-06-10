import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import HeroLight from '../../ResuableComponents/HeroLight';
import NavBar from '../../ResuableComponents/NavBar';
import Pagination from '../../ResuableComponents/Pagination';
import AllPlaybooks from './AllPlaybooks';

const playbook = () => (
  <div>
    <NavBar />
    <HeroLight highlight3="Playbook" text="Digital resources for entrepreneurs and business owners changing the status quo" />
    <AllPlaybooks />
    <Pagination />
    <Footer />
  </div>
);

export default playbook;
