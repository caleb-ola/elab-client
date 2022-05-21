import React from 'react';
import StartupCard from '../../ResuableComponents/StartupCard';

function AllStartups() {
  return (
    <div className="startup">
      <div className="container">
        <StartupCard
          image="/images/program/gradeplus.png"
          title="GradePlus Africa"
          text="GradePlus Africa is  an ed-tech product that teaches African students how to learn and helps them make the right choice of relevant African university courses or career path that is a best fit."
        />
        <StartupCard
          image="/images/program/ctctw.png"
          title="GradePlus Africa"
          text="GradePlus Africa is  an ed-tech product that teaches African students how to learn and helps them make the right choice of relevant African university courses or career path that is a best fit."
        />
        <StartupCard
          image="/images/program/trifold.png"
          title="GradePlus Africa"
          text="GradePlus Africa is  an ed-tech product that teaches African students how to learn and helps them make the right choice of relevant African university courses or career path that is a best fit."
        />
        <StartupCard
          image="/images/program/cogneasy.png"
          title="GradePlus Africa"
          text="GradePlus Africa is  an ed-tech product that teaches African students how to learn and helps them make the right choice of relevant African university courses or career path that is a best fit."
        />

      </div>
    </div>
  );
}

export default AllStartups;
