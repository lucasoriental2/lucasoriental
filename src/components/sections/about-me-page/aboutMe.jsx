import React from 'react';
import image from "../../../assets/pictures/project_img.png"

const aboutMePage = () => {
  return (
    <div id="about-me-container">
      <div className="container-general"></div>
      <p
        className="title-general"
        style={{ color: "#E00036" }}
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
      >
        ABOUT ME
      </p>
      <div className="about-me-container-items">
        <div
          className="img-and-text"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <img alt="imagem" src={image} className="about-me-image" />
          <p className="about-me-text-aside">
            {" "}
            Here is the place that will contains all the text about me...Here is
            the place that will contains all the text about me...Here is the
            place that Here is the place thaHere is the place thaHere is the
            place thaHere is the place thaHere is the place thaHere is the place
            thaHere is the place thaHere is the place thaHere is theaHere is
            theaHere is theaHere is the.
          </p>
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <p className="about-me-text">
            Here is the place that will contains all the text about me...Here is
            the place that will contains all the text about me...Here is the
            place that Here is the place thaHere is the place thaHere is the
            place thaHere is the place thaHere is the place thaHere is the place
            thaHere is the place thaHere is the place thaHere is theaHere is
            theaHere is theaHere is the.
          </p>
          <p className="about-me-text">
            Here is the place that will contains all the text about me...Here is
            the place that will contains all the text about me...Here is the
            place that Here is the place thaHere is the place thaHere is the
            place thaHere is the place thaHere is the place thaHere is the place
            thaHere is the place thaHere is the place thaHere is theaHere is
            theaHere is theaHere is the.
          </p>
          <p className="about-me-text">
            Here is the place that will contains all the text about me...Here is
            the place that will contains all the text about me...Here is the
            place that Here is the place thaHere is the place thaHere is the
            place thaHere is the place thaHere is the place thaHere is the place
            thaHere is the place thaHere is the place thaHere is theaHere is
            theaHere is theaHere is the.
          </p>
        </div>
      </div>
    </div>
  );
}

export default aboutMePage;