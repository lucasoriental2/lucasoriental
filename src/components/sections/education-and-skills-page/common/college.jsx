import React, { useEffect, useState } from "react";
import collegePicture from "../../../../assets/pictures/picture_college.png";

export default function College() {
  const [college, setCollege] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/college", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCollege(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="allColeges">
      {college.map((college) => {
        return (
          <div className="EAS-college" key={college.id}>
            <div className="EAS-college-img-and-info">
              <img
                alt="College_picture"
                src={collegePicture}
                className="EAS-college-picture"
              />
              <div className="EAS-college-info-div">
                <a
                  href={college.websiteLink}
                  target="_blank"
                  className="EAS-college-title"
                >
                  {college.courseTitle}
                </a>
                <p className="EAS-college-info">{college.universityName}</p>
                <p className="EAS-college-info">{college.time}</p>
                <a
                  href={college.websiteLink}
                  target="_blank"
                  className="EAS-college-button"
                >
                  <button className="EAS-college-button">
                    University Website
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
