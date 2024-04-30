import React,{useState, useEffect} from "react";
import ProfessionalStarIconSvg from '../../../../assets/common_elements/professional_star';
import skillPicture from '../../../../assets/pictures/picture_skill.png';

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from "framer-motion"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import AOS from "aos"
import 'aos/dist/aos.css'

export default function Skills( props ) {

  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    AOS.init({duration: 850})
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setItemsPerPage(1);
      } else if (width < 750) {
        setItemsPerPage(2);
      }else if (width < 853) {
        setItemsPerPage(3);
      }else if (width < 1000) {
        setItemsPerPage(4);
      }else if (width < 1096) {
        setItemsPerPage(3);
      }else if (width < 1450) {
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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swipe-view-skills"
        data-aos="fade-right"
        data-aos-offset="250"
        data-aos-easing="ease-in-sine"
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
              <div
                className="EAS-skills"
                data-aos="fade-right"
                data-aos-offset="250"
                data-aos-easing="ease-in-sine"
              >
                {skill.professional === true ? (
                  <ProfessionalStarIconSvg className="star-skill"/>
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
