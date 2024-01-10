import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Dilbu from "../images/Dorje-Dilbu.jpeg";
import Mani from "../images/Hand-Mani.jpeg";
import Mala from "../images/Mala-108.jpeg";
import Bowl from "../images/Singing-bowl.jpeg";

const PictureSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const images = [Dilbu, Mani, Mala, Bowl];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default PictureSlider;
