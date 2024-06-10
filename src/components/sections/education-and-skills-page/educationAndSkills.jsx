import React, { useEffect, useState } from "react";
import Certificates from "./common/certificates";
import College from "./common/college";
import Skills from "./common/skills";

const EducationAndSkillsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [educationAndSkillsInformation, setEducationAndSkillsInformation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://lucasoriental.github.io/lucasorientalapi/database.json");
        setEducationAndSkillsInformation(await response.json());
        setIsLoading(false);
      } catch (err) {
        console.error(
          "Something wrong happened during fetching the data for Education and Skills Page... Please try to refresh the page"
        );
      }
    };
    fetchData();
  }, []);

  return (
    <div id="education-and-skills-page">
      <div className="container-general">
        <p className="title-general" style={{ color: "#444444" }}>
          Education & Skills
        </p>
        {isLoading === true ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "25px",
              color: "#FF003D",
              margin: "90px 0px",
              fontWeight: "500",
            }}
          >
            The data is loading, please wait a moment....
          </p>
        ) : (
          <div>
            <div>
              <div className="title-and-canvas">
                <div className="column-1-teste">
                  <p className="EAS-title-general" style={{ color: "#444444" }}>College</p>
                </div>
                <div className="column-2-teste">
                  <canvas className="bar-1" />
                  <canvas className="bar-2" />
                </div>
              </div>
              <College data={educationAndSkillsInformation.college}/>
            </div>
            <div>
              <div className="title-and-canvas">
                <div className="column-1-teste">
                  <p className="EAS-title-general" style={{ color: "#444444" }}>Skills</p>
                </div>
                <div className="column-2-teste">
                  <canvas className="bar-1" />
                  <canvas className="bar-2" />
                </div>
              </div>
              <div className="subtitle-and-canvas">
                <canvas className="bar-before" />
                <p className="EAS-title-section" style={{ color: "#444444" }}>Information Technology (IT)</p>
                <canvas className="bar-after" />
              </div>
              <Skills data={educationAndSkillsInformation.skillsIT} />
              <div className="subtitle-and-canvas">
                <canvas className="bar-before" />
                <p className="EAS-title-section" style={{ color: "#444444" }}>Design</p>
                <canvas className="bar-after" />
              </div>
              <Skills data={educationAndSkillsInformation.skillsDesign} />
            </div>
            <div>
              <div className="title-and-canvas">
                <div className="column-1-teste">
                  <p className="EAS-title-general" style={{ color: "#444444" }}>Certificates</p>
                </div>
                <div className="column-2-teste">
                  <canvas className="bar-1" />
                  <canvas className="bar-2" />
                </div>
              </div>
              <div className="subtitle-and-canvas">
                <canvas className="bar-before" />
                <p className="EAS-title-section" style={{ color: "#444444" }}>Information Technology (IT)</p>
                <canvas className="bar-after" />
              </div>
              <Certificates data={educationAndSkillsInformation.certificatesIT} />
              <div className="subtitle-and-canvas">
                <canvas className="bar-before" />
                <p className="EAS-title-section" style={{ color: "#444444" }}>Design</p>
                <canvas className="bar-after" />
              </div>
              <Certificates data={educationAndSkillsInformation.certificatesDesign} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationAndSkillsPage;
