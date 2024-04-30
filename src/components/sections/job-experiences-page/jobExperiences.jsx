import React, { useEffect, useState } from "react";
import JobExperience from "../job-experiences-page/common/jobExperience";

const JobExperiencesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobExperiences, setJobExperiences] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/jobExperiences");
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
          <p className="title-general">JOB EXPERIENCES</p>
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
          <JobExperience data={jobExperiences} />
        )}
      </div>
    </div>
  );
};

export default JobExperiencesPage;
