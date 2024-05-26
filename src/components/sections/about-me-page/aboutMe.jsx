import React from 'react';
import image from "../../../assets/pictures/project_img.png"

const aboutMePage = () => {
  return (
    <div id="about-me-container">
      <div className="container-general"></div>
      <p className="title-general" style={{ color: "#E00036" }}>
        ABOUT ME
      </p>
      <div className="about-me-container-items">
        <div className="img-and-text">
          <img alt="imagem" src={image} className="about-me-image" />
          <p className="about-me-text-aside">
            My name is Lucas, and I work as a WEB developer, with professional
            experience in designing and implementing dynamic web applications,
            encompassing a wide range of essential technologies for React web
            development. This includes application security, automated testing,
            agile development, performance analysis, and bug fixing.
          </p>
        </div>
        <div>
          <p className="about-me-text">
            In the field of WEB development, I highlight the following skills:
            API manipulation; use of tools like Postman and Webpack; knowledge
            of frameworks and libraries such as React and Angular; development
            of responsive interfaces with modern CSS and preprocessors like
            SASS; programming in JavaScript ES6+; unit and integration testing
            with Jest; version control with Git and GitHub; optimization of web
            application performance; SEO and web accessibility; use of database
            management systems like MySQL; agile development practices and
            Scrum; good communication and teamwork.
          </p>
          <p className="about-me-text">
            During my professional internship at IBM, I significantly expanded
            my knowledge and skills by working in an international and
            collaborative environment. This experience was fundamental to my
            professional growth, providing me with a comprehensive understanding
            of global-scale software development practices.
          </p>
          <p className="about-me-text">
            Additionally, my professional journey has led me to contribute in
            various areas, such as IT support, infrastructure, UX/UI design,
            audiovisual production, and graphic design. I am currently studying
            Computer Science at UNICARIOCA, with expected graduation in December
            2024.
          </p>
          <p className="about-me-text">
            I am fluent in Brazilian Portuguese and possess an intermediate
            level of English, which allows me to effectively collaborate in
            multicultural teams and international projects.
          </p>
          <p className="about-me-text">
            I am excited to explore new opportunities in the tech industry, both
            nationally and internationally, and I am prepared to adapt to
            different technologies and challenges that may arise in future tasks
            and projects.
          </p>
          <p className="about-me-text">
            Outside the professional environment, I enjoy maintaining an active
            lifestyle by training regularly and appreciate moments of relaxation
            by listening to music. I am also an avid gamer and previously ran a
            YouTube channel focused on gaming, where I produced and edited
            videos, enhancing my skills in audiovisual production.
          </p>
        </div>
      </div>
    </div>
  );
}

export default aboutMePage;