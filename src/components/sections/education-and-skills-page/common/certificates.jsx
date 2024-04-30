import React, { useState, useEffect } from "react";
import CapCourseLightSVG from "../../../../assets/light_theme/cap_course_SVG";
import ClockLightSVG from "../../../../assets/light_theme/clock_SVG";
import certificatePicture from "../../../../assets/pictures/picture_certificate.png";

import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import CertModal from "./modals/certModal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Certificates(props) {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
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
  }, []);

  return (
    <div className="allCertificates">
      <Swiper
        navigation={true}
        slidesPerView={itemsPerPage}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="swipe-view-certificate"
      >
        {props.data.map((certificate, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="EAS-certificates">
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
