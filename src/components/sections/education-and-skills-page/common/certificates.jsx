import React, {useState, useEffect} from "react";
import CapCourseLightSVG from '../../../../assets/light_theme/cap_course_SVG';
import ClockLightSVG from '../../../../assets/light_theme/clock_SVG';
import certificatePicture from '../../../../assets/pictures/picture_certificate.png';

export default function Certificates (props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 898) {
        setItemsPerPage(1);
      } else if (width < 1306) {
        setItemsPerPage(2);
      }else if (width < 1306) {
        setItemsPerPage(3);
      }else if (width < 1340) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(5);
      }
    };

    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(props.data.length / itemsPerPage);

  function nextPage() {
    setCurrentPage((prevPage) => {
      if (currentPage < totalPages) {
        return prevPage + 1;
      } else {
        return 1;
      }
    })
  }

  function prevPage() {
    setCurrentPage((prevPage) => {
      if (prevPage > 1) {
        return prevPage - 1;
      } else {
        return totalPages; // Retorna para o último item da lista
      }
    });
  }

  return (
    <div className="button-and-skills">
      <button onClick={prevPage} className="next-and-previous-button">
        {"<"}
      </button>
      <div className="allCertificates">
        {currentItems.map((certificate) => {
          return (
            <div className="EAS-certificates" key={certificate.id}>
              <img
                alt="credential_img"
                src={certificatePicture}
                className="EAS-certificates-picture"
              />
              <div className="EAS-certificates-div">
                <p className="EAS-certificates-title">{certificate.course}</p>
                <div className="EAS-certificates-div-icon-text">
                  <CapCourseLightSVG />
                  <p className="EAS-certificates-div-text">
                    {certificate.platform}
                  </p>
                </div>
                <div className="EAS-certificates-div-icon-text">
                  <ClockLightSVG />
                  <p className="EAS-certificates-div-text">
                    {certificate.time} h
                  </p>
                </div>
                <a href={certificate.credentialUrl}>
                  <button className="EAS-certificates-button">
                    Show Credential
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={nextPage} className="next-and-previous-button">
        {">"}
      </button>
    </div>
  );
}