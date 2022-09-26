import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../ResuableComponents/Footer';
import HeroLight from '../ResuableComponents/HeroLight';
import NavBar from '../ResuableComponents/NavBar';
import ContactForm from './ContactForm';
import Map from './Map';

function Contact() {
  return (
    <>
      <Helmet>
        <title>
          Contact us -
          Ennovate Lab
        </title>
        <meta
          name="description"
          content="We’d love to hear from you - here’s how...."
        />
        <meta name="keywords" content="contact" />
      </Helmet>
      <NavBar />
      <HeroLight
        title="Get in Touch"
        text="We’d love to hear from you - here’s how..."
      />
      <ContactForm />
      <Map />
      <Footer />
    </>
  );
}

export default Contact;
