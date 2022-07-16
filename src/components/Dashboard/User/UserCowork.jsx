import React, { useEffect } from 'react';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';
import CoworkContent from './CoworkContent';
import UserHero from './UserHero';

function UserCowork() {
  useEffect(() => {
    // Register();
  }, []);

  return (
    <div>
      <NavBar />
      <UserHero title="Cowork" text="A single place to have access to your booked workspace" icon="fa-solid fa-user pe-4" />
      <CoworkContent />
      <Footer />
    </div>
  );
}

export default UserCowork;
