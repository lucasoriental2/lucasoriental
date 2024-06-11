import React, { useEffect, useState } from "react";
import JobExperience from "../job-experiences-page/common/jobExperience";

const JobExperiencesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobExperiences, setJobExperiences] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://lucasoriental.github.io/lucasorientalapi/database.json");
        setJobExperiences(await response.json());
        setIsLoading(false);
      } catch (err) {
        console.error(
          "Something error happend during fetch on the Job Experiences page, please try refreshing the site..."
        );
      }
    };
    fetchData();
  }, []);

  return (
    <div id="job-experiences-container">
      <div className="container-general">
        <div>
          <p className="title-general" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">Job Experiences</p>
        </div>
        {isLoading === true ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "25px",
              color: "#FFF",
              margin: "90px 0px",
              fontWeight: "500",
            }}
          >
            The data is loading, please wait a moment....
          </p>
        ) : (
          <JobExperience data={jobExperiences.jobExperiences} />
        )}
      </div>
    </div>
  );
};

export default JobExperiencesPage;
