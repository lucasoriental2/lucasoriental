import React from "react";
import collegePicture from '../../../../assets/pictures/picture_college.png';

export default function College () {
  return (
    <div className="EAS-college">
      <img
        alt="College_picture"
        src={collegePicture}
        className="EAS-college-picture"
      />
      <div className="EAS-college-div">
        <a href="#" className="EAS-college-title">
          Bachelor's Computer Science
        </a>
        <p className="EAS-college-info">
          Centro Universitário Carioca (Brazil)
        </p>
        <p className="EAS-college-info">2020 - Dez/2024 (expected)</p>
        <button className="EAS-college-button">University Website</button>
      </div>
    </div>
  );
}