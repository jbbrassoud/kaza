
import React, { useState } from 'react';
import arrow from './prev.svg'


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button id='prevslide' onClick={goToPrevSlide}><img src={arrow} alt="précédent"/></button>
      <img src={images[currentIndex]} alt={"Image du carrousel"+[currentIndex]} />
      <button id='nextslide' onClick={goToNextSlide}><img src={arrow} alt="suivant"/></button>
    </div>
  );
};

export default Carousel;