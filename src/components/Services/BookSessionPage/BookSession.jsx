import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';
import HeroLight from '../../ResuableComponents/HeroLight';

import BookSessionForm from './BookSessionForm';

function BookSession() {
  return (
    <>
      <Helmet>
        <title>
          Book a Session - Ennovate Lab
        </title>
        <meta
          name="description"
          content="Building a clear path to help our clients deliver organizational success."
        />
        {/* <meta name="keywords" content="" /> */}
      </Helmet>
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
