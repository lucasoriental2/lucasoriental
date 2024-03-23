import React from 'react';
import Certificates from './common/certificates';
import College from './common/college';
import Skills from './common/skills';

const EducationAndSkillsPage = () => {
    return (
      <div id="education-and-skills-page">
        <p className="title-general" style={{ color: "#E00036" }}>
          EDUCATION & SKILLS
        </p>
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
          <Skills />
          <div className="subtitle-and-canvas">
            <canvas className="bar-before" />
            <p className="EAS-title-section">DESIGN</p>
            <canvas className="bar-after" />
          </div>
          <Skills />
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
          <Certificates />
          <div className="subtitle-and-canvas">
            <canvas className="bar-before" />
            <p className="EAS-title-section">DESIGN</p>
            <canvas className="bar-after" />
          </div>
          <Certificates />
        </div>
      </div>
    );
}

export default EducationAndSkillsPage;