import React, { useState, useEffect } from "react";
import ProfessionalStarIconSvg from '../../../../assets/common_elements/professional_star';
import skillPicture from '../../../../assets/pictures/picture_skill.png';

export default function Skills( props ) {
  const [currentPage, setCurrentPage] = useState(1);
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
      <div className="allSkills">
        {currentItems.map((skill, index) => {
          const levelElements = [];
          for (let i = 0; i < 10; i++) {
            if (i < skill.level) {
              levelElements.push(<canvas key={i} className="canvas-teste"/>);
            } else {
              levelElements.push(<canvas key={i} className="canvas-teste2"/>);
            }
          }
          return (
            <div className="EAS-skills" key={index}>
              {skill.professional === true ? <ProfessionalStarIconSvg /> : null}
              <img
                alt="skill_img"
                src={skillPicture}
                className="EAS-skills-picture"
              />
              <p className="EAS-skills-title">{skill.title}</p>
              <div className="level-skill">{levelElements}</div>
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
