import { useEffect, useState } from "react";
import MyProjectModal from "./each-project/myProjectModal";
/* import dataBaseIcon from "../../../assets/common_elements/technologies/database_icon.png";
import figmaIcon from "../../../assets/common_elements/technologies/figma_icon.png";
import reactIcon from "../../../assets/common_elements/technologies/react_icon.png";
import sassIcon from "../../../assets/common_elements/technologies/sass_icon.png";
import projectImage from "../../../assets/pictures/project_img.png";
import ClinicaDoPaiao from "./each-project/clinicaDoPaiao.jsx";
import MyPortfolio from "./each-project/myPortfolio.jsx"; */

const MyProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [project, setProject] = useState([]);

  const [selectedProject, setSelectedProject] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/projects");
        setProject(await response.json());
        setIsLoading(false);
      } catch (err) {
        console.error(
          "Something error happend during fetch on the My Projects page, please try refreshing the site..."
        );
      }
    };
    fetchData();
  }, []);

  return (
    <div id="my-projects-container">
      <div className="container-general">
        <div>
          <p className="title-general">MY PROJECTS</p>
        </div>
        {isLoading === true ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "25px",
              color: "#FFF",
              margin: "90px 0px",
              fontWeight: "500",
            }}
          >
            The data is loading, please wait a moment....
          </p>
        ) : (
          <div className="project-view">
            {project.map((project, index) => {
              let tecs = [];
              for (let i = 0; i < project.iconTechs.length; i++) {
                tecs.push(
                  <img
                    className="img-icon"
                    key={i}
                    src={project.iconTechs[i]}
                    alt="icon"
                  />
                );
              }
              return (
                <div key={project.id} className="div-each-project">
                  <div className="div-project-image">
                    <img
                      className="project-image"
                      src={project.img}
                      alt="Project_image"
                    />
                  </div>
                  <div>
                    <p className="project-title">{project.projectName}</p>
                    <p className="project-sub-title">{project.projectArea}</p>
                    <div className="my-project-tec-images">{tecs}</div>
                  </div>
                  <a className="project-link-button">
                    <button
                      onClick={() => {
                        setSelectedProject(index);
                        setModalOpen(true);
                      }}
                      className="project-button"
                    >
                      more details
                    </button>
                  </a>
                  {modalOpen && selectedProject === index && (
                    <MyProjectModal
                      information={project}
                      setOpenModal={setModalOpen}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProjectsPage;
