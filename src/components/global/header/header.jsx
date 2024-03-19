import React, {useState} from 'react';
import ThemeSvg from '../../../assets/common_elements/theme_icon'
import LanguageSvg from '../../../assets/common_elements/language_icon'
import MenuHamburguer from '../../../assets/common_elements/icon_menu_hamburger'
import XIconSvg from '../../../assets/common_elements/icon_X';

const Header = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
  const btnMenu = document.querySelector(".hamburguer")
  const mob_menu = document.querySelector(".header-mobile-side-bar")

    btnMenu.classList.toggle("is-active");
    mob_menu.classList.toggle("is-active");

    console.log(btnMenu)
    console.log(mob_menu)
}

  return (
    <header id="header-main">
      <div id="header-desktop">
        <div className="header-desktop-theme">
          <div className="header-theme-selected" />
          <ThemeSvg />
        </div>

        <nav className="header-desktop-nav">
          <a href="#home">Home</a>
          <a href="#myProjects">My Projects</a>
          <a href="#educationAndSkills">Education & Skills</a>
          <a href="#jobExperiences">Job Experiences</a>
          <a href="#contactMe">Contact Me</a>
          <a href="#aboutMe">About Me</a>
          <a href="#haveAFun">Have a Fun😊</a>
        </nav>

        <div className="header-desktop-language">
          <div className="header-language-selected" />
          <LanguageSvg />
        </div>
      </div>

      <div id="header-mobile">
        <div className="header-mobile-bar">
          <button className="hamburguer" onClick={handleClick}>
            <MenuHamburguer />
          </button>
          <img alt="logo" src=""/>
        </div>
        <div
          className={`header-mobile-side-bar ${isActive ? "is-active" : ""}`}
        >
          <div className="header-mobile-side-bar-top">
            <div className="header-mobile-side-bar-top-XIcon">
              <button className="hamburguer" onClick={handleClick}>
                <XIconSvg />
              </button>
            </div>
            <div className="header-mobile-side-bar-top-Icons">
              <div className="header-mobile-side-bar-top-Theme">
                <div className="header-theme-selected" />
                <ThemeSvg />
              </div>
              <div className="header-mobile-side-bar-top-Language">
                <div className="header-language-selected" />
                <LanguageSvg />
              </div>
            </div>
          </div>
          <nav className="header-mobile-side-bar-nav">
            <a href="#home">Home</a>
            <a href="#myProjects">My Projects</a>
            <a href="#educationAndSkills">Education & Skills</a>
            <a href="#jobExperiences">Job Experiences</a>
            <a href="#contactMe">Contact Me</a>
            <a href="#aboutMe">About Me</a>
            <a href="#haveAFun">Have a Fun 😊</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;