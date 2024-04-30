import React, {useEffect} from "react";
import imageTemp from "../../../../assets/pictures/img_empty.png"

import AOS from "aos"
import 'aos/dist/aos.css'

export default function JobExperiences (props) {

  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);

    return (
      <div className="block-of-jobs">
        {props.data.map((job, index) => {
          return (
            <div className="job-entire-item" key={index} data-aos="fade-left"
            data-aos-anchor-placement="top-center">
              <img alt="img" src={imageTemp} className="job-image" />
              <div className="job-entire-item-paragraph">
                <p className="job-title">{job.jobTitle}</p>
                <p className="job-company-name">{job.companyName}</p>
                <p className="job-time">{job.time}</p>
                <p className="job-responsibilities">{job.responsibilities}</p>
                <a href="#" className="job-button-link">
                  <button className="job-button">more details</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
}