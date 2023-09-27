import './carousel.css'
import React, { useState, useEffect } from 'react';
import datas from '../../datas/logements.json'

const Carousel = (props) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  //let imgSrc 

  useEffect(() => {
    // Chargez les données depuis votre fichier JSON ici
    // Par exemple, supposons que votre fichier JSON contienne un tableau d'URL d'images
    // Vous pouvez utiliser fetch() ou Axios pour récupérer les données.
    fetch(datas)
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error(error));
  }, []);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>&#9664;</button>
      <img src={images[currentIndex]} alt={"Image"+images[currentIndex]} />
      <button onClick={goToNextSlide}>&#9654;</button>
    </div>
  );
  //const src=props.imgSrc
};

export default Carousel;
