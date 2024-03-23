import React from "react";
import levelPicture from '../../../../assets/pictures/picture_level_temporary.png';
import skillPicture from '../../../../assets/pictures/picture_skill.png';

export default function Skills () {
  return (
    <div className="EAS-skills">
      <img alt="skill_img" src={skillPicture} className="EAS-skills-picture" />
      <p className="EAS-skills-title">Skill Title</p>
      <img alt="level_img" src={levelPicture} className="EAS-skills-level" />
    </div>
  );
}