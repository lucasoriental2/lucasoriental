import React from 'react';
import ThemeSvg from '../../../assets/common_elements/theme_icon'
import LanguageSvg from '../../../assets/common_elements/language_icon'

const Header = () => {
    return (
        <header id="header-main">
            <div id="header-content-desktop">
                <div className="themeIcon">
                    <div className="theme-selected"></div>
                    <ThemeSvg/>
                </div>
                <nav className="navLinks">
                    <ul>
                        <li className="link-nav-header">Home</li>
                        <li className="link-nav-header">My Projects</li>
                        <li className="link-nav-header">Education & Skills</li>
                        <li className="link-nav-header">Job Experiences</li>
                        <li className="link-nav-header">Contact Me</li>
                        <li className="link-nav-header">About Me</li>
                        <li className="link-nav-header">Have a Fun 😊</li>
                    </ul>
                </nav>
                <div className="languageIcon">
                <div className="language-selected"></div>
                    <LanguageSvg/>
                </div>
            </div>
            <div id="header-content-mobile">
                <div></div>
            </div>
        </header>
    )
}

export default Header;