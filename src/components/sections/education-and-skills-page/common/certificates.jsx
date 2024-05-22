import { useState, /* useEffect */ } from "react";
import CapCourseLightSVG from "../../../../assets/light_theme/cap_course_SVG";
import ClockLightSVG from "../../../../assets/light_theme/clock_SVG";
import certificatePicture from "../../../../assets/pictures/picture_certificate.png";

/* import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react"; */

import CertModal from "./modals/certModal";

// Import Swiper styles
/* import "swiper/css";
import "swiper/css/navigation"; */

export default function Certificates(props) {
  /* const [itemsPerPage, setItemsPerPage] = useState(4); */

  const [selectedCourse, setSelectedCourse] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  /* useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 854) {
        setItemsPerPage(1);
      } else if (width < 1100) {
        setItemsPerPage(1);
      } else if (width < 1450) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(props.data.length);
      }
    };

    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []); */

  return (
    <div className="container-certificates">
      <div className="allCertificates">
        {/* <Swiper
        navigation={true}
        slidesPerView={itemsPerPage}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="swipe-view-certificate"
      > */}
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
                  <p className="EAS-certificates-title">{certificate.course}</p>
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
                <CertModal setOpenModal={setModalOpen} />
              )}
            </div>
          );
        })}
        {/* </Swiper> */}
      </div>
    </div>
  );
}
