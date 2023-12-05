import React from 'react';
import VerticalSlider from '../Components/Slider';
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import { setSelectedImage } from '../redux/actions/datas.action';
import { openModal, contactMode } from '../redux/actions/styles.action';
import ArrowSand from '../assets/arrow-sand.webp'
import Header from '../Components/Header'
import Modal from '../Components/Modal'

const Landing = ({ datasProject, datasSkills }) => {   
  const dispatch = useDispatch()
  const sliderRef = useRef()

  const isModalOpen = useSelector(state => state.stylesReducer.isModalOpen)
  const selectedImage = useSelector(state => state.dataReducer.index);
 
  const text = (
    datasProject.map((item, index) => { 
        return (             
        <div key={item.id} className={`text-item ${selectedImage === index ? 'visible' : 'hidden'}`}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>                
      )
    })
  )

  const handleClickDots = (index) => {
    dispatch(setSelectedImage(index));
      // Accéder au composant VerticalSlider et effectuer le défilement
      if (sliderRef.current) {
        const selectedImageElement = sliderRef.current.children[index];
        const scrollOptions = { behavior: "smooth" };
    
        if (window.innerWidth > 1024) {
          // Mode desktop : Défilement vertical
          const verticalOffset =
            selectedImageElement.offsetTop -
            sliderRef.current.clientHeight / 2 +
            selectedImageElement.clientHeight / 2;
          sliderRef.current.scrollTo({ top: verticalOffset, ...scrollOptions });
        } else {
          // Mode tablette : Défilement horizontal
          const horizontalOffset =
            selectedImageElement.offsetLeft -
            sliderRef.current.clientWidth / 2 +
            selectedImageElement.clientWidth / 2;
          sliderRef.current.scrollTo({ left: horizontalOffset, ...scrollOptions });
        }
      }
  }

  const handleOpenModal = () => {
    dispatch(openModal(true));
    dispatch(contactMode(false))
  };

  return (    
    <div  className="landing-page">
      <Header
        path="landing" 
        title="Virginie RUDOWSKI" 
        text="A propos"
      />
      <main className='main-theme'>
        <div className='section-left'>
          <section className="section-text">
            { text }
          </section>
          <section className="section-text-link">
            <p>Découvrez mes projets </p>
            <img src={ArrowSand} alt="arrow-sand" onClick={handleOpenModal} />
          </section>
          <section className='section-skills'>
            <div className='section-skills__logos'>
              { datasSkills.map((item, index) => (
                <img key={index} src={item.src} alt={item.title} />
              )) }
            </div>          
          </section>
        </div>
        <section className="section-slider">
          <VerticalSlider 
            id='showScroll' 
            sliderRef={sliderRef} 
            datasProject={datasProject}
          />
          <Modal 
            isOpen={isModalOpen} 
            onClose={() => dispatch(openModal(false))}
            selectedImage={selectedImage}
            datasProject={datasProject} 
          />
        </section>
        <section className='dots'>
            {datasProject.map((item, index) => (            
                <div 
                  key={item.id} 
                  className={index === selectedImage ? 'dots_dot selected' : 'dots_dot'}
                  onClick={() => handleClickDots(index)}>
                </div>           
            ))}
        </section>
      </main>
    </div>
  );
}

export default Landing;