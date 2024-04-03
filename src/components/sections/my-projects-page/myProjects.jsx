import React from 'react'
import dataBaseIcon from '../../../assets/common_elements/technologies/database_icon.png'
import figmaIcon from '../../../assets/common_elements/technologies/figma_icon.png'
import reactIcon from '../../../assets/common_elements/technologies/react_icon.png'
import sassIcon from '../../../assets/common_elements/technologies/sass_icon.png'
import projectImage from '../../../assets/pictures/project_img.png'

const MyProjectsPage = () => {
    let projects = [
      {
        image: projectImage,
        title: "Clínica do Paião",
        subTitle: "what i used?",
        technologies: [reactIcon, dataBaseIcon, sassIcon, figmaIcon],
        id: 1,
      },
      /* {
        image: projectImage,
        title: "Clínica do Paião",
        subTitle: "what i used?",
        technologies: [reactIcon, dataBaseIcon, sassIcon, figmaIcon],
        id: 2,
      }, */
    ];

    return (
      <div id="home-my-projects-container">
        <div className="container-general">
          <div>
            <p className="title-general">MY PROJECTS</p>
          </div>
          <div className="project-view">
            {projects.map((project) => {
              return (
                <div key={project.id} className="project-container">
                  <div>
                    <img
                      className="project-image"
                      src={project.image}
                      alt="Project_image"
                    />
                  </div>
                  <div>
                    <p className="project-title">{project.title}</p>
                    <p className="project-sub-title">{project.subTitle}</p>
                    {/* {project.technologies.map((tec) => {
                        <img src={tec}/>
                      })} */}
                  </div>
                  <button className="project-button">more details</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default MyProjectsPage;