import React from 'react';
import Hero from '../../HomePage/hero';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';
import DownloadReport from './DownloadReport';

function ProjectsDetails() {
  return (
    <div>
      <NavBar />
      <Hero
        image="url('/images/program/project-details-hero.png')"
        title="Epe Impact Project"
        text="In partnership with Threefold Impact to equip the secondary schools students in Epe with 21st century skills and an opportunity to solve problems in their community."
      />
      <DownloadReport />
      <Footer />
    </div>
  );
}

export default ProjectsDetails;
