import React, { useState } from "react";
import JobExperiencesModal from "./jobExperiencesModal";

export default function JobExperiences(props) {
  const [jobExperience, setJobExperience] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="block-of-jobs">
      {props.data.map((job, index) => {
        return (
          <div key={index.id}>
            <div
              className="job-entire-item"
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <img alt="Company Logo" src={job.image} className="job-image" />
              <div className="job-entire-item-paragraph">
                <p className="job-title">{job.jobTitle}</p>
                <p className="job-company-name">{job.companyName}</p>
                <p className="job-time">{job.time}</p>
                <div
                  className="job-responsibilities"
                  dangerouslySetInnerHTML={{ __html: job.responsibilities }}
                />
                <a className="job-button-link">
                  <button
                    onClick={() => {
                      setModalOpen(true);
                      setJobExperience(index);
                    }}
                    className="job-button"
                  >
                    more details
                  </button>
                </a>
              </div>
            </div>
            {modalOpen && jobExperience === index && (
              <JobExperiencesModal
                information={job}
                setOpenModal={setModalOpen}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
