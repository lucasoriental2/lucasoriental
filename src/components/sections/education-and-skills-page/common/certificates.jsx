import { useState, /* useEffect */ } from "react";
import { Tooltip } from 'react-tooltip';
import CapCourseLightSVG from "../../../../assets/light_theme/cap_course_SVG";
import ClockLightSVG from "../../../../assets/light_theme/clock_SVG";
import certificatePicture from "../../../../assets/pictures/picture_certificate.png";
import CertModal from "./modals/certModal";

export default function Certificates(props) {

  const [selectedCourse, setSelectedCourse] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container-certificates">
      <div className="allCertificates">
        {props.data.map((certificate, index) => {
          return (
            <div className="EAS-certificates" key={certificate.id}>
              <img
                alt="credential_img"
                src={certificatePicture}
                className="EAS-certificates-picture"
              />
              <div className="EAS-certificates-div">
                  <button
                    className="EAS-certificates-title-link"
                    onClick={() => {
                      setModalOpen(true);
                      setSelectedCourse(index);
                    }}
                  >
                      <Tooltip id="my-tooltip-cert" />
                    <p
                      data-tooltip-id="my-tooltip-cert" 
                      data-tooltip-content="Click to see the credential" 
                      className="EAS-certificates-title">{certificate.course}</p>
                  </button>
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
              </div>
              {modalOpen && selectedCourse === index && (
                <CertModal information={certificate} setOpenModal={setModalOpen} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
