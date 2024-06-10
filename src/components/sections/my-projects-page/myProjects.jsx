import { useEffect, useState } from "react";
import MyProjectModal from "./common/myProjectModal";

const MyProjectsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("https://lucasoriental.github.io/lucasorientalapi/database.json");
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
    <div id="my-projects-container" >
      <div className="container-general">
        <div>
          <p className="title-general" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">My Projects</p>
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
            {project.projects.map((project, index) => {
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
                  <div className="div-project-image" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
                    <img
                      className="project-image"
                      src={project.img}
                      alt="Project_image"
                    />
                  </div>
                  <div data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
                    <p className="project-title">{project.projectName}</p>
                    <p className="project-sub-title">{project.projectArea}</p>
                    <div className="my-project-tec-images">{tecs}</div>
                  </div>
                  <a className="project-link-button" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
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
