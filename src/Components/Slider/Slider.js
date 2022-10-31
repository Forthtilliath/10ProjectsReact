import React, { useState } from "react";
import { useEffect } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";

export default function Slider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  const autoSlide = () => {
    const si = setInterval(nextSlide, 3000);
    return () => clearInterval(si);
  };

  const nextSlide = () => {
    if (slideAnim.inProgress) return;

    setSlideAnim((anim) => ({
      index: anim.index === dataSlider.length ? 1 : anim.index + 1,
      inProgress: true,
    }));

    setTimeout(() => {
      setSlideAnim((anim) => ({
        ...anim,
        inProgress: false,
      }));
    }, 400);
  };

  const prevSlide = () => {
    if (slideAnim.inProgress) return;

    setSlideAnim((anim) => ({
      index: anim.index === 1 ? dataSlider.length : anim.index - 1,
      inProgress: true,
    }));

    setTimeout(() => {
      setSlideAnim((anim) => ({
        ...anim,
        inProgress: false,
      }));
    }, 400);
  };

  const moveDot = (index) => {
    setSlideAnim({ index, inProgress: false });
  };

  useEffect(() => {
    // const si = setInterval(nextSlide, 3000);
    // return () => clearInterval(si);
    return autoSlide();
  }, []);

  useEffect(() => {
    console.log(slideAnim);
  }, [slideAnim]);

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
              alt="Image slider"
            />
          </div>
        );
      })}

      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <BtnSlider moveSlide={nextSlide} direction={"next"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <div
              className={slideAnim.index === index + 1 ? "dot active" : "dot"}
              onClick={() => moveDot(index + 1)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
