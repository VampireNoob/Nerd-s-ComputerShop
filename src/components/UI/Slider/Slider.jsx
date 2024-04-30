import React from 'react'
import { useState } from 'react'
import { sliderData } from '../../../data/dataProducts'
import './slider.css'
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { image } = sliderData[currentSlide];

    const prevSlide = () => {
        setCurrentSlide(currentSlide => {
        currentSlide--;
        if (currentSlide < 0) {
          return sliderData.length - 1;
        }
        return currentSlide;
      })
    }
  
    const nextSlide = () => {
        setCurrentSlide(currentSlide => {
            currentSlide++;
        if (currentSlide > sliderData.length - 1) {
            currentSlide = 0;
        }
        return currentSlide;
      })
    }

  return (
    <div className="slider">
      <div className="container" >
        <img src={`${image}.jpg`} alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <PiArrowLeft />
        </div>

        <div className="icon" onClick={nextSlide}>
          <PiArrowRight />
        </div>
      </div>
    </div>
    )
}

export default Slider;