import React, {useEffect} from "react";
import XIconSvg from "../../../../assets/common_elements/icon_X"

export default function myPortfolio({ setOpenModal }) {

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
          document.body.classList.remove("modal-open");
        };
      }, []);

    return (
      <>
        <div className="modal-background">
          <div className="modal-container">
            <div className="modal-header">
              <button
                className="modal-close-button"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                <XIconSvg />
              </button>
              <p className="modal-header-title">Check the Project</p>
            </div>
            <div className="modal-body">
              <canvas className="modal-img" src="#" alt="#" />
              <div className="modal-body-text-area">
                <p className="modal-body-title">My Portfolio</p>
                <p className="modal-body-sub-title">Web Development</p>
                <p className="modal-text"></p>
              </div>
            </div>
            <div className="modal-footer">
              <div>
                <a
                  href="https://github.com/lucasoriental/lucasoriental"
                  target="_blank"
                >
                  <button className="modal-button-project">GitHub</button>
                </a>
              </div>
              <div>
                <a href="https://lucasoriental.com" target="_blank">
                  <button className="modal-button-project">Website</button>
                </a>
              </div>
              <div>
                <a href="https://behance.net/lucasoriental" target="_blank">
                  <button className="modal-button-project">Behance</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
