import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// STYLES
import './styles/app.scss';

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
        </Routes>
      </ScrollToTop>
    </BrowserRouter>

  );
}

export default App;
