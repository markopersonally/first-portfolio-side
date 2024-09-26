import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { projectsList } from "../../data/projectsList";
import ProjectCard from "./ProjectCard";
import "./ProjectCard.css";

const MySlider = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 2,
    fade: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {projectsList.map((project) => (
        <ProjectCard
          key={project.id}
          tittle={project.title}
          img={project.img}
          link={project.link}
        />
      ))}
    </Slider>
  );
};

export default MySlider;
