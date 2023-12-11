import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setSelectedImage } from "../redux/actions/datas.action"
import { openModal, contactMode } from "../redux/actions/styles.action";

const VerticalSlider = ({ datasProject, sliderRef }) => {
  const dispatch = useDispatch(); 
  const observer = useRef(null); 


  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index"), 10);
          console.log(`Image ${index} est maintenant visible !`);
          dispatch(setSelectedImage(index))
        } 
      });
    };

    // Configuration de l'Intersection Observer
    const options = {
      root: null,
      threshold: 1,
    };
    observer.current = new IntersectionObserver(handleIntersection, options);

    const images = document.querySelectorAll(".image-vertical-slider");
    images.forEach((image, index) => {
      observer.current.observe(image);
      image.setAttribute("data-index", index);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [dispatch]);

  const handleImageClick = (index) => {
    dispatch(setSelectedImage(index));
    dispatch(openModal(true));
    dispatch(contactMode(false))
  };
  
  return (
      <ol ref={sliderRef} className="slider-list" >
        {datasProject.map((item, index) => (
          <li key={index} className='slider-list__image'>
            <img 
                className="image-vertical-slider" 
                src={item.cover} 
                alt={item.title} 
                onClick={() => handleImageClick(index)}
                data-index={index}
                />
          </li>
        ))}
      </ol>
  );
}

export default VerticalSlider;
