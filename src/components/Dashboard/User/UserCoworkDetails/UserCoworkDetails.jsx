import React from 'react';
import Footer from '../../../ResuableComponents/Footer';
import NavBar from '../../../ResuableComponents/NavBar';
import UserHero from '../UserHero';
import CoworkDetails from './CoworkDetails';

function UserCoworkDetails() {
  return (
    <div>
      <NavBar />
      <UserHero title="Cowork" text="A single place to have access to your booked workspace" icon="fa-solid fa-user pe-4" />
      <CoworkDetails />
      <Footer />
    </div>
  );
}

export default UserCoworkDetails;
