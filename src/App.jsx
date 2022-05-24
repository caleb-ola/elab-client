import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// STYLES
import './sass/app.scss';

// SCROLL TO TOP FUNCTION
import ScrollToTop from './components/ResuableComponents/ScrollToTop';

// COMPONENTS
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Community from './components/Program/CommunityPage/Community';
import StartupFoundry from './components/Program/StartupFoundryPage/StartupFoundry';
import StartupDetails from './components/Program/StartupDetails/StartupDetails';
import Projects from './components/Program/ProjectsPage/Projects';
import ProjectsDetails from './components/Program/ProjectsDetails/ProjectsDetails';
import NonProfitPage from './components/Program/Non-profitPage/NonProfitPage';
import Training from './components/Services/TrainingPage/Training';
import Services from './components/Services/DigitalServicesPage/Services';
import Consultation from './components/Services/ConsultingPage/Consultation';
import BookSession from './components/Services/BookSessionPage/BookSession';
import TrainingPageDetails from './components/Services/TrainingDetailsPage/TrainingPageDetails';
import Blog from './components/Resources/BlogPage/Blog';
import BlogDetails from './components/Resources/BlogDetailsPage/BlogDetails';
import Playbook from './components/Resources/PlayBookPage/Playbook';
import WhitePaper from './components/Resources/WhitePaperPage/WhitePaper';
import Faq from './components/Resources/FaqPage/Faq';
import Contact from './components/ContactPage/Contact';
import FindYourY from './components/FindYourYPage/FindYourY';
import FindYourYDetails from './components/FindYourYPage/FindYourYDetails';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/program/community" element={<Community />} />
          <Route exact path="/program/foundry" element={<StartupFoundry />} />
          <Route exact path="/program/foundry/:id" element={<StartupDetails />} />
          <Route path="/program/projects" element={<Projects />} />
          <Route path="/program/projects/:id" element={<ProjectsDetails />} />
          <Route path="/program/non-profit" element={<NonProfitPage />} />
          <Route path="/services/digital-services" element={<Services />} />
          <Route path="/services/consultation" element={<Consultation />} />
          <Route path="/services/consultation/book-a-session" element={<BookSession />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/training/:id" element={<TrainingPageDetails />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/:id" element={<BlogDetails />} />
          <Route path="/resources/playbook" element={<Playbook />} />
          <Route path="/resources/whitepaper" element={<WhitePaper />} />
          <Route path="/resources/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/find-your-y" element={<FindYourY />} />
          <Route path="/find-your-y/:id" element={<FindYourYDetails />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>

  );
}

export default App;
