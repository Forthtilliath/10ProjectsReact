import React from 'react'
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

export default function BtnSlider({direction, moveSlide}) {
  return (
    <div>
        <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt="Flèche de naviguation" />
        </button>

    </div>
  )
}
