import React,{useState, useEffect} from "react";
import ProfessionalStarIconSvg from '../../../../assets/common_elements/professional_star';
import skillPicture from '../../../../assets/pictures/picture_skill.png';

import { Navigation, Pagination } from "swiper/modules";
import { EffectCube } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export default function Skills( props ) {

  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 750) {
        setItemsPerPage(1);
      } else if (width < 853) {
        setItemsPerPage(2);
      }else if (width < 1098) {
        setItemsPerPage(3);
      }else if (width < 1450) {
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

  /* 

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
  } */

  return (
    <div className="allSkills">
      <Swiper
        slidesPerView={itemsPerPage}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        style={{height: "300px", padding: "0 20px", maxWidth: "90vw"}}
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
                  <ProfessionalStarIconSvg />
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
