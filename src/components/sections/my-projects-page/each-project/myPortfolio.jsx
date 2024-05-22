import { useEffect } from "react";
import XIconSvg from "../../../../assets/common_elements/icon_X"
import GitHubIcon from "../../../../assets/light_theme/GitHub"
import BrowserIcon from "../../../../assets/light_theme/browser"
import BehanceIcon from "../../../../assets/light_theme/Behance"


export default function MyPortfolio({ setOpenModal }) {

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <button
            className="modal-close-button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <XIconSvg width={30} height={30} strokeWidth={3} color="white" />
          </button>
          <p className="modal-header-title">Check the Project</p>
        </div>
        <div className="modal-body">
          <canvas className="modal-img" src="#" alt="#" />
          <div className="modal-body-text-area">
            <p className="modal-body-title">My Portfolio</p>
            <p className="modal-body-sub-title">Web Development, Design and Data Base</p>
            <p className="modal-text">Here is the summary of my oficial portfolio! <br />
              React/Vite, SCSS and Json are the main technologies on this project!
              Also have other ones such as HTML, CSS and JavaScript (Obviously), Swiper JS, Reveal JS,
              fontAwesome, RectDOM, Router, Hooks, sonarLint and GitHub Pages! <br /> NPM and Git for version
              control! <br />The main goal of this project is display my skills, professional journey and Works
              (Professional and Personal)! </p>
          </div>
        </div>
        <div className="modal-footer">
          <div>
            <a
              className="modal-link-a"
              href="https://github.com/lucasoriental/lucasoriental"
              target="_blank"
            >
              <div className="modal-button-project">
                <div className="modal-button-project-icon">
                  <GitHubIcon height={30} width={30} color={"white"} />
                </div>
                <p className="modal-button-project-text">GitHub</p>
              </div>
            </a>
          </div>
          <div>
            <a className="modal-link-a" href="https://lucasoriental.com" target="_blank">
              <div className="modal-button-project">
                <div className="modal-button-project-icon">
                  <BrowserIcon width={30} height={28} color="white" />
                </div>
                <p className="modal-button-project-text">WebSite</p>
              </div>
            </a>
          </div>
          <div>
            <a className="modal-link-a" href="https://behance.net/lucasoriental" target="_blank">
              <div className="modal-button-project">
                <div className="modal-button-project-icon">
                  <BehanceIcon width={30} height={30} color="white" />
                </div>
                <p className="modal-button-project-text">Behance</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}
