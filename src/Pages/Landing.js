import React from 'react';
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { setSelectedImage } from '../redux/actions/datas.action';
import { openModal, contactMode } from '../redux/actions/styles.action';

import ArrowSand from '../assets/arrow-sand.webp'
import ArrowYellow from '../assets/arrow-yellow.webp'
import Loader from '../Components/Loader'
import Header from '../Components/Header'
import Modal from '../Components/Modal'
import VerticalSlider from '../Components/Slider';

const Landing = ({ datasProject, datasSkills, loading }) => {   
  const dispatch = useDispatch()
  const sliderRef = useRef() 
  const isModalOpen = useSelector(state => state.stylesReducer.isModalOpen)
  const selectedImage = useSelector(state => state.dataReducer.index);
  const [isHovered, setIsHovered] = useState(false);
  
  const text = (
    datasProject.map((item, index) => { 
        return (             
        <div key={item.id} className={`text-item ${selectedImage === index ? 'visible' : 'hidden'}`}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>                
      )
    })
  )

  const handleClickDots = async (index) => {
    dispatch(setSelectedImage(index));
      // Accéder au composant VerticalSlider et effectuer le défilement
      if (sliderRef.current) {
        const selectedImageElement = sliderRef.current.children[index];
        const scrollOptions = { behavior: "smooth" };
    
        if (window.innerWidth > 920) {
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
// retirer ici la partie qui m'affiche mon loader pour travailler
  return (
    <>
    {/* <Loader datasProject={datasProject}/>  */}
      { loading ? (
        <Loader datasProject={datasProject}/> 
        ) : (        
        <>
          <div className="landing-page">
            <Header
              path="landing" 
              title="Virginie RUDOWSKI" 
              text="A propos"
            />
            <main className='main-theme'>
              <div className='section-left'>
                <section className="section-text">
                  {text}
                </section>
                <section className="section-text-link">
                  <h2>Découvrez mes projets </h2>
                  <div
                    className='section-text-link__arrows'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <img
                      className='arrow-sand'
                      src={ArrowSand}
                      alt="arrow-sand"
                      onClick={handleOpenModal}
                    />
                    {isHovered && 
                      <img 
                        className="arrow-yellow" 
                        src={ArrowYellow} 
                        alt="arrow-yellow"
                        onClick={handleOpenModal} 
                    />}
                  </div>
                </section>
                <section className={`section-skills ${loading ? 'loading' : ''}`}>
                  <div className='section-skills__logos'>
                    {datasSkills.map((item, index) => (
                      <img key={index} src={item.src} alt={item.title} />
                    ))}
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
                    onClick={() => handleClickDots(index)}
                  >
                  </div>           
                ))}
              </section>
            </main>
          </div>
        </>
        ) }
    </>
  );
  
}

export default Landing;