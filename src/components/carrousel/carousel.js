
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

  const shouldShowArrows = images.length > 1;

  return (
    <div className="carousel">
      {shouldShowArrows && (
        <>
      <button id='prevslide' onClick={goToPrevSlide}><img src={arrow} alt="précédent"/></button>
      
      <button id='nextslide' onClick={goToNextSlide}><img src={arrow} alt="suivant"/></button>
      </>
      )}
      <img src={images[currentIndex]} alt={"Image du carrousel"+[currentIndex]} />
      </div>
  );
};

export default Carousel;