import React from "react";
import CapCourseLightSVG from '../../../../assets/light_theme/cap_course_SVG';
import ClockLightSVG from '../../../../assets/light_theme/clock_SVG';
import certificatePicture from '../../../../assets/pictures/picture_certificate.png';

export default function Certificates () {
  return (
    <div className="EAS-certificates">
      <img
        alt="credential_img"
        src={certificatePicture}
        className="EAS-certificates-picture"
      />
      <div className="EAS-certificates-div">
        <p className="EAS-certificates-title">Course Title</p>
        <div className="EAS-certificates-div-icon-text">
          <CapCourseLightSVG />
          <p className="EAS-certificates-div-text">Platform name</p>
        </div>
        <div className="EAS-certificates-div-icon-text">
          <ClockLightSVG />
          <p className="EAS-certificates-div-text">0.00h</p>
        </div>
        <button className="EAS-certificates-button">Show Credential</button>
      </div>
    </div>
  );
}