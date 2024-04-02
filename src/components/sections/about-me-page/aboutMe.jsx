import React from 'react';
import image from "../../../assets/pictures/project_img.png"

const aboutMePage = () => {
  return (
    <div id="about-me-container">
      <p className="title-general" style={{ color: "#E00036" }}>
        ABOUT ME
      </p>
      <div className="about-me-container-items">
        <div className="img-and-text">
          <img alt="imagem" src={image} className="about-me-image"/>
          <p className="about-me-text-aside"> texto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do ladotexto do lado</p>
        </div>
        <p className="about-me-text">texto abaixo texto abaixo texto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixo</p>
        <p className="about-me-text">texto abaixo texto abaixo texto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixotexto abaixo</p>
      </div>
    </div>
  );
}

export default aboutMePage;