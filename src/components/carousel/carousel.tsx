import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const CarouselElm = () => {
  const slides = [
    "./images/slider (1).jpg",
    "./images/slider (2).jpg",
    "./images/slider (3).jpg",
    "./images/slider (4).jpg",
    "./images/slider (5).jpg",
  ];
  return (
    <AwesomeSlider>
      {slides.map((src) => {
        return <div style={{ marginTop: "30px", borderRadius: "20px" }} data-src={src} />;
      })}
    </AwesomeSlider>
  );
};
export default CarouselElm;
