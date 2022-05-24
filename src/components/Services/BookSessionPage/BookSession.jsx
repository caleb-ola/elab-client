import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';
import HeroLight from '../../ResuableComponents/HeroLight';

import BookSessionForm from './BookSessionForm';

function BookSession() {
  return (
    <>
      <NavBar />
      <HeroLight
        title="Book a"
        highlight="Session"
        text="Building a clear path to help our clients deliver organizational success."
      />
      <BookSessionForm />
      <Footer />
    </>
  );
}

export default BookSession;
