import React from "react";
import BehanceSVG from "../../../assets/light_theme/Behance";
import GitHubSVG from "../../../assets/light_theme/GitHub";
import InstagramSVG from "../../../assets/light_theme/Instagram";
import LinkedInSVG from "../../../assets/light_theme/LinkedIn";
import MouseSrollSvg from "../../../assets/light_theme/mouse_arrow_down";
import main_picture from "../../../assets/pictures/profile_photo_1.jpg";

import { Tooltip } from 'react-tooltip';

import { Link } from "react-scroll";

const MainPage = () => {
  const headerHeight = 120;

  return (
    <div id="home-main-container">
      <div className="home-main-container-1">
        <div className="home-column1">
          <img
            alt="profile-image"
            src={main_picture}
            className="home-profile-picture"
          />
          <div className="borda-animada" />
        </div>
        <div className="home-column2">
          <div className="home-line1">
            <div>
              <p className="home-paragraph-1">Hey there!</p>
              <p className="home-paragraph-2">
                This is <span>Lucas Oriental!</span>
              </p>
            </div>
            <div>
              <p className="home-paragraph-1And2-mobile">
                Hey there, this is <span>Lucas Oriental!</span>
              </p>
            </div>
            <p className="home-paragraph-3">
              A <span>WEB Developer Jr</span> And <span>UX/UI Designer</span>
            </p>
          </div>
          <div className="home-line2">
            <Link
              activeClass="active"
              to="about-me-container"
              spy={true}
              smooth={true}
              offset={-headerHeight}
              duration={1000}
            >
              <button id="home-button">Who Am I?</button>
            </Link>
            <div className="home-social-medias">
              <a
                place="top"
                data-tooltip-id="my-tooltip-instagram"
                data-tooltip-content="My Instagram"
                href="https://instagram.com/lucasorientaldev"
                target="_blank"
                className="home-social-medias-a"
              >
                <Tooltip id="my-tooltip-instagram" />
                <InstagramSVG width={40} height={40} color={"#E00036"} />
              </a>
              <a
                place="top"
                data-tooltip-id="my-tooltip-GitHub"
                data-tooltip-content="My GitHub"
                href="https://github.com/lucasoriental"
                target="_blank"
                className="home-social-medias-a"
              >
                <Tooltip id="my-tooltip-GitHub" />
                <GitHubSVG width={40} height={40} color={"#E00036"} />
              </a>
              <a
                place="top"
                data-tooltip-id="my-tooltip-LinkedIn"
                data-tooltip-content="My LinkedIn"
                href="https://linkedin.com/in/lucas-oriental-dos-santos"
                target="_blank"
                className="home-social-medias-a"
              >
                <Tooltip id="my-tooltip-LinkedIn" />
                <LinkedInSVG width={40} height={40} color={"#E00036"} />
              </a>
              <a
                place="top"
                data-tooltip-id="my-tooltip-Behance"
                data-tooltip-content="My Behance"
                href="https://behance.net/lucasoriental"
                target="_blank"
                className="home-social-medias-a"
              >
                <Tooltip id="my-tooltip-Behance" />
                <BehanceSVG width={40} height={40} color={"#E00036"} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-main-container-2">
        <MouseSrollSvg />
      </div>
    </div>
  );
};

export default MainPage;
