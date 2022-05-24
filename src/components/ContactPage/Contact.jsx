import React from 'react';
import Footer from '../ResuableComponents/Footer';
import HeroLight from '../ResuableComponents/HeroLight';
import NavBar from '../ResuableComponents/NavBar';
import ContactForm from './ContactForm';
import Map from './Map';

function Contact() {
  return (
    <>
      <NavBar />
      <HeroLight
        title="Get in Touch"
        text="we’d love to hear from you - here’s how..."
      />
      <ContactForm />
      <Map />
      <Footer />
    </>
  );
}

export default Contact;
