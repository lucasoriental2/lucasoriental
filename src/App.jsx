import {useEffect} from "react";
import 'react-tooltip/dist/react-tooltip.css';
import Header from "../src/components/global/header/header";
import "./App.scss";
import AboutMe from "./components/sections/about-me-page/aboutMe";
import ContactMe from "./components/sections/contact-me-page/contactMe";
import EducationAndSkills from "./components/sections/education-and-skills-page/educationAndSkills";
import MainPage from "./components/sections/home-page/home";
import JobExperiences from "./components/sections/job-experiences-page/jobExperiences";
import MyProjects from "./components/sections/my-projects-page/myProjects";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(()=>{
    AOS.init({duration: 1000});
  }, []);

  alert("en/us -> This project is still in progress! Updates/Improvements will be made over time, thank you for your understanding!; pt/br -> Este projeto ainda está em andamento! Atualizações/Melhorias serão feitas ao longo do tempo, obrigado pela compreensão!")
  return (
    <>
      <Header />
      <MainPage />
      <MyProjects />
      <EducationAndSkills />
      <JobExperiences />
      <AboutMe />
      <ContactMe />
    </>
  );
}

export default App;
