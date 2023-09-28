
import React, { useState } from 'react';

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
      <button onClick={goToPrevSlide}>&#9664;</button>
      <img src={images[currentIndex]} alt={"Image du carrousel"+[currentIndex]} />
      <button onClick={goToNextSlide}>&#9654;</button>
    </div>
  );
};

export default Carousel;