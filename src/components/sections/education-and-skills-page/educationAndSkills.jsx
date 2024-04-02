import React, { useState, useEffect } from "react";
import Certificates from "./common/certificates";
import College from "./common/college";
import Skills from "./common/skills";

const EducationAndSkillsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [skillIT, setSkillIT] = useState(null);
  const [skillDesign, setSkillDesign] = useState(null);
  const [certificateIT, setCertificateIT] = useState(null);
  const [certificateDesign, setCertificateDesign] = useState(null);
  const [college, setCollege] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch("http://localhost:5000/certificatesIT");
        setCertificateIT(await response1.json());

        const response2 = await fetch(
          "http://localhost:5000/certificatesDesign"
        );
        setCertificateDesign(await response2.json());

        const response3 = await fetch("http://localhost:5000/college");
        setCollege(await response3.json());

        const response4 = await fetch("http://localhost:5000/skillsIT");
        setSkillIT(await response4.json());

        const response5 = await fetch("http://localhost:5000/skillsDesign");
        setSkillDesign(await response5.json());

        setIsLoading(false)
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
      <p className="title-general" style={{ color: "#E00036" }}>
        EDUCATION & SKILLS
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
                <p className="EAS-title-general">COLLEGE</p>
              </div>
              <div className="column-2-teste">
                <canvas className="bar-1" />
                <canvas className="bar-2" />
              </div>
            </div>
            <College />
          </div>
          <div>
            <div className="title-and-canvas">
              <div className="column-1-teste">
                <p className="EAS-title-general">SKILLS</p>
              </div>
              <div className="column-2-teste">
                <canvas className="bar-1" />
                <canvas className="bar-2" />
              </div>
            </div>
            <div className="subtitle-and-canvas">
              <canvas className="bar-before" />
              <p className="EAS-title-section">INFORMATION TECHNOLOGY (IT)</p>
              <canvas className="bar-after" />
            </div>
            <Skills data={skillIT} />
            <div className="subtitle-and-canvas">
              <canvas className="bar-before" />
              <p className="EAS-title-section">DESIGN</p>
              <canvas className="bar-after" />
            </div>
            <Skills data={skillDesign} />
          </div>
          <div>
            <div className="title-and-canvas">
              <div className="column-1-teste">
                <p className="EAS-title-general">CERTIFICATES</p>
              </div>
              <div className="column-2-teste">
                <canvas className="bar-1" />
                <canvas className="bar-2" />
              </div>
            </div>
            <div className="subtitle-and-canvas">
              <canvas className="bar-before" />
              <p className="EAS-title-section">INFORMATION TECHNOLOGY (IT)</p>
              <canvas className="bar-after" />
            </div>
            <Certificates data={certificateIT} />
            <div className="subtitle-and-canvas">
              <canvas className="bar-before" />
              <p className="EAS-title-section">DESIGN</p>
              <canvas className="bar-after" />
            </div>
            <Certificates data={certificateDesign} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationAndSkillsPage;
