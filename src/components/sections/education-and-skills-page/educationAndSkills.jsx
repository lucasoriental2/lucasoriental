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
        <p className="title-general" style={{ color: "#444444" }} data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
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
                  <p className="EAS-title-general" style={{ color: "#444444" }} data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">College</p>
                </div>
                <div className="column-2-teste">
                  <canvas className="bar-1" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"/>
                  <canvas className="bar-2" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"/>
                </div>
              </div>
              <College data={educationAndSkillsInformation.college}/>
            </div>
            <div>
              <div className="title-and-canvas">
                <div className="column-1-teste">
                  <p className="EAS-title-general" style={{ color: "#444444" }}data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">Skills</p>
                </div>
                <div className="column-2-teste">
                  <canvas className="bar-1" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"/>
                  <canvas className="bar-2" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"/>
                </div>
              </div>
              <div className="subtitle-and-canvas">
                <canvas className="bar-before" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom"/>
                <p className="EAS-title-section" style={{ color: "#444444" }} data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">Information Technology (IT)</p>
                <canvas className="bar-after" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"/>
              </div>
              <Skills data={educationAndSkillsInformation.skillsIT} />
              <div className="subtitle-and-canvas">
                <canvas className="bar-before" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom"/>
                <p className="EAS-title-section" style={{ color: "#444444" }} data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">Design</p>
                <canvas className="bar-after" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"/>
              </div>
              <Skills data={educationAndSkillsInformation.skillsDesign} />
            </div>
            <div>
              <div className="title-and-canvas">
                <div className="column-1-teste">
                  <p className="EAS-title-general" style={{ color: "#444444" }} data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">Certificates</p>
                </div>
                <div className="column-2-teste">
                  <canvas className="bar-1" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"/>
                  <canvas className="bar-2" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"/>
                </div>
              </div>
              <div className="subtitle-and-canvas">
                <canvas className="bar-before" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom"/>
                <p className="EAS-title-section" style={{ color: "#444444" }} data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">Information Technology (IT)</p>
                <canvas className="bar-after" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"/>
              </div>
              <Certificates data={educationAndSkillsInformation.certificatesIT} />
              <div className="subtitle-and-canvas">
                <canvas className="bar-before" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom"/>
                <p className="EAS-title-section" style={{ color: "#444444" }} data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">Design</p>
                <canvas className="bar-after" data-aos="fade-right" data-aos-anchor-placement="bottom-bottom"/>
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
