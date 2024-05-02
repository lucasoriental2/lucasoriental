import React, { useEffect } from "react";
import MouseSrollSvg from "../../../assets/light_theme/mouse_arrow_down";
import main_picture from "../../../assets/pictures/profile_photo.png";

import { Link } from "react-scroll";

const MainPage = () => {
  const headerHeight = 120;

  return (
    <div id="home-main-container">
      <div className="home-main-container-1">
        <div className="home-column1">
          <img
            alt="home-profile-picture"
            src={main_picture}
            className="home-profile-picture"
          />
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
