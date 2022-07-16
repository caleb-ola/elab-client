import React from 'react';
import Footer from '../../../ResuableComponents/Footer';
import NavBar from '../../../ResuableComponents/NavBar';
import UserHero from '../UserHero';
import UserResourcesContent from './UserResourcesContent';

function UserResources() {
  return (
    <div>
      <NavBar />
      <UserHero title="Resources" text="A single place to have access to your resourses." icon="fa-solid fa-book pe-4" />
      <UserResourcesContent />
      <Footer />
    </div>
  );
}

export default UserResources;
