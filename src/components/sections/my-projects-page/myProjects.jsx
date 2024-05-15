import React, { useEffect, useState } from 'react'
import dataBaseIcon from '../../../assets/common_elements/technologies/database_icon.png'
import figmaIcon from '../../../assets/common_elements/technologies/figma_icon.png'
import reactIcon from '../../../assets/common_elements/technologies/react_icon.png'
import sassIcon from '../../../assets/common_elements/technologies/sass_icon.png'
import projectImage from '../../../assets/pictures/project_img.png'
import ClinicaDoPaiao from './each-project/clinicaDoPaiao.jsx'

const MyProjectsPage = () => {

  const [modalOpen, setModalOpen] = useState(false);

  let projects = [
    {
      image: projectImage,
      title: "Clínica do Paião",
      subTitle: "Web Development",
      technologies: [
        {
          icon: reactIcon,
          tipName: "React",
        },
        {
          icon: sassIcon,
          tipName: "Sass",
        },
      ],
      link: "https://clinicadopaiao.com/",
      id: 1,
    },
    {
      image: projectImage,
      title: "My Portfolio",
      subTitle: "Design & Web Development",
      technologies: [
        {
          icon: dataBaseIcon,
          tipName: "Data Base",
        },
        {
          icon: reactIcon,
          tipName: "React",
        },
        {
          icon: figmaIcon,
          tipName: "Figma",
        },
        {
          icon: sassIcon,
          tipName: "Sass",
        },
      ],
      link: "https://github.com/lucasoriental/lucasoriental",
      id: 1,
    },
  ];

  return (
    <div id="my-projects-container">
      <div className="container-general">
        <div>
          <p className="title-general">MY PROJECTS</p>
        </div>
        <div className="project-view">
          {projects.map((project, index) => {
            let tecs = [];
            for (let i = 0; i < project.technologies.length; i++) {
              tecs.push(
                <img
                  className="img-icon"
                  key={i}
                  src={project.technologies[i].icon}
                  alt={project.technologies[i]}
                />
              );
            }
            return (
              <div key={index} className='teste'>
                <div className="div-project-image">
                  <img
                    className="project-image"
                    src={project.image}
                    alt="Project_image"
                  />
                </div>
                <div>
                  <p className="project-title">{project.title}</p>
                  <p className="project-sub-title">{project.subTitle}</p>
                  <div className="my-project-tec-images">{tecs}</div>
                </div>
                <a
                  target="_blank"
                  className="project-link-button"
                >
                  <button onClick={() => setModalOpen(true)} className="project-button">more details</button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {modalOpen && <ClinicaDoPaiao setOpenModal={setModalOpen} />}
    </div>
  );
}

export default MyProjectsPage;