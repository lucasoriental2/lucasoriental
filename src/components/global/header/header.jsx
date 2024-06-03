import React, { useState } from "react";
import XIconSvg from "../../../assets/common_elements/icon_X";
import MenuHamburguer from "../../../assets/common_elements/icon_menu_hamburger";

import { Link } from "react-scroll";

const Header = () => {
  const headerHeight = 120;

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const btnMenu = document.querySelector(".hamburguer");
    const mob_menu = document.querySelector(".header-mobile-side-bar");

    btnMenu.classList.toggle("is-active");
    mob_menu.classList.toggle("is-active");
    setIsActive(!isActive);
  };

  const handleClickLink = () => {
    setIsActive(false);
  };

  return (
    <header id="header-main">
      <div id="header-desktop">
        <nav className="header-desktop-nav">
          {/* <div className="header-desktop-theme">
            <div className="header-theme-selected" />
            <ThemeSvg />
          </div> */}
          <Link
            activeClass="active"
            to="home-main-container"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="my-projects-container"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            My Projects
          </Link>
          <Link
            activeClass="active"
            to="education-and-skills-page"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            Education & Skills
          </Link>
          <Link
            activeClass="active"
            to="job-experiences-container"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            Job Experiences
          </Link>
          <Link
            activeClass="active"
            to="about-me-container"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            About Me
          </Link>
          <Link
            activeClass="active"
            to="contact-me-container"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            Contact Me
          </Link>
          {/* <Link
            activeClass="active"
            to="about-me-container"
            spy={true}
            smooth={true}
            offset={-headerHeight}
            duration={1000}
          >
            Have a Fun😊
          </Link> */}
          {/* <div className="header-desktop-language">
            <div className="header-language-selected" />
            <LanguageSvg />
          </div> */}
        </nav>
      </div>

      <div id="header-mobile">
        <div className="header-mobile-bar">
          <button className="hamburguer" onClick={handleClick}>
            <MenuHamburguer
              width={41}
              height={26}
              strokeWidth={3}
              strokeColor="white"
            />
          </button>
          <img alt="logo" src="" />
        </div>
        <div
          className={`header-mobile-side-bar ${isActive ? "is-active" : ""}`}
        >
          <div className="header-mobile-side-bar-top">
            <div className="header-mobile-side-bar-top-XIcon">
              <button className="hamburguer" onClick={handleClick}>
                <XIconSvg
                  width={35}
                  height={35}
                  strokeWidth={3}
                  color="white"
                />
              </button>
            </div>
            {/* <div className="header-mobile-side-bar-top-Icons">
              <div className="header-mobile-side-bar-top-Theme">
                <div className="header-theme-selected" />
                <ThemeSvg />
              </div>
              <div className="header-mobile-side-bar-top-Language">
                <div className="header-language-selected" />
                <LanguageSvg />
              </div>
            </div> */}
          </div>
          <nav className="header-mobile-side-bar-nav">
            <Link
              activeClass="active"
              to="home-main-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="my-projects-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              My Projects
            </Link>
            <Link
              activeClass="active"
              to="education-and-skills-page"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              Education & Skills
            </Link>
            <Link
              activeClass="active"
              to="job-experiences-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              Job Experiences
            </Link>
            <Link
              activeClass="active"
              to="about-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              About Me
            </Link>
            <Link
              activeClass="active"
              to="contact-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              Contact Me
            </Link>
            {/* <Link
              activeClass="active"
              to="about-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
              onClick={handleClickLink}
            >
              Have a Fun😊
            </Link> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
