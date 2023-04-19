import React from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import "./slider.scss";
import { useState } from "react";


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data =[
        "https://images.pexels.com/photos/975261/pexels-photo-975261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        "https://images.pexels.com/photos/3536991/pexels-photo-3536991.jpeg?auto=compress&cs=tinysrgb&w=600",

        "https://images.pexels.com/photos/4061195/pexels-photo-4061195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    ];

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1);
    };

    const nextSlide = () =>{
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) =>prev +1);

    };

  return (
    <div className="slider">
        <div className="container" style={{transform:`translate(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt=""/>
            <img src={data[1]} alt=""/>
            <img src={data[2]} alt=""/>
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}><KeyboardDoubleArrowLeftIcon/></div>
            <div className="icon" onClick={nextSlide}><KeyboardDoubleArrowRightIcon/></div>
        </div>
    </div>
  )
}

export default Slider