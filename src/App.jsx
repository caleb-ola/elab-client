import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';

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
// import WhitePaper from './components/Resources/WhitePaperPage/Playbook';
import Faq from './components/Resources/FaqPage/Faq';
import Contact from './components/ContactPage/Contact';
import FindYourY from './components/FindYourYPage/FindYourY';
import FindYourYDetails from './components/FindYourYPage/FindYourYDetails';
import Event from './components/Dashboard/Admin/Event/Event';
import AddEvent from './components/Dashboard/Admin/Event/AddEvent';
import Media from './components/Dashboard/Admin/MediaMention/Media';
import AddMedia from './components/Dashboard/Admin/MediaMention/AddMedia';
import EditMedia from './components/Dashboard/Admin/MediaMention/EditMedia';
import Consult from './components/Dashboard/Admin/Consultation/Consult';
import ConsultDetails from './components/Dashboard/Admin/Consultation/ConsultDetails';
import Cowork from './components/Dashboard/Admin/Cowork/Cowork';
import CoworkDetails from './components/Dashboard/Admin/Cowork/CoworkDetails';
import Trainings from './components/Dashboard/Admin/Training/Trainings';
import AddTrainings from './components/Dashboard/Admin/Training/AddTrainings';
import EditTrainings from './components/Dashboard/Admin/Training/EditTrainings';
import Resources from './components/Dashboard/Admin/Resources/Resources';
import AddResources from './components/Dashboard/Admin/Resources/AddResources';
import EditResources from './components/Dashboard/Admin/Resources/EditResources';
import Project from './components/Dashboard/Admin/Projects/Project';
import AddProjects from './components/Dashboard/Admin/Projects/AddProjects';
import EditProjects from './components/Dashboard/Admin/Projects/EditProjects';
import NonProfit from './components/Dashboard/Admin/NonProfit/NonProfit';
import AddNonProfit from './components/Dashboard/Admin/NonProfit/AddNonProfit';
import EditNonProfit from './components/Dashboard/Admin/NonProfit/EditNonProfit';
import Startup from './components/Dashboard/Admin/Startup/Startup';
import AddStartup from './components/Dashboard/Admin/Startup/AddStartup';
import EditStartup from './components/Dashboard/Admin/Startup/EditStartup';
import Blogs from './components/Dashboard/Admin/Blogs/Blogs';
import AddBlogs from './components/Dashboard/Admin/Blogs/AddBlogs';
import EditBlogs from './components/Dashboard/Admin/Blogs/EditBlogs';
import Signup from './components/Authentication/Signup';
import UserCowork from './components/Dashboard/User/UserCowork';
import UserCoworkDetails from './components/Dashboard/User/UserCoworkDetails/UserCoworkDetails';
import UserResources from './components/Dashboard/User/UserResources/UserResources';
import InnovationPage from './components/Program/InnovationPage/Innovation';
import InnovationDetails from './components/Program/InnovationDetailsPage/InnovationDetails';
// import Summary from './components/Program/SummaryPage/Summary';
import Login from './components/Authentication/Login';
import Forgot from './components/Authentication/Forgot';
import Reset from './components/Authentication/Reset';
import Error404 from './components/ResuableComponents/Error404';
// import UserRouteGuard from './route-guards/UserRouteGuard';
import AdminRouteGuard from './route-guards/AdminRouteGuard';
import ServicesAdmin from './components/Dashboard/Admin/Services/Services';
import AddServices from './components/Dashboard/Admin/Services/AddServices';
import EditServices from './components/Dashboard/Admin/Services/EditServices';
import AddVolunteer from './components/Dashboard/Admin/volunteers/AddVolunteers';
import Volunteers from './components/Dashboard/Admin/volunteers/Volunteers';
import EditEvent from './components/Dashboard/Admin/Event/EditEvent';
import Plans from './components/Dashboard/Admin/Plans/Plans';
import AddPlans from './components/Dashboard/Admin/Plans/AddPlans';
import EditPlans from './components/Dashboard/Admin/Plans/EditPlans';
import Bookings from './components/Dashboard/Admin/Bookings/Bookings';
import BookingsDetails from './components/Dashboard/Admin/Bookings/BookingsDetails';
import Payments from './components/Dashboard/Admin/Payments/Payments';
import PaymentsDetails from './components/Dashboard/Admin/Payments/PaymentsDetails';
import UserRouteGuard from './route-guards/UserRouteGuard';
import Verify from './components/Authentication/Verify';
import ResendVerify from './components/Authentication/ResendVerify';
import Privacy from './components/LegalDocuments/PrivacyPolicyPage/Privacy';
import Terms from './components/LegalDocuments/TermsConditionsPage/Terms';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error404 />} />
          <Route path="/about-us" element={<About />} />
          <Route exact path="/program/community" element={<Community />} />
          <Route exact path="/program/foundry" element={<StartupFoundry />} />
          <Route exact path="/program/foundry/:slug" element={<StartupDetails />} />
          <Route path="/program/projects" element={<Projects />} />
          <Route path="/program/projects/:slug" element={<ProjectsDetails />} />
          <Route path="/program/non-profit" element={<NonProfitPage />} />
          <Route path="/services/workspace" element={<InnovationPage />} />
          <Route path="/services/workspace/:slug" element={<InnovationDetails />} />
          {/* <Route path="/workspace/:id/summary" element={<Summary />} /> */}
          <Route path="/services/digital-services" element={<Services />} />
          <Route path="/services/consultation" element={<Consultation />} />
          <Route path="/services/consultation/book-a-session" element={<BookSession />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/training/:id" element={<TrainingPageDetails />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/:slug" element={<BlogDetails />} />
          <Route path="/resources/playbook" element={<Playbook />} />
          {/* <Route path="/resources/whitepaper" element={<WhitePaper />} /> */}
          <Route path="/resources/faq" element={<Faq />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/find-your-y" element={<FindYourY />} />
          <Route path="/find-your-y/:id" element={<FindYourYDetails />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgot-password" element={<Forgot />} />
          <Route path="/auth/reset-password:token" element={<Reset />} />
          <Route path="/auth/verification-email/:token" element={<Verify />} />
          <Route
            path="/auth/resend-verification-email"
            element={<ResendVerify />}
          />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route element={<AdminRouteGuard />}>
            <Route path="/dashboard/admin" element={<Blogs />} />
            <Route path="/dashboard/admin/services" element={<ServicesAdmin />} />
            <Route path="/dashboard/admin/add-services" element={<AddServices />} />
            <Route path="/dashboard/admin/edit-services/:slug" element={<EditServices />} />
            <Route path="/dashboard/admin/volunteers" element={<Volunteers />} />
            <Route path="/dashboard/admin/add-volunteers" element={<AddVolunteer />} />
            <Route path="/dashboard/admin/events" element={<Event />} />
            <Route path="/dashboard/admin/add-events" element={<AddEvent />} />
            <Route path="/dashboard/admin/edit-events/:id" element={<EditEvent />} />
            <Route path="/dashboard/admin/media" element={<Media />} />
            <Route path="/dashboard/admin/add-media" element={<AddMedia />} />
            <Route path="/dashboard/admin/edit-media/:id" element={<EditMedia />} />
            <Route path="/dashboard/admin/consultation" element={<Consult />} />
            <Route path="/dashboard/admin/consultation/:id" element={<ConsultDetails />} />
            <Route path="/dashboard/admin/cowork" element={<Cowork />} />
            <Route path="/dashboard/admin/cowork/:slug" element={<CoworkDetails />} />
            <Route path="/dashboard/admin/workspace-bookings" element={<Bookings />} />
            <Route path="/dashboard/admin/workspace-bookings/:id" element={<BookingsDetails />} />
            <Route path="/dashboard/admin/payments" element={<Payments />} />
            <Route path="/dashboard/admin/payments/:id" element={<PaymentsDetails />} />
            <Route path="/dashboard/admin/training" element={<Trainings />} />
            <Route path="/dashboard/admin/add-training" element={<AddTrainings />} />
            <Route path="/dashboard/admin/edit-training/:slug" element={<EditTrainings />} />
            <Route path="/dashboard/admin/resources" element={<Resources />} />
            <Route path="/dashboard/admin/add-resources" element={<AddResources />} />
            <Route path="/dashboard/admin/edit-resources/:slug" element={<EditResources />} />
            <Route path="/dashboard/admin/projects" element={<Project />} />
            <Route path="/dashboard/admin/add-projects" element={<AddProjects />} />
            <Route path="/dashboard/admin/edit-projects/:slug" element={<EditProjects />} />
            <Route path="/dashboard/admin/non-profit" element={<NonProfit />} />
            <Route path="/dashboard/admin/add-non-profit" element={<AddNonProfit />} />
            <Route path="/dashboard/admin/edit-non-profit/:id" element={<EditNonProfit />} />
            <Route path="/dashboard/admin/startup" element={<Startup />} />
            <Route path="/dashboard/admin/add-startup" element={<AddStartup />} />
            <Route path="/dashboard/admin/edit-startup/:slug" element={<EditStartup />} />
            <Route path="/dashboard/admin/workspace-plans" element={<Plans />} />
            <Route path="/dashboard/admin/add-workspace-plans" element={<AddPlans />} />
            <Route path="/dashboard/admin/edit-workspace-plans/:slug" element={<EditPlans />} />
            <Route path="/dashboard/admin/blog" element={<Blogs />} />
            <Route path="/dashboard/admin/add-blog" element={<AddBlogs />} />
            <Route path="/dashboard/admin/edit-blog/:slug" element={<EditBlogs />} />
          </Route>
          <Route elemet={<UserRouteGuard />}>
            <Route path="/dashboard/user" element={<UserCowork />} />
            <Route path="/dashboard/user/cowork" element={<UserCowork />} />
            <Route path="/dashboard/user/cowork/:slug" element={<UserCoworkDetails />} />
            <Route path="/dashboard/user/resources" element={<UserResources />} />
          </Route>
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>

  );
}

export default App;
