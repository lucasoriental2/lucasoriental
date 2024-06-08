import React from "react";
import image from "../../../assets/pictures/img_about_me_section.jpeg";

const aboutMePage = () => {
  return (
    <div id="about-me-container">
      <div className="container-general"></div>
      <p className="title-general" style={{ color: "#E00036" }}>
        ABOUT ME
      </p>
      <div className="about-me-container-items">
        {/* <div className="img-and-text"> */}
        <img alt="imagem" src={image} className="about-me-image" />
        <p className="about-me-text">
          Hey there, this is Lucas, a{" "}
          <span className="about-me-span">
            WEB Developer and UX/UI Designer
          </span>
          , with professional experience in designing and implementing{" "}
          <span className="about-me-span">dynamic web applications</span>,
          encompassing a wide range of essential technologies for{" "}
          <span className="about-me-span">React web development</span>. This
          includes{" "}
          <span className="about-me-span">
            application security, automated testing, agile development,
            performance analysis, and bug fixing.
          </span>
          <br />
          In the field of WEB development, I highlight the following skills:{" "}
          <span className="about-me-span">API manipulation</span>; use of tools
          like <span className="about-me-span">Postman and Webpack</span>;
          knowledge of frameworks and libraries such as{" "}
          <span className="about-me-span">React and Angular</span>; development
          of responsive interfaces with modern CSS{" "}
          <span className="about-me-span">
            (Bootstrap, Carbon Design, Material UI, Reveal Js and others)
          </span>{" "}
          and preprocessors like <span className="about-me-span">SASS</span>;
          programming in <span className="about-me-span">JavaScript ES6+</span>;
          unit and integration testing with{" "}
          <span className="about-me-span">Jest</span>; version control with{" "}
          <span className="about-me-span">Git and GitHub</span>; optimization of
          web application{" "}
          <span className="about-me-span">
            performance; SEO and web accessibility
          </span>
          ; use of database management systems like{" "}
          <span className="about-me-span">MySQL</span>;{" "}
          <span className="about-me-span">agile development practices</span> and{" "}
          <span className="about-me-span">Scrum</span>;{" "}
          <span className="about-me-span">
            good communication and teamwork.
          </span>{" "}
          <br /> During my professional internship at IBM, I significantly
          expanded my knowledge and skills by working in an{" "}
          <span className="about-me-span">
            international and collaborative environment
          </span>
          . This experience was fundamental to my professional growth, providing
          me with a comprehensive understanding of{" "}
          <span className="about-me-span">
            global-scale software development practices.
          </span>{" "}
          <br />
          Additionally, my professional journey has led me to contribute in
          various areas, such as{" "}
          <span className="about-me-span">
            IT support, infrastructure, UX/UI design, audiovisual production,
            and graphic design.
          </span>{" "}
          <br /> I am currently porsuing Computer Science at UNICARIOCA, with
          expected graduation in December 2024. <br /> I am fluent in Brazilian
          Portuguese and possess an{" "}
          <span className="about-me-span">advanced level of English</span>,
          which allows me to effectively{" "}
          <span className="about-me-span">
            collaborate in multicultural teams and international projects.
          </span>{" "}
          <br />I am excited to explore{" "}
          <span className="about-me-span">new opportunities</span> in the tech
          industry, both{" "}
          <span className="about-me-span">
            nationally and/or internationally,
          </span>
          and I am prepared to adapt to different technologies and challenges
          that may arise in future tasks and projects. <br />
          Outside of work, I maintain an active lifestyle through regular
          training and find relaxation in listening to music. I'm also an avid
          gamer and previously managed a gaming-focused YouTube channel. There,
          I produced and edited videos, which helped me{" "}
          <span className="about-me-span">
            enhance my skills in audiovisual production.
          </span>
        </p>
      </div>
    </div>
  );
};

export default aboutMePage;
