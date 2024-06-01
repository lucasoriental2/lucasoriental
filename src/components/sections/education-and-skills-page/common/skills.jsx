import React, { useEffect, useState } from "react";
import ProfessionalStarIconSvg from "../../../../assets/common_elements/professional_star";
import skillPicture from "../../../../assets/pictures/picture_skill.png";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Skills(props) {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setItemsPerPage(1);
      } else if (width < 750) {
        setItemsPerPage(2);
      } else if (width < 853) {
        setItemsPerPage(3);
      } else if (width < 1000) {
        setItemsPerPage(4);
      } else if (width < 1096) {
        setItemsPerPage(3);
      } else if (width < 1450) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(4);
      }
    };

    window.addEventListener("resize", updateItemsPerPage);
    updateItemsPerPage();
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  return (
    <div className="allSkills">
      <Swiper
        slidesPerView={itemsPerPage}
        spaceBetween={-100}
        loop={true}
        /* pagination={{
          clickable: true,
        }} */
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swipe-view-skills"
      >
        {props.data.map((skill, index) => {
          const levelElements = [];
          for (let i = 0; i < 10; i++) {
            if (i < skill.level) {
              levelElements.push(<canvas key={i} className="canvas-teste" />);
            } else {
              levelElements.push(<canvas key={i} className="canvas-teste2" />);
            }
          }
          return (
            <SwiperSlide key={index}>
               <div className="EAS-skills"> 
                {skill.professional === true ? (
                     <ProfessionalStarIconSvg
                     size={window.innerWidth < 1000 ? 15 : 20} outColor="#E00036" inColor="white"
                      className="star-skill" />
                ) : null}
                <img
                  alt="skill_img"
                  src={skillPicture}
                  className="EAS-skills-picture"
                />
                <p className="EAS-skills-title">{skill.title}</p>
                <div className="level-skill">{levelElements}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
