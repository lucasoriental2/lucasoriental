//import React from "react";
import 'react-tooltip/dist/react-tooltip.css';
import Header from "../src/components/global/header/header";
import "./App.scss";
import Footer from './components/global/footer/footer';
import AboutMe from "./components/sections/about-me-page/aboutMe";
import ContactMe from "./components/sections/contact-me-page/contactMe";
import EducationAndSkills from "./components/sections/education-and-skills-page/educationAndSkills";
import MainPage from "./components/sections/home-page/home";
import JobExperiences from "./components/sections/job-experiences-page/jobExperiences";
import MyProjects from "./components/sections/my-projects-page/myProjects";

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <MyProjects />
      <EducationAndSkills />
      <JobExperiences />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
