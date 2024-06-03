import React, { useEffect, useState } from "react";
import XIconSvg from "../../../../assets/common_elements/icon_X";

export default function JobExperiencesModal({ setOpenModal, information }) {
  const [iconSize, setIconSize] = useState(window.innerWidth <= 750 ? 15 : 30);

  console.log(information, "JobExperienceModal");

  useEffect(() => {
    document.body.classList.add("modal-open");

    const handleResize = () => {
      setIconSize(window.innerWidth <= 750 ? 15 : 30);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("resize", handleResize);
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
          <p className="modal-header-title">Job Details</p>
        </div>
        <div className="modal-job-body">
          <div className="modal-body-img-and-info">
            <div className="modal-body-img-and-info-left">
              <img
                className="modal-job-img"
                src={information.image}
                alt="logo-company"
              />
            </div>
            <div className="modal-body-img-and-info-right">
              <p className="modal-job-company-name">
                {information.companyName}
              </p>
              <p className="modal-job-time">{information.time}</p>
              <p className="modal-job-title">{information.jobTitle}</p>
            </div>
          </div>
          <p className="modal-job-title-responsibilities">
            My responsabilities on this experience:
          </p>
          <div
            className="modal-job-responsibilities"
            dangerouslySetInnerHTML={{
              __html: information.responsibilities,
            }}
          />
        </div>
      </div>
    </div>
  );
}
