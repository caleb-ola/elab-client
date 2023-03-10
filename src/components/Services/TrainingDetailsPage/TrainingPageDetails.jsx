import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Footer from '../../ResuableComponents/Footer';
import HeroTwo from '../../ResuableComponents/hero2';
import NavBar from '../../ResuableComponents/NavBar';
import AboutTraining from './AboutTraining';

function TrainingPageDetails() {
  const [body, setBody] = useState();
  const params = useParams();
  // console.log(params);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/trainings/${params.id}`).then((response) => {
      // console.log(response);
      const item = response.data.data;

      setBody(
        <div key={item.id}>
          <Helmet>
            <title>
              {item.title}
              {' '}
              - Ennovate Lab
            </title>
            {/* <meta
            name="description"
            content="Building a clear path to help our clients deliver organizational success."
          /> */}
          </Helmet>
          <HeroTwo
            image={"url('/images/services/training-hero.jpg')"}
            price={item.price}
            title={item.title}
            date={item.date}
            linkText="Register"
            link={item.link}
            overlay="overlay"
            modal="#trainingModal"
          />
          <AboutTraining
            description={item.description}
            link={item.link}
            linkText="Register"
            download={item.brochure}
            downloadText="Download Brochure"
          />
        </div>,
      );
    });
  }, []);

  return (
    <div>
      <NavBar />
      {body}
      {/* <HeroTwo
        image={"url('/images/services/training-hero.png')"}
        price="$ 100"
        title="Header Text for Training Title Stays Here"
        text="20TH MAY, 2022 | 9PM (WAT)"
        button="Register"
        overlay="overlay"
        modal="#trainingModal"
      /> */}
      <Footer />
    </div>
  );
}

export default TrainingPageDetails;
